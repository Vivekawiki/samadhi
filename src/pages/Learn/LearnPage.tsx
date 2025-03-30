
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import PageHeader from '../../components/shared/PageHeader';
import SectionHeader from '../../components/shared/SectionHeader';
import Button from '../../components/shared/Button';
import { Link } from 'react-router-dom';
import { Book, Music, Users } from 'lucide-react';

const LearnPage = () => {
  return (
    <PageLayout title="Hinduism for Children (and All Learners)">
      <PageHeader 
        title="Hinduism for Children (and All Learners)" 
        subtitle="Educational resources for understanding Hindu philosophy and practices"
        backgroundImage="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl text-gray-700 mb-8">
            Welcome to our learning platform, designed to provide accessible and comprehensive education about Hinduism and Vedanta philosophy for learners of all ages. Whether you're a parent guiding your child, a teacher, or someone curious about Hindu traditions, we offer resources tailored to different learning needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-white text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-spiritual-50 text-spiritual-500 mb-4">
                <Book size={28} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Educational Content</h3>
              <p className="text-gray-600 mb-4">
                Structured learning materials organized by topics and suitable for different age groups.
              </p>
              <Button href="/learn/topics/core-concepts" variant="outline">
                Explore Topics
              </Button>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-white text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-spiritual-50 text-spiritual-500 mb-4">
                <Music size={28} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Learning Mantras</h3>
              <p className="text-gray-600 mb-4">
                Sacred chants with audio, text, and explanations to support spiritual practice.
              </p>
              <Button href="/learn/mantras" variant="outline">
                Learn Mantras
              </Button>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-white text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-spiritual-50 text-spiritual-500 mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Community Learning</h3>
              <p className="text-gray-600 mb-4">
                Join our quiz platform, submit questions, and engage with other learners.
              </p>
              <Button href="/learn/community" variant="outline">
                Join Community
              </Button>
            </div>
          </div>
          
          <SectionHeader 
            title="Explore Topics" 
            subtitle="Dive into our comprehensive curriculum covering the key aspects of Hinduism"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'core-concepts', title: 'Core Concepts', desc: 'Dharma, Karma, etc.' },
              { id: 'scriptures', title: 'Scriptures', desc: 'Vedas, Upanishads, etc.' },
              { id: 'deities', title: 'Deities', desc: 'Trimurti, Major Deities, etc.' },
              { id: 'philosophical-schools', title: 'Philosophical Schools', desc: 'Samkhya, Yoga, etc.' },
              { id: 'practices-rituals', title: 'Practices and Rituals', desc: 'Puja, Samskaras, etc.' },
              { id: 'sects-traditions', title: 'Sects and Traditions', desc: 'Vaishnavism, Shaivism, etc.' },
              { id: 'influential-figures', title: 'Influential Figures', desc: 'Divine Incarnations, etc.' },
              { id: 'history-evolution', title: 'History and Evolution', desc: 'Ancient Origins, etc.' },
              { id: 'temples-architecture', title: 'Temples and Architecture', desc: 'Temple Styles, etc.' },
              { id: 'society-culture', title: 'Society and Culture', desc: 'Family, Arts, etc.' },
              { id: 'cosmology-mythology', title: 'Cosmology and Mythology', desc: 'Creation Myths, Yugas, etc.' },
              { id: 'modern-issues', title: 'Modern Issues and Debates', desc: 'Science, Secularism, etc.' },
            ].map(topic => (
              <Link key={topic.id} to={`/learn/topics/${topic.id}`} className="block group">
                <div className="h-full p-6 border border-gray-100 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 bg-white">
                  <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-spiritual-500 transition-colors">{topic.title}</h3>
                  <p className="text-gray-600 text-sm">{topic.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LearnPage;
