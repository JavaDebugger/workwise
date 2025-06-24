import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import UserMenu from '@/components/UserMenu';
import AdminButton from '@/components/AdminButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="WorkWise SA Logo"
              className="h-24 sm:h-28 mr-2 transition-all duration-200 hover:scale-105"
            />
          </Link>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/jobs" className={`text-dark hover:text-primary font-medium ${location === '/jobs' ? 'text-primary' : ''}`}>
                Find Jobs
              </Link>
            </li>
            <li>
              <Link href="/companies" className={`text-dark hover:text-primary font-medium ${location === '/companies' ? 'text-primary' : ''}`}>
                Companies
              </Link>
            </li>
            <li>
              <Link href="/cv-builder" className={`text-dark hover:text-primary font-medium ${location === '/cv-builder' ? 'text-primary' : ''}`}>
                CV Builder
              </Link>
            </li>
            <li>
              <Link href="/wise-up" className={`text-dark hover:text-primary font-medium ${location === '/wise-up' ? 'text-primary' : ''}`}>
                Wise-Up
              </Link>
            </li>
            <li>
              <Link href="/blog-wise" className={`text-dark hover:text-primary font-medium ${location === '/blog-wise' ? 'text-primary' : ''}`}>
                Blog Wise
              </Link>
            </li>
            <li>
              <Link href="/resources" className={`text-dark hover:text-primary font-medium ${location === '/resources' ? 'text-primary' : ''}`}>
                Resources
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`text-dark hover:text-primary font-medium ${location === '/contact' ? 'text-primary' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-3">
            <AdminButton variant="outline" />
            <UserMenu />
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-dark focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6">
          <ul className="space-y-4">
            <li>
              <Link
                href="/jobs"
                className={`block text-dark hover:text-primary font-medium ${location === '/jobs' ? 'text-primary' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Find Jobs
              </Link>
            </li>
            <li>
              <Link
                href="/companies"
                className={`block text-dark hover:text-primary font-medium ${location === '/companies' ? 'text-primary' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Companies
              </Link>
            </li>
            <li>
              <Link
                href="/cv-builder"
                className={`block text-dark hover:text-primary font-medium ${location === '/cv-builder' ? 'text-primary' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                CV Builder
              </Link>
            </li>
            <li>
              <Link
                href="/wise-up"
                className={`block text-dark hover:text-primary font-medium ${location === '/wise-up' ? 'text-primary' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Wise-Up
              </Link>
            </li>
            <li>
              <Link
                href="/blog-wise"
                className={`block text-dark hover:text-primary font-medium ${location === '/blog-wise' ? 'text-primary' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog Wise
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className={`block text-dark hover:text-primary font-medium ${location === '/resources' ? 'text-primary' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block text-dark hover:text-primary font-medium ${location === '/contact' ? 'text-primary' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="pt-3 border-t border-gray-100">
              <div className="flex flex-col items-center space-y-3">
                <AdminButton variant="outline" />
                <UserMenu />
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
