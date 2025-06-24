import { Link } from 'wouter';

const Footer = () => {
  console.log('Footer component rendered');
  return (
    <footer className="bg-white border-t border-border pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="h-10 mb-4 flex items-center">
              <div className="flex items-center">
                <img
                  src="/images/hero-logo.png"
                  alt="WorkWise SA Logo"
                  className="h-8 w-auto mr-2"
                />
                <span className="text-xl font-bold text-primary">WORK<span className="text-accent">WISE.SA</span></span>
              </div>
            </div>
            <p className="text-primary mb-4">The Low Level Jobs Directory is an online platform specifically designed to connect young South Africans with entry-level employment opportunities that require minimal experience or qualifications.</p>
            <div className="flex space-x-4">              <a href="https://www.facebook.com/profile.php?id=61575790149796" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>              <a href="https://x.com/WorkWise_SA" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent" aria-label="X (formerly Twitter)">
                <i className="fab fa-x-twitter"></i>
              </a>              <a href="https://www.linkedin.com/in/work-wise-sa-36a133370/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a><a href="https://www.instagram.com/work.wise_sa/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li><Link href="/jobs" className="text-primary hover:text-accent">Browse Jobs</Link></li>
              <li><Link href="/resources" className="text-primary hover:text-accent">Career Resources</Link></li>
              <li><Link href="/resources/cv-templates" className="text-primary hover:text-accent">CV Templates</Link></li>
              <li><Link href="/resources/interview-tips" className="text-primary hover:text-accent">Interview Tips</Link></li>
              <li><Link href="/resources/salary-guide" className="text-primary hover:text-accent">Salary Guide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li><Link href="/employers/post-job" className="text-primary hover:text-accent">Post a Job</Link></li>
              <li><Link href="/employers/browse-candidates" className="text-primary hover:text-accent">Browse Candidates</Link></li>
              <li><Link href="/employers/solutions" className="text-primary hover:text-accent">Recruitment Solutions</Link></li>
              <li><Link href="/employers/pricing" className="text-primary hover:text-accent">Pricing</Link></li>
              <li><Link href="/employers/success-stories" className="text-primary hover:text-accent">Success Stories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-primary hover:text-accent">About Us</Link></li>
              <li><Link href="/contact" className="text-primary hover:text-accent">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-primary hover:text-accent">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-primary hover:text-accent">Terms of Service</Link></li>
              <li><Link href="/faq" className="text-primary hover:text-accent">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-foreground">
          <p>&copy; {new Date().getFullYear()} WorkWise SA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
