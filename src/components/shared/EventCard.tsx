import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import './eventcard.css';

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
    <div className={`rounded-lg overflow-hidden border-2 border-indian-saffron/40 bg-white event-card hover:border-indian-saffron/60 hover:shadow-lg transition-all hover:scale-[1.02] duration-300 flex flex-col h-full ${className}`}>
      {image && (
        <div className="h-[350px] bg-gradient-to-br from-indian-cream to-white flex items-center justify-center px-4">
          <img
            src={image}
            alt={title}
            className="w-[90%] h-full object-contain"
          />
        </div>
      )}
      <div className="p-6 bg-gradient-to-br from-indian-cream to-white flex-grow flex flex-col">
        <h3 className="text-xl font-heading font-semibold text-indian-maroon mb-4 text-center">{title}</h3>
        <div className="space-y-2 text-center flex-grow flex flex-col justify-center">
          <div className="inline-flex items-center justify-center text-indian-saffron mb-2">
            <Calendar className="h-5 w-5 mr-2 flex-shrink-0" />
            <span className="text-gray-700">{date}{time && ` ${time}`}</span>
          </div>
          {location && (
            <div className="inline-flex items-center justify-center text-gray-600 mb-2">
              <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-indian-saffron" />
              <span className="text-gray-700">{location}</span>
            </div>
          )}
          {description && description.length > 0 && (
            <p className="text-gray-700 mt-4 mx-auto max-w-md">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
