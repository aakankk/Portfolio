import React, { useState, useEffect, useRef } from 'react';
import { Progress } from '@/components/ui/progress';

interface SkillProgressBarProps {
  skill: string;
  level: number;
  delay?: number;
}

const SkillProgressBar: React.FC<SkillProgressBarProps> = ({ skill, level, delay = 0 }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setProgress(level);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, level, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

export default SkillProgressBar;