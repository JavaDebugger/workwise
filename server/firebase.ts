import * as admin from 'firebase-admin';
import { log } from './vite';

/**
 * Initializes the Firebase Admin SDK with appropriate credentials
 * based on the current environment.
 */
function initializeFirebase() {
  try {
    // Check if app is already initialized
    if (admin.apps && admin.apps.length > 0) {
      return admin.apps[0];
    }

    // For development without emulators
    if (process.env.NODE_ENV !== 'production') {
      try {
        const serviceAccount = require('../service-account.json');
        // Check if it's a placeholder file
        if (serviceAccount.private_key_id === 'placeholder') {
          log('Using placeholder Firebase Admin SDK - some features may not work');
          // Return a mock app for development
          return null;
        }
        return admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
          projectId: process.env.FIREBASE_PROJECT_ID || 'workwise-sa-project',
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET || 'workwise-sa-project.appspot.com'
        });
      } catch (error) {
        log('Service account file not found or invalid, using development mode without Firebase Admin');
        return null;
      }
    }

    // For production
    return admin.initializeApp();
  } catch (error) {
    log(`Error initializing Firebase: ${error}`);
    throw new Error(`Failed to initialize Firebase: ${error}`);
  }
}

// Initialize Firebase and export the instances
const firebaseApp = initializeFirebase();

// Create mock services that won't crash the app
const mockDb = {
  collection: () => ({
    doc: () => ({
      get: async () => ({ exists: false, data: () => ({}) }),
      set: async () => ({}),
      update: async () => ({}),
      delete: async () => ({})
    }),
    get: async () => ({ docs: [], empty: true }),
    add: async () => ({ id: 'mock-id' })
  })
};

const mockStorage = {
  bucket: () => ({
    file: () => ({
      getSignedUrl: async () => ['mock-url'],
      delete: async () => ({})
    })
  })
};

// Export services - use real Firebase if available, otherwise use mocks
export const db = firebaseApp ? admin.firestore(firebaseApp) : mockDb;
export const storage = firebaseApp ? admin.storage(firebaseApp) : mockStorage;

if (!firebaseApp) {
  log('Firebase Admin SDK not available - using mock services for development');
}

export default firebaseApp;

