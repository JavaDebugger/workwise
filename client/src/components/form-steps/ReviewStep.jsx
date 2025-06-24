import React from "react";
import { marked } from "marked";
import { Edit3 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";
import Button from "../ui/Button";
import { Label } from "../ui/Label";

const ReviewStep = ({ formState, onEditStep, categories }) => {
  const { values } = formState;

  const getCategoryName = (categoryId) => {
    if (!categories || !categoryId) return categoryId;
    const found = categories.find(c => c.id === categoryId);
    return found ? found.name : categoryId;
  };

  const renderValue = (value, label) => {
    if (value === null || value === undefined || value === "" || (Array.isArray(value) && value.length === 0)) return <span className="text-gray-500 italic">Not provided</span>;
    if (typeof value === 'boolean') return value ? "Yes" : "No";
    if (label === "Logo" && values.logo) {
      const logoSrc = (typeof values.logo === 'string') ? values.logo : (values.logo instanceof File ? URL.createObjectURL(values.logo) : null);
      if (logoSrc) return <img src={logoSrc} alt="Company Logo" className="h-20 w-20 object-contain border rounded" />;
      return <span className="text-gray-500 italic">Logo not displayable</span>;
    }
    if (label === "Description" || label === "Company Bio" || label === "Responsibilities" || label === "Requirements") {
      const sanitizedMarkdown = String(value).replace(/<script.*?>.*?<\/script>/gi, '');
      return <div className="prose prose-sm max-w-none py-2" dangerouslySetInnerHTML={{ __html: marked(sanitizedMarkdown || "") }} />;
    }
    if (label === "Category") return getCategoryName(value);
    return String(value);
  };

  const fieldGroups = [
    {
      title: "Job Details",
      stepIndex: 0,
      fields: [
        { label: "Job Title", value: values.title },
        { label: "Category", value: values.category },
        { label: "Job Type", value: values.jobType ? values.jobType.charAt(0).toUpperCase() + values.jobType.slice(1) : '' },
        { label: "Remote", value: values.isRemote },
        { label: "Location", value: values.isRemote ? "Remote" : values.location },
        { label: "Application Deadline", value: values.applicationDeadline },
        { label: "Min Salary (R)", value: values.salaryMin },
        { label: "Max Salary (R)", value: values.salaryMax },
        { label: "Salary Negotiable", value: values.isSalaryNegotiable },
      ]
    },
    {
      title: "Job Description & Requirements",
      stepIndex: 1,
      fields: [
        { label: "Description", value: values.description },
        { label: "Responsibilities", value: values.responsibilities },
        { label: "Requirements", value: values.requirements },
      ]
    },
    {
      title: "Company & Contact",
      stepIndex: 2,
      fields: [
        { label: "Company Name", value: values.companyName },
        { label: "Company Website", value: values.companyWebsite },
        { label: "Company Size", value: values.companySize },
        { label: "Logo", value: values.logo }, // Handled by renderValue
        { label: "Company Bio", value: values.companyBio },
        { label: "Contact Name", value: values.contactName },
        { label: "Contact Email", value: values.contactEmail },
        { label: "Contact Phone", value: values.contactPhone },
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">Review Your Job Post</h2>
      <p className="text-gray-600">Please review all the information carefully before submitting. You can click "Edit" to go back to a specific section.</p>

      {fieldGroups.map(group => (
        <Card key={group.title}>
          <CardHeader className="flex justify-between items-center">
            <CardTitle>{group.title}</CardTitle>
            <Button variant="outline" size="sm" onClick={() => onEditStep(group.stepIndex)} className="flex items-center gap-1">
              <Edit3 className="h-4 w-4" /> Edit
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {group.fields.map(field => (
              <div key={field.label} className="pt-3 first:pt-0 border-t border-gray-100 first:border-t-0">
                <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{field.label}</Label>
                <div className="mt-1 text-sm text-gray-800">{renderValue(field.value, field.label)}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ReviewStep;
