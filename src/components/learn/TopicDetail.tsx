
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import Button from '../shared/Button';
import SubtopicList from './SubtopicList';
import LearningResources from './LearningResources';
import { TopicData } from '../../data/topicsData';

interface TopicDetailProps {
  topic: TopicData;
  topicId: string;
}

const TopicDetail: React.FC<TopicDetailProps> = ({ topic, topicId }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link to="/learn" className="inline-flex items-center text-spiritual-500 hover:text-spiritual-600 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Learning Centre
        </Link>
        
        <SectionHeader 
          title={topic.title} 
          subtitle={topic.description}
          alignment="left"
        />
        
        <div className="my-8 rounded-lg overflow-hidden shadow-md">
          {topic.image && (
            <img 
              src={topic.image} 
              alt={topic.title} 
              className="w-full h-auto"
            />
          )}
        </div>
        
        <SubtopicList topic={topic} topicId={topicId} />
        
        <LearningResources />
        
        <div className="text-center mt-12">
          <p className="text-xl font-semibold mb-6">
            Test your knowledge with our interactive quizzes
          </p>
          <Button href="/learn/community" size="lg">
            Access Learning Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;
