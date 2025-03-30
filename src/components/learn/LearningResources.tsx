
import React from 'react';
import { BookOpen, Sun, Heart } from 'lucide-react';

const LearningResources: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-spiritual-50 to-yellow-50 p-6 rounded-2xl my-8 border-2 border-spiritual-100 shadow-sm">
      <h4 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-spiritual-500" />
        Learning Resources for Children
      </h4>
      <div className="flex items-start mb-3">
        <Sun className="w-5 h-5 text-spiritual-500 mt-1 mr-2 flex-shrink-0" />
        <p>
          Each subtopic includes colorful explanations, illustrated guides, and fun interactive elements to make learning enjoyable!
        </p>
      </div>
      <div className="flex items-start">
        <Heart className="w-5 h-5 text-spiritual-500 mt-1 mr-2 flex-shrink-0" />
        <p>
          For a more interactive learning experience, join our Hinduism for Children classes held at the Centre.
        </p>
      </div>
    </div>
  );
};

export default LearningResources;
