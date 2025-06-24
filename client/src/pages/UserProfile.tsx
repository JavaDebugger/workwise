import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useLocation } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Star,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  Award,
  ChevronLeft,
  ChevronRight,
  Edit,
  MessageSquare,
  Bell,
  Settings,
  FileText,
  Heart,
  Eye,
  Clock,
  Loader2,
  AlertCircle,
  User,
  Save,
  X,
  Plus,
  Trash2,
  CheckCircle,
  Camera,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { profileService, ProfileData } from '@/services/profileService';
import { fileUploadService } from '@/services/fileUploadService';
import { updateProfile as firebaseUpdateProfile } from 'firebase/auth';

// Calculate level based on profile completion and engagement
const getUserLevel = (profile: ProfileData | null) => {
  if (!profile) return { level: 1, title: 'Novice', percentage: 0 };
  
  let completionScore = 0;
  const maxScore = 100;
  
  // Personal information (30 points)
  if (profile.personal?.fullName) completionScore += 10;
  if (profile.personal?.phoneNumber) completionScore += 5;
  if (profile.personal?.location) completionScore += 5;
  if (profile.personal?.bio) completionScore += 10;
  
  // Education (20 points)
  if (profile.education?.highestEducation) completionScore += 10;
  if (profile.education?.schoolName) completionScore += 10;
  
  // Experience (30 points)
  if (profile.experience?.hasExperience) {
    completionScore += 10;
    if (profile.experience?.jobTitle) completionScore += 10;
    if (profile.experience?.employer) completionScore += 10;
  }
  
  // Skills (20 points)
  if (profile.skills?.skills && profile.skills.skills.length > 0) completionScore += 10;
  if (profile.skills?.languages && profile.skills.languages.length > 0) completionScore += 10;
  
  const percentage = Math.min(completionScore, maxScore);
  
  if (percentage >= 90) return { level: 5, title: 'Expert', percentage };
  if (percentage >= 75) return { level: 4, title: 'Advanced', percentage };
  if (percentage >= 50) return { level: 3, title: 'Intermediate', percentage };
  if (percentage >= 25) return { level: 2, title: 'Beginner', percentage };
  return { level: 1, title: 'Novice', percentage };
};

const UserProfile = () => {
  const { username } = useParams();
  const { currentUser } = useAuth();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [uploading, setUploading] = useState(false);
  const [profileImages, setProfileImages] = useState<string[]>([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<string>('');
  const [editFormData, setEditFormData] = useState<any>({});
  const [savingChanges, setSavingChanges] = useState(false);
  const [notifications, setNotifications] = useState(0);
  const [profileCompletion, setProfileCompletion] = useState(0);
  const [isOwnProfile, setIsOwnProfile] = useState(false);

  const fetchProfile = useCallback(async () => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // Determine which user's profile to fetch
      const targetUserId = username || currentUser.uid;
      const isOwn = !username || username === currentUser.displayName?.toLowerCase().replace(/\s+/g, '') || targetUserId === currentUser.uid;
      setIsOwnProfile(isOwn);
      
      const data = await profileService.getProfile(targetUserId);
      setProfile(data);
      
      // Calculate profile completion
      const userLevel = getUserLevel(data);
      setProfileCompletion(userLevel.percentage);
      
      // Set up profile images with fallbacks
      const fallbackImage = '/images/default-avatar.png';
      const primaryImage = data?.personal?.profilePicture || currentUser.photoURL || fallbackImage;
      setProfileImages([primaryImage]);
      
      // For own profile, fetch real notifications count
      if (isOwn) {
        // In a real app, fetch from notifications API
        setNotifications(0); // Remove mock data
      }
      
    } catch (e: any) {
      console.error('Error fetching profile:', e);
      const errorMessage = e.message || 'Failed to load profile';
      setError(errorMessage);
      
      // Only show error toast for unexpected errors, not for missing profiles
      if (e.status !== 404) {
        toast({
          variant: "destructive",
          title: "Error Loading Profile",
          description: errorMessage,
        });
      }
    } finally {
      setLoading(false);
    }
  }, [currentUser, username, navigate, toast]);
  
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const userLevel = getUserLevel(profile);

  const nextImage = () => {
    setActiveImageIndex(prev => (prev + 1) % profileImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex(prev => (prev - 1 + profileImages.length) % profileImages.length);
  };

  const handleProfileImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!currentUser || !e.target.files || !e.target.files[0]) return;
    
    const file = e.target.files[0];
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        variant: "destructive",
        title: "Invalid File Type",
        description: "Please select an image file (JPG, JPEG, PNG, etc.)",
      });
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        variant: "destructive",
        title: "File Too Large",
        description: "Please select an image smaller than 5MB",
      });
      return;
    }
    
    setUploading(true);
    try {
      // Upload to storage
      const url = await fileUploadService.uploadProfileImage(file, currentUser.uid);
      // Update profile in backend (merge with existing personal data)
      await profileService.updateProfile(currentUser.uid, {
        personal: { ...profile?.personal, profilePicture: url },
      });
      // Update Firebase Auth photoURL
      await firebaseUpdateProfile(currentUser, { photoURL: url });
      // Update UI
      setProfile((prev) => prev ? ({
        ...prev,
        personal: { ...prev.personal, profilePicture: url },
      }) : prev);
      setProfileImages(prev => [url, ...prev.slice(1)]);
      
      toast({
        title: "Profile Picture Updated",
        description: "Your profile picture has been successfully updated.",
      });
    } catch (err: any) {
      console.error('Error uploading profile image:', err);
      toast({
        variant: "destructive",
        title: "Upload Failed",
        description: err.message || "Failed to update profile picture. Please try again.",
      });
    } finally {
      setUploading(false);
    }
  };
  
  const handleEditProfile = (section: string) => {
    setEditingSection(section);
    if (profile) {
      setEditFormData(profile[section as keyof ProfileData] || {});
    }
    setEditDialogOpen(true);
  };
  
  const handleSaveChanges = async () => {
    if (!currentUser || !profile) return;
    
    setSavingChanges(true);
    try {
      const updateData = {
        [editingSection]: editFormData
      };
      
      await profileService.updateProfile(currentUser.uid, updateData);
      
      setProfile(prev => prev ? {
        ...prev,
        [editingSection]: editFormData
      } : prev);
      
      setEditDialogOpen(false);
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
    } catch (err: any) {
      console.error('Error updating profile:', err);
      toast({
        variant: "destructive",
        title: "Update Failed",
        description: err.message || "Failed to update profile. Please try again.",
      });
    } finally {
      setSavingChanges(false);
    }
  };
  
  const handleSendMessage = () => {
    if (!isOwnProfile) {
      toast({
        title: "Feature Coming Soon",
        description: "Direct messaging feature will be available soon.",
      });
    }
  };
  
  const handleViewNotifications = () => {
    if (isOwnProfile) {
      // Navigate to notifications page when available
      toast({
        title: "Notifications",
        description: notifications > 0 ? `You have ${notifications} new notifications.` : "No new notifications.",
      });
    }
  };
  
  const handleSettings = () => {
    if (isOwnProfile) {
      navigate('/settings');
    }
  };
  
  const handleRefreshProfile = () => {
    fetchProfile();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <Alert variant="destructive" className="max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {error}
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-2"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    );
  }
  
  if (!profile) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center max-w-md">
          <User className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            {isOwnProfile ? 'Profile Not Set Up' : 'Profile Not Found'}
          </h3>
          <p className="text-muted-foreground mb-4">
            {isOwnProfile 
              ? 'Complete your profile setup to get started with WorkWise SA.'
              : 'This profile doesn\'t exist or you don\'t have permission to view it.'}
          </p>
          <div className="space-y-2">
            {isOwnProfile ? (
              <Button onClick={() => navigate('/profile-setup')}>
                <Plus className="h-4 w-4 mr-2" />
                Complete Profile Setup
              </Button>
            ) : (
              <Button variant="outline" onClick={() => navigate('/')}>
                Return Home
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={handleRefreshProfile}>
              <CheckCircle className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{profile.personal?.fullName || 'User'} | Profile | WorkWise SA</title>
        <meta
          name="description"
          content={`${
            profile.personal?.fullName || 'User'
          }'s profile on WorkWise SA. View details and activity history.`}
        />
      </Helmet>

      <main className="flex-grow bg-gray-50 min-h-screen">
        {/* Hero Section with Profile Picture */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-64 relative">
          <div className="container mx-auto px-4 h-full flex items-end">
            {/* Logo in top left */}
            <div className="absolute top-4 left-4 md:left-8">
              <img
                src="/images/logo.png"
                alt="WorkWise SA Logo"
                className="h-24 rounded-md shadow-md transition-all duration-200 hover:scale-105"
              />
            </div>
            <div className="relative -bottom-16 flex flex-col items-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-white shadow-lg relative">
                  <img
                    src={profileImages[activeImageIndex]}
                    alt={profile.personal?.fullName || 'Profile'}
                    className="w-full h-full object-cover"
                  />
                  <input
                    id="profile-image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfileImageChange}
                    disabled={uploading}
                  />
                  {isOwnProfile && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute bottom-2 right-2 z-10 h-6 px-2 text-xs"
                      onClick={() => document.getElementById('profile-image-upload')?.click()}
                      disabled={uploading}
                    >
                      {uploading ? (
                        <>
                          <Loader2 className="h-3 w-3 animate-spin mr-1" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Camera className="h-3 w-3 mr-1" />
                          Change
                        </>
                      )}
                    </Button>
                  )}
                </div>
                <div className="absolute -right-2 bottom-0">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 rounded-full bg-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-5 w-5 text-blue-500" />
                  </Button>
                </div>
                <div className="absolute -left-2 bottom-0">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 rounded-full bg-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-5 w-5 text-blue-500" />
                  </Button>
                </div>
              </div>
              {profile.personal?.bio && (
                <p className="text-white text-sm mt-2 max-w-xs text-center">
                  {profile.personal.bio.length > 60 
                    ? `${profile.personal.bio.substring(0, 60)}...` 
                    : profile.personal.bio}
                </p>
              )}
            </div>
            {/* Rating in top right */}
            <div className="absolute top-4 right-4 md:right-8 bg-white/20 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-1">
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-300" />
                <span className="text-white text-xs font-medium">{profileCompletion}%</span>
              </div>
              <Badge variant="outline" className="text-xs text-white border-white ml-1">
                {userLevel.title}
              </Badge>
            </div>
          </div>
        </div>
        {/* Name and Quick Actions */}
        <div className="container mx-auto px-4 pt-20 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{profile.personal?.fullName}</h1>
              <div className="flex items-center text-gray-500 mt-1">
                {profile.personal?.location && (
                  <>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{profile.personal.location}</span>
                  </>
                )}
                {profile.personal?.location && currentUser?.metadata?.creationTime && (
                  <Separator orientation="vertical" className="mx-2 h-4" />
                )}
                {currentUser?.metadata?.creationTime && (
                  <>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">
                      Member since {new Date(currentUser.metadata.creationTime).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long' 
                      })}
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className="flex space-x-2 mt-4 md:mt-0">
              {!isOwnProfile && (
                <Button size="sm" variant="outline" className="flex items-center" onClick={handleSendMessage}>
                  <Mail className="h-4 w-4 mr-1" />
                  <span>Message</span>
                </Button>
              )}
              {isOwnProfile && (
                <>
                  <Button size="sm" variant="outline" className="relative" onClick={handleViewNotifications}>
                    <Bell className="h-4 w-4" />
                    {notifications > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        {notifications}
                      </span>
                    )}
                  </Button>
                  <Button size="sm" variant="outline" onClick={handleSettings}>
                    <Settings className="h-4 w-4" />
                  </Button>
                </>
              )}
              <Button size="sm" variant="ghost" onClick={handleRefreshProfile}>
                <CheckCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        {/* Main Content Area */}
        <div className="container mx-auto px-4 pb-12">
          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bio and Skills */}
                <Card className="md:col-span-2">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold">About Me</h3>
                      {isOwnProfile && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleEditProfile('personal')}>
                          <Edit className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <p className="text-gray-700 mb-6">
                      {profile.personal?.bio || 'No bio available. Click edit to add one.'}
                    </p>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold">Skills</h3>
                      {isOwnProfile && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleEditProfile('skills')}>
                          <Edit className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(profile.skills?.skills || []).length > 0 ? (
                        (profile.skills?.skills || []).map((skill: string, index: number) => (
                          <Badge key={index} variant="outline" className="bg-blue-50">
                            {skill}
                          </Badge>
                        ))
                      ) : (
                        <p className="text-muted-foreground">No skills added yet. Click edit to add skills.</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
                {/* Stats and Activity */}
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Stats</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Profile Completion</span>
                            <span className="text-sm font-medium">
                              {profileCompletion}%
                            </span>
                          </div>
                          <Progress value={profileCompletion} className="h-2" />
                        </div>
                        {isOwnProfile && (
                          <>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">Applications</span>
                                <span className="text-sm font-medium">
                                  {profile.applications?.current || 0} active
                                </span>
                              </div>
                              <Progress
                                value={
                                  ((profile.applications?.current || 0) /
                                    Math.max(profile.applications?.total || 1, 1)) *
                                  100
                                }
                                className="h-2"
                              />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">Success Rate</span>
                                <span className="text-sm font-medium">
                                  {((profile.applications?.successRate || 0) * 100).toFixed(0)}%
                                </span>
                              </div>
                              <Progress
                                value={(profile.applications?.successRate || 0) * 100}
                                className="h-2"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Recent Activity</h3>
                        <Button variant="link" className="text-blue-500 p-0 h-auto">
                          View All
                        </Button>
                      </div>
                      <div className="space-y-4">
                        {profile.recentActivity && profile.recentActivity.length > 0 ? (
                          profile.recentActivity
                            .slice(0, 3)
                            .map((activity: any, index: number) => (
                              <div key={index} className="flex items-start">
                                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                  {activity.icon ? (
                                    <activity.icon className="h-4 w-4 text-blue-600" />
                                  ) : (
                                    <Clock className="h-4 w-4 text-blue-600" />
                                  )}
                                </div>
                                <div>
                                  <p className="text-sm text-gray-700">{activity.content}</p>
                                  <p className="text-xs text-gray-500">{activity.timestamp}</p>
                                </div>
                              </div>
                            ))
                        ) : (
                          <div className="text-center py-4">
                            <Clock className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                            <p className="text-sm text-muted-foreground">
                              {isOwnProfile ? 'No recent activity. Start applying for jobs!' : 'No recent activity to display.'}
                            </p>
                            {isOwnProfile && (
                              <Button variant="link" size="sm" onClick={() => navigate('/jobs')} className="mt-2">
                                Browse Jobs
                              </Button>
                            )}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="applications">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Job Applications</h3>
                    <Badge variant={profile.applications?.current > 0 ? 'default' : 'outline'}>
                      {profile.applications?.current || 0} Active Applications
                    </Badge>
                  </div>
                  <div className="space-y-6">
                    {isOwnProfile ? (
                      <div className="text-center py-8">
                        <Briefcase className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h4 className="text-lg font-semibold mb-2">
                          {profile.applications?.current ? 'Applications will appear here' : 'No Active Applications'}
                        </h4>
                        <p className="text-muted-foreground mb-4">
                          {profile.applications?.current 
                            ? 'Your job applications will be displayed in this section.'
                            : 'Start applying for jobs to see your applications here.'}
                        </p>
                        <Button onClick={() => navigate('/jobs')}>
                          Browse Jobs
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Briefcase className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h4 className="text-lg font-semibold mb-2">Applications Private</h4>
                        <p className="text-muted-foreground">This user's job applications are private.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="activity">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Activity History</h3>
                  <div className="space-y-4">
                    {profile.recentActivity && profile.recentActivity.length > 0 ? (
                      profile.recentActivity.map((activity: any, index: number) => (
                        <div key={index} className="flex items-start border-b pb-4 last:border-0">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                            {activity.icon ? (
                              <activity.icon className="h-5 w-5 text-blue-600" />
                            ) : (
                              <Clock className="h-5 w-5 text-blue-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700">{activity.content}</p>
                            <p className="text-sm text-gray-500">{activity.timestamp}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">
                          {isOwnProfile ? 'No activity yet. Start engaging with jobs and content!' : 'No public activity to display.'}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="preferences">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Job Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Preferred Job Categories</h4>
                      <div className="flex flex-wrap gap-2">
                        {/* TODO: Replace with real categories if available */}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Preferred Locations</h4>
                      <div className="flex flex-wrap gap-2">
                        {(profile.preferences?.locations || []).map(
                          (location: string, index: number) => (
                            <Badge key={index} variant="outline">
                              <MapPin className="h-3 w-3 mr-1" />
                              {location}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Job Types</h4>
                      <div className="flex flex-wrap gap-2">
                        {(profile.preferences?.jobTypes || []).map(
                          (type: string, index: number) => (
                            <Badge key={index} variant="outline">
                              {type}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Other Preferences</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2 text-gray-500" />
                          <span className="text-sm">
                            Minimum Salary: R{profile.preferences?.minSalary || 0}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                          <span className="text-sm">
                            {profile.preferences?.willingToRelocate
                              ? 'Willing to relocate for work'
                              : 'Not willing to relocate'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {isOwnProfile && (
                    <div className="mt-6">
                      <Button>Update Preferences</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Edit Profile Dialog */}
        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                Edit {editingSection === 'personal' ? 'Personal Information' : 
                     editingSection === 'skills' ? 'Skills' :
                     editingSection === 'education' ? 'Education' :
                     editingSection === 'experience' ? 'Experience' : 'Profile'}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              {editingSection === 'personal' && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={editFormData.fullName || ''}
                      onChange={(e) => setEditFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      value={editFormData.phoneNumber || ''}
                      onChange={(e) => setEditFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={editFormData.location || ''}
                      onChange={(e) => setEditFormData(prev => ({ ...prev, location: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={editFormData.bio || ''}
                      onChange={(e) => setEditFormData(prev => ({ ...prev, bio: e.target.value }))}
                      rows={4}
                    />
                  </div>
                </div>
              )}
              
              {editingSection === 'skills' && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="skills">Skills (comma-separated)</Label>
                    <Input
                      id="skills"
                      value={(editFormData.skills || []).join(', ')}
                      onChange={(e) => setEditFormData(prev => ({ 
                        ...prev, 
                        skills: e.target.value.split(',').map(s => s.trim()).filter(s => s) 
                      }))}
                      placeholder="JavaScript, React, Node.js"
                    />
                  </div>
                  <div>
                    <Label htmlFor="languages">Languages (comma-separated)</Label>
                    <Input
                      id="languages"
                      value={(editFormData.languages || []).join(', ')}
                      onChange={(e) => setEditFormData(prev => ({ 
                        ...prev, 
                        languages: e.target.value.split(',').map(s => s.trim()).filter(s => s) 
                      }))}
                      placeholder="English, Afrikaans, Zulu"
                    />
                  </div>
                </div>
              )}
              
              {editingSection === 'education' && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="highestEducation">Highest Education</Label>
                    <Input
                      id="highestEducation"
                      value={editFormData.highestEducation || ''}
                      onChange={(e) => setEditFormData(prev => ({ ...prev, highestEducation: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="schoolName">School/Institution Name</Label>
                    <Input
                      id="schoolName"
                      value={editFormData.schoolName || ''}
                      onChange={(e) => setEditFormData(prev => ({ ...prev, schoolName: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="yearCompleted">Year Completed</Label>
                    <Input
                      id="yearCompleted"
                      value={editFormData.yearCompleted || ''}
                      onChange={(e) => setEditFormData(prev => ({ ...prev, yearCompleted: e.target.value }))}
                    />
                  </div>
                </div>
              )}
              
              {editingSection === 'experience' && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input
                      id="jobTitle"
                      value={editFormData.jobTitle || ''}
                      onChange={(e) => setEditFormData(prev => ({ ...prev, jobTitle: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="employer">Employer</Label>
                    <Input
                      id="employer"
                      value={editFormData.employer || ''}
                      onChange={(e) => setEditFormData(prev => ({ ...prev, employer: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="jobDescription">Job Description</Label>
                    <Textarea
                      id="jobDescription"
                      value={editFormData.jobDescription || ''}
                      onChange={(e) => setEditFormData(prev => ({ ...prev, jobDescription: e.target.value }))}
                      rows={4}
                    />
                  </div>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button onClick={handleSaveChanges} disabled={savingChanges}>
                {savingChanges ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </>
  );
};

export default UserProfile;
