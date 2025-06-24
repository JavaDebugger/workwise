import React, { useEffect, useRef } from 'react';
import {
  Users, Briefcase, Zap, BookOpen, Search, Filter, BarChart3, TrendingUp,
  MapPin, Cpu, ShieldCheck, HeartHandshake, Eye, Star, Lightbulb, UserCheck,
  Mail, HelpCircle, Handshake, ShieldQuestion
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const AboutUsPage = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            observer.unobserve(entry.target); // Optional: stop observing once animated
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const missionData = {
    title: "Our Mission",
    content: "WorkWise SA is dedicated to bridging the gap between talented entry-level job seekers and forward-thinking employers across South Africa. We believe that everyone deserves access to meaningful career opportunities, regardless of their background or experience level.",
    icon: <HeartHandshake size={48} className="text-primary mb-4" />
  };

  const whatWeDoData = {
    title: "What We Do",
    jobSeekers: [
      { text: "Comprehensive job search platform with advanced filtering", icon: <Search size={24} className="text-accent" /> },
      { text: "Professional CV builder with industry-specific templates", icon: <Briefcase size={24} className="text-accent" /> },
      { text: "WiseUp learning platform with career development resources", icon: <BookOpen size={24} className="text-accent" /> },
      { text: "Personalized job matching based on skills and preferences", icon: <UserCheck size={24} className="text-accent" /> },
      { text: "Interview preparation and career guidance tools", icon: <TrendingUp size={24} className="text-accent" /> },
    ],
    employers: [
      { text: "Access to a diverse pool of entry-level talent", icon: <Users size={24} className="text-accent-foreground" /> },
      { text: "Advanced candidate filtering and matching", icon: <Filter size={24} className="text-accent-foreground" /> },
      { text: "Efficient recruitment tools and applicant tracking", icon: <Zap size={24} className="text-accent-foreground" /> },
      { text: "Employer branding opportunities", icon: <Star size={24} className="text-accent-foreground" /> },
      { text: "Recruitment analytics and insights", icon: <BarChart3 size={24} className="text-accent-foreground" /> },
    ]
  };

  const storyData = {
    title: "Our Story",
    content: "Founded with the vision of democratizing access to career opportunities in South Africa, WorkWise SA emerged from the recognition that traditional job search methods often fail entry-level candidates. Our platform combines cutting-edge technology with deep understanding of the South African job market to create meaningful connections between talent and opportunity.",
    icon: <Lightbulb size={48} className="text-primary mb-4" />
  };

  const whyChooseUsData = {
    title: "Why Choose WorkWise SA?",
    reasons: [
      { title: "Focus on Entry-Level Talent", description: "We specialize in connecting emerging professionals with their first career opportunities.", icon: <UserCheck size={32} className="text-primary" /> },
      { title: "Local Expertise", description: "Deep understanding of the South African job market and employment landscape.", icon: <MapPin size={32} className="text-primary" /> },
      { title: "Comprehensive Resources", description: "Beyond job matching, we provide tools for professional development.", icon: <BookOpen size={32} className="text-primary" /> },
      { title: "Technology-Driven", description: "Modern platform built with React, ensuring smooth user experience.", icon: <Cpu size={32} className="text-primary" /> },
      { title: "Privacy-First", description: "Robust data protection and user privacy measures.", icon: <ShieldCheck size={32} className="text-primary" /> },
    ]
  };

  const valuesData = {
    title: "Our Values",
    values: [
      { name: "Inclusivity", description: "Creating opportunities for all, regardless of background.", icon: <Users size={32} className="text-primary" /> },
      { name: "Transparency", description: "Clear communication and honest practices.", icon: <Eye size={32} className="text-primary" /> },
      { name: "Excellence", description: "Continuous improvement and quality service delivery.", icon: <Star size={32} className="text-primary" /> },
      { name: "Innovation", description: "Leveraging technology to solve real-world problems.", icon: <Lightbulb size={32} className="text-primary" /> },
      { name: "Integrity", description: "Ethical practices and responsible business conduct.", icon: <ShieldQuestion size={32} className="text-primary" /> },
    ]
  };

  const contactData = {
    title: "Contact Us",
    contacts: [
      { type: "General Inquiries", email: "info@workwisesa.co.za", icon: <Mail size={24} className="text-primary" /> },
      { type: "Support", email: "support@workwisesa.co.za", icon: <HelpCircle size={24} className="text-primary" /> },
      { type: "Business Development", email: "partnerships@workwisesa.co.za", icon: <Handshake size={24} className="text-primary" /> },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 text-foreground">
      <header
        ref={addToRefs}
        className="py-20 text-center bg-primary/10 backdrop-blur-sm opacity-0 transition-all duration-1000 ease-out"
        style={{ '--animation-delay': '0.1s' }} // For staggered animation if needed
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary">
            About WorkWise SA
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            Connecting talent with opportunity across South Africa.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-24">
        {/* Mission Section */}
        <section ref={addToRefs} className="opacity-0 transition-all duration-1000 ease-out" style={{ '--animation-delay': '0.3s' }}>
          <Card className="overflow-hidden shadow-2xl hover:shadow-primary/30 transition-shadow duration-300 bg-card/80 backdrop-blur-md">
            <CardHeader className="text-center p-8">
              {missionData.icon}
              <CardTitle className="text-4xl font-semibold text-primary">{missionData.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-lg text-center text-card-foreground/90">
              <p>{missionData.content}</p>
            </CardContent>
          </Card>
        </section>

        {/* What We Do Section */}
        <section ref={addToRefs} className="opacity-0 transition-all duration-1000 ease-out" style={{ '--animation-delay': '0.5s' }}>
          <h2 className="text-4xl font-semibold text-center mb-12 text-primary">{whatWeDoData.title}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-accent/10">
              <CardHeader>
                <CardTitle className="text-3xl text-accent-foreground/90">For Job Seekers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {whatWeDoData.jobSeekers.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <p className="text-accent-foreground/80">{item.text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-primary/10">
              <CardHeader>
                <CardTitle className="text-3xl text-primary/90">For Employers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {whatWeDoData.employers.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <p className="text-primary/80">{item.text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Story Section */}
        <section ref={addToRefs} className="opacity-0 transition-all duration-1000 ease-out" style={{ '--animation-delay': '0.7s' }}>
          <Card className="overflow-hidden shadow-2xl hover:shadow-primary/30 transition-shadow duration-300 bg-card/80 backdrop-blur-md">
            <CardHeader className="text-center p-8">
              {storyData.icon}
              <CardTitle className="text-4xl font-semibold text-primary">{storyData.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-lg text-center text-card-foreground/90">
              <p>{storyData.content}</p>
            </CardContent>
          </Card>
        </section>

        {/* Why Choose Us Section */}
        <section ref={addToRefs} className="opacity-0 transition-all duration-1000 ease-out" style={{ '--animation-delay': '0.9s' }}>
          <h2 className="text-4xl font-semibold text-center mb-12 text-primary">{whyChooseUsData.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsData.reasons.map((reason, index) => (
              <Card key={index} className="text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-center mb-4">{reason.icon}</div>
                  <CardTitle className="text-2xl text-primary/90">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-card-foreground/80">{reason.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Values Section */}
        <section ref={addToRefs} className="opacity-0 transition-all duration-1000 ease-out" style={{ '--animation-delay': '1.1s' }}>
          <h2 className="text-4xl font-semibold text-center mb-12 text-primary">{valuesData.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {valuesData.values.map((value, index) => (
              <Card key={index} className="text-center p-6 transform transition-all duration-300 hover:shadow-lg hover:bg-primary/5 group">
                <div className="flex justify-center mb-3">
                  {React.cloneElement(value.icon, { className: "text-primary group-hover:text-accent transition-colors" })}
                </div>
                <h3 className="text-xl font-medium mb-1 text-primary/90 group-hover:text-accent-foreground">{value.name}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Us Section */}
        <section ref={addToRefs} className="opacity-0 transition-all duration-1000 ease-out" style={{ '--animation-delay': '1.3s' }}>
          <h2 className="text-4xl font-semibold text-center mb-12 text-primary">{contactData.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contactData.contacts.map((contact, index) => (
              <Card key={index} className="text-center transform transition-all duration-300 hover:scale-105 bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-center mb-3">{contact.icon}</div>
                  <CardTitle className="text-xl text-primary/90">{contact.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`mailto:${contact.email}`} className="text-accent hover:text-accent-foreground/80 transition-colors">
                    {contact.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center py-10 mt-16 border-t border-border/50">
        <p className="text-muted-foreground">© {new Date().getFullYear()} WorkWise SA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUsPage;

