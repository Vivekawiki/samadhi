
import React from 'react';
import { Calendar } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location?: string;
  description?: string;
  image?: string;
  link?: string;
  className?: string;
}

const EventCard = ({
  title,
  date,
  time,
  location,
  description,
  image,
  link,
  className = ''
}: EventCardProps) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-sm border border-gray-100 bg-white hover:shadow-md transition-all duration-300 ${className}`}>
      {image && (
        <div className="h-48 overflow-hidden border-2 border-indian-saffron">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-3 text-spiritual-500">
          <Calendar className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">{date}{time && ` • ${time}`}</span>
        </div>
        <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
        {location && (
          <p className="text-gray-600 text-sm mb-3">
            <span className="font-medium">Location:</span> {location}
          </p>
        )}
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        )}
        {link && (
          <a 
            href={link} 
            className="inline-flex items-center text-spiritual-600 hover:text-spiritual-700 font-medium"
          >
            View Details
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
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;
