import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import UserProfile from '@/pages/UserProfile';
import { useAuth } from '@/contexts/AuthContext';

// Mock Toaster component
const Toaster = () => <div data-testid="toaster" />;

// Mock the auth context
jest.mock('../contexts/AuthContext', () => ({
  useAuth: jest.fn(),
}));

// Mock the useLocation hook
jest.mock('wouter', () => ({
  useLocation: () => ['', jest.fn()],
  useParams: () => ({ username: 'testuser' }),
}));

// Mock the toast hook
jest.mock('../hooks/use-toast', () => ({
  useToast: () => ({
    toast: jest.fn(),
  }),
}));

// Mock the profile service
jest.mock('../services/profileService', () => ({
  profileService: {
    getProfile: jest.fn(),
    updateProfile: jest.fn(),
  },
}));

// Mock file upload service
jest.mock('../services/fileUploadService', () => ({
  fileUploadService: {
    uploadProfileImage: jest.fn(),
  },
}));

// Test wrapper component
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    {children}
    <Toaster />
  </>
);

describe('UserProfile Component', () => {
  const mockCurrentUser = {
    uid: '123',
    email: 'test@example.com',
    displayName: 'Test User',
    photoURL: 'https://example.com/photo.jpg',
  };

  const mockProfileData = {
    personal: {
      fullName: 'John Doe',
      phoneNumber: '1234567890',
      location: 'Johannesburg',
      bio: 'Test bio',
    },
    education: {
      highestEducation: 'Bachelor',
      schoolName: 'Test University',
      yearCompleted: '2020',
    },
    experience: {
      jobTitle: 'Developer',
      employer: 'Test Company',
      startDate: '2020-01',
      endDate: '2022-12',
    },
    skills: {
      skills: ['JavaScript', 'React'],
      languages: ['English', 'Afrikaans'],
      hasDriversLicense: true,
      hasTransport: true,
    },
  };

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({
      currentUser: mockCurrentUser,
      isLoading: false,
    });

    // Mock fetch for profile data
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          success: true,
          data: mockProfileData,
        }),
      })
    );
  });

  describe('Profile Auto-population', () => {
    it('should display user profile data from registration', async () => {
      render(<UserProfile />, { wrapper: TestWrapper });

      // Wait for profile data to load
      await waitFor(() => {
        // Check personal information
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('1234567890')).toBeInTheDocument();
        expect(screen.getByText('Johannesburg')).toBeInTheDocument();
        expect(screen.getByText('Test bio')).toBeInTheDocument();

        // Check education
        expect(screen.getByText('Bachelor')).toBeInTheDocument();
        expect(screen.getByText('Test University')).toBeInTheDocument();
        expect(screen.getByText('2020')).toBeInTheDocument();

        // Check experience
        expect(screen.getByText('Developer')).toBeInTheDocument();
        expect(screen.getByText('Test Company')).toBeInTheDocument();
        expect(screen.getByText('Jan 2020 - Dec 2022')).toBeInTheDocument();

        // Check skills
        expect(screen.getByText('JavaScript')).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('English')).toBeInTheDocument();
        expect(screen.getByText('Afrikaans')).toBeInTheDocument();
        expect(screen.getByText('Has driver\'s license')).toBeInTheDocument();
        expect(screen.getByText('Has own transport')).toBeInTheDocument();
      });
    });

    it('should handle missing profile data gracefully', async () => {
      // Mock fetch with incomplete profile data
      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({
            success: true,
            data: {
              personal: {
                fullName: 'John Doe',
              },
              // Other sections are missing
            },
          }),
        })
      );

      render(<UserProfile />, { wrapper: TestWrapper });

      // Wait for profile data to load
      await waitFor(() => {
        // Check that available data is displayed
        expect(screen.getByText('John Doe')).toBeInTheDocument();

        // Check that missing sections show appropriate messages or placeholders
        expect(screen.getByText('No bio available. Click edit to add one.') || screen.getByText('No skills added yet. Click edit to add skills.')).toBeTruthy();
      });
    });

    it('should handle profile data update', async () => {
      render(<UserProfile />, { wrapper: TestWrapper });

      // Mock fetch for profile update
      global.fetch = jest.fn().mockImplementation((url) => {
        if (url.includes('/api/update-profile')) {
          return Promise.resolve({
            json: () => Promise.resolve({
              success: true,
              data: {
                ...mockProfileData,
                personal: {
                  ...mockProfileData.personal,
                  bio: 'Updated bio',
                },
              },
            }),
          });
        }
        return Promise.resolve({
          json: () => Promise.resolve({
            success: true,
            data: mockProfileData,
          }),
        });
      });

      // Click edit button
      fireEvent.click(screen.getByText('Edit Profile'));

      // Update bio
      const bioInput = screen.getByLabelText('Bio');
      fireEvent.change(bioInput, { target: { value: 'Updated bio' } });

      // Click save button
      fireEvent.click(screen.getByText('Save Changes'));

      // Wait for update to complete
      await waitFor(() => {
        expect(screen.getByText('Updated bio')).toBeInTheDocument();
      });
    });

    it('should handle profile image update', async () => {
      render(<UserProfile />, { wrapper: TestWrapper });

      // Mock file upload
      const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' });
      const fileInput = screen.getByTestId('profile-image-upload');
      fireEvent.change(fileInput, { target: { files: [file] } });

      // Mock image upload response
      global.fetch = jest.fn().mockImplementation((url) => {
        if (url.includes('/api/upload-profile-image')) {
          return Promise.resolve({
            json: () => Promise.resolve({
              success: true,
              data: {
                imageUrl: 'https://example.com/new-photo.jpg',
              },
            }),
          });
        }
        return Promise.resolve({
          json: () => Promise.resolve({
            success: true,
            data: mockProfileData,
          }),
        });
      });

      // Wait for image update
      await waitFor(() => {
        const img = screen.getByAltText('Profile picture');
        expect(img).toHaveAttribute('src', 'https://example.com/new-photo.jpg');
      });
    });
  });
}); 