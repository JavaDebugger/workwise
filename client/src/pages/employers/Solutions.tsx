import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import CustomHelmet from '@/components/CustomHelmet';
import { Users, Zap, BarChart3, ShieldCheck, BookOpen, Target } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Talent Sourcing',
      description: "Access South Africa's largest pool of entry-level and skilled talent.",
      features: [
        'AI-powered candidate matching',
        'Advanced filtering and screening',
        'Automated skills assessment',
        'CV database access',
      ],
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: 'Recruitment Automation',
      description: 'Streamline your hiring process with intelligent automation.',
      features: [
        'Automated job posting distribution',
        'Candidate communication tools',
        'Interview scheduling',
        'Application tracking system',
      ],
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: 'Analytics & Insights',
      description: 'Make data-driven hiring decisions with comprehensive analytics.',
      features: [
        'Real-time recruitment metrics',
        'Candidate source tracking',
        'Performance analytics',
        'Custom reporting',
      ],
    },
  ];

  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: 'Verified Candidates',
      description: 'All candidates undergo basic verification checks',
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: 'Skills Assessment',
      description: 'Pre-built and custom skills assessments',
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: 'Targeted Reach',
      description: 'Reach candidates across all South African provinces',
    },
  ];

  return (
    <>
      <CustomHelmet
        title="Recruitment Solutions - WorkWise SA"
        description="Comprehensive recruitment solutions for employers in South Africa."
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Recruitment Solutions for Modern Businesses
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your hiring process with WorkWise SA's comprehensive recruitment
                solutions, designed specifically for the South African market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="mb-4">{solution.icon}</div>
                    <CardTitle className="text-2xl mb-2">{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose WorkWise SA</h2>
              <p className="text-muted-foreground">
                Empowering businesses with innovative recruitment tools
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">{feature.icon}</div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Recruitment?</h2>
                <p className="mb-8 text-primary-foreground/90">
                  Join hundreds of South African companies already using WorkWise SA
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary">
                    View Pricing
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent">
                    Contact Sales
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default Solutions;
