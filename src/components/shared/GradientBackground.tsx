import React, { useEffect, useRef } from 'react';
import { animateGradient } from '@/lib/animation';

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
}

const GradientBackground = ({ 
  children, 
  className = '',
  colors = ['#FEF8E7', '#FDEED0', '#FFF5E1', '#FFFFFF']
}: GradientBackgroundProps) => {
  const gradientRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (gradientRef.current) {
      animateGradient(gradientRef.current);
    }
  }, []);
  
  // Create CSS gradient string
  const gradientString = `linear-gradient(135deg, ${colors.join(', ')})`;
  
  return (
    <div 
      ref={gradientRef}
      className={`relative ${className}`}
      style={{ 
        backgroundImage: gradientString,
        backgroundSize: '400% 400%',
        backgroundPosition: '0% 0%'
      }}
    >
      {children}
    </div>
  );
};

export default GradientBackground;
