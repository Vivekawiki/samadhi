
import React from 'react';
import { Link } from 'react-router-dom';

interface TopicCardProps {
  id: string;
  title: string;
  description: string;
  link: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ 
  id,
  title, 
  description, 
  link
}) => {
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
