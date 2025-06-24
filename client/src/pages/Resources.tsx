import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Import extracted components
import RelatedResourcesSection from '@/components/resources/RelatedResourcesSection';
import SubmitFeedbackModal from '@/components/modals/SubmitFeedbackModal';

// Add window.analytics to the global Window interface
declare global {
  interface Window {
    analytics?: {
      page: (name: string) => void;
      track: (event: string, properties?: Record<string, any>) => void;
    };
  }
}

const Resources = () => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  useEffect(() => {
    // Example analytics code (replace with your actual tracking)
    if (typeof window.analytics !== 'undefined') {
      window.analytics.page('Resources Page View');
    }
  }, []);

  const trackTabClick = (tabName: string) => {
    if (typeof window.analytics !== 'undefined') {
      window.analytics.track('Resource Tab Click', {
        tab: tabName
      });
    }
  };

  const handleFeedbackClick = () => {
    trackTabClick('Submit Feedback');
    setIsFeedbackModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Career Resources & Support | WorkWise SA</title>
        <meta name="description" content="Explore career resources, CV building guides, AI tools help, and more support options for your job search in South Africa." />
      </Helmet>

      <main className="flex-grow bg-light py-8 dark:bg-gray-950">
        <div className="container mx-auto px-4 dark:bg-gray-900 dark:text-white">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="dark:text-blue-300">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="dark:text-gray-300">Resources</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 dark:text-white">Resources & Support</h1>
            <p className="text-muted dark:text-gray-300 max-w-2xl mx-auto">Access guides, help documentation, and support for all WorkWise SA features including our AI-powered CV builder.</p>
          </div>

          {/* Search bar component */}
          <div className="relative mb-8 max-w-2xl mx-auto">
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </span>
              <Input
                type="text"
                placeholder="Search resources, guides, and help topics..."
                className="pl-10 py-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg"
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-primary text-white py-1 px-4 h-10">
                Search
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 dark:text-gray-400">
              Popular searches: CV templates, interview tips, salary guide
            </p>
          </div>

          <div className="w-full mb-10">
            {/* Custom Tabs Implementation */}
            <div className="w-full mb-8">
              {/* Tab Buttons */}
              <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-0">
                <button
                  className="px-4 py-2 rounded-md bg-primary text-white font-medium"
                  onClick={() => trackTabClick('Career Resources')}
                >
                  Career Resources
                </button>
                <a href="/resources/cv-builder-help">
                  <button
                    className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 w-full"
                    onClick={() => trackTabClick('CV Builder Help')}
                  >
                    CV Builder Help
                  </button>
                </a>
                <button
                  className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 font-medium hover:bg-gray-300"
                  onClick={handleFeedbackClick}
                >
                  Submit Feedback
                </button>
              </div>
            </div>

            {/* Career Resources Tab Content */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="mr-2 h-5 w-5 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <line x1="10" y1="9" x2="8" y2="9" />
                      </svg>
                    </span>
                    CV Templates
                  </CardTitle>
                  <CardDescription>Professional templates to make your CV stand out</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Choose from a variety of industry-specific CV templates designed for entry-level positions in South Africa.</p>
                  <Button className="w-full bg-primary">View Templates</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="mr-2 h-5 w-5 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </span>
                    Interview Preparation
                  </CardTitle>
                  <CardDescription>Tips and strategies for interview success</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Learn how to answer common interview questions for positions like cashier, general worker, security guard, and more.</p>
                  <Button className="w-full bg-primary">Read Guide</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="mr-2 h-5 w-5 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="7" />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                      </svg>
                    </span>
                    Salary Guide
                  </CardTitle>
                  <CardDescription>Understand the market rates for your profession</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Access salary information for various entry-level positions across South Africa, including regional differences.</p>
                  <Button className="w-full bg-primary">Check Salaries</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="mr-2 h-5 w-5 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </span>
                    Career Development
                  </CardTitle>
                  <CardDescription>Resources for professional growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Discover resources for skill development and advancement opportunities for essential workers in South Africa.</p>
                  <Button className="w-full bg-primary">Explore Resources</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="mr-2 h-5 w-5 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 10v12" />
                        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                      </svg>
                    </span>
                    Job Search Tips
                  </CardTitle>
                  <CardDescription>Strategies for finding the right opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Learn effective techniques to find and secure positions as a cashier, security guard, domestic worker, or other essential jobs.</p>
                  <Button className="w-full bg-primary">View Tips</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="mr-2 h-5 w-5 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </span>
                    Workplace Skills
                  </CardTitle>
                  <CardDescription>Develop essential skills for the modern workplace</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Build the professional skills employers value most for entry-level positions in South Africa.</p>
                  <Button className="w-full bg-primary">Learn Skills</Button>
                </CardContent>
              </Card>
            </div>

            {/* Other tabs content is hidden by default */}
            {/* To show other tabs, you would use useState to track the active tab */}
          </div>

          {/* Related resources section */}
          <RelatedResourcesSection />
        </div>

        {/* Help button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            className="rounded-full w-14 h-14 bg-primary shadow-lg flex items-center justify-center"
            aria-label="Get help"
          >
            <span className="h-6 w-6 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
            </span>
          </Button>
        </div>

        {/* Submit Feedback Modal */}
        <SubmitFeedbackModal
          isOpen={isFeedbackModalOpen}
          onClose={() => setIsFeedbackModalOpen(false)}
        />
      </main>
    </>
  );
};

export default Resources;
