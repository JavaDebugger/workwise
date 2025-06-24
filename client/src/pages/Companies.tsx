import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import ComingSoon from '@/components/ComingSoon';

/**
 * Companies page component
 * 
 * Displays information about companies using WorkWise SA platform
 */
const Companies: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Companies - WorkWise SA</title>
        <meta name="description" content="Discover companies actively hiring on WorkWise SA. Find your next employer and explore career opportunities across South Africa." />
      </Helmet>

      <main className="flex-grow bg-light py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Companies</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Companies</h1>
            <p className="text-muted max-w-2xl mx-auto">
              Discover companies actively hiring on WorkWise SA and explore career opportunities across South Africa.
            </p>
          </div>

          <ComingSoon 
            title="Companies Directory Coming Soon" 
            description="Our companies directory is currently under development. Check back soon to browse companies, view their profiles, and discover exciting career opportunities."
          />
        </div>
      </main>
    </>
  );
};

export default Companies;
