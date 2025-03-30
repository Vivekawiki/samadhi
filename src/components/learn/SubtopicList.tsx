
import React from 'react';
import { TopicData } from '../../data/topicsData';
import TopicCard from './TopicCard';
import { Star } from 'lucide-react';

interface SubtopicListProps {
  topic: TopicData;
  topicId: string;
  isChildThemed?: boolean;
}

const SubtopicList: React.FC<SubtopicListProps> = ({ topic, topicId, isChildThemed = false }) => {
  return (
    <div className="prose prose-lg max-w-none mb-12">
      <h3 className={`text-2xl font-heading font-semibold mb-6 flex items-center gap-2 ${isChildThemed ? "text-spiritual-600" : ""}`}>
        {isChildThemed && <Star className="w-6 h-6 text-spiritual-500" />}
        Explore Subtopics
      </h3>
      
      {topic.subtopics && topic.subtopics.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {topic.subtopics.map((subtopic) => (
            <TopicCard
              key={subtopic.id}
              id={subtopic.id}
              title={subtopic.title}
              description={subtopic.description}
              link={`/learn/topics/${topicId}/${subtopic.id}`}
              isChildThemed={isChildThemed}
            />
          ))}
        </div>
      ) : (
        <div className={`text-center p-8 ${isChildThemed ? "bg-spiritual-50 border-2 border-spiritual-100" : "bg-gray-50"} rounded-lg`}>
          <p>Subtopics for this category are coming soon.</p>
        </div>
      )}
    </div>
  );
};

export default SubtopicList;
