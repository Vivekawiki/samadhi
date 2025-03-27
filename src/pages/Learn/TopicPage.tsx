import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import SectionHeader from '../../components/shared/SectionHeader';
import Button from '../../components/shared/Button';
import { ArrowLeft } from 'lucide-react';

// Mock data for topic structure
const topicsData = {
  'core-concepts': {
    title: 'Core Concepts',
    description: 'Foundational principles and ideas that form the basis of Hindu thought',
    image: 'https://images.unsplash.com/photo-1507692812231-52e2cca3e4c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    subtopics: [
      {
        id: 'dharma',
        title: 'Dharma',
        description: 'The concept of cosmic order, righteousness, and duty'
      },
      {
        id: 'karma',
        title: 'Karma',
        description: 'The law of cause and effect governing all actions'
      },
      {
        id: 'samsara',
        title: 'Samsara',
        description: 'The continuous cycle of birth, death, and rebirth'
      },
      {
        id: 'moksha',
        title: 'Moksha',
        description: 'Liberation from the cycle of rebirth and suffering'
      },
      {
        id: 'brahman',
        title: 'Brahman',
        description: 'The ultimate reality and supreme cosmic power'
      },
      {
        id: 'atman',
        title: 'Atman',
        description: 'The individual soul or self'
      }
    ]
  },
  'scriptures': {
    title: 'Scriptures',
    description: 'Sacred texts and literature of Hinduism',
    image: 'https://images.unsplash.com/photo-1544932199-02edecc07217?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    subtopics: [
      {
        id: 'vedas',
        title: 'Vedas',
        description: 'The oldest and most authoritative Hindu scriptures'
      },
      {
        id: 'upanishads',
        title: 'Upanishads',
        description: 'Philosophical texts exploring the nature of reality and self'
      },
      {
        id: 'bhagavad-gita',
        title: 'Bhagavad Gita',
        description: 'Lord Krishna\'s discourse on duty, devotion, and spiritual knowledge'
      },
      {
        id: 'puranas',
        title: 'Puranas',
        description: 'Ancient texts containing stories of deities, creation, and cosmology'
      },
      {
        id: 'ramayana',
        title: 'Ramayana',
        description: 'The epic story of Lord Rama'
      },
      {
        id: 'mahabharata',
        title: 'Mahabharata',
        description: 'The longest epic poem containing the Bhagavad Gita'
      }
    ]
  },
  // Other topics would follow the same structure
};

const TopicPage = () => {
  const { topicId } = useParams();
  
  // Check if topic exists
  if (!topicId || !topicsData[topicId as keyof typeof topicsData]) {
    return (
      <PageLayout title="Topic Not Found">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-heading font-bold mb-6">Topic Not Found</h1>
          <p className="text-gray-600 mb-8">The learning topic you're looking for doesn't exist.</p>
          <Link to="/learn" className="text-spiritual-500 hover:text-spiritual-600 font-medium">
            ← Back to Learning Centre
          </Link>
        </div>
      </PageLayout>
    );
  }
  
  const topic = topicsData[topicId as keyof typeof topicsData];
  
  return (
    <PageLayout title={`Learn - ${topic.title}`}>
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
          
          <div className="prose prose-lg max-w-none mb-12">
            <h3 className="text-2xl font-heading font-semibold mb-6">Explore Subtopics</h3>
            
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
            
            <div className="bg-gray-50 p-6 rounded-lg my-8 border-l-4 border-spiritual-500">
              <h4 className="text-xl font-heading font-semibold mb-2">Learning Resources</h4>
              <p>
                Each subtopic includes detailed explanations, illustrated guides, and interactive elements to enhance your learning. We regularly update our content with new materials based on feedback from our community.
              </p>
              <p className="mt-4">
                For a more interactive learning experience, consider joining our Hinduism for Children classes held at the Centre.
              </p>
            </div>
          </div>
          
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
    </PageLayout>
  );
};

export default TopicPage;
