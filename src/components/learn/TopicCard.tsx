
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface TopicCardProps {
  id: string;
  title: string;
  description: string;
  link: string;
  isChildThemed?: boolean;
}

const TopicCard: React.FC<TopicCardProps> = ({ 
  id,
  title, 
  description, 
  link,
  isChildThemed = false
}) => {
  if (isChildThemed) {
    return (
      <Link 
        key={id}
        to={link}
        className="block group"
      >
        <div className="h-full p-6 border-2 border-spiritual-200 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300 bg-gradient-to-br from-spiritual-50 to-white">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-spiritual-500 group-hover:text-spiritual-600 transition-colors" />
            <h4 className="text-xl font-heading font-semibold group-hover:text-spiritual-500 transition-colors">
              {title}
            </h4>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </Link>
    );
  }
  
  return (
    <Link 
      key={id}
      to={link}
      className="block group"
    >
      <div className="h-full p-6 border border-gray-100 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 bg-white">
        <h4 className="text-xl font-heading font-semibold mb-2 group-hover:text-spiritual-500 transition-colors">
          {title}
        </h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default TopicCard;
