
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import PageHeader from '../../components/shared/PageHeader';
import SectionHeader from '../../components/shared/SectionHeader';
import Button from '../../components/shared/Button';
import { Link } from 'react-router-dom';
import { Users, Book, PenTool, MessageSquare, Lightbulb, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const LearnPage = () => {
  return (
    <PageLayout title="Hinduism for Children">
      <PageHeader 
        title="Hinduism for Children" 
        subtitle="Educational resources for understanding Hindu philosophy and practices"
        backgroundImage="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl text-gray-700 mb-8">
            Welcome to our learning platform, designed to provide accessible and comprehensive education about Hinduism and Vedanta philosophy for children. 
            We aim to instill values, cultural appreciation, and spiritual understanding in an engaging and age-appropriate manner.
          </p>
          
          <div className="bg-gradient-to-br from-indian-cream to-white border border-indian-saffron p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-heading font-semibold mb-4">Creating Active Learners</h2>
            <p className="mb-4">
              At the Ramakrishna Centre, we believe in fostering active learning rather than passive consumption of information. 
              We encourage our students to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Read lessons and engage with the material</li>
              <li>Watch informative videos that bring concepts to life</li>
              <li>Test their knowledge through interactive quizzes</li>
              <li>Participate by submitting questions to our growing question bank</li>
            </ul>
            <p className="italic text-gray-700">
              "Education is the manifestation of the perfection already in man." - Swami Vivekananda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 border border-indian-saffron rounded-lg shadow-sm bg-gradient-to-br from-indian-cream to-white text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-spiritual-50 text-spiritual-500 mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Community Learning</h3>
              <p className="text-gray-600 mb-4">
                Join our quiz platform, submit questions, and engage with other learners.
              </p>
              <Button href="/learn/lessons" variant="outline" className="border-indian-saffron text-indian-saffron hover:bg-indian-saffron/10">
                Start Learning
              </Button>
            </div>
            
            <div className="p-6 border border-indian-saffron rounded-lg shadow-sm bg-gradient-to-br from-indian-cream to-white text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-spiritual-50 text-spiritual-500 mb-4">
                <Book size={28} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Interactive Quizzes</h3>
              <p className="text-gray-600 mb-4">
                Test your knowledge with our collection of quizzes on various topics in Hinduism.
              </p>
              <Button href="/learn/lessons" variant="outline" className="border-indian-saffron text-indian-saffron hover:bg-indian-saffron/10">
                Take Quizzes
              </Button>
            </div>
            
            <div className="p-6 border border-indian-saffron rounded-lg shadow-sm bg-gradient-to-br from-indian-cream to-white text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-spiritual-50 text-spiritual-500 mb-4">
                <PenTool size={28} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Submit Questions</h3>
              <p className="text-gray-600 mb-4">
                Contribute to our question bank by creating and submitting your own questions.
              </p>
              <Button href="/learn/questions" variant="outline" className="border-indian-saffron text-indian-saffron hover:bg-indian-saffron/10">
                Submit Questions
              </Button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indian-cream to-white border border-indian-saffron p-6 rounded-lg mb-8">
            <h3 className="text-xl font-heading font-semibold mb-3 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-indian-saffron" />
              Question Submission Format
            </h3>
            <p className="mb-4">
              We encourage students to submit questions for our question bank in the following format:
            </p>
            <div className="bg-white p-4 rounded border border-gray-200">
              <p className="font-semibold">1. The Question</p>
              <p className="text-sm text-gray-600 mb-2">Write a clear, concise question about Hindu philosophy, practices, or stories.</p>
              
              <p className="font-semibold">2. Four Options for the Answer</p>
              <p className="text-sm text-gray-600 mb-2">Provide four possible answers labeled A, B, C, and D.</p>
              
              <p className="font-semibold">3. Select the Correct Option</p>
              <p className="text-sm text-gray-600 mb-2">Indicate which option is the correct answer.</p>
              
              <p className="font-semibold">4. Reference</p>
              <p className="text-sm text-gray-600">Cite the source of information (text, chapter, verse, etc.).</p>
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
                <div className="h-full p-6 border border-indian-saffron rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 bg-gradient-to-br from-indian-cream to-white">
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
