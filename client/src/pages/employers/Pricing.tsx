import React from 'react';
import { Check, X } from 'lucide-react';
import CustomHelmet from '@/components/CustomHelmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTierType {
  name: string;
  description: string;
  price: string;
  period: string;
  buttonText: string;
  features: PricingFeature[];
}

interface PricingTierProps {
  tier: PricingTierType;
  isPopular?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ tier, isPopular = false }) => (
  <Card className={`relative flex flex-col justify-between ${isPopular ? 'border-primary shadow-lg scale-105' : 'border-border'}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      </div>
    )}
    <div>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
        <p className="text-muted-foreground">{tier.description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <span className="text-4xl font-bold">R{tier.price}</span>
          <span className="text-muted-foreground">/{tier.period}</span>
        </div>
        <ul className="space-y-3">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {feature.included ? (
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
              ) : (
                <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              )}
              <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </div>
    <CardFooter>
      <Button 
        className={`w-full ${isPopular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}
        variant={isPopular ? 'default' : 'secondary'}
      >
        {tier.buttonText}
      </Button>
    </CardFooter>
  </Card>
);

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small businesses starting their recruitment journey",
      price: "499",
      period: "month",
      buttonText: "Start Free Trial",
      features: [
        { text: "Up to 5 active job postings", included: true },
        { text: "Basic candidate filtering", included: true },
        { text: "Email support", included: true },
        { text: "Basic analytics", included: true },
        { text: "CV database access", included: false },
        { text: "Priority support", included: false },
        { text: "Custom branding", included: false },
        { text: "API access", included: false },
      ],
    },
    {
      name: "Professional",
      description: "Ideal for growing companies with regular hiring needs",
      price: "999",
      period: "month",
      buttonText: "Get Started",
      features: [
        { text: "Up to 15 active job postings", included: true },
        { text: "Advanced candidate filtering", included: true },
        { text: "Priority email support", included: true },
        { text: "Advanced analytics", included: true },
        { text: "CV database access", included: true },
        { text: "Candidate assessments", included: true },
        { text: "Custom branding", included: false },
        { text: "API access", included: false },
      ],
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      price: "2499",
      period: "month",
      buttonText: "Contact Sales",
      features: [
        { text: "Unlimited job postings", included: true },
        { text: "Advanced candidate filtering", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Custom analytics", included: true },
        { text: "Unlimited CV database access", included: true },
        { text: "Custom assessments", included: true },
        { text: "Custom branding", included: true },
        { text: "API access", included: true },
      ],
    },
  ];

  return (
    <>
      <CustomHelmet
        title="Pricing - WorkWise SA"
        description="Choose the perfect recruitment plan for your business with WorkWise SA's flexible pricing options."
      />

      <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
        <header className="py-20 text-center bg-primary/10 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your recruitment needs. All plans include a 14-day free trial.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <PricingTier 
                key={index} 
                tier={tier} 
                isPopular={index === 1}
              />
            ))}
          </div>

          <section className="text-center bg-muted/50 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-6">
              Contact our team for a tailored package that meets your specific requirements.
            </p>
            <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              Contact Sales Team
            </Button>
          </section>

          <section className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's included in the free trial?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All features of your chosen plan are available during the 14-day trial period, with no credit card required.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I switch plans anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer discounts?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer discounts for annual subscriptions and special rates for NGOs and educational institutions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We accept all major credit cards, EFT payments, and can arrange other payment methods for Enterprise clients.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Pricing;
