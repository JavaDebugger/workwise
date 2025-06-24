import React, { useState, useEffect, Suspense } from 'react';
import { useLocation } from 'wouter';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Loader2, Save, Trash2, ArrowLeft, ArrowRight } from 'lucide-react';

import CustomHelmet from '@/components/CustomHelmet';
import { Button, AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui';

import { INITIAL_FORM_STATE, JobFormValues } from '@/constants/formConstants';
import useJobFormState from '@/hooks/useJobFormState';
import useFormAutosave from '@/hooks/useFormAutosave';
import { fetchCategories, generateAIContent, submitJobPost } from '@/services/jobService';

// Import form steps
const JobDetailsStep = React.lazy(() => import('@/components/form-steps/JobDetailsStep'));
const JobDescriptionStep = React.lazy(() => import('@/components/form-steps/JobDescriptionStep'));
const CompanyInfoStep = React.lazy(() => import('@/components/form-steps/CompanyInfoStep'));
const ReviewStep = React.lazy(() => import('@/components/form-steps/ReviewStep'));

const LoadingStepFallback = () => (
  <div className="flex items-center justify-center min-h-[300px]">
    <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
  </div>
);

const PostJob = () => {
  const FORM_ID = "job-post-form-v1";
  const [, setLocation] = useLocation();
  const formState = useJobFormState(INITIAL_FORM_STATE);
  const { loadSavedData, clearSavedData } = useFormAutosave(formState.values, FORM_ID);

  const [currentStep, setCurrentStep] = useState(0);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [showDraftDialog, setShowDraftDialog] = useState(false);
  const [draftDataToLoad, setDraftDataToLoad] = useState(null);

  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ['jobCategories'],
    queryFn: fetchCategories,
  });

  const submitMutation = useMutation({
    mutationFn: submitJobPost,
    onSuccess: (data) => {
      if (data.success) {
        clearSavedData();
        setLocation('/employers/jobs/' + data.jobId);
      }
    },
  });

  const handleAIAssist = async (type: string) => {
    setIsAiLoading(true);
    try {
      const response = await generateAIContent("", type, formState.values);
      if (response.content) {
        switch (type) {
          case "description":
            formState.handleChange("description", response.content);
            break;
          case "companyBio":
            formState.handleChange("companyBio", response.content);
            break;
        }
      }
    } catch (error) {
      console.error('Error generating AI content:', error);
    }
    setIsAiLoading(false);
  };

  useEffect(() => {
    const savedDraft = loadSavedData();
    if (savedDraft && Object.keys(savedDraft).length > 0) {
      const isDifferentFromInitial = Object.keys(INITIAL_FORM_STATE).some(key => {
        if (key === 'logo' && savedDraft[key]) {
          return typeof savedDraft[key] === 'object' && savedDraft[key] !== null;
        }
        return JSON.stringify(savedDraft[key]) !== JSON.stringify(INITIAL_FORM_STATE[key]);
      });
      if (isDifferentFromInitial) {
        setDraftDataToLoad(savedDraft);
        setShowDraftDialog(true);
      }
    }
  }, []);

  const steps = [
    {
      title: "Job Details",
      component: (
        <JobDetailsStep 
          formState={formState}
          handleAIAssist={handleAIAssist}
          categories={categories || []}
          isLoadingCategories={isLoadingCategories}
        />
      )
    },
    {
      title: "Job Description",
      component: (
        <JobDescriptionStep 
          formState={formState}
          handleAIAssist={handleAIAssist}
        />
      )
    },
    {
      title: "Company Info",
      component: (
        <CompanyInfoStep 
          formState={formState}
          handleAIAssist={handleAIAssist}
        />
      )
    },
    {
      title: "Review",
      component: (
        <ReviewStep 
          formState={formState}
          onEditStep={setCurrentStep}
        />
      )
    }
  ];

  const handleNext = () => {
    const isValid = formState.validateAll();
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    formState.setIsSubmitting(true);
    await submitMutation.mutateAsync(formState.values);
    formState.setIsSubmitting(false);
  };


  return (
    <>
      <CustomHelmet
        title="Post a Job - WorkWise SA"
        description="Post entry-level job opportunities on WorkWise SA."
      />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Post a Job</h1>
            
            {/* Progress Steps */}
            <nav className="mb-8">
              <ol className="flex items-center w-full">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-center">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${currentStep >= index ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
                      <span className={`text-sm font-medium ${currentStep >= index ? 'text-blue-600' : 'text-gray-500'}`}>
                        {index + 1}
                      </span>
                    </div>
                    <div className={`ml-2 text-sm font-medium ${currentStep >= index ? 'text-blue-600' : 'text-gray-500'}`}>
                      {step.title}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex-1 h-0.5 mx-4 bg-gray-200" />
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* Form Steps */}
            <div className="bg-white shadow-sm rounded-lg border p-6">
              <Suspense fallback={<LoadingStepFallback />}>
                {steps[currentStep].component}
              </Suspense>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-6 flex justify-between">
              <Button
                onClick={handleBack}
                disabled={currentStep === 0}
                variant="outline"
                className="flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <div className="flex gap-2">
                <Button
                  onClick={() => formState.handleChange("isDraft", true)}
                  variant="outline"
                  className="flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  Save as Draft
                </Button>
                {currentStep < steps.length - 1 ? (
                  <Button
                    onClick={handleNext}
                    className="flex items-center gap-1.5"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={submitMutation.isPending}
                    className="flex items-center gap-1.5"
                  >
                    {submitMutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Posting...
                      </>
                    ) : (
                      <>Post Job</>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Draft Recovery Dialog */}
      <AlertDialog open={showDraftDialog} onOpenChange={setShowDraftDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Resume Draft?</AlertDialogTitle>
            <AlertDialogDescription>
              We found a saved draft of your job posting. Would you like to continue where you left off?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => {
              setShowDraftDialog(false);
              clearSavedData();
            }}>
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Draft
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (draftDataToLoad) {
                  Object.entries(draftDataToLoad).forEach(([key, value]) => {
                    formState.handleChange(key, value);
                  });
                }
                setShowDraftDialog(false);
              }}
            >
              <Save className="w-4 h-4 mr-2" />
              Resume Draft
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default PostJob;
