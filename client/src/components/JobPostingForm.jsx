import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Check, Loader2, Save, Briefcase, Building, Edit3, Eye, ArrowLeft, ArrowRight, Trash2 } from "lucide-react";

import { INITIAL_FORM_STATE } from "../constants/formConstants";
import useJobFormState from "../hooks/useJobFormState";
import useFormAutosave from "../hooks/useFormAutosave";
import { fetchCategories, generateAIContent, submitJobPost } from "../services/jobService";

import Button from "./ui/Button";
import { Card, CardContent } from "./ui/Card";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "./ui/AlertDialog";

// Lazy load step components
const JobDetailsStep = React.lazy(() => import('./form-steps/JobDetailsStep'));
const JobDescriptionStep = React.lazy(() => import('./form-steps/JobDescriptionStep'));
const CompanyInfoStep = React.lazy(() => import('./form-steps/CompanyInfoStep'));
const ReviewStep = React.lazy(() => import('./form-steps/ReviewStep'));

const LoadingStepFallback = () => (
  <div className="flex items-center justify-center min-h-[300px]">
    <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
  </div>
);

const JobPostingForm = () => {
  const FORM_ID = "job-post-form-v1";
  const formState = useJobFormState(INITIAL_FORM_STATE);
  const { loadSavedData, clearSavedData } = useFormAutosave(formState.values, FORM_ID, !formState.isSubmitting); // Disable autosave during/after submission

  const [currentStep, setCurrentStep] = useState(0);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [showDraftDialog, setShowDraftDialog] = useState(false);
  const [draftDataToLoad, setDraftDataToLoad] = useState(null);

  const { data: categories } = useQuery({
    queryKey: ["jobCategories"],
    queryFn: fetchCategories,
  });

  useEffect(() => {
    const savedDraft = loadSavedData();
    if (savedDraft && Object.keys(savedDraft).length > 0) {
      const isDifferentFromInitial = Object.keys(INITIAL_FORM_STATE).some(key => {
        if (key === 'logo' && savedDraft[key]) { // Special handling for logo if it's complex
             // If logo in draft is an object (like from a previous File stringified), consider it different.
             // If it was stored as a data URL string, it's fine.
             return typeof savedDraft[key] === 'object' && savedDraft[key] !== null;
        }
        return JSON.stringify(savedDraft[key]) !== JSON.stringify(INITIAL_FORM_STATE[key]);
      });
      if (isDifferentFromInitial) {
        setDraftDataToLoad(savedDraft);
        setShowDraftDialog(true);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount

  const loadDraft = () => {
    if (draftDataToLoad) {
      const sanitizedDraft = { ...draftDataToLoad };
      if (sanitizedDraft.logo && typeof sanitizedDraft.logo !== 'string') {
        sanitizedDraft.logo = null; // Reset if it's not a usable string (e.g. data URL)
      }
      formState.setValues(sanitizedDraft);
    }
    setShowDraftDialog(false);
    setDraftDataToLoad(null);
  };

  const discardDraftAndReset = () => {
    clearSavedData();
    formState.reset();
    setShowDraftDialog(false);
    setDraftDataToLoad(null);
    setCurrentStep(0);
  };

  const { mutate: submitFormMutation, isLoading: isSubmittingForm, isSuccess: submissionSuccess, error: submissionError, data: submissionResponse } = useMutation({
    mutationFn: submitJobPost,
    onSuccess: (data) => {
      clearSavedData();
      console.log("Submission successful:", data);
      // formState.reset(); // Resetting is now handled by "Post Another Job" button
    },
    onError: (err) => {
      console.error("Submission failed:", err);
    }
  });

  const handleAIAssist = async (contentType, contextInfo, aiPrefs) => {
    setIsAiLoading(true);
    try {
      const generatedContent = await generateAIContent(contentType, contextInfo, aiPrefs);
      if (contentType === "description") {
        formState.handleChange("description", generatedContent);
      } else if (contentType === "companyBio") {
        formState.handleChange("companyBio", generatedContent);
      }
    } catch (error) {
      console.error("AI content generation failed:", error);
      alert(`AI content generation failed: ${error.message || "Please try again."}`);
    } finally {
      setIsAiLoading(false);
    }
  };

  const steps = useMemo(() => [
    { name: "Job Details", Component: JobDetailsStep, icon: <Briefcase className="h-5 w-5" />, props: { onInitiateAIAssist: handleAIAssist } },
    { name: "Description", Component: JobDescriptionStep, icon: <Edit3 className="h-5 w-5" />, props: { onInitiateAIAssist: handleAIAssist } },
    { name: "Company Info", Component: CompanyInfoStep, icon: <Building className="h-5 w-5" />, props: { onInitiateAIAssist: handleAIAssist } },
    { name: "Review & Submit", Component: ReviewStep, icon: <Eye className="h-5 w-5" />, props: { onEditStep: (stepIndex) => setCurrentStep(stepIndex), categories: categories } },
  ], [categories]); // handleAIAssist is stable due to its definition

  const CurrentStepComponent = steps[currentStep].Component;
  const currentStepProps = steps[currentStep].props;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formState.validateAll()) {
      const dataToSubmit = { ...formState.values };
      if (dataToSubmit.logo instanceof File) {
        // For mock, convert File to a name. Real app: upload or base64.
        // To avoid JSON.stringify issues, do not send File object directly if backend expects pure JSON.
        dataToSubmit.logo = `mock-uploaded-${dataToSubmit.logo.name}`; // Or handle as per backend requirements
      }
      submitFormMutation(dataToSubmit);
    } else {
      alert("Please correct the errors in the form before submitting.");
      const fieldToStepMap = {
        title: 0, category: 0, jobType: 0, location: 0,
        description: 1,
        companyName: 2, contactName: 2, contactEmail: 2, companyWebsite: 2, contactPhone: 2,
        salaryMin: 0, salaryMax: 0,
      };
      for (const field in formState.errors) {
        if (formState.errors[field] && fieldToStepMap[field] !== undefined) {
          setCurrentStep(fieldToStepMap[field]);
          window.scrollTo(0, 0);
          break;
        }
      }
    }
  };

  if (isAiLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600 mb-4" />
        <p className="text-lg text-gray-700">AI is working its magic...</p>
        <p className="text-sm text-gray-500">Please wait a moment.</p>
      </div>
    );
  }

  if (submissionSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 text-center">
        <Card className="max-w-md w-full">
          <CardContent className="p-8">
            <Check className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Job Post Submitted!</h2>
            {submissionResponse?.jobId && <p className="text-gray-600 mb-1">Your job post ID: "{submissionResponse.jobId}" has been successfully submitted.</p>}
            {submissionResponse?.message && <p className="text-gray-600 mb-6">{submissionResponse.message}</p>}
            <Button onClick={() => { formState.reset(); setCurrentStep(0); /* Potentially navigate or reset mutation state */ }}>Post Another Job</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      {showDraftDialog && draftDataToLoad && (
        <AlertDialog open={showDraftDialog} onOpenChange={setShowDraftDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Unsaved Draft Found</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>
              We found an unsaved draft from your last session. Would you like to continue editing it or start fresh?
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={discardDraftAndReset}>Discard and Start Fresh</AlertDialogCancel>
              <AlertDialogAction onClick={loadDraft}>Load Draft</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create New Job Posting</h1>
          <p className="text-gray-600">Fill in the details below to publish your job opening.</p>
        </div>

        <div className="mb-8 overflow-x-auto">
          <nav className="flex border-b border-gray-200 -mx-3 sm:-mx-0">
            {steps.map((step, index) => (
              <button
                type="button"
                key={step.name}
                onClick={() => setCurrentStep(index)}
                // Basic validation: allow navigation to visited steps or next if current is somewhat valid
                // This is a simplified check. A more robust solution would validate the current step before allowing progression.
                // disabled={index > currentStep && Object.keys(formState.errors).length > 0 && currentStep < steps.length -1 }
                className={`flex items-center whitespace-nowrap py-4 px-3 sm:px-6 text-sm font-medium focus:outline-none transition-colors
                  ${currentStep === index
                    ? 'border-blue-500 border-b-2 text-blue-600'
                    : 'border-transparent border-b-2 text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}
              >
                <span className={`mr-2 h-5 w-5 ${currentStep === index ? 'text-blue-600' : 'text-gray-400'}`}>{step.icon}</span>
                {step.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="min-h-[300px]">
          <Suspense fallback={<LoadingStepFallback />}>
            <CurrentStepComponent formState={formState} {...currentStepProps} />
          </Suspense>
        </div>

        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            {currentStep > 0 && !submissionSuccess && (
              <Button type="button" variant="outline" onClick={handlePrev} className="flex items-center gap-2 w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4" /> Previous
              </Button>
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            {submissionError && <p className="text-sm text-red-600 order-first sm:order-none w-full text-center sm:text-left">Error: {submissionError.message}</p>}
            {currentStep < steps.length - 1 && !submissionSuccess && (
              <Button type="button" onClick={handleNext} className="flex items-center gap-2 w-full sm:w-auto">
                Next <ArrowRight className="h-4 w-4" />
              </Button>
            )}
            {currentStep === steps.length - 1 && !submissionSuccess && (
              <Button type="submit" disabled={isSubmittingForm} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                {isSubmittingForm ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                {isSubmittingForm ? "Submitting..." : "Submit Job Post"}
              </Button>
            )}
            <Button type="button" variant="ghost" size="sm" onClick={discardDraftAndReset} className="text-xs text-gray-500 hover:text-red-600 flex items-center gap-1 w-full sm:w-auto justify-center">
              <Trash2 className="h-3 w-3" /> Clear Form & Draft
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobPostingForm;
