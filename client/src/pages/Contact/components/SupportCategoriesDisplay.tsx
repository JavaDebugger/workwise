import { Users, Briefcase, MessageSquare, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface SupportCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  topics: string[];
}

interface SupportCategoriesDisplayProps {
  supportCategories: SupportCategory[];
}

const SupportCategoriesDisplay: React.FC<SupportCategoriesDisplayProps> = ({ supportCategories }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-center mb-8">How Can We Help You?</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {supportCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {category.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SupportCategoriesDisplay;

