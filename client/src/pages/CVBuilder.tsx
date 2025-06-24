import { useState, useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiRequest } from '@/lib/queryClient';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { TooltipHelper } from '@/components/ui/tooltip-helper';
import {
  AlertCircle,
  HelpCircle,
  Lightbulb,
  Sparkles,
  Info
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AiGenerationTips, SamplePrompts } from '@/components/AiHelpTips';

// Define CV form schema
const cvFormSchema = z.object({
  personalInfo: z.object({
    fullName: z.string().min(2, { message: 'Name must be at least 2 characters' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
    address: z.string().min(5, { message: 'Please enter your address' }),
  }),
  professionalSummary: z.string().min(50, { message: 'Please provide a summary of at least 50 characters' }),
  experience: z.array(
    z.object({
      jobTitle: z.string().min(2, { message: 'Job title is required' }),
      employer: z.string().min(2, { message: 'Employer name is required' }),
      location: z.string().optional(),
      startDate: z.string().min(1, { message: 'Start date is required' }),
      endDate: z.string().optional(),
      isCurrentJob: z.boolean().default(false),
      description: z.string().min(20, { message: 'Please provide job description of at least 20 characters' }),
    })
  ).min(1, { message: 'Add at least one work experience' }),
  education: z.array(
    z.object({
      degree: z.string().min(2, { message: 'Degree/Certificate name is required' }),
      school: z.string().min(2, { message: 'School name is required' }),
      location: z.string().optional(),
      graduationDate: z.string().min(1, { message: 'Graduation date is required' }),
    })
  ).min(1, { message: 'Add at least one education item' }),
  skills: z.array(
    z.string().min(1, { message: 'Skill cannot be empty' })
  ).min(1, { message: 'Add at least one skill' }),
  languages: z.array(
    z.object({
      language: z.string().min(1, { message: 'Language name is required' }),
      proficiency: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Fluent', 'Native']),
    })
  ).optional(),
  references: z.array(
    z.object({
      name: z.string().min(2, { message: 'Reference name is required' }),
      position: z.string().min(2, { message: 'Reference position is required' }),
      company: z.string().min(2, { message: 'Company name is required' }),
      email: z.string().email({ message: 'Please enter a valid email' }),
      phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
    })
  ).optional(),
});

type CVFormValues = z.infer<typeof cvFormSchema>;

export default function CVBuilder() {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('personalInfo');
  const [generatedCV, setGeneratedCV] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
  const [isGeneratingJobDescription, setIsGeneratingJobDescription] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  // Available languages for the CV
  const availableLanguages = [
    'English', 'Afrikaans', 'Zulu', 'Xhosa', 'Sotho',
    'Tswana', 'French', 'Portuguese', 'Spanish'
  ];

  // Set default empty values
  const defaultValues: CVFormValues = {
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
    },
    professionalSummary: '',
    experience: [
      {
        jobTitle: '',
        employer: '',
        location: '',
        startDate: '',
        endDate: '',
        isCurrentJob: false,
        description: '',
      },
    ],
    education: [
      {
        degree: '',
        school: '',
        location: '',
        graduationDate: '',
      },
    ],
    skills: [''],
    languages: [
      {
        language: '',
        proficiency: 'Intermediate',
      },
    ],
    references: [],
  };

  const form = useForm<CVFormValues>({
    resolver: zodResolver(cvFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  // Helper functions to add/remove array items
  const addExperience = () => {
    const currentExperience = form.getValues('experience');
    form.setValue('experience', [
      ...currentExperience,
      {
        jobTitle: '',
        employer: '',
        location: '',
        startDate: '',
        endDate: '',
        isCurrentJob: false,
        description: '',
      },
    ]);
  };

  const removeExperience = (index: number) => {
    const currentExperience = form.getValues('experience');
    if (currentExperience.length > 1) {
      form.setValue(
        'experience',
        currentExperience.filter((_, i) => i !== index)
      );
    } else {
      toast({
        title: 'Cannot remove',
        description: 'You need at least one work experience entry',
        variant: 'destructive',
      });
    }
  };

  const addEducation = () => {
    const currentEducation = form.getValues('education');
    form.setValue('education', [
      ...currentEducation,
      {
        degree: '',
        school: '',
        location: '',
        graduationDate: '',
      },
    ]);
  };

  const removeEducation = (index: number) => {
    const currentEducation = form.getValues('education');
    if (currentEducation.length > 1) {
      form.setValue(
        'education',
        currentEducation.filter((_, i) => i !== index)
      );
    } else {
      toast({
        title: 'Cannot remove',
        description: 'You need at least one education entry',
        variant: 'destructive',
      });
    }
  };

  const addSkill = () => {
    const currentSkills = form.getValues('skills');
    form.setValue('skills', [...currentSkills, '']);
  };

  const removeSkill = (index: number) => {
    const currentSkills = form.getValues('skills');
    if (currentSkills.length > 1) {
      form.setValue(
        'skills',
        currentSkills.filter((_, i) => i !== index)
      );
    } else {
      toast({
        title: 'Cannot remove',
        description: 'You need at least one skill',
        variant: 'destructive',
      });
    }
  };

  const addLanguage = () => {
    const currentLanguages = form.getValues('languages') || [];
    form.setValue('languages', [
      ...currentLanguages,
      {
        language: '',
        proficiency: 'Intermediate',
      },
    ]);
  };

  const removeLanguage = (index: number) => {
    const currentLanguages = form.getValues('languages') || [];
    form.setValue(
      'languages',
      currentLanguages.filter((_, i) => i !== index)
    );
  };

  const addReference = () => {
    const currentReferences = form.getValues('references') || [];
    form.setValue('references', [
      ...currentReferences,
      {
        name: '',
        position: '',
        company: '',
        email: '',
        phone: '',
      },
    ]);
  };

  const removeReference = (index: number) => {
    const currentReferences = form.getValues('references') || [];
    form.setValue(
      'references',
      currentReferences.filter((_, i) => i !== index)
    );
  };

  // AI features
  const generateSummaryWithAI = async () => {
    const personalInfo = form.getValues('personalInfo');
    const experience = form.getValues('experience');
    const education = form.getValues('education');
    const skills = form.getValues('skills');

    // Validate required fields
    if (!personalInfo.fullName) {
      toast({
        title: 'Missing information',
        description: 'Please enter your name in the Personal Information section.',
        variant: 'destructive',
      });
      return;
    }

    if (skills.length === 0 || !skills[0]) {
      toast({
        title: 'Missing information',
        description: 'Please add at least one skill in the Skills section.',
        variant: 'destructive',
      });
      return;
    }

    if (experience.length === 0 || !experience[0].jobTitle || !experience[0].employer) {
      toast({
        title: 'Missing information',
        description: 'Please add at least one work experience with job title and employer.',
        variant: 'destructive',
      });
      return;
    }

    if (education.length === 0 || !education[0].degree || !education[0].school) {
      toast({
        title: 'Missing information',
        description: 'Please add at least one education entry with degree and school.',
        variant: 'destructive',
      });
      return;
    }

    setIsGeneratingSummary(true);

    try {
      const response = await apiRequest(
        'POST',
        '/api/cv/generate-summary',
        {
          name: personalInfo.fullName,
          skills: skills.filter(skill => skill), // Filter out empty skills
          experience,
          education,
          language: selectedLanguage
        }
      );

      const data = await response.json();

      if (data.summary) {
        form.setValue('professionalSummary', data.summary);
        toast({
          title: 'Summary Generated!',
          description: `Professional summary generated in ${selectedLanguage}`,
        });
      }
    } catch (error) {
      console.error('Error generating summary:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate professional summary. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsGeneratingSummary(false);
    }
  };

  const generateJobDescriptionWithAI = async (index: number) => {
    const experience = form.getValues(`experience.${index}`);

    if (!experience.jobTitle || !experience.employer) {
      toast({
        title: 'Missing information',
        description: 'Please enter the job title and employer first.',
        variant: 'destructive',
      });
      return;
    }

    setIsGeneratingJobDescription(true);

    try {
      const response = await apiRequest(
        'POST',
        '/api/cv/generate-job-description',
        {
          jobInfo: experience,
          language: selectedLanguage
        }
      );

      const data = await response.json();

      if (data.description) {
        form.setValue(`experience.${index}.description`, data.description);
        toast({
          title: 'Description Generated!',
          description: `Job description generated in ${selectedLanguage}`,
        });
      }
    } catch (error) {
      console.error('Error generating job description:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate job description. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsGeneratingJobDescription(false);
    }
  };

  const translateCV = async () => {
    if (selectedLanguage === 'English') {
      toast({
        title: 'No translation needed',
        description: 'Your CV is already in English.',
      });
      return;
    }

    const formData = form.getValues();
    setIsTranslating(true);

    try {
      // Translate professional summary
      if (formData.professionalSummary) {
        const summaryResponse = await apiRequest(
          'POST',
          '/api/cv/translate',
          {
            text: formData.professionalSummary,
            targetLanguage: selectedLanguage
          }
        );
        const summaryData = await summaryResponse.json();
        if (summaryData.translatedText) {
          form.setValue('professionalSummary', summaryData.translatedText);
        }
      }

      // Translate job descriptions
      for (let i = 0; i < formData.experience.length; i++) {
        if (formData.experience[i].description) {
          const descResponse = await apiRequest(
            'POST',
            '/api/cv/translate',
            {
              text: formData.experience[i].description,
              targetLanguage: selectedLanguage
            }
          );
          const descData = await descResponse.json();
          if (descData.translatedText) {
            form.setValue(`experience.${i}.description`, descData.translatedText);
          }
        }
      }

      toast({
        title: 'Translation Complete',
        description: `Your CV has been translated to ${selectedLanguage}`,
      });
    } catch (error) {
      console.error('Error translating CV:', error);
      toast({
        title: 'Translation Error',
        description: 'Failed to translate CV. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsTranslating(false);
    }
  };

  // Form submission handler
  const onSubmit = async (data: CVFormValues) => {
    try {
      // Call the CV template generation endpoint
      const response = await fetch('/api/cv/generate-template', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to generate CV');
      }

      // Get the PDF blob
      const pdfBlob = await response.blob();
      
      // Create a URL for the blob
      const url = URL.createObjectURL(pdfBlob);

      // Create a link to download the PDF
      const a = document.createElement('a');
      a.href = url;
      a.download = `${data.personalInfo.fullName.replace(/\s+/g, '_')}_CV.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: 'CV Generated Successfully',
        description: 'Your CV has been generated and downloaded.',
      });
    } catch (error) {
      console.error('Error generating CV:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate CV. Please try again.',
        variant: 'destructive',
      });
    }
  };

  // Function to generate HTML for CV
  const generateCVHTML = (data: CVFormValues): string => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CV - ${data.personalInfo.fullName}</title>
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }
        body {
          background-color: #f9f9f9;
          color: #333;
          line-height: 1.6;
        }
        .cv-container {
          max-width: 210mm;
          margin: 0 auto;
          padding: 20px;
          background-color: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
          border-bottom: 2px solid #63B3ED;
          padding-bottom: 10px;
        }
        .header h1 {
          color: #333;
          font-size: 28px;
          margin-bottom: 5px;
        }
        .contact-info {
          color: #555;
          font-size: 14px;
        }
        .section {
          margin-bottom: 20px;
        }
        .section-title {
          color: #63B3ED;
          font-size: 18px;
          font-weight: bold;
          border-bottom: 1px solid #ddd;
          padding-bottom: 5px;
          margin-bottom: 10px;
        }
        .item {
          margin-bottom: 15px;
        }
        .item-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
        }
        .item-title {
          font-weight: bold;
          font-size: 16px;
        }
        .item-subtitle {
          font-style: italic;
          color: #555;
        }
        .item-date {
          color: #777;
        }
        .item-description {
          font-size: 14px;
          color: #444;
        }
        .skills-list, .languages-list {
          display: flex;
          flex-wrap: wrap;
          list-style-type: none;
        }
        .skills-list li {
          background-color: #f1f8ff;
          border: 1px solid #d1e5f9;
          padding: 5px 10px;
          margin: 0 5px 5px 0;
          border-radius: 3px;
          font-size: 14px;
        }
        .languages-list li {
          padding: 0 10px 0 0;
          margin-right: 10px;
          font-size: 14px;
          position: relative;
        }
        .languages-list li:not(:last-child):after {
          content: "•";
          position: absolute;
          right: 0;
        }
        .reference {
          margin-bottom: 10px;
        }
        @media print {
          body {
            background-color: white;
          }
          .cv-container {
            box-shadow: none;
            padding: 0;
          }
          .no-print {
            display: none;
          }
        }
      </style>
    </head>
    <body>
      <div class="cv-container">
        <div class="header">
          <h1>${data.personalInfo.fullName}</h1>
          <div class="contact-info">
            ${data.personalInfo.email} | ${data.personalInfo.phone} | ${data.personalInfo.address}
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">Professional Summary</h2>
          <p>${data.professionalSummary}</p>
        </div>

        <div class="section">
          <h2 class="section-title">Work Experience</h2>
          ${data.experience.map(exp => `
            <div class="item">
              <div class="item-header">
                <div>
                  <div class="item-title">${exp.jobTitle}</div>
                  <div class="item-subtitle">${exp.employer}${exp.location ? `, ${exp.location}` : ''}</div>
                </div>
                <div class="item-date">${exp.startDate} - ${exp.isCurrentJob ? 'Present' : exp.endDate}</div>
              </div>
              <div class="item-description">${exp.description}</div>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <h2 class="section-title">Education</h2>
          ${data.education.map(edu => `
            <div class="item">
              <div class="item-header">
                <div>
                  <div class="item-title">${edu.degree}</div>
                  <div class="item-subtitle">${edu.school}${edu.location ? `, ${edu.location}` : ''}</div>
                </div>
                <div class="item-date">${edu.graduationDate}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <h2 class="section-title">Skills</h2>
          <ul class="skills-list">
            ${data.skills.map(skill => `
              <li>${skill}</li>
            `).join('')}
          </ul>
        </div>

        ${data.languages && data.languages.length > 0 ? `
          <div class="section">
            <h2 class="section-title">Languages</h2>
            <ul class="languages-list">
              ${data.languages.map(lang => `
                <li>${lang.language} - ${lang.proficiency}</li>
              `).join('')}
            </ul>
          </div>
        ` : ''}

        ${data.references && data.references.length > 0 ? `
          <div class="section">
            <h2 class="section-title">References</h2>
            ${data.references.map(ref => `
              <div class="reference">
                <div class="item-title">${ref.name}</div>
                <div class="item-subtitle">${ref.position}, ${ref.company}</div>
                <div class="contact-info">${ref.email} | ${ref.phone}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </body>
    </html>
    `;
  };

  const printCV = () => {
    if (generatedCV) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(generatedCV);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
          printWindow.print();
        }, 500);
      }
    }
  };

  const downloadCV = () => {
    if (generatedCV) {
      const blob = new Blob([generatedCV], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${form.getValues('personalInfo.fullName').replace(/\s+/g, '_')}_CV.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const renderForm = () => {
    switch (activeSection) {
      case 'personalInfo':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Personal Information</h3>
            <FormField
              control={form.control}
              name="personalInfo.fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="personalInfo.email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="personalInfo.phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+27 12 345 6789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="personalInfo.address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Johannesburg, South Africa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );

      case 'summary':
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Professional Summary</h3>
              <div className="flex items-center space-x-2">
                <Select
                  value={selectedLanguage}
                  onValueChange={setSelectedLanguage}
                >
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableLanguages.map(lang => (
                      <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  type="button"
                  onClick={generateSummaryWithAI}
                  disabled={isGeneratingSummary}
                  variant="default"
                  size="sm"
                >
                  {isGeneratingSummary ? 'Generating...' : 'Generate with AI'}
                </Button>
                <Button
                  type="button"
                  onClick={translateCV}
                  disabled={isTranslating || selectedLanguage === 'English'}
                  variant="outline"
                  size="sm"
                >
                  {isTranslating ? 'Translating...' : 'Translate CV'}
                </Button>
              </div>
            </div>
            <FormField
              control={form.control}
              name="professionalSummary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Summary</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Reliable and dedicated professional with over 5 years of experience..."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="bg-blue-50 p-3 border border-blue-100 rounded-md">
              <p className="text-sm text-blue-700">
                <strong>AI Assistant:</strong> Fill out the personal information, skills, experience, and education sections first, then use the "Generate with AI" button to create a professional summary in your preferred language.
              </p>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Work Experience</h3>
              <Button type="button" onClick={addExperience} variant="outline" size="sm">
                Add Experience
              </Button>
            </div>

            {form.getValues('experience').map((_, index) => (
              <Card key={index} className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-medium">Experience #{index + 1}</h4>
                  {index > 0 && (
                    <Button
                      type="button"
                      onClick={() => removeExperience(index)}
                      variant="destructive"
                      size="sm"
                    >
                      Remove
                    </Button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name={`experience.${index}.jobTitle`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Cashier" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`experience.${index}.employer`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employer</FormLabel>
                        <FormControl>
                          <Input placeholder="Pick n Pay" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`experience.${index}.location`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Cape Town, South Africa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center gap-4">
                    <FormField
                      control={form.control}
                      name={`experience.${index}.startDate`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Start Date</FormLabel>
                          <FormControl>
                            <Input placeholder="Jan 2020" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`experience.${index}.isCurrentJob`}
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2 pt-6">
                          <FormControl>
                            <input
                              type="checkbox"
                              className="form-checkbox h-4 w-4 text-primary rounded border-gray-300"
                              checked={field.value}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="m-0">Current Job</FormLabel>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {!form.getValues(`experience.${index}.isCurrentJob`) && (
                    <FormField
                      control={form.control}
                      name={`experience.${index}.endDate`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>End Date</FormLabel>
                          <FormControl>
                            <Input placeholder="Dec 2022" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>

                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <FormLabel>Job Description</FormLabel>
                    <Button
                      type="button"
                      onClick={() => generateJobDescriptionWithAI(index)}
                      disabled={isGeneratingJobDescription}
                      variant="outline"
                      size="sm"
                    >
                      {isGeneratingJobDescription ? 'Generating...' : 'Generate with AI'}
                    </Button>
                  </div>
                  <FormField
                    control={form.control}
                    name={`experience.${index}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Managed cash register operations and served customers efficiently..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="bg-blue-50 p-2 border border-blue-100 rounded-md mt-2">
                    <p className="text-xs text-blue-700">
                      <strong>Tip:</strong> Enter job title and company first, then click "Generate with AI" to create a professional job description.
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        );

      case 'education':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Education</h3>
              <Button type="button" onClick={addEducation} variant="outline" size="sm">
                Add Education
              </Button>
            </div>

            {form.getValues('education').map((_, index) => (
              <Card key={index} className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-medium">Education #{index + 1}</h4>
                  {index > 0 && (
                    <Button
                      type="button"
                      onClick={() => removeEducation(index)}
                      variant="destructive"
                      size="sm"
                    >
                      Remove
                    </Button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name={`education.${index}.degree`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Degree/Certificate</FormLabel>
                        <FormControl>
                          <Input placeholder="High School Diploma" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`education.${index}.school`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>School</FormLabel>
                        <FormControl>
                          <Input placeholder="Johannesburg Secondary School" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`education.${index}.location`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Johannesburg, South Africa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`education.${index}.graduationDate`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Graduation Date</FormLabel>
                        <FormControl>
                          <Input placeholder="2018" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </Card>
            ))}
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Skills</h3>
              <Button type="button" onClick={addSkill} variant="outline" size="sm">
                Add Skill
              </Button>
            </div>

            {form.getValues('skills').map((_, index) => (
              <div key={index} className="flex items-center gap-2">
                <FormField
                  control={form.control}
                  name={`skills.${index}`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input placeholder="Customer Service" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {index > 0 && (
                  <Button
                    type="button"
                    onClick={() => removeSkill(index)}
                    variant="destructive"
                    size="sm"
                  >
                    Remove
                  </Button>
                )}
              </div>
            ))}
          </div>
        );

      case 'languages':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Languages (Optional)</h3>
              <Button type="button" onClick={addLanguage} variant="outline" size="sm">
                Add Language
              </Button>
            </div>

            {(form.getValues('languages') || []).map((_, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-end gap-4">
                <FormField
                  control={form.control}
                  name={`languages.${index}.language`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Language</FormLabel>
                      <FormControl>
                        <Input placeholder="English" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`languages.${index}.proficiency`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Proficiency</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select proficiency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Advanced">Advanced</SelectItem>
                            <SelectItem value="Fluent">Fluent</SelectItem>
                            <SelectItem value="Native">Native</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="button"
                  onClick={() => removeLanguage(index)}
                  variant="destructive"
                  size="sm"
                  className="mb-1"
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        );

      case 'references':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">References (Optional)</h3>
              <Button type="button" onClick={addReference} variant="outline" size="sm">
                Add Reference
              </Button>
            </div>

            {(form.getValues('references') || []).map((_, index) => (
              <Card key={index} className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-medium">Reference #{index + 1}</h4>
                  <Button
                    type="button"
                    onClick={() => removeReference(index)}
                    variant="destructive"
                    size="sm"
                  >
                    Remove
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name={`references.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Smith" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`references.${index}.position`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position</FormLabel>
                        <FormControl>
                          <Input placeholder="Store Manager" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`references.${index}.company`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Pick n Pay" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`references.${index}.email`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jane.smith@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`references.${index}.phone`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+27 12 345 6789" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </Card>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Floating Help Button with Tooltip */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <Button
          onClick={() => window.open('/resources/cv-builder-help', '_blank')}
          className="rounded-full w-12 h-12 bg-blue-600 shadow-lg flex items-center justify-center hover:bg-blue-700"
          aria-label="Get CV Builder Help"
        >
          <HelpCircle className="h-6 w-6 text-white" />
        </Button>
        <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Need help? Click for CV Builder Guide
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">CV Builder</h1>
          <p className="text-gray-600">Create a professional CV to help you land your dream job</p>
        </div>

        {generatedCV ? (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Your CV has been generated!</h2>
            <p className="text-gray-600 mb-6">You can now print or download your CV.</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={printCV} className="flex-1">
                Print CV
              </Button>
              <Button onClick={downloadCV} variant="outline" className="flex-1">
                Download CV
              </Button>
              <Button
                onClick={() => setGeneratedCV(null)}
                variant="secondary"
                className="flex-1"
              >
                Edit CV
              </Button>
            </div>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-4 gap-6">
                {/* Sidebar navigation */}
                <div className="md:col-span-1">
                  <div className="bg-white shadow-md rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Sparkles className="text-blue-500 h-5 w-5 mr-2" />
                      <h3 className="font-medium">AI-Powered CV Builder</h3>
                    </div>
                    <nav className="space-y-1">
                      <Button
                        type="button"
                        variant={activeSection === 'personalInfo' ? 'default' : 'ghost'}
                        className="w-full justify-start"
                        onClick={() => setActiveSection('personalInfo')}
                      >
                        Personal Info
                      </Button>
                      <Button
                        type="button"
                        variant={activeSection === 'summary' ? 'default' : 'ghost'}
                        className="w-full justify-start"
                        onClick={() => setActiveSection('summary')}
                      >
                        Professional Summary
                      </Button>
                      <Button
                        type="button"
                        variant={activeSection === 'experience' ? 'default' : 'ghost'}
                        className="w-full justify-start"
                        onClick={() => setActiveSection('experience')}
                      >
                        Work Experience
                      </Button>
                      <Button
                        type="button"
                        variant={activeSection === 'education' ? 'default' : 'ghost'}
                        className="w-full justify-start"
                        onClick={() => setActiveSection('education')}
                      >
                        Education
                      </Button>
                      <Button
                        type="button"
                        variant={activeSection === 'skills' ? 'default' : 'ghost'}
                        className="w-full justify-start"
                        onClick={() => setActiveSection('skills')}
                      >
                        Skills
                      </Button>
                      <Button
                        type="button"
                        variant={activeSection === 'languages' ? 'default' : 'ghost'}
                        className="w-full justify-start"
                        onClick={() => setActiveSection('languages')}
                      >
                        Languages
                      </Button>
                      <Button
                        type="button"
                        variant={activeSection === 'references' ? 'default' : 'ghost'}
                        className="w-full justify-start"
                        onClick={() => setActiveSection('references')}
                      >
                        References
                      </Button>
                      <Separator className="my-2" />
                      <Button type="submit" className="w-full">
                        Generate CV
                      </Button>
                      <Separator className="my-2" />
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 text-blue-600 border-blue-300 hover:bg-blue-50"
                        onClick={() => window.open('/resources/cv-builder-help', '_blank')}
                      >
                        <HelpCircle className="h-4 w-4" />
                        CV Builder Help
                      </Button>
                    </nav>
                  </div>
                </div>

                {/* Main content */}
                <div className="md:col-span-3">
                  <div className="bg-white shadow-md rounded-lg p-6">
                    {renderForm()}
                  </div>

                  {/* AI Tips moved below the CV builder */}
                  <div className="mt-6">
                    <AiGenerationTips />
                    <SamplePrompts />
                  </div>
                </div>
              </div>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}