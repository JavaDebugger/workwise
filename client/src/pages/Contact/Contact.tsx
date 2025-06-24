import { lazy, Suspense } from 'react'; // Import lazy and Suspense
import { Mail, Phone, MapPin, Users, Briefcase, MessageSquare } from 'lucide-react'; // Keep icons for data definitions
import CustomHelmet from '@/components/CustomHelmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'; // Keep Card for FAQ

// Lazy load components
const ContactForm = lazy(() => import('./components/ContactForm'));
const ContactInformation = lazy(() => import('./components/ContactInformation'));
const SupportCategoriesDisplay = lazy(() => import('./components/SupportCategoriesDisplay'));

// Define data here or import from a separate data file if it grows larger
const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email and we\'ll respond within 24 hours',
    value: 'hello@workwisesa.co.za',
    href: 'mailto:hello@workwisesa.co.za'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our support team',
    value: '+27 21 123 4567',
    href: 'tel:+27211234567'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Our office in Cape Town, Western Cape',
    value: 'Cape Town, South Africa',
    href: '#' // Consider a Google Maps link or similar
  }
];

const supportCategories = [
  {
    icon: Users,
    title: 'Job Seekers',
    description: 'Help with CV building, job applications, and career guidance',
    topics: ['CV Builder', 'Job Applications', 'Profile Setup', 'WiseUp Learning']
  },
  {
    icon: Briefcase,
    title: 'Employers',
    description: 'Support for posting jobs and managing applications',
    topics: ['Job Posting', 'Candidate Management', 'Account Setup', 'Billing']
  },
  {
    icon: MessageSquare,
    title: 'General Support',
    description: 'Technical issues, account problems, and other inquiries',
    topics: ['Technical Issues', 'Account Recovery', 'Feature Requests', 'Feedback']
  }
];

// Fallback component for Suspense
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    <p className="ml-4 text-muted-foreground">Loading section...</p>
  </div>
);


const Contact = () => {
  return (
    <>
      <CustomHelmet
        title="Contact Us - WorkWise SA"
        description="Get in touch with WorkWise SA. We're here to help job seekers and employers connect and succeed in South Africa's job market."
      />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about WorkWise SA? Need help with your job search or recruitment needs? 
              We're here to help you succeed in South Africa's job market.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <Suspense fallback={<LoadingFallback />}>
                <ContactInformation contactMethods={contactMethods} />
              </Suspense>
            </div>

            <div className="lg:col-span-2">
              <Suspense fallback={<LoadingFallback />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
          
          <Suspense fallback={<LoadingFallback />}>
            <SupportCategoriesDisplay supportCategories={supportCategories} />
          </Suspense>

          {/* FAQ Prompt (can remain here as it's small) */}
          <Card className="bg-muted/50 mt-12"> {/* Added mt-12 for spacing from section above */}
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">Looking for Quick Answers?</h3>
              <p className="text-muted-foreground mb-4">
                Check out our frequently asked questions for immediate help with common issues.
              </p>
              <Button variant="outline" asChild>
                <a href="/faq">View FAQ</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Contact;
