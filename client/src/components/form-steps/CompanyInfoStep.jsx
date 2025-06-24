import React, { useState, useEffect } from "react";
import { marked } from "marked";
import { Sparkles, LinkIcon, ImageIcon, X, Phone } from "lucide-react";
import FormField from "../ui/FormField";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/Select";

const CompanyInfoStep = ({ formState, onInitiateAIAssist }) => {
  const { values, errors, touched, handleChange, handleBlur } = formState;
  const [logoPreview, setLogoPreview] = useState(null);
  const [companyBioPreviewHtml, setCompanyBioPreviewHtml] = useState("");

  useEffect(() => {
    if (values.logo && typeof values.logo === 'object' && values.logo instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => setLogoPreview(reader.result);
      reader.readAsDataURL(values.logo);
    } else if (typeof values.logo === 'string') { // Could be a data URL from a draft
      setLogoPreview(values.logo);
    } else {
      setLogoPreview(null);
    }
  }, [values.logo]);

  useEffect(() => {
    if (values.companyBio) {
      const sanitizedBio = values.companyBio.replace(/<script.*?>.*?<\/script>/gi, '');
      setCompanyBioPreviewHtml(marked(sanitizedBio));
    } else {
      setCompanyBioPreviewHtml("");
    }
  }, [values.companyBio]);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB
        alert("Logo size should not exceed 2MB.");
        return;
      }
      handleChange("logo", file);
    }
  };

  const clearLogo = () => {
    handleChange("logo", null);
    setLogoPreview(null);
    const fileInput = document.getElementById('company-logo-input');
    if (fileInput) fileInput.value = ""; // Reset file input
  };

  const canUseAIForBio = values.companyName?.trim();
  const selectedCompanySizeName = values.companySize;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Company & Contact Information</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <FormField id="company-name" label="Company Name" error={touched.companyName && errors.companyName} required>
          <Input id="company-name" type="text" value={values.companyName || ""} onChange={(e) => handleChange("companyName", e.target.value)} onBlur={() => handleBlur("companyName")} placeholder="e.g. Acme Corporation" />
        </FormField>
        <FormField id="company-website" label="Company Website (Optional)" error={touched.companyWebsite && errors.companyWebsite} hint="e.g., https://www.example.com">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"><LinkIcon className="h-4 w-4" /></span>
            <Input id="company-website" type="url" value={values.companyWebsite || ""} onChange={(e) => handleChange("companyWebsite", e.target.value)} onBlur={() => handleBlur("companyWebsite")} placeholder="https://www.example.com" className="pl-10" />
          </div>
        </FormField>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField id="company-size" label="Company Size (Optional)">
          <Select value={values.companySize || ""} onValueChange={(value) => handleChange("companySize", value)} onOpenChange={(open) => { if (!open) handleBlur("companySize") }}>
            <SelectTrigger id="company-size">
              <SelectValue placeholder="Select company size">{selectedCompanySizeName}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {["1-10 employees", "11-50 employees", "51-200 employees", "201-500 employees", "500+ employees"].map(size =>
                <SelectItem key={size} value={size}>{size}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </FormField>
        <FormField id="company-logo" label="Company Logo (Optional, max 2MB)" hint="Recommended: Square, PNG/JPG">
          <div className="flex items-center gap-4">
            {logoPreview ? (
              <img src={logoPreview} alt="Logo preview" className="h-20 w-20 object-contain rounded border p-1" />
            ) : (
              <div className="h-20 w-20 rounded border bg-gray-50 flex items-center justify-center text-gray-400">
                <ImageIcon className="h-10 w-10" />
              </div>
            )}
            <div className="space-y-2">
              <Input id="company-logo-input" type="file" accept="image/png, image/jpeg, image/webp" onChange={handleLogoChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
              {logoPreview && <Button type="button" variant="outline" size="sm" onClick={clearLogo} className="text-xs"><X className="h-3 w-3 mr-1" />Remove logo</Button>}
            </div>
          </div>
        </FormField>
      </div>

      <FormField id="company-bio" label="Company Bio (Optional)" hint="Briefly describe your company. Markdown supported.">
        <div className="space-y-2">
          <div className="flex justify-end">
            <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-xs" onClick={() => onInitiateAIAssist("companyBio", { companyName: values.companyName, category: values.category }, {})} disabled={!canUseAIForBio} type="button" title={!canUseAIForBio ? "Enter company name first" : "Generate with AI"}>
              <Sparkles className="h-3 w-3" /> AI Assist Bio
            </Button>
          </div>
          <Textarea id="company-bio" value={values.companyBio || ""} onChange={(e) => handleChange("companyBio", e.target.value)} onBlur={() => handleBlur("companyBio")} className="min-h-[150px] font-mono text-sm" placeholder="e.g., We are a leading tech company focused on innovation..." />
        </div>
      </FormField>
      {companyBioPreviewHtml && (
        <div className="mt-4 border-t pt-4">
          <h4 className="text-sm font-medium mb-2 text-gray-600">Company Bio Preview:</h4>
          <div className="prose prose-sm max-w-none border p-4 rounded-md bg-white shadow">
            <div dangerouslySetInnerHTML={{ __html: companyBioPreviewHtml }} />
          </div>
        </div>
      )}

      <hr className="my-8" />
      <h3 className="text-md font-semibold text-gray-700">Primary Contact for Applications</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <FormField id="contact-name" label="Contact Person Name" error={touched.contactName && errors.contactName} required>
          <Input id="contact-name" type="text" value={values.contactName || ""} onChange={(e) => handleChange("contactName", e.target.value)} onBlur={() => handleBlur("contactName")} placeholder="e.g. Jane Doe" />
        </FormField>
        <FormField id="contact-email" label="Contact Email" error={touched.contactEmail && errors.contactEmail} required hint="Applications will be sent here.">
          <Input id="contact-email" type="email" value={values.contactEmail || ""} onChange={(e) => handleChange("contactEmail", e.target.value)} onBlur={() => handleBlur("contactEmail")} placeholder="e.g. careers@example.com" />
        </FormField>
      </div>
      <FormField id="contact-phone" label="Contact Phone (Optional)" error={touched.contactPhone && errors.contactPhone}>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"><Phone className="h-4 w-4" /></span>
          <Input id="contact-phone" type="tel" value={values.contactPhone || ""} onChange={(e) => handleChange("contactPhone", e.target.value)} onBlur={() => handleBlur("contactPhone")} placeholder="e.g. +27 21 123 4567" className="pl-10" />
        </div>
      </FormField>
    </div>
  );
};

export default CompanyInfoStep;
