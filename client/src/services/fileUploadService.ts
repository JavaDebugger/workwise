import { API_URL } from '@/lib/env';

/**
 * File upload validation configuration
 */
const VALIDATION_CONFIG = {
  profileImage: {
    maxSize: 5 * 1024 * 1024, // 5MB
    allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
    maxDimensions: { width: 2000, height: 2000 }
  },
  cv: {
    maxSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  }
};

/**
 * File upload error class
 */
export class FileUploadError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = 'FileUploadError';
  }
}

/**
 * Validates file before upload
 */
const validateFile = (file: File, type: 'profileImage' | 'cv'): void => {
  const config = VALIDATION_CONFIG[type];
  
  if (file.size > config.maxSize) {
    throw new FileUploadError(
      `File size exceeds ${Math.round(config.maxSize / (1024 * 1024))}MB limit`,
      'FILE_TOO_LARGE'
    );
  }
  
  if (!config.allowedTypes.includes(file.type)) {
    throw new FileUploadError(
      `File type not supported. Allowed types: ${config.allowedTypes.join(', ')}`,
      'INVALID_FILE_TYPE'
    );
  }
};

/**
 * Service for handling file uploads to PostgreSQL storage
 */
export const fileUploadService = {
  /**
   * Upload a profile image to PostgreSQL storage
   * @param file The image file to upload
   * @param userId The user ID to associate with the image
   * @returns The download URL of the uploaded image
   */
  async uploadProfileImage(file: File, userId: string): Promise<string> {
    try {
      // Validate file before upload
      validateFile(file, 'profileImage');
      
      if (!userId) {
        throw new FileUploadError('User ID is required', 'MISSING_USER_ID');
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', userId);
      formData.append('type', 'profile-image');

      const response = await fetch(`${API_URL}/api/files/upload-profile-image`, {
        method: 'POST',
        body: formData,
        // Don't set Content-Type header - let browser set it with boundary
      });

      if (!response.ok) {
        let errorMessage = 'Failed to upload profile image';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch {
          // If response is not JSON, use status text
          errorMessage = response.statusText || errorMessage;
        }
        throw new FileUploadError(errorMessage, `HTTP_${response.status}`);
      }

      const data = await response.json();
      
      if (!data.success || !data.data?.fileUrl) {
        throw new FileUploadError('Invalid response from server', 'INVALID_RESPONSE');
      }
      
      return data.data.fileUrl;
    } catch (error) {
      console.error('Error uploading profile image:', error);
      
      if (error instanceof FileUploadError) {
        throw error;
      }
      
      // Handle network errors
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new FileUploadError('Network error. Please check your connection.', 'NETWORK_ERROR');
      }
      
      throw new FileUploadError(
        error instanceof Error ? error.message : 'Unknown error occurred',
        'UNKNOWN_ERROR'
      );
    }
  },

  /**
   * Upload a CV file to PostgreSQL storage
   * @param file The CV file to upload
   * @param userId The user ID to associate with the CV
   * @returns The download URL of the uploaded CV
   */
  async uploadCV(file: File, userId: string): Promise<string> {
    try {
      // Validate file before upload
      validateFile(file, 'cv');
      
      if (!userId) {
        throw new FileUploadError('User ID is required', 'MISSING_USER_ID');
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', userId);
      formData.append('type', 'cv');

      const response = await fetch(`${API_URL}/api/files/upload-cv`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        let errorMessage = 'Failed to upload CV';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch {
          errorMessage = response.statusText || errorMessage;
        }
        throw new FileUploadError(errorMessage, `HTTP_${response.status}`);
      }

      const data = await response.json();
      
      if (!data.success || !data.data?.fileUrl) {
        throw new FileUploadError('Invalid response from server', 'INVALID_RESPONSE');
      }
      
      return data.data.fileUrl;
    } catch (error) {
      console.error('Error uploading CV:', error);
      
      if (error instanceof FileUploadError) {
        throw error;
      }
      
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new FileUploadError('Network error. Please check your connection.', 'NETWORK_ERROR');
      }
      
      throw new FileUploadError(
        error instanceof Error ? error.message : 'Unknown error occurred',
        'UNKNOWN_ERROR'
      );
    }
  },

  /**
   * Upload a generic file
   * @param file The file to upload
   * @param userId The user ID to associate with the file
   * @param fileType The type of file
   * @returns The file data including the download URL
   */
  async uploadFile(file: File, userId: string, fileType: string): Promise<any> {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', userId);
      formData.append('fileType', fileType);

      const response = await fetch(`${API_URL}/api/files/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to upload file');
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  },

  /**
   * Get all files for a user
   * @param userId The user ID
   * @returns Array of file data
   */
  async getUserFiles(userId: string): Promise<any[]> {
    try {
      const response = await fetch(`${API_URL}/api/files/user/${userId}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get user files');
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error getting user files:', error);
      throw error;
    }
  },

  /**
   * Delete a file
   * @param fileId The ID of the file to delete
   * @returns Boolean indicating success
   */
  async deleteFile(fileId: number): Promise<boolean> {
    try {
      const response = await fetch(`${API_URL}/api/files/${fileId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete file');
      }

      const data = await response.json();
      return data.data.deleted;
    } catch (error) {
      console.error('Error deleting file:', error);
      throw error;
    }
  }
};
