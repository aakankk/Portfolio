import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, Award, Code } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const InteractiveTimeline: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: '2025',
      title: 'Final Year Projects',
      subtitle: 'IIT Kanpur',
      description: 'Working on advanced ML projects and preparing for career transition',
      icon: Code,
      color: 'text-primary'
    },
    {
      year: '2024',
      title: 'ML & Computer Vision',
      subtitle: 'Deep Learning Projects',
      description: 'Developed PyTorch models and computer vision applications',
      icon: Award,
      color: 'text-accent'
    },
    {
      year: '2022-23',
      title: 'Leadership Roles',
      subtitle: 'Cultural & Technical Fests',
      description: 'Secretary in Fine Arts Team, Event coordination',
      icon: Briefcase,
      color: 'text-primary'
    },
    {
      year: '2021',
      title: 'Started at IIT Kanpur',
      subtitle: 'Mathematics & Scientific Computing',
      description: 'Began undergraduate studies in advanced mathematics and computing',
      icon: GraduationCap,
      color: 'text-accent'
    }
  ];

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
      
      <div className="space-y-8">
        {timelineItems.map((item, index) => (
          <div key={index} className="relative flex items-start animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
            {/* Timeline Dot */}
            <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow animate-pulse"></div>
            
            {/* Content */}
            <div className="ml-16 flex-1">
              <Card className="hover-lift bg-gradient-card group cursor-pointer transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <item.icon className={`h-6 w-6 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="group-hover:border-primary transition-colors duration-300">
                      {item.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTimeline;