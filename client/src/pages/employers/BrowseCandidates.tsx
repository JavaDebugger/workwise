import React, { useEffect, useRef, useState } from 'react';
import CandidateCard from '@/components/CandidateCard';
import CustomHelmet from '@/components/CustomHelmet';
import { Users, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Mock Data (replace with API call in a real application)
const MOCK_CANDIDATES = [
  {
    referenceNumber: 'WWSA-001',
    interactionScore: 92,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60',
    name: 'Thabo Mbeki Jr.',
    location: 'Johannesburg, Gauteng',
    experiencedRoles: ['Cashier', 'Junior Administrator', 'Data Capturer'],
    cvUrl: '/cv/thabo-mbeki-jr.pdf',
    profileUrl: '/profile/thabo-mbeki-jr',
    assessmentUrl: '/assessment/thabo-mbeki-jr'
  },
  {
    referenceNumber: 'WWSA-002',
    interactionScore: 88,
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60',
    name: 'Lerato Kgotso',
    location: 'Cape Town, Western Cape',
    experiencedRoles: ['Customer Service Rep', 'Receptionist'],
    cvUrl: '/cv/lerato-kgotso.pdf',
    profileUrl: '/profile/lerato-kgotso',
    assessmentUrl: '/assessment/lerato-kgotso'
  },
  {
    referenceNumber: 'WWSA-003',
    interactionScore: 75,
    imageUrl: null, // Test fallback avatar
    name: 'Sipho Ndlovu',
    location: 'Durban, KwaZulu-Natal',
    experiencedRoles: ['General Worker', 'Driver (Code 8)'],
    cvUrl: '/cv/sipho-ndlovu.pdf',
    profileUrl: '/profile/sipho-ndlovu',
    assessmentUrl: '/assessment/sipho-ndlovu'
  },
  {
    referenceNumber: 'WWSA-004',
    interactionScore: 95,
    imageUrl: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60',
    name: 'Aisha Omar',
    location: 'Pretoria, Gauteng',
    experiencedRoles: ['IT Support Intern', 'Helpdesk Assistant'],
    cvUrl: '/cv/aisha-omar.pdf',
    profileUrl: '/profile/aisha-omar',
    assessmentUrl: '/assessment/aisha-omar'
  },
  {
    referenceNumber: 'WWSA-005',
    interactionScore: 82,
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60',
    name: 'Bongani Zulu',
    location: 'Bloemfontein, Free State',
    experiencedRoles: ['Sales Assistant', 'Stock Controller'],
    cvUrl: '/cv/bongani-zulu.pdf',
    profileUrl: '/profile/bongani-zulu',
    assessmentUrl: '/assessment/bongani-zulu'
  },
  {
    referenceNumber: 'WWSA-006',
    interactionScore: 90,
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60',
    name: 'Naledi Molefe',
    location: 'Port Elizabeth, Eastern Cape',
    experiencedRoles: ['Social Media Intern', 'Marketing Assistant'],
    cvUrl: '/cv/naledi-molefe.pdf',
    profileUrl: '/profile/naledi-molefe',
    assessmentUrl: '/assessment/naledi-molefe'
  },
];

const BrowseCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // For search functionality
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Simulate fetching data
    setCandidates(MOCK_CANDIDATES);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            entry.target.style.opacity = '1'; // Ensure it's visible after animation
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [candidates]); // Re-run if candidates change (e.g., after filtering)

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  // Basic filter (can be expanded)
  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.experiencedRoles.some(role => role.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <CustomHelmet
        title="Browse Candidates - WorkWise SA"
        description="Find qualified entry-level candidates for your job openings. Discover talented job seekers ready to make an impact."
      />

      <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 text-foreground">
        <header className="py-16 text-center bg-primary/10 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Users size={64} className="mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Browse Candidates
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover talented entry-level job seekers ready to make an impact.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          {/* Search and Filters */}
          <div className="mb-12 p-6 bg-card/70 backdrop-blur-md rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-4">Find Your Next Hire</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name, role (e.g., Cashier, Driver)..."
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          {filteredCandidates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredCandidates.map((candidate, index) => (
                <div
                  key={candidate.referenceNumber}
                  ref={addToRefs}
                  className="opacity-0" // Initial state for animation
                  style={{ '--animation-delay': `${index * 0.1}s` }} // Staggered animation
                >
                  <CandidateCard candidate={candidate} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground">
                No candidates match your current search criteria.
              </p>
            </div>
          )}
        </main>

        <footer className="text-center py-10 mt-12 border-t border-border/50">
          <p className="text-muted-foreground">© {new Date().getFullYear()} WorkWise SA. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default BrowseCandidates;
