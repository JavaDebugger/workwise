import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, FileText, User, TrendingUp, Award } from 'lucide-react';

const CandidateCard = ({ candidate }) => {
  const {
    referenceNumber,
    interactionScore,
    imageUrl,
    name,
    location,
    experiencedRoles, // Array of strings
    cvUrl,
    profileUrl,
    assessmentUrl
  } = candidate;

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-out transform hover:-translate-y-1 bg-card/90 backdrop-blur-sm h-full">
      <CardHeader className="p-4 border-b border-border/70">
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span className="font-mono">Ref: {referenceNumber}</span>
          <div className="flex items-center gap-1">
            <TrendingUp size={14} className="text-green-500" />
            <span className="font-semibold text-green-600 dark:text-green-400">{interactionScore}%</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 flex-grow">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="flex-shrink-0">
            <img
              src={imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=100`}
              alt={name}
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-primary/30 shadow-md"
            />
          </div>
          <div className="flex-grow text-center sm:text-left">
            <h3 className="text-xl lg:text-2xl font-semibold text-primary mb-1">{name}</h3>
            {location && (
              <div className="flex items-center justify-center sm:justify-start text-sm text-muted-foreground mb-2">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                <span>{location}</span>
              </div>
            )}
            {experiencedRoles && experiencedRoles.length > 0 && (
              <div className="mb-3">
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-medium">Experienced In:</p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {experiencedRoles.map((role, index) => (
                    <span
                      key={index}
                      className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full shadow-sm"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 border-t border-border/70 mt-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
          <Button
            variant="outline"
            size="sm"
            className="w-full text-primary border-primary/50 hover:bg-primary/10 hover:text-primary"
            onClick={() => console.log('View Profile:', profileUrl)} // Replace with actual navigation
          >
            <User size={16} className="mr-2" /> View Profile
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full text-primary border-primary/50 hover:bg-primary/10 hover:text-primary"
            onClick={() => console.log('View CV:', cvUrl)} // Replace with actual navigation/download
          >
            <FileText size={16} className="mr-2" /> View CV
          </Button>
          <Button
            size="sm"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md" // Yellow CTA
            onClick={() => console.log('View Assessment:', assessmentUrl)} // Replace with actual navigation
          >
            <Award size={16} className="mr-2" /> Assessment
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CandidateCard;

