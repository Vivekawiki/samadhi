import React from 'react';
import { Calendar } from 'lucide-react';
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
    <div className={`rounded-lg overflow-hidden border-2 border-indian-saffron/40 bg-white event-card hover:border-indian-saffron/60 hover:shadow-lg transition-all hover:scale-[1.02] duration-300 ${className}`}>
      {image && (
        <div className="h-[350px] bg-gradient-to-br from-indian-cream to-white flex items-center justify-center px-4">
          <img
            src={image}
            alt={title}
            className="w-[90%] h-full object-contain"
          />
        </div>
      )}
      <div className="p-4 bg-gradient-to-br from-indian-cream to-white border-t-2 border-indian-saffron/40">
        <h3 className="text-xl font-heading font-semibold text-indian-maroon mb-2 text-center">{title}</h3>
        <div className="space-y-2 text-center">
          <p className="text-gray-700">{date}{time && ` ${time}`}</p>
          <p className="text-gray-700">{location}</p>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
