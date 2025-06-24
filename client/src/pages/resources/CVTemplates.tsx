import React, { useState, useRef, lazy, Suspense } from 'react';
import { useForm, Controller } from 'react-hook-form';
import CustomHelmet from '@/components/CustomHelmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

// Lazy load services for code splitting
const loadCVService = () => import('@/services/cvService');
const loadVertexService = () => import('@/services/vertexService');

// Lazy load payment modal
const PaymentModal = lazy(() => import('@/components/PaymentModal'));

type FormData = {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    aboutMe: string;
    dateOfBirth: string;
    maritalStatus: string;
    nationality: string;
    gender: string;
  };
  education: Array<{
    institution: string;
    qualification: string;
    year: string;
  }>;
  experience: Array<{
    position: string;
    company: string;
    duration: string;
  }>;
  skills: string[];
  references: Array<{
    name: string;
    position: string;
    contact: string;
  }>;
};

const CVTemplates: React.FC = () => {
  const { toast } = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      personalInfo: {
        fullName: '',
        email: '',
        phone: '',
        address: '',
        aboutMe: '',
        dateOfBirth: '',
        maritalStatus: '',
        nationality: '',
        gender: '',
      },
      education: [{ institution: '', qualification: '', year: '' }],
      experience: [{ position: '', company: '', duration: '' }],
      skills: [''],
      references: [{ name: '', position: '', contact: '' }],
    },
  });

  const [activeTab, setActiveTab] = useState('personalInfo');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessingImage, setIsProcessingImage] = useState(false);
  const [generatedCVUrl, setGeneratedCVUrl] = useState<string | null>(null);
  const [isGeneratingCV, setIsGeneratingCV] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = async () => {
    if (!profileImage) {
      toast({
        title: "No image selected",
        description: "Please upload an image first.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessingImage(true);
    try {
      // Dynamically load and use Vertex AI service
      const { processImageWithVertexAI } = await loadVertexService();
      const result = await processImageWithVertexAI(profileImage);
      setProcessedImage(result.processedImageUrl);
      toast({
        title: "Image processed successfully",
        description: "Your profile photo has been enhanced.",
      });
    } catch (error) {
      toast({
        title: "Processing failed",
        description: "Failed to process the image. Please try again.",
        variant: "destructive",
      });
      console.error("Image processing error:", error);
    } finally {
      setIsProcessingImage(false);
    }
  };

  const addEducationField = () => {
    const currentEducation = watch('education');
    setValue('education', [...currentEducation, { institution: '', qualification: '', year: '' }]);
  };

  const addExperienceField = () => {
    const currentExperience = watch('experience');
    setValue('experience', [...currentExperience, { position: '', company: '', duration: '' }]);
  };

  const addSkillField = () => {
    const currentSkills = watch('skills');
    setValue('skills', [...currentSkills, '']);
  };

  const addReferenceField = () => {
    const currentReferences = watch('references');
    setValue('references', [...currentReferences, { name: '', position: '', contact: '' }]);
  };

  const handleGenerateCV = async (data: FormData) => {
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = async () => {
    const data = watch();
    setIsGeneratingCV(true);
    try {
      // Dynamically load and use CV service
      const { generateCV } = await loadCVService();
      
      // Generate the CV with form data and processed image
      const cvData = await generateCV({
        ...data,
        profileImage: processedImage || profileImage,
      });
      
      setGeneratedCVUrl(cvData.downloadUrl);
      toast({
        title: "CV Generated Successfully",
        description: "Your CV is ready to download.",
      });
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Failed to generate CV. Please try again.",
        variant: "destructive",
      });
      console.error("CV generation error:", error);
    } finally {
      setIsGeneratingCV(false);
      setShowPaymentModal(false);
    }
  };

  return (
    <>
      <CustomHelmet
        title="Professional CV Templates - WorkWise SA"
        description="Create professional CVs with our AI-powered CV template generator. Perfect for South African job seekers."
      />

      <main className="flex-grow">
        <div className="container mx-auto p-4 max-w-6xl">
          <h1 className="text-3xl font-bold mb-6 text-center">Professional CV Builder</h1>
          
          {!generatedCVUrl ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <div>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-5 mb-6">
                    <TabsTrigger value="personalInfo">Personal</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="references">References</TabsTrigger>
                  </TabsList>

                  <form onSubmit={handleSubmit(handleGenerateCV)}>
                    <TabsContent value="personalInfo">
                      <Card className="p-6">
                        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                        
                        <div className="mb-6">
                          <label className="block mb-1">Profile Photo</label>
                          <div className="flex items-center gap-4">
                            <div 
                              className="w-32 h-32 bg-gray-100 flex items-center justify-center cursor-pointer border rounded-md overflow-hidden"
                              onClick={() => fileInputRef.current?.click()}
                            >
                              {(processedImage || profileImage) ? (
                                <img 
                                  src={processedImage || profileImage || ''} 
                                  alt="Profile" 
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <span className="text-gray-400">Upload Photo</span>
                              )}
                            </div>
                            <input 
                              type="file" 
                              ref={fileInputRef}
                              accept="image/*" 
                              onChange={handleFileChange} 
                              className="hidden" 
                            />
                            <div className="flex flex-col gap-2">
                              <Button 
                                type="button" 
                                onClick={() => fileInputRef.current?.click()}
                                variant="outline"
                              >
                                Select Image
                              </Button>
                              <Button 
                                type="button" 
                                onClick={processImage} 
                                disabled={!profileImage || isProcessingImage}
                                variant="secondary"
                              >
                                {isProcessingImage ? (
                                  <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Processing...
                                  </>
                                ) : (
                                  "Enhance Image"
                                )}
                              </Button>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mt-2">
                            Your image will be automatically processed to remove the background and enhance quality.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block mb-1">Full Name</label>
                            <Controller
                              name="personalInfo.fullName"
                              control={control}
                              rules={{ required: "Name is required" }}
                              render={({ field }) => (
                                <Input {...field} placeholder="John Doe" />
                              )}
                            />
                            {errors.personalInfo?.fullName && (
                              <p className="text-red-500 text-sm mt-1">{errors.personalInfo.fullName.message}</p>
                            )}
                          </div>

                          <div>
                            <label className="block mb-1">Email</label>
                            <Controller
                              name="personalInfo.email"
                              control={control}
                              rules={{ 
                                required: "Email is required",
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Invalid email address"
                                }
                              }}
                              render={({ field }) => (
                                <Input {...field} placeholder="john.doe@example.com" />
                              )}
                            />
                            {errors.personalInfo?.email && (
                              <p className="text-red-500 text-sm mt-1">{errors.personalInfo.email.message}</p>
                            )}
                          </div>

                          <div>
                            <label className="block mb-1">Phone</label>
                            <Controller
                              name="personalInfo.phone"
                              control={control}
                              rules={{ required: "Phone number is required" }}
                              render={({ field }) => (
                                <Input {...field} placeholder="081 234 5678" />
                              )}
                            />
                            {errors.personalInfo?.phone && (
                              <p className="text-red-500 text-sm mt-1">{errors.personalInfo.phone.message}</p>
                            )}
                          </div>

                          <div>
                            <label className="block mb-1">Address</label>
                            <Controller
                              name="personalInfo.address"
                              control={control}
                              render={({ field }) => (
                                <Input {...field} placeholder="123 Main St, Johannesburg" />
                              )}
                            />
                          </div>

                          <div className="md:col-span-2">
                            <label className="block mb-1">About Me</label>
                            <Controller
                              name="personalInfo.aboutMe"
                              control={control}
                              render={({ field }) => (
                                <Textarea 
                                  {...field} 
                                  placeholder="Write a short professional summary about yourself..."
                                  rows={4}
                                />
                              )}
                            />
                          </div>

                          <div>
                            <label className="block mb-1">Date of Birth</label>
                            <Controller
                              name="personalInfo.dateOfBirth"
                              control={control}
                              render={({ field }) => (
                                <Input {...field} placeholder="25/09/2001" />
                              )}
                            />
                          </div>

                          <div>
                            <label className="block mb-1">Marital Status</label>
                            <Controller
                              name="personalInfo.maritalStatus"
                              control={control}
                              render={({ field }) => (
                                <Input {...field} placeholder="Single" />
                              )}
                            />
                          </div>

                          <div>
                            <label className="block mb-1">Nationality</label>
                            <Controller
                              name="personalInfo.nationality"
                              control={control}
                              render={({ field }) => (
                                <Input {...field} placeholder="South African" />
                              )}
                            />
                          </div>

                          <div>
                            <label className="block mb-1">Gender</label>
                            <Controller
                              name="personalInfo.gender"
                              control={control}
                              render={({ field }) => (
                                <Input {...field} placeholder="Male" />
                              )}
                            />
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <Button 
                            type="button" 
                            onClick={() => setActiveTab("education")}
                          >
                            Next: Education
                          </Button>
                        </div>
                      </Card>
                    </TabsContent>

                    {/* Education Tab - Continue with similar pattern... */}
                    <TabsContent value="education">
                      <Card className="p-6">
                        <h2 className="text-xl font-semibold mb-4">Education</h2>
                        
                        {watch('education').map((_, index) => (
                          <div key={`education-${index}`} className="mb-6 p-4 border rounded-md">
                            <h3 className="font-medium mb-3">Education {index + 1}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <label className="block mb-1">Institution</label>
                                <Controller
                                  name={`education.${index}.institution`}
                                  control={control}
                                  render={({ field }) => (
                                    <Input {...field} placeholder="University/School Name" />
                                  )}
                                />
                              </div>

                              <div>
                                <label className="block mb-1">Qualification</label>
                                <Controller
                                  name={`education.${index}.qualification`}
                                  control={control}
                                  render={({ field }) => (
                                    <Input {...field} placeholder="Bachelor of Education" />
                                  )}
                                />
                              </div>

                              <div>
                                <label className="block mb-1">Year</label>
                                <Controller
                                  name={`education.${index}.year`}
                                  control={control}
                                  render={({ field }) => (
                                    <Input {...field} placeholder="2020-2024" />
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                        ))}

                        <Button 
                          type="button" 
                          onClick={addEducationField}
                          variant="outline"
                          className="mb-6"
                        >
                          + Add Another Education Entry
                        </Button>

                        <div className="flex justify-between">
                          <Button 
                            type="button" 
                            onClick={() => setActiveTab("personalInfo")}
                            variant="outline"
                          >
                            Back
                          </Button>
                          <Button 
                            type="button" 
                            onClick={() => setActiveTab("experience")}
                          >
                            Next: Experience
                          </Button>
                        </div>
                      </Card>
                    </TabsContent>

                    {/* Experience Tab */}
                    <TabsContent value="experience">
                      <Card className="p-6">
                        <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
                        
                        {watch('experience').map((_, index) => (
                          <div key={`experience-${index}`} className="mb-6 p-4 border rounded-md">
                            <h3 className="font-medium mb-3">Experience {index + 1}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <label className="block mb-1">Position</label>
                                <Controller
                                  name={`experience.${index}.position`}
                                  control={control}
                                  render={({ field }) => (
                                    <Input {...field} placeholder="Teacher" />
                                  )}
                                />
                              </div>

                              <div>
                                <label className="block mb-1">Company/School</label>
                                <Controller
                                  name={`experience.${index}.company`}
                                  control={control}
                                  render={({ field }) => (
                                    <Input {...field} placeholder="Walmer High School" />
                                  )}
                                />
                              </div>

                              <div>
                                <label className="block mb-1">Duration</label>
                                <Controller
                                  name={`experience.${index}.duration`}
                                  control={control}
                                  render={({ field }) => (
                                    <Input {...field} placeholder="01/03/2024-18/10/2024" />
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                        ))}

                        <Button 
                          type="button" 
                          onClick={addExperienceField}
                          variant="outline"
                          className="mb-6"
                        >
                          + Add Another Experience Entry
                        </Button>

                        <div className="flex justify-between">
                          <Button 
                            type="button" 
                            onClick={() => setActiveTab("education")}
                            variant="outline"
                          >
                            Back
                          </Button>
                          <Button 
                            type="button" 
                            onClick={() => setActiveTab("skills")}
                          >
                            Next: Skills
                          </Button>
                        </div>
                      </Card>
                    </TabsContent>

                    {/* Skills Tab */}
                    <TabsContent value="skills">
                      <Card className="p-6">
                        <h2 className="text-xl font-semibold mb-4">Skills</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          {watch('skills').map((_, index) => (
                            <div key={`skill-${index}`}>
                              <label className="block mb-1">Skill {index + 1}</label>
                              <Controller
                                name={`skills.${index}`}
                                control={control}
                                render={({ field }) => (
                                  <Input {...field} placeholder="Problem solving" />
                                )}
                              />
                            </div>
                          ))}
                        </div>

                        <Button 
                          type="button" 
                          onClick={addSkillField}
                          variant="outline"
                          className="mb-6"
                        >
                          + Add Another Skill
                        </Button>

                        <div className="flex justify-between">
                          <Button 
                            type="button" 
                            onClick={() => setActiveTab("experience")}
                            variant="outline"
                          >
                            Back
                          </Button>
                          <Button 
                            type="button" 
                            onClick={() => setActiveTab("references")}
                          >
                            Next: References
                          </Button>
                        </div>
                      </Card>
                    </TabsContent>

                    {/* References Tab */}
                    <TabsContent value="references">
                      <Card className="p-6">
                        <h2 className="text-xl font-semibold mb-4">References</h2>
                        
                        {watch('references').map((_, index) => (
                          <div key={`reference-${index}`} className="mb-6 p-4 border rounded-md">
                            <h3 className="font-medium mb-3">Reference {index + 1}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <label className="block mb-1">Name</label>
                                <Controller
                                  name={`references.${index}.name`}
                                  control={control}
                                  render={({ field }) => (
                                    <Input {...field} placeholder="Mr. N. Nogomba" />
                                  )}
                                />
                              </div>

                              <div>
                                <label className="block mb-1">Position/Organization</label>
                                <Controller
                                  name={`references.${index}.position`}
                                  control={control}
                                  render={({ field }) => (
                                    <Input {...field} placeholder="Mzilikayise Dalasile S.S.S" />
                                  )}
                                />
                              </div>

                              <div>
                                <label className="block mb-1">Contact</label>
                                <Controller
                                  name={`references.${index}.contact`}
                                  control={control}
                                  render={({ field }) => (
                                    <Input {...field} placeholder="076 516 4215" />
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                        ))}

                        <Button 
                          type="button" 
                          onClick={addReferenceField}
                          variant="outline"
                          className="mb-6"
                        >
                          + Add Another Reference
                        </Button>

                        <div className="flex justify-between">
                          <Button 
                            type="button" 
                            onClick={() => setActiveTab("skills")}
                            variant="outline"
                          >
                            Back
                          </Button>
                          <Button 
                            type="submit"
                            disabled={isGeneratingCV}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            {isGeneratingCV ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Generating...
                              </>
                            ) : (
                              "Generate CV (R30)"
                            )}
                          </Button>
                        </div>
                      </Card>
                    </TabsContent>
                  </form>
                </Tabs>
              </div>

              {/* Preview Section */}
              <div className="hidden lg:block">
                <div className="sticky top-8">
                  <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
                  <div className="bg-white border rounded-lg shadow-lg p-6 aspect-[3/4] overflow-hidden">
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="bg-blue-600 text-white p-4 flex gap-4 items-center">
                        {(processedImage || profileImage) ? (
                          <div className="w-20 h-20 rounded-full overflow-hidden bg-white flex-shrink-0">
                            <img 
                              src={processedImage || profileImage || ''} 
                              alt="Profile" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0"></div>
                        )}
                        <div>
                          <h1 className="text-xl font-bold">
                            {watch('personalInfo.fullName') || 'Your Name'}
                          </h1>
                          <div className="text-sm opacity-90">
                            {watch('personalInfo.email') && <div>{watch('personalInfo.email')}</div>}
                            {watch('personalInfo.phone') && <div>{watch('personalInfo.phone')}</div>}
                            {watch('personalInfo.address') && <div>{watch('personalInfo.address')}</div>}
                          </div>
                        </div>
                      </div>

                      {/* Content Preview */}
                      <div className="flex flex-1 overflow-hidden text-xs">
                        {/* Left column */}
                        <div className="w-1/3 bg-gray-100 p-3 flex flex-col gap-3">
                          <div>
                            <h2 className="font-bold text-blue-600 mb-1">PERSONAL DETAILS</h2>
                            <div className="space-y-1">
                              {watch('personalInfo.dateOfBirth') && <div><span className="font-medium">Date of Birth:</span> {watch('personalInfo.dateOfBirth')}</div>}
                              {watch('personalInfo.maritalStatus') && <div><span className="font-medium">Marital Status:</span> {watch('personalInfo.maritalStatus')}</div>}
                              {watch('personalInfo.nationality') && <div><span className="font-medium">Nationality:</span> {watch('personalInfo.nationality')}</div>}
                              {watch('personalInfo.gender') && <div><span className="font-medium">Gender:</span> {watch('personalInfo.gender')}</div>}
                            </div>
                          </div>

                          <div>
                            <h2 className="font-bold text-blue-600 mb-1">SKILLS</h2>
                            <ul className="list-disc list-inside space-y-1">
                              {watch('skills').map((skill, index) => (
                                skill ? <li key={index}>{skill}</li> : null
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right column */}
                        <div className="w-2/3 p-3 flex flex-col gap-3">
                          {watch('personalInfo.aboutMe') && (
                            <div>
                              <h2 className="font-bold text-blue-600 mb-1">ABOUT ME</h2>
                              <p className="text-gray-700">{watch('personalInfo.aboutMe')}</p>
                            </div>
                          )}

                          <div>
                            <h2 className="font-bold text-blue-600 mb-1">EDUCATION</h2>
                            <div className="space-y-2">
                              {watch('education').map((edu, index) => (
                                edu.institution || edu.qualification ? (
                                  <div key={index} className="border-l-2 border-blue-600 pl-2">
                                    {edu.institution && <div className="font-medium">{edu.institution}</div>}
                                    {edu.qualification && <div>{edu.qualification}</div>}
                                    {edu.year && <div className="text-gray-500">{edu.year}</div>}
                                  </div>
                                ) : null
                              ))}
                            </div>
                          </div>

                          <div>
                            <h2 className="font-bold text-blue-600 mb-1">EXPERIENCE</h2>
                            <div className="space-y-2">
                              {watch('experience').map((exp, index) => (
                                exp.position || exp.company ? (
                                  <div key={index} className="border-l-2 border-blue-600 pl-2">
                                    {exp.position && <div className="font-medium">{exp.position}</div>}
                                    {exp.company && <div>{exp.company}</div>}
                                    {exp.duration && <div className="text-gray-500">{exp.duration}</div>}
                                  </div>
                                ) : null
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    This is a preview. The final CV will be professionally formatted.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-full max-w-2xl mb-6">
                <div className="bg-white border rounded-lg shadow-lg p-6 mb-4">
                  <h2 className="text-xl font-bold text-center mb-6">Your CV is Ready!</h2>
                  
                  <div className="aspect-[3/4] mb-6 bg-gray-100 rounded-md overflow-hidden">
                    <iframe 
                      src={generatedCVUrl} 
                      className="w-full h-full"
                      title="CV Preview"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => window.open(generatedCVUrl, '_blank')}
                      className="flex-1"
                    >
                      Download CV
                    </Button>
                    <Button
                      onClick={() => setGeneratedCVUrl(null)}
                      variant="outline"
                      className="flex-1"
                    >
                      Edit CV
                    </Button>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-medium text-blue-800 mb-2">What's Next?</h3>
                  <ul className="list-disc list-inside space-y-1 text-blue-700">
                    <li>Download your professionally designed CV</li>
                    <li>Share your CV with potential employers</li>
                    <li>Update your WorkWise SA profile with your new CV</li>
                    <li>Browse job listings that match your skills</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Payment Modal */}
          {showPaymentModal && (
            <Suspense fallback={<div>Loading payment...</div>}>
              <PaymentModal 
                amount={30}
                currency="ZAR"
                onClose={() => setShowPaymentModal(false)}
                onSuccess={handlePaymentSuccess}
                productName="Professional CV Template"
              />
            </Suspense>
          )}
        </div>
      </main>
    </>
  );
};

export default CVTemplates;
