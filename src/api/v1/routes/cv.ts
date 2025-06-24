// src/api/v1/routes/cv.ts
import { Router } from 'express';
import { 
  generateProfessionalSummary, 
  generateJobDescription, 
  translateText 
} from '../../../../server/ai';
import { 
  generateProfessionalSummaryWithClaude, 
  generateJobDescriptionWithClaude, 
  translateTextWithClaude,
  analyzeImage
} from '../../../../server/anthropic';
import { generateCVPDF } from '../../../../server/services/cvTemplateService';

export function registerCVRoutes(router: Router) {
  // AI-powered CV generation routes
  router.post("/cv/generate-summary", async (req, res) => {
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

  router.post("/cv/generate-job-description", async (req, res) => {
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

  router.post("/cv/translate", async (req, res) => {
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
  router.post("/cv/claude/generate-summary", async (req, res) => {
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

  router.post("/cv/claude/generate-job-description", async (req, res) => {
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

  router.post("/cv/claude/translate", async (req, res) => {
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
  
  router.post("/cv/claude/analyze-image", async (req, res) => {
    try {
      if (!process.env.ANTHROPIC_API_KEY) {
        return res.status(500).json({ 
          message: "Anthropic API key is not configured"
        });
      }

      const { imageUrl } = req.body;
      
      if (!imageUrl) {
        return res.status(400).json({ 
          message: "Missing image URL" 
        });
      }
      
      const analysis = await analyzeImage(imageUrl);
      
      res.json({ analysis });
    } catch (error) {
      console.error("Error analyzing image with Claude:", error);
      res.status(500).json({ 
        message: "Failed to analyze image with Claude",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  
  // CV Template generation route
  router.post("/cv/generate-template", async (req, res) => {
    try {
      const cvData = req.body;
      
      // Validate required fields
      const { personalInfo, professionalSummary, experience, education, skills } = cvData;
      if (!personalInfo?.fullName || !professionalSummary || !experience?.length || !education?.length || !skills?.length) {
        return res.status(400).json({ 
          message: "Missing required CV information" 
        });
      }
      
      const pdfBuffer = await generateCVPDF(cvData);
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="cv-${personalInfo.fullName.replace(/\s+/g, '_')}.pdf"`);
      res.send(pdfBuffer);
    } catch (error) {
      console.error("Error generating CV template:", error);
      res.status(500).json({ 
        message: "Failed to generate CV template",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
}
