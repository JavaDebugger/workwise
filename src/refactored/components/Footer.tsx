import React, { memo } from 'react';
import { Link } from 'wouter';
import { ExternalLink } from 'lucide-react';

/**
 * Props for Footer component
 */
interface FooterProps {
  /**
   * Optional additional CSS classes
   */
  className?: string;
}

/**
 * Footer component for WorkWise SA
 * 
 * Features:
 * - Responsive grid layout
 * - Semantic HTML structure
 * - Accessibility improvements
 * - Performance optimization with memo
 */
const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();
  
  // Footer sections configuration
  const sections = [
    {
      title: 'For Job Seekers',
      links: [
        { href: '/jobs', label: 'Browse Jobs' },
        { href: '/resources', label: 'Career Resources' },
        { href: '/resources/cv-templates', label: 'CV Templates' },
        { href: '/resources/interview-tips', label: 'Interview Tips' },
        { href: '/resources/salary-guide', label: 'Salary Guide' }
      ]
    },
    {
      title: 'For Employers',
      links: [
        { href: '/employers/post-job', label: 'Post a Job' },
        { href: '/employers/browse-candidates', label: 'Browse Candidates' },
        { href: '/employers/solutions', label: 'Recruitment Solutions' },
        { href: '/employers/pricing', label: 'Pricing' },
        { href: '/employers/success-stories', label: 'Success Stories' }
      ]
    },
    {
      title: 'About Us',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/contact', label: 'Contact' },
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' },
        { href: '/faq', label: 'FAQ' }
      ]
    }
  ];
  
  // Social media links configuration
  const socialLinks = [
    { href: 'https://www.facebook.com/profile.php?id=61575790149796', label: 'Facebook', icon: 'fa-facebook-f' },
    { href: 'https://x.com/WorkWise_SA', label: 'X (formerly Twitter)', icon: 'fa-x-twitter' },
    { href: 'https://www.linkedin.com/in/work-wise-sa-36a133370/', label: 'LinkedIn', icon: 'fa-linkedin-in' },
    { href: 'https://www.instagram.com/work.wise_sa/', label: 'Instagram', icon: 'fa-instagram' }
  ];

  return (
    <footer className={`bg-white border-t border-border pt-12 pb-6 ${className}`} role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company information */}
          <div>
            <div className="h-10 mb-4">
              <span className="text-xl font-bold text-primary">WorkWise<span className="text-accent">.SA</span></span>
            </div>
            <p className="text-primary mb-4">
              The Low Level Jobs Directory is an online platform specifically designed to connect young South Africans 
              with entry-level employment opportunities that require minimal experience or qualifications.
            </p>
            
            {/* Social media links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ href, label, icon }) => (
                <a 
                  key={href}
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-accent transition-colors" 
                  aria-label={label}
                >
                  <i className={`fab ${icon}`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>

          {/* Footer sections */}
          {sections.map(({ title, links }) => (
            <div key={title}>
              <h3 className="font-semibold text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link 
                      href={href} 
                      className="text-primary hover:text-accent transition-colors inline-flex items-center"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-foreground">
          <p>&copy; {currentYear} WorkWise SA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
