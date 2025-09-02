import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingActionButton: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!showScrollTop) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end space-y-3">
        {/* Expanded Actions */}
        {isExpanded && (
          <div className="flex flex-col space-y-2 animate-scale-in">
            <Button
              size="sm"
              variant="secondary"
              onClick={scrollToContact}
              className="shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => window.open('mailto:aakankshah21@iitk.ac.in')}
              className="shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Email
            </Button>
          </div>
        )}

        {/* Main FAB */}
        <Button
          size="lg"
          onClick={isExpanded ? scrollToTop : () => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          className="rounded-full w-14 h-14 shadow-elegant hover:shadow-glow transition-all duration-300 animate-glow"
        >
          <ArrowUp className={`h-6 w-6 transition-transform duration-300 ${isExpanded ? 'rotate-0' : 'rotate-0'}`} />
        </Button>
      </div>
    </div>
  );
};

export default FloatingActionButton;