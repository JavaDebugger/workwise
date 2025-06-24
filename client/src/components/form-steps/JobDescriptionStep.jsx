import React, { useState, useEffect } from "react";
import { marked } from "marked";
import { Sparkles } from "lucide-react";
import FormField from "../ui/FormField";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { Card, CardContent } from "../ui/Card";

const JobDescriptionStep = ({ formState, onInitiateAIAssist }) => {
  const { values, errors, touched, handleChange, handleBlur } = formState;
  const [showMarkdownHelp, setShowMarkdownHelp] = useState(false);
  const [previewHtml, setPreviewHtml] = useState("");

  useEffect(() => {
    if (values.description) {
      // Basic sanitization. For production, use DOMPurify after marked()
      const sanitizedDescription = values.description.replace(/<script.*?>.*?<\/script>/gi, '');
      setPreviewHtml(marked(sanitizedDescription));
    } else {
      setPreviewHtml("");
    }
  }, [values.description]);

  const canUseAI = values.title?.trim() && values.category;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Job Description & Requirements</h2>
      <FormField id="job-description" label="Main Job Description" error={touched.description && errors.description} required>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Button variant="ghost" size="sm" onClick={() => setShowMarkdownHelp(prev => !prev)} className="text-xs py-1 h-auto" type="button">
              {showMarkdownHelp ? "Hide" : "Show"} Formatting Help
            </Button>
            <Button variant="outline" className="flex items-center gap-1.5" onClick={() => onInitiateAIAssist("description", { title: values.title, category: values.category, companyName: values.companyName, location: values.location, jobType: values.jobType }, { aiDescriptionType: values.aiDescriptionType, aiCustomPrompt: values.aiCustomPrompt })} disabled={!canUseAI} type="button" title={!canUseAI ? "Enter title & category in previous step" : "Generate with AI"}>
              <Sparkles className="h-4 w-4" /> Generate with AI
            </Button>
          </div>
          {showMarkdownHelp && (
            <Card className="bg-gray-50 text-xs">
              <CardContent className="space-y-1 p-3">
                <p><code># Heading 1</code>, <code>## Heading 2</code>, etc.</p>
                <p><code>**bold text**</code> for <strong>bold text</strong></p>
                <p><code>*italic text*</code> or <code>_italic text_</code> for <em>italic text</em></p>
                <p><code>- List item 1</code><br /><code>- List item 2</code> for bullet points</p>
                <p><code>1. Ordered item 1</code><br /><code>2. Ordered item 2</code> for numbered lists</p>
                <p><code>[link text](https://example.com)</code> for links</p>
                <p><code>---</code> for a horizontal rule</p>
              </CardContent>
            </Card>
          )}
          <Textarea id="job-description" value={values.description || ""} onChange={(e) => handleChange("description", e.target.value)} onBlur={() => handleBlur("description")} className="min-h-[250px] font-mono text-sm" placeholder="Describe the position, responsibilities, culture, etc. Markdown is supported." />
        </div>
      </FormField>

      {previewHtml && (
        <div className="mt-4 border-t pt-4">
          <h4 className="text-sm font-medium mb-2 text-gray-600">Description Preview:</h4>
          {/* Add Tailwind's typography plugin class if you use it: `prose` */}
          <div className="prose prose-sm max-w-none border p-4 rounded-md bg-white shadow">
            <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
          </div>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <FormField id="job-responsibilities" label="Key Responsibilities (Optional)" hint="List main duties as bullet points. Markdown supported.">
          <Textarea id="job-responsibilities" value={values.responsibilities || ""} onChange={(e) => handleChange("responsibilities", e.target.value)} onBlur={() => handleBlur("responsibilities")} className="min-h-[150px] font-mono text-sm" placeholder="- Manage daily operations
- Handle customer inquiries
- Maintain inventory records" />
        </FormField>
        <FormField id="job-requirements" label="Qualifications & Skills (Optional)" hint="List specific skills, experience, or education. Markdown supported.">
          <Textarea id="job-requirements" value={values.requirements || ""} onChange={(e) => handleChange("requirements", e.target.value)} onBlur={() => handleBlur("requirements")} className="min-h-[150px] font-mono text-sm" placeholder="- Minimum 2 years experience in X
- Proficient in Y software
- Valid driver's license" />
        </FormField>
      </div>
    </div>
  );
};

export default JobDescriptionStep;
