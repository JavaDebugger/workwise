import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

export interface ContactMethod {
  icon: LucideIcon;
  title: string;
  description: string;
  value: string;
  href: string;
}

interface ContactInformationProps {
  contactMethods: ContactMethod[];
}

const ContactInformation = ({ contactMethods }: ContactInformationProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
        
        <div className="space-y-6">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <a href={method.href} className="text-primary hover:underline">
                      {method.value}
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Business Hours Section */}
        <div className="mt-8 pt-6 border-t">
          <h3 className="font-medium text-foreground mb-3">Business Hours</h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p>Saturday: 9:00 AM - 1:00 PM</p>
            <p>Sunday: Closed</p>
            <p className="text-xs mt-2">(South African Standard Time)</p>
          </div>
        </div>

        {/* Response Time */}
        <div className="mt-6 p-4 bg-muted/50 rounded-md">
          <h4 className="font-medium text-sm text-foreground mb-1">Quick Response</h4>
          <p className="text-xs text-muted-foreground">
            We typically respond to all inquiries within 24 hours during business days.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInformation;

