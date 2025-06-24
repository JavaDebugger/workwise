import apiClient from './apiClient';
import { User } from 'firebase/auth';

/**
 * Profile data interface
 */
export interface ProfileData {
  personal: {
    fullName: string;
    phoneNumber: string;
    location: string;
    idNumber?: string;
    dateOfBirth?: string;
    gender?: string;
    bio?: string;
    profilePicture?: string;
  };
  education: {
    highestEducation: string;
    schoolName: string;
    yearCompleted?: string;
    achievements?: string;
    additionalCourses?: string;
  };
  experience: {
    hasExperience: boolean;
    currentlyEmployed?: boolean;
    jobTitle?: string;
    employer?: string;
    startDate?: string;
    endDate?: string;
    jobDescription?: string;
    previousExperience?: string;
    volunteerWork?: string;
    references?: string;
  };
  skills: {
    skills?: string[];
    customSkills?: string;
    languages?: string[];
    hasDriversLicense?: boolean;
    hasTransport?: boolean;
    cvUpload?: string;
    createCV?: boolean;
  };
}

/**
 * CV scan response interface
 */
export interface CVScanResponse {
  success: boolean;
  data: {
    extractedData: {
      personal?: {
        fullName?: string;
        phoneNumber?: string;
        location?: string;
        idNumber?: string;
        dateOfBirth?: string;
        gender?: string;
        bio?: string;
      };
      education?: {
        highestEducation?: string;
        schoolName?: string;
        yearCompleted?: string;
        achievements?: string;
      };
      experience?: {
        jobTitle?: string;
        employer?: string;
        jobDescription?: string;
      };
      skills?: {
        skills?: string[];
        languages?: string[];
      };
    };
    warnings?: Array<{
      type: 'handwritten' | 'scratched' | 'missing' | 'unclear';
      section: string;
      message: string;
      suggestedFix?: string;
    }>;
    confidence?: Array<{
      section: string;
      confidence: number;
      notes?: string;
    }>;
  };
  error?: string;
}

/**
 * Image enhancement response interface
 */
export interface ImageEnhancementResponse {
  success: boolean;
  data: {
    enhancedImage: string;
  };
  error?: string;
}

/**
 * AI prompt processing response interface
 */
export interface AIPromptResponse {
  success: boolean;
  data: Partial<ProfileData>;
  error?: string;
}

/**
 * Service for profile-related API calls
 */
export const profileService = {
  /**
   * Get user profile data
   */
  async getProfile(userId: string): Promise<ProfileData> {
    try {
      const response = await apiClient.get<ProfileData>(`/profile/${userId}`);
      return response.data;
    } catch (error: any) {
      console.error('Error fetching profile:', error);
      // Return default profile structure if profile doesn't exist
      if (error.status === 404) {
        return {
          personal: {
            fullName: '',
            phoneNumber: '',
            location: '',
          },
          education: {
            highestEducation: '',
            schoolName: '',
          },
          experience: {
            hasExperience: false,
          },
          skills: {
            skills: [],
            languages: [],
          },
        };
      }
      throw error;
    }
  },

  /**
   * Update user profile data
   */
  async updateProfile(userId: string, data: Partial<ProfileData>): Promise<void> {
    try {
      await apiClient.put(`/profile/${userId}`, data);
    } catch (error: any) {
      console.error('Error updating profile:', error);
      throw new Error(error.message || 'Failed to update profile');
    }
  },

  /**
   * Scan CV to extract information
   */
  async scanCV(file: File): Promise<CVScanResponse> {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('enhancedScan', 'true');

      const response = await apiClient.post<CVScanResponse>('/api/scan-cv', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 60000, // 60 seconds for CV processing
      });
      
      return response.data;
    } catch (error: any) {
      console.error('Error scanning CV:', error);
      throw new Error(error.message || 'Failed to scan CV. Please try again.');
    }
  },

  /**
   * Enhance profile image
   */
  async enhanceImage(file: File): Promise<ImageEnhancementResponse> {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await apiClient.post<ImageEnhancementResponse>('/api/enhance-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 30000, // 30 seconds for image processing
      });
      
      return response.data;
    } catch (error: any) {
      console.error('Error enhancing image:', error);
      throw new Error(error.message || 'Failed to enhance image. Please try again.');
    }
  },

  /**
   * Process AI prompt for profile improvements
   */
  async processAIPrompt(
    prompt: string, 
    cvData: Partial<ProfileData>, 
    warnings: Array<{
      type: string;
      section: string;
      message: string;
      suggestedFix?: string;
    }>
  ): Promise<AIPromptResponse> {
    try {
      const response = await apiClient.post<AIPromptResponse>('/api/process-ai-prompt', {
        prompt,
        cvData,
        warnings,
      }, {
        timeout: 30000, // 30 seconds for AI processing
      });
      
      return response.data;
    } catch (error: any) {
      console.error('Error processing AI prompt:', error);
      throw new Error(error.message || 'Failed to process AI prompt. Please try again.');
    }
  },
};

export default profileService;
