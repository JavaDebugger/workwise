// index.js
const { BigQuery } = require('@google-cloud/bigquery');
const { Logging } = require('@google-cloud/logging');
const functions = require('@google-cloud/functions-framework');
const SlackNotifier = require('./slack-notifier'); // For Slack notifications

const bigquery = new BigQuery();
const logging = new Logging();

// Initialize SlackNotifier with your webhook URL
// Store your Slack webhook URL securely, e.g., as an environment variable
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || null; // Or hardcode for testing, but ENV var is better
const slackNotifier = new SlackNotifier(SLACK_WEBHOOK_URL);

// Cloud Event Function triggered by Pub/Sub topic
functions.cloudEvent('processFirestoreDenials', async (cloudEvent) => {
  // The Pub/Sub message payload is base64 encoded
  const base64Data = cloudEvent.data.message.data;
  const pubSubMessage = Buffer.from(base64Data, 'base64').toString();
  const logEntry = JSON.parse(pubSubMessage); // This is the actual LogEntry object

  console.log('Received log entry:', JSON.stringify(logEntry, null, 2));

  const denial = {
    timestamp: logEntry.timestamp || new Date().toISOString(),
    user_id: logEntry.protoPayload?.authenticationInfo?.principalEmail || 'anonymous',
    user_email: logEntry.protoPayload?.authenticationInfo?.principalEmail || null,
    ip_address: logEntry.protoPayload?.requestMetadata?.callerIp || null,
    user_agent: logEntry.protoPayload?.requestMetadata?.callerSuppliedUserAgent || null,
    method_name: logEntry.protoPayload?.methodName || null,
    resource_path: logEntry.protoPayload?.resourceName || null,
    error_code: logEntry.protoPayload?.status?.code || null,
    error_message: logEntry.protoPayload?.status?.message || null,
    severity: logEntry.severity || null,
    request_type: extractRequestType(logEntry.protoPayload?.methodName)
    // custom_claims: {} //  Requires custom logic to parse JWTs if needed
  };

  console.log('Processed denial object:', JSON.stringify(denial, null, 2));

  try {
    // Store in BigQuery (optional, as we also have a direct sink to BQ)
    // If you have the direct sink from Logging to BQ, this might be redundant unless you want to enrich data here.
    // For now, let's assume the direct sink handles BQ storage. If you want this function to also write, uncomment:
    // await storeDenial(denial);
    // console.log('Denial stored in BigQuery via function.');

    // Check for suspicious patterns
    await checkSuspiciousActivity(denial);

    // Send immediate alerts for critical denials
    if (isCriticalDenial(denial)) {
      console.log('Critical denial detected. Sending immediate alert...');
      await sendImmediateAlert(denial);
    }
  } catch (error) {
    console.error('Error processing denial:', error, 'Denial data:', denial);
  }
});

async function checkSuspiciousActivity(denial) {
  if (!denial.ip_address) {
    console.log('No IP address in denial, skipping suspicious activity check.');
    return;
  }
  // Check for repeated denials from same IP
  const query = `
    SELECT COUNT(*) as denial_count
    FROM \`YOUR_PROJECT_ID.security_logs.firestore_denials\`
    WHERE ip_address = @ip_address
    AND timestamp >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 1 HOUR)
  `;

  try {
    const [rows] = await bigquery.query({
      query,
      params: { ip_address: denial.ip_address }
    });

    if (rows[0]?.denial_count > 50) { // Threshold for "suspicious"
      console.warn(`Suspicious activity: IP ${denial.ip_address} has ${rows[0].denial_count} denials in the last hour.`);
      await flagSuspiciousIP(denial.ip_address);
    }
  } catch (error) {
    console.error('Error in checkSuspiciousActivity querying BigQuery:', error);
  }
}

// This function might be redundant if you have a direct log sink to BigQuery for denials.
// If the direct sink is active, this function's 'storeDenial' might cause duplicate entries
// or errors if the schema isn't perfectly matched or if there are delays.
// Consider if you need this function to write to BigQuery or just for real-time logic.
async function storeDenial(denial) {
  try {
    const dataset = bigquery.dataset('security_logs');
    const table = dataset.table('firestore_denials');
    // Ensure the denial object structure matches the BigQuery table schema exactly
    // especially if you modified the table or the denial object.
    await table.insert([denial]);
    console.log('Denial data inserted into BigQuery by function:', denial.resource_path);
  } catch (error) {
    console.error('Error storing denial in BigQuery via function:', error.errors || error);
    // Log the actual denial object that failed to help debug schema mismatches
    console.error('Failed denial object:', JSON.stringify(denial, null, 2));
  }
}

async function sendImmediateAlert(denial) {
  // Send to Slack for immediate attention using SlackNotifier
  if (SLACK_WEBHOOK_URL) {
    try {
      await slackNotifier.sendAlert(denial);
      console.log('Critical denial alert sent to Slack.');
    } catch (error) {
      console.error('Error sending critical denial alert to Slack:', error);
    }
  } else {
    // Fallback or alternative notification
    const alertMessage = `
    🚨 **Critical Firestore Security Denial**

    **User:** ${denial.user_email || 'Anonymous'}
    **IP:** ${denial.ip_address}
    **Method:** ${denial.method_name}
    **Resource:** ${denial.resource_path}
    **Error:** ${denial.error_message}
    **Time:** ${denial.timestamp}

    **Action Required:** Investigate immediately for potential security breach.
    `;
    console.warn('CRITICAL ALERT (Slack Webhook not configured, logging to console):', alertMessage);
    // TODO: Implement other notification services here (e.g., email, PagerDuty) if Slack isn't the primary or only one.
  }
}

function isCriticalDenial(denial) {
  const criticalPatterns = [
    /admin/i,          // Matches 'admin' anywhere, case-insensitive
    /delete/i,         // Matches 'delete' operation name
    /companies\/.*\/admins/i, // Matches paths like companies/someCompanyId/admins
    /audit_logs/i,     // Matches paths containing 'audit_logs'
    /config/i          // Matches paths containing 'config'
  ];

  let pathTest = false;
  if (denial.resource_path) {
    pathTest = criticalPatterns.some(pattern => pattern.test(denial.resource_path));
  }

  let methodTest = false;
  if (denial.method_name) {
    // Specifically check if the method IS a delete operation for criticality
    if (/delete/i.test(denial.method_name)) {
        methodTest = true;
    }
    // Also check if any general critical patterns appear in the method name
    methodTest = methodTest || criticalPatterns.some(pattern => pattern.test(denial.method_name));
  }
  
  return pathTest || methodTest;
}

function extractRequestType(methodName) {
  if (!methodName) return 'unknown';

  if (methodName.includes('GetDocument') || methodName.includes('ListDocuments') || methodName.includes('RunQuery') || methodName.includes('BatchGetDocuments')) {
    return 'read';
  } else if (methodName.includes('CreateDocument')) {
    return 'create';
  } else if (methodName.includes('UpdateDocument')) {
    return 'update';
  } else if (methodName.includes('DeleteDocument')) {
    return 'delete';
  }

  return 'other';
}

async function flagSuspiciousIP(ipAddress) {
  const log = logging.log('workwise-security-suspicious-ips'); // Specific log for suspicious IPs
  const metadata = {
    resource: { type: 'global' }, // Standard resource type for custom logs
    severity: 'WARNING',
    labels: {
      component: 'firestore-security-function',
      alert_type: 'suspicious_ip'
    }
  };

  const entryData = {
    message: `Suspicious IP detected: ${ipAddress}. Multiple denials observed.`,
    ip_address: ipAddress,
    timestamp: new Date().toISOString(),
    action_required: 'Review IP activity and consider blocking if malicious.'
  };

  const entry = log.entry(metadata, entryData);

  try {
    await log.write(entry);
    console.log(`Suspicious IP ${ipAddress} logged to workwise-security-suspicious-ips.`);
  } catch (error) {
    console.error('Error writing suspicious IP log:', error);
  }
}