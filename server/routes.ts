import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertCategorySchema, insertCompanySchema, insertJobSchema } from "@shared/schema";
import { z } from "zod";
import { generateProfessionalSummary, generateJobDescription, translateText } from "./ai";
import { 
  generateProfessionalSummaryWithClaude, 
  generateJobDescriptionWithClaude, 
  translateTextWithClaude,
  analyzeImage
} from "./anthropic";
import recommendationRoutes from "./recommendationRoutes";

export async function registerRoutes(app: Express): Promise<Server> {
  // Categories routes
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  app.get("/api/categories/:slug", async (req, res) => {
    try {
      const category = await storage.getCategoryBySlug(req.params.slug);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      console.error("Error fetching category:", error);
      res.status(500).json({ message: "Failed to fetch category" });
    }
  });

  // Companies routes
  app.get("/api/companies", async (req, res) => {
    try {
      const companies = await storage.getCompanies();
      res.json(companies);
    } catch (error) {
      console.error("Error fetching companies:", error);
      res.status(500).json({ message: "Failed to fetch companies" });
    }
  });

  app.get("/api/companies/:slug", async (req, res) => {
    try {
      const company = await storage.getCompanyBySlug(req.params.slug);
      if (!company) {
        return res.status(404).json({ message: "Company not found" });
      }
      res.json(company);
    } catch (error) {
      console.error("Error fetching company:", error);
      res.status(500).json({ message: "Failed to fetch company" });
    }
  });

  // Jobs routes
  app.get("/api/jobs", async (req, res) => {
    try {
      const jobs = await storage.getJobsWithCompanies();
      res.json(jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      res.status(500).json({ message: "Failed to fetch jobs" });
    }
  });

  app.get("/api/jobs/featured", async (req, res) => {
    try {
      const featuredJobs = await storage.getFeaturedJobs();
      res.json(featuredJobs);
    } catch (error) {
      console.error("Error fetching featured jobs:", error);
      res.status(500).json({ message: "Failed to fetch featured jobs" });
    }
  });

  app.get("/api/jobs/search", async (req, res) => {
    try {
      const query = req.query.q as string || '';
      const results = await storage.searchJobs(query);
      res.json(results);
    } catch (error) {
      console.error("Error searching jobs:", error);
      res.status(500).json({ message: "Failed to search jobs" });
    }
  });

  app.get("/api/jobs/company/:id", async (req, res) => {
    try {
      const companyId = parseInt(req.params.id);
      if (isNaN(companyId)) {
        return res.status(400).json({ message: "Invalid company ID" });
      }
      
      const jobs = await storage.getJobsByCompany(companyId);
      res.json(jobs);
    } catch (error) {
      console.error("Error fetching jobs by company:", error);
      res.status(500).json({ message: "Failed to fetch jobs by company" });
    }
  });

  app.get("/api/jobs/category/:id", async (req, res) => {
    try {
      const categoryId = parseInt(req.params.id);
      if (isNaN(categoryId)) {
        return res.status(400).json({ message: "Invalid category ID" });
      }
      
      const jobs = await storage.getJobsByCategory(categoryId);
      res.json(jobs);
    } catch (error) {
      console.error("Error fetching jobs by category:", error);
      res.status(500).json({ message: "Failed to fetch jobs by category" });
    }
  });

  app.get("/api/jobs/:id", async (req, res) => {
    try {
      const jobId = parseInt(req.params.id);
      if (isNaN(jobId)) {
        return res.status(400).json({ message: "Invalid job ID" });
      }
      
      const job = await storage.getJob(jobId);
      if (!job) {
        return res.status(404).json({ message: "Job not found" });
      }
      
      const company = await storage.getCompany(job.companyId);
      if (!company) {
        return res.status(404).json({ message: "Company not found" });
      }
      
      res.json({ ...job, company });
    } catch (error) {
      console.error("Error fetching job:", error);
      res.status(500).json({ message: "Failed to fetch job" });
    }
  });

  // User routes
  app.post("/api/users/register", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      
      // Check if username already exists
      const existingUser = await storage.getUserByUsername(userData.username);
      if (existingUser) {
        return res.status(409).json({ message: "Username already exists" });
      }
      
      const newUser = await storage.createUser(userData);
      
      // Don't return the password in the response
      const { password, ...userWithoutPassword } = newUser;
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid user data", 
          errors: error.errors 
        });
      }
      
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Failed to register user" });
    }
  });

  // Profile routes
  app.get("/api/profile/:userId", async (req, res) => {
    try {
      const userId = req.params.userId;
      
      // Mock profile data for now (replace with actual database calls when ready)
      const mockProfile = {
        personal: {
          fullName: 'John Doe',
          phoneNumber: '+27123456789',
          location: 'Johannesburg, Gauteng',
          bio: 'Experienced professional looking for new opportunities in South Africa.',
          profilePicture: '/images/default-avatar.png'
        },
        education: {
          highestEducation: 'Matric Certificate',
          schoolName: 'Johannesburg High School',
          yearCompleted: '2020',
          achievements: 'Mathematics and English distinctions'
        },
        experience: {
          hasExperience: true,
          jobTitle: 'General Worker',
          employer: 'ABC Manufacturing',
          startDate: '2021-01',
          endDate: '2023-12',
          jobDescription: 'Responsible for general factory duties and quality control.'
        },
        skills: {
          skills: ['Communication', 'Teamwork', 'Time Management', 'Computer Literacy'],
          languages: ['English', 'Afrikaans', 'Zulu'],
          hasDriversLicense: true,
          hasTransport: false
        },
        // Additional profile metadata
        memberSince: 'January 2024',
        engagementScore: 65,
        ratings: {
          overall: 4.2
        },
        applications: {
          current: 3,
          total: 12,
          successRate: 0.25
        },
        preferences: {
          locations: ['Johannesburg', 'Pretoria', 'Cape Town'],
          jobTypes: ['Full-time', 'Part-time'],
          minSalary: 8000,
          willingToRelocate: true
        },
        recentActivity: [
          {
            content: 'Applied for Warehouse Assistant position at LogiCorp SA',
            timestamp: '2 hours ago',
            icon: 'Briefcase'
          },
          {
            content: 'Updated profile information',
            timestamp: '1 day ago',
            icon: 'Edit'
          },
          {
            content: 'Completed skills assessment',
            timestamp: '3 days ago',
            icon: 'Award'
          }
        ],
        notifications: 2
      };
      
      res.json(mockProfile);
    } catch (error) {
      console.error("Error fetching profile:", error);
      res.status(500).json({ message: "Failed to fetch profile" });
    }
  });

  app.put("/api/profile/:userId", async (req, res) => {
    try {
      const userId = req.params.userId;
      const profileData = req.body;
      
      // Mock profile update (replace with actual database update when ready)
      console.log(`Updating profile for user ${userId}:`, profileData);
      
      res.json({
        success: true,
        message: 'Profile updated successfully',
        data: profileData
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).json({ message: "Failed to update profile" });
    }
  });

  // File upload endpoints
  app.post("/api/files/upload-profile-image", async (req, res) => {
    try {
      // Mock file upload - replace with actual file handling
      const mockImageUrl = `/images/uploaded/profile-${Date.now()}.jpg`;
      
      res.json({
        success: true,
        data: {
          fileUrl: mockImageUrl
        }
      });
    } catch (error) {
      console.error("Error uploading profile image:", error);
      res.status(500).json({ error: "Failed to upload profile image" });
    }
  });

  app.post("/api/files/upload-cv", async (req, res) => {
    try {
      // Mock CV upload - replace with actual file handling
      const mockCVUrl = `/files/uploaded/cv-${Date.now()}.pdf`;
      
      res.json({
        success: true,
        data: {
          fileUrl: mockCVUrl
        }
      });
    } catch (error) {
      console.error("Error uploading CV:", error);
      res.status(500).json({ error: "Failed to upload CV" });
    }
  });

  app.post("/api/files/upload", async (req, res) => {
    try {
      // Mock generic file upload - replace with actual file handling
      const mockFileUrl = `/files/uploaded/file-${Date.now()}`;
      
      res.json({
        success: true,
        data: {
          id: Date.now(),
          fileName: 'mock-file',
          fileUrl: mockFileUrl,
          fileType: req.body.fileType || 'unknown',
          uploadDate: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      res.status(500).json({ error: "Failed to upload file" });
    }
  });

  app.get("/api/files/user/:userId", async (req, res) => {
    try {
      const userId = req.params.userId;
      
      // Mock user files - replace with actual database query
      const mockFiles = [
        {
          id: 1,
          fileName: 'resume.pdf',
          fileUrl: '/files/user/resume.pdf',
          fileType: 'cv',
          uploadDate: '2024-01-15T10:30:00Z'
        },
        {
          id: 2,
          fileName: 'profile-picture.jpg',
          fileUrl: '/images/user/profile.jpg',
          fileType: 'profile-image',
          uploadDate: '2024-01-10T14:20:00Z'
        }
      ];
      
      res.json({
        success: true,
        data: mockFiles
      });
    } catch (error) {
      console.error("Error getting user files:", error);
      res.status(500).json({ error: "Failed to get user files" });
    }
  });

  app.delete("/api/files/:fileId", async (req, res) => {
    try {
      const fileId = req.params.fileId;
      
      // Mock file deletion - replace with actual file handling
      console.log(`Deleting file with ID: ${fileId}`);
      
      res.json({
        success: true,
        data: {
          deleted: true
        }
      });
    } catch (error) {
      console.error("Error deleting file:", error);
      res.status(500).json({ error: "Failed to delete file" });
    }
  });

  // AI-powered CV generation routes
  app.post("/api/cv/generate-summary", async (req, res) => {
    try {
      const { name, skills, experience, education, language = 'English' } = req.body;
      
      if (!name || !skills || !experience || !education) {
        return res.status(400).json({ 
          message: "Missing required fields for generating a professional summary" 
        });
      }
      
      const summary = await generateProfessionalSummary({
        name,
        skills,
        experience,
        education,
        language
      });
      
      res.json({ summary });
    } catch (error) {
      console.error("Error generating professional summary:", error);
      res.status(500).json({ 
        message: "Failed to generate professional summary",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.post("/api/cv/generate-job-description", async (req, res) => {
    try {
      const { jobInfo, language = 'English' } = req.body;
      
      if (!jobInfo || !jobInfo.jobTitle || !jobInfo.employer) {
        return res.status(400).json({ 
          message: "Missing required job information" 
        });
      }
      
      const description = await generateJobDescription(jobInfo, language);
      
      res.json({ description });
    } catch (error) {
      console.error("Error generating job description:", error);
      res.status(500).json({ 
        message: "Failed to generate job description",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.post("/api/cv/translate", async (req, res) => {
    try {
      const { text, targetLanguage } = req.body;
      
      if (!text || !targetLanguage) {
        return res.status(400).json({ 
          message: "Missing text or target language" 
        });
      }
      
      const translatedText = await translateText(text, targetLanguage);
      
      res.json({ translatedText });
    } catch (error) {
      console.error("Error translating text:", error);
      res.status(500).json({ 
        message: "Failed to translate text",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  
  // Anthropic Claude-powered CV generation routes
  app.post("/api/cv/claude/generate-summary", async (req, res) => {
    try {
      if (!process.env.ANTHROPIC_API_KEY) {
        return res.status(500).json({ 
          message: "Anthropic API key is not configured"
        });
      }

      const { name, skills, experience, education, language = 'English' } = req.body;
      
      if (!name || !skills || !experience || !education) {
        return res.status(400).json({ 
          message: "Missing required fields for generating a professional summary" 
        });
      }
      
      const summary = await generateProfessionalSummaryWithClaude({
        name,
        skills,
        experience,
        education,
        language
      });
      
      res.json({ summary });
    } catch (error) {
      console.error("Error generating professional summary with Claude:", error);
      res.status(500).json({ 
        message: "Failed to generate professional summary with Claude",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.post("/api/cv/claude/generate-job-description", async (req, res) => {
    try {
      if (!process.env.ANTHROPIC_API_KEY) {
        return res.status(500).json({ 
          message: "Anthropic API key is not configured"
        });
      }

      const { jobInfo, language = 'English' } = req.body;
      
      if (!jobInfo || !jobInfo.jobTitle || !jobInfo.employer) {
        return res.status(400).json({ 
          message: "Missing required job information" 
        });
      }
      
      const description = await generateJobDescriptionWithClaude(jobInfo, language);
      
      res.json({ description });
    } catch (error) {
      console.error("Error generating job description with Claude:", error);
      res.status(500).json({ 
        message: "Failed to generate job description with Claude",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.post("/api/cv/claude/translate", async (req, res) => {
    try {
      if (!process.env.ANTHROPIC_API_KEY) {
        return res.status(500).json({ 
          message: "Anthropic API key is not configured"
        });
      }

      const { text, targetLanguage } = req.body;
      
      if (!text || !targetLanguage) {
        return res.status(400).json({ 
          message: "Missing text or target language" 
        });
      }
      
      const translatedText = await translateTextWithClaude(text, targetLanguage);
      
      res.json({ translatedText });
    } catch (error) {
      console.error("Error translating text with Claude:", error);
      res.status(500).json({ 
        message: "Failed to translate text with Claude",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  
  app.post("/api/cv/claude/analyze-image", async (req, res) => {
    try {
      if (!process.env.ANTHROPIC_API_KEY) {
        return res.status(500).json({ 
          message: "Anthropic API key is not configured"
        });
      }

      const { image } = req.body;
      
      if (!image) {
        return res.status(400).json({ 
          message: "Missing image data" 
        });
      }
      
      const analysis = await analyzeImage(image);
      
      res.json({ analysis });
    } catch (error) {
      console.error("Error analyzing image with Claude:", error);
      res.status(500).json({ 
        message: "Failed to analyze image with Claude",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  
  // Register job recommendation routes
  app.use('/api/recommendations', recommendationRoutes);
  
  const httpServer = createServer(app);
  return httpServer;
}
