import { HelmetProvider } from 'react-helmet-async';
import { Route, Switch, Redirect } from 'wouter';
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Suspense, lazy } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LoadingScreen } from '@/components/ui/loading-screen';

// Lazy load all pages for better performance
const NotFound = lazy(() => import("@/pages/not-found"));
const Home = lazy(() => import("@/pages/Home"));
const Jobs = lazy(() => import("@/pages/Jobs"));
const Resources = lazy(() => import("@/pages/Resources"));
const WiseUpPage = lazy(() => import("@/pages/WiseUp/WiseUpPage"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const CVBuilder = lazy(() => import("@/pages/CVBuilder"));
const UserProfile = lazy(() => import("@/pages/UserProfile"));
const ProfileSetup = lazy(() => import("@/pages/ProfileSetup"));
const EmailLinkLogin = lazy(() => import("@/pages/EmailLinkLogin"));
const EmailSignInComplete = lazy(() => import("@/pages/EmailSignInComplete"));
const MarketingRulesPage = lazy(() => import("@/pages/MarketingRulesPage"));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const UITest = lazy(() => import("@/components/ui-test"));
const TestPage = lazy(() => import("@/pages/TestPage"));
const FooterTest = lazy(() => import("@/pages/FooterTest"));
const ColorTest = lazy(() => import("@/pages/ColorTest"));
const SimpleTest = lazy(() => import("@/pages/SimpleTest"));
const HomeSimple = lazy(() => import("@/pages/HomeSimple"));
const FAQWheelPage = lazy(() => import("@/pages/FAQWheelPage"));

// Companies and Blog pages
const Companies = lazy(() => import("@/pages/Companies"));
const BlogWise = lazy(() => import("@/pages/BlogWise"));

// Resource pages
const CVTemplates = lazy(() => import("@/pages/resources/CVTemplates"));
// Use the new InterviewTipsPage component that handles its own lazy loading
const InterviewTips = lazy(() => import("@/pages/resources/InterviewTipsPage"));
const SalaryGuide = lazy(() => import("@/pages/resources/SalaryGuide"));
const CVBuilderHelp = lazy(() => import("@/pages/resources/CVBuilderHelp"));

// Employer pages
const PostJob = lazy(() => import("@/pages/employers/PostJob"));
const BrowseCandidates = lazy(() => import("@/pages/employers/BrowseCandidates"));
const Solutions = lazy(() => import("@/pages/employers/Solutions"));
const Pricing = lazy(() => import("@/pages/employers/Pricing"));
const SuccessStories = lazy(() => import("@/pages/employers/SuccessStories"));

// About pages
const About = lazy(() => import("@/pages/About"));
const AboutUsPage = lazy(() => import("@/pages/AboutUsPage"));
const Contact = lazy(() => import("@/pages/Contact"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const Terms = lazy(() => import("@/pages/Terms"));
const FAQ = lazy(() => import("@/pages/FAQ"));

/**
 * Router component with lazy-loaded routes and error boundaries
 */
function Router() {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<LoadingScreen />}>
          <Switch>
            <Route path="/" component={HomeSimple} />
            <Route path="/home-original" component={Home} />
            <Route path="/jobs" component={Jobs} />
            <Route path="/resources" component={Resources} />

            {/* Resource sub-pages */}
            <Route path="/resources/cv-templates" component={CVTemplates} />
            <Route path="/resources/interview-tips" component={InterviewTips} />
            <Route path="/resources/salary-guide" component={SalaryGuide} />
            <Route path="/resources/cv-builder-help" component={CVBuilderHelp} />

            {/* Companies and Blog pages */}
            <Route path="/companies" component={Companies} />
            <Route path="/blog-wise" component={BlogWise} />

            {/* Employer pages */}
            <Route path="/employers/post-job" component={PostJob} />
            <Route path="/employers/browse-candidates" component={BrowseCandidates} />
            <Route path="/employers/solutions" component={Solutions} />
            <Route path="/employers/pricing" component={Pricing} />
            <Route path="/employers/success-stories" component={SuccessStories} />

            {/* About pages */}
            <Route path="/about" component={About} />
            <Route path="/about-us" component={AboutUsPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/terms" component={Terms} />
            <Route path="/faq" component={FAQ} />
            <Route path="/faq-wheel" component={FAQWheelPage} />

            <Route path="/wise-up" component={WiseUpPage} />
            <Route path="/cv-builder" component={CVBuilder} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/profile/:username" component={UserProfile} />
            <Route path="/profile-setup">
              {() => <ProfileSetup />}
            </Route>
            <Route path="/upload-cv">
              {() => <Redirect to="/profile-setup" />}
            </Route>
            <Route path="/email-link-login" component={EmailLinkLogin} />
            <Route path="/auth/email-signin-complete" component={EmailSignInComplete} />
            <Route path="/ui-test" component={UITest} />
            <Route path="/test" component={TestPage} />
            <Route path="/footer-test" component={FooterTest} />
            <Route path="/color-test" component={ColorTest} />
            <Route path="/simple-test" component={SimpleTest} />
            <Route path="/admin" component={AdminDashboard} />
            <Route path="/marketing-rules" component={MarketingRulesPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </>
  );
}

/**
 * Main App component
 * Provides global providers (Helmet, QueryClient, Auth) and main layout
 */
function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router />
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
