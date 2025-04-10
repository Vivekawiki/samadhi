import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animateBorder, hoverScale } from '@/lib/animation';

interface AnimatedCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  linkText?: string;
  className?: string;
  borderColor?: string;
  hoverScale?: number;
  children?: React.ReactNode;
}

const AnimatedCard = ({ 
  title, 
  description, 
  image, 
  link, 
  linkText = 'Learn More', 
  className = '',
  borderColor = '#F1A912',
  hoverScale: scale = 1.03,
  children
}: AnimatedCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (cardRef.current) {
      // Apply animations
      animateBorder(cardRef.current, borderColor);
      hoverScale(cardRef.current, scale);
    }
  }, [borderColor, scale]);

  const cardContent = (
    <div 
      ref={cardRef}
      className={`rounded-lg overflow-hidden shadow-sm border border-gray-100 bg-white transition-all duration-300 ${className}`}
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
        {link && !children && (
          <div className="mt-auto">
            <span className="inline-flex items-center text-spiritual-600 hover:text-spiritual-700 font-medium group">
              {linkText}
              <svg 
                className="ml-1 w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
          </div>
        )}
      </div>
    </div>
  );

  if (link) {
    return <Link to={link} className="block h-full">{cardContent}</Link>;
  }

  return cardContent;
};

export default AnimatedCard;
