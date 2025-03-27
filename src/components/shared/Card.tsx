
import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  linkText?: string;
  className?: string;
}

const Card = ({ 
  title, 
  description, 
  image, 
  link, 
  linkText = 'Learn More', 
  className = ''
}: CardProps) => {
  const cardContent = (
    <div className={`rounded-lg overflow-hidden shadow-sm border border-gray-100 bg-white hover:shadow-md transition-all duration-300 ${className}`}>
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
        {link && (
          <div className="mt-auto">
            <span className="inline-flex items-center text-spiritual-600 hover:text-spiritual-700 font-medium">
              {linkText}
              <svg 
                className="ml-1 w-4 h-4" 
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

export default Card;
