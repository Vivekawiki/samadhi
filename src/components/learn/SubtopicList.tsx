
import React from 'react';
import { Link } from 'react-router-dom';
import { TopicData } from '../../data/topicsData';

interface SubtopicListProps {
  topic: TopicData;
  topicId: string;
}

const SubtopicList: React.FC<SubtopicListProps> = ({ topic, topicId }) => {
  return (
    <div className="prose prose-lg max-w-none mb-12">
      <h3 className="text-2xl font-heading font-semibold mb-6">Explore Subtopics</h3>
      
      {topic.subtopics && topic.subtopics.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {topic.subtopics.map((subtopic) => (
            <Link 
              key={subtopic.id}
              to={`/learn/topics/${topicId}/${subtopic.id}`}
              className="block group"
            >
              <div className="h-full p-6 border border-gray-100 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 bg-white">
                <h4 className="text-xl font-heading font-semibold mb-2 group-hover:text-spiritual-500 transition-colors">{subtopic.title}</h4>
                <p className="text-gray-600">{subtopic.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <p>Subtopics for this category are coming soon.</p>
        </div>
      )}
    </div>
  );
};

export default SubtopicList;
