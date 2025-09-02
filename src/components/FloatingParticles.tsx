import React from 'react';

const FloatingParticles: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rotate-45 animate-float" 
           style={{ animationDelay: '0s', animationDuration: '6s' }} />
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent/30 rounded-full animate-float" 
           style={{ animationDelay: '1s', animationDuration: '8s' }} />
      <div className="absolute top-60 left-1/4 w-2 h-2 bg-primary/40 rotate-45 animate-float" 
           style={{ animationDelay: '2s', animationDuration: '5s' }} />
      <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-accent/20 rounded-full animate-float" 
           style={{ animationDelay: '3s', animationDuration: '7s' }} />
      <div className="absolute bottom-60 left-16 w-3 h-3 bg-primary/30 rotate-45 animate-float" 
           style={{ animationDelay: '4s', animationDuration: '6s' }} />
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-accent/40 rounded-full animate-float" 
           style={{ animationDelay: '5s', animationDuration: '9s' }} />
      
      {/* Additional floating elements */}
      <div className="absolute top-1/2 left-8 w-1 h-8 bg-primary/10 animate-float" 
           style={{ animationDelay: '1.5s', animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-8 h-1 bg-accent/15 animate-float" 
           style={{ animationDelay: '2.5s', animationDuration: '5.5s' }} />
    </div>
  );
};

export default FloatingParticles;