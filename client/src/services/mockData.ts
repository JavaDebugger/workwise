import { Category, Company, Job } from '@shared/schema';

/**
 * Mock categories data for development and testing
 * Note: In production, this should be replaced with real API data
 */
export const mockCategories: Category[] = [
  { id: 1, name: 'General Worker', slug: 'general-worker', count: 245, icon: 'user' },
  { id: 2, name: 'Construction General Worker', slug: 'construction-worker', count: 178, icon: 'engineering' },
  { id: 3, name: 'Transnet General Worker', slug: 'transnet-worker', count: 56, icon: 'building' },
  { id: 4, name: 'Picker / Packer', slug: 'picker-packer', count: 132, icon: 'shopping-cart' },
  { id: 5, name: 'Warehouse Assistant', slug: 'warehouse', count: 98, icon: 'briefcase' },
  { id: 6, name: 'Cashier', slug: 'cashier', count: 167, icon: 'money' },
  { id: 7, name: 'Cleaner', slug: 'cleaner', count: 203, icon: 'broom' },
  { id: 8, name: 'Security Guard', slug: 'security', count: 145, icon: 'shield' },
  { id: 9, name: 'Admin Clerk', slug: 'admin', count: 112, icon: 'file' },
  { id: 10, name: 'Retail Assistant', slug: 'retail', count: 189, icon: 'tag' }
];

/**
 * Mock companies data for development and testing
 * Note: In production, this should be replaced with real API data
 */
export const mockCompanies: Company[] = [
  {
    id: 1,
    name: 'TechSA',
    logo: 'https://via.placeholder.com/150',
    description: 'A leading tech company specializing in software development and digital transformation.',
    location: 'Cape Town, Western Cape',
    industry: 'Information Technology',
    size: '100-250 employees',
    website: 'https://techsa.co.za',
    foundedYear: 2010
  },
  {
    id: 2,
    name: 'Invest Group SA',
    logo: 'https://via.placeholder.com/150',
    description: 'A financial services firm providing investment management and financial advisory services.',
    location: 'Johannesburg, Gauteng',
    industry: 'Finance',
    size: '50-100 employees',
    website: 'https://investgroupsa.co.za',
    foundedYear: 2008
  },
  {
    id: 3,
    name: 'EcoEnergy',
    logo: 'https://via.placeholder.com/150',
    description: 'A renewable energy company focused on solar and wind power solutions.',
    location: 'Durban, KwaZulu-Natal',
    industry: 'Energy',
    size: '100-250 employees',
    website: 'https://ecoenergy.co.za',
    foundedYear: 2012
  },
  {
    id: 4,
    name: 'GrowSA',
    logo: 'https://via.placeholder.com/150',
    description: 'A marketing and advertising agency specializing in digital marketing and brand development.',
    location: 'Johannesburg, Gauteng',
    industry: 'Marketing',
    size: '10-50 employees',
    website: 'https://growsa.co.za',
    foundedYear: 2015
  },
  {
    id: 5,
    name: 'HealthPlus',
    logo: 'https://via.placeholder.com/150',
    description: 'A healthcare provider operating clinics and medical facilities across South Africa.',
    location: 'Pretoria, Gauteng',
    industry: 'Healthcare',
    size: '500+ employees',
    website: 'https://healthplus.co.za',
    foundedYear: 2000
  }
];

/**
 * Mock jobs data for development and testing
 * Note: In production, this should be replaced with real API data
 */
export const mockJobs: Job[] = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'TechSA',
    companyLogo: 'https://via.placeholder.com/150',
    location: 'Cape Town, Western Cape',
    salary: 'R55,000 - R75,000',
    type: 'Full-time',
    category: 'Information Technology',
    description: 'We are looking for an experienced software engineer to join our team...',
    requirements: ['5+ years in software development', 'Experience with React and TypeScript', 'Bachelor\'s degree in Computer Science'],
    postedDate: '2025-04-20',
    isFeatured: true
  },
  {
    id: 2,
    title: 'Financial Analyst',
    company: 'Invest Group SA',
    companyLogo: 'https://via.placeholder.com/150',
    location: 'Johannesburg, Gauteng',
    salary: 'R35,000 - R45,000',
    type: 'Full-time',
    category: 'Finance',
    description: 'Join our team as a financial analyst to help clients make informed investment decisions...',
    requirements: ['3+ years in financial analysis', 'CFA Level 1', 'Strong Excel skills'],
    postedDate: '2025-04-22',
    isFeatured: true
  },
  {
    id: 3,
    title: 'Renewable Energy Technician',
    company: 'EcoEnergy',
    companyLogo: 'https://via.placeholder.com/150',
    location: 'Durban, KwaZulu-Natal',
    salary: 'R25,000 - R35,000',
    type: 'Full-time',
    category: 'Energy',
    description: 'Install and maintain solar panel systems for residential and commercial clients...',
    requirements: ['2+ years in electrical work', 'Experience with solar installations', 'Valid driver\'s license'],
    postedDate: '2025-04-23',
    isFeatured: true
  },
  {
    id: 4,
    title: 'Sales Manager',
    company: 'GrowSA',
    companyLogo: 'https://via.placeholder.com/150',
    location: 'Durban, KwaZulu-Natal',
    salary: 'R45,000 - R60,000',
    type: 'Full-time',
    category: 'Sales & Marketing',
    description: 'Lead our sales team to achieve targets and expand our client base...',
    requirements: ['5+ years in sales management', 'Proven track record of exceeding targets', 'Experience in B2B sales'],
    postedDate: '2025-04-25',
    isFeatured: true
  }
];

/**
 * Creates a standardized mock response format
 * @param data The data to wrap in a response object
 * @returns Mock response object
 */
export const createMockResponse = <T>(data: T) => ({
  success: true,
  data,
  timestamp: new Date().toISOString(),
  source: 'mock'
});
