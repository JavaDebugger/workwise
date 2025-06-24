import { HelmetProvider } from 'react-helmet-async';
import { Route, Switch, Redirect } from 'wouter';
import { Suspense, lazy } from 'react';
import { Loader2 } from 'lucide-react';
import { queryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/contexts/AuthContext';
import NotFound from '@/pages/not-found';
import Home from '@/pages/Home';
import Jobs from '@/pages/Jobs';
import Resources from '@/pages/Resources';
import Login from '@/pages/Login';
import EmailLinkLogin from '@/pages/EmailLinkLogin';
import EmailSignInComplete from '@/pages/EmailSignInComplete';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { UITest } from '@/components/ui-test';
import HomeSimple from '@/pages/HomeSimple';
import ForgotPassword from '@/pages/ForgotPassword';

// Lazy load large components to reduce initial bundle size
const WiseUpPage = lazy(() => import('@/pages/WiseUp/WiseUpPage'));
const Register = lazy(() => import('@/pages/Register'));
const CVBuilder = lazy(() => import('@/pages/CVBuilder'));
const UserProfile = lazy(() => import('@/pages/UserProfile'));
const ProfileSetup = lazy(() => import('@/pages/ProfileSetup'));
const MarketingRulesPage = lazy(() => import('@/pages/MarketingRulesPage'));
const AdminDashboard = lazy(() => import('@/pages/AdminDashboard'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const TestPage = lazy(() => import('@/pages/TestPage'));
const FooterTest = lazy(() => import('@/pages/FooterTest'));
const ColorTest = lazy(() => import('@/pages/ColorTest'));
const SimpleTest = lazy(() => import('@/pages/SimpleTest'));
const FAQWheelPage = lazy(() => import('@/pages/FAQWheelPage'));

// Resource pages (lazy loaded)
const CVTemplates = lazy(() => import('@/pages/resources/CVTemplates'));
const InterviewTipsPage = lazy(() => import('@/pages/resources/InterviewTipsPage'));
const SalaryGuide = lazy(() => import('@/pages/resources/SalaryGuide'));
const CVBuilderHelp = lazy(() => import('@/pages/resources/CVBuilderHelp'));

// Employer pages (lazy loaded)
const PostJob = lazy(() => import('@/pages/employers/PostJob'));
const BrowseCandidates = lazy(() => import('@/pages/employers/BrowseCandidates'));
const Solutions = lazy(() => import('@/pages/employers/Solutions'));
const Pricing = lazy(() => import('@/pages/employers/Pricing'));
const SuccessStories = lazy(() => import('@/pages/employers/SuccessStories'));

// About pages
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Terms from '@/pages/Terms';
import FAQ from '@/pages/FAQ';

// Loading component for lazy-loaded pages
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="flex flex-col items-center space-y-4">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-muted-foreground">Loading page...</p>
    </div>
  </div>
);

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={HomeSimple} />
        <Route path="/home-original" component={Home} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/resources" component={Resources} />

        {/* Resource sub-pages */}
        <Route path="/resources/cv-templates">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <CVTemplates />
            </Suspense>
          )}
        </Route>
        <Route path="/resources/interview-tips">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <InterviewTipsPage />
            </Suspense>
          )}
        </Route>
        <Route path="/resources/salary-guide">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <SalaryGuide />
            </Suspense>
          )}
        </Route>
        <Route path="/resources/cv-builder-help">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <CVBuilderHelp />
            </Suspense>
          )}
        </Route>

        {/* Employer pages */}
        <Route path="/employers/post-job">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <PostJob />
            </Suspense>
          )}
        </Route>
        <Route path="/employers/browse-candidates">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <BrowseCandidates />
            </Suspense>
          )}
        </Route>
        <Route path="/employers/solutions">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <Solutions />
            </Suspense>
          )}
        </Route>
        <Route path="/employers/pricing">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <Pricing />
            </Suspense>
          )}
        </Route>
        <Route path="/employers/success-stories">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <SuccessStories />
            </Suspense>
          )}
        </Route>

        {/* About pages */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms" component={Terms} />
        <Route path="/faq" component={FAQ} />
        <Route path="/faq-wheel">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <FAQWheelPage />
            </Suspense>
          )}
        </Route>

        <Route path="/wise-up">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <WiseUpPage />
            </Suspense>
          )}
        </Route>
        <Route path="/cv-builder">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <CVBuilder />
            </Suspense>
          )}
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/register">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <Register />
            </Suspense>
          )}
        </Route>
        <Route path="/profile">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <UserProfile />
            </Suspense>
          )}
        </Route>
        <Route path="/profile/:username">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <UserProfile />
            </Suspense>
          )}
        </Route>
        <Route path="/profile-setup">
          {() => {
            console.log('Rendering ProfileSetup route');
            return (
              <Suspense fallback={<PageLoader />}>
                <ProfileSetup />
              </Suspense>
            );
          }}
        </Route>
        <Route path="/upload-cv">
          {() => {
            console.log('Redirecting to profile setup');
            return <Redirect to="/profile-setup" />;
          }}
        </Route>
        <Route path="/email-link-login" component={EmailLinkLogin} />
        <Route path="/auth/email-signin-complete" component={EmailSignInComplete} />
        <Route path="/ui-test" component={UITest} />
        <Route path="/test">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <TestPage />
            </Suspense>
          )}
        </Route>
        <Route path="/footer-test">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <FooterTest />
            </Suspense>
          )}
        </Route>
        <Route path="/color-test">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <ColorTest />
            </Suspense>
          )}
        </Route>
        <Route path="/simple-test">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <SimpleTest />
            </Suspense>
          )}
        </Route>
        <Route path="/admin">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <AdminDashboard />
            </Suspense>
          )}
        </Route>
        <Route path="/marketing-rules">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <MarketingRulesPage />
            </Suspense>
          )}
        </Route>
        <Route path="/dashboard">
          {() => (
            <Suspense fallback={<PageLoader />}>
              <Dashboard />
            </Suspense>
          )}
        </Route>
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

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
