
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import PageHeader from '../../components/shared/PageHeader';
import SectionHeader from '../../components/shared/SectionHeader';
import Button from '../../components/shared/Button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { BookOpen, PenTool, MessageSquare, Lightbulb } from 'lucide-react';

const CommunityLearningPage = () => {
  return (
    <PageLayout title="Community Learning | Hinduism for Children">
      <PageHeader 
        title="Community Learning" 
        subtitle="Engage with our community and enhance your understanding of Hindu philosophy"
        backgroundImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl text-gray-700 mb-8">
            Welcome to our Community Learning platform. This is where our community of learners comes together
            to enhance their understanding of Hindu philosophy through interactive activities, discussions, and shared resources.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-spiritual-200 bg-gradient-to-br from-spiritual-50 to-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-spiritual-100 rounded-full mb-4">
                  <BookOpen className="w-6 h-6 text-spiritual-500" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Discussion Forums</h3>
                <p className="text-gray-600 mb-4">Join conversations on various topics and share your insights with fellow learners.</p>
                
                <Button href="/learn/quizzes" variant="outline" size="sm">
                  Explore Forums
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-spiritual-200 bg-gradient-to-br from-spiritual-50 to-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-spiritual-100 rounded-full mb-4">
                  <PenTool className="w-6 h-6 text-spiritual-500" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Knowledge Hub</h3>
                <p className="text-gray-600 mb-4">Access community-contributed resources, articles, and study materials.</p>
                
                <Button href="/learn/quizzes" variant="outline" size="sm">
                  Browse Resources
                </Button>
              </CardContent>
            </Card>
          </div>

          <SectionHeader 
            title="Community Activities" 
            subtitle="Engage with these interactive learning tools"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="border-spiritual-200 bg-gradient-to-br from-spiritual-50 to-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-spiritual-100 rounded-full mb-4">
                  <BookOpen className="w-6 h-6 text-spiritual-500" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Study Groups</h3>
                <p className="text-gray-600 mb-4">Join virtual study groups focused on specific topics or scriptures.</p>
                
                <Button href="/learn/community" variant="outline" size="sm">
                  Join a Group
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-spiritual-200 bg-gradient-to-br from-spiritual-50 to-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-spiritual-100 rounded-full mb-4">
                  <PenTool className="w-6 h-6 text-spiritual-500" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Interactive Quizzes</h3>
                <p className="text-gray-600 mb-4">Test your knowledge with our collection of quizzes on various topics in Hinduism.</p>
                
                <Button href="/learn/quizzes" variant="outline" size="sm">
                  Take Quizzes
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-spiritual-200 bg-gradient-to-br from-spiritual-50 to-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-spiritual-100 rounded-full mb-4">
                  <Lightbulb className="w-6 h-6 text-spiritual-500" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Submit Questions</h3>
                <p className="text-gray-600 mb-4">Contribute to our question bank by creating and submitting your own questions.</p>
                
                <Button href="/learn/submit" variant="outline" size="sm">
                  Submit Questions
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 p-6 bg-gradient-to-br from-indian-cream to-white border border-indian-saffron rounded-lg">
            <h3 className="text-xl font-heading font-semibold mb-4">Community Guidelines</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be respectful of others' views and backgrounds.</li>
              <li>Share knowledge generously and credit sources.</li>
              <li>Ask questions thoughtfully and be open to learning.</li>
              <li>Support fellow learners in their journey.</li>
              <li>Focus on understanding rather than debate.</li>
              <li>Maintain the sanctity of the discussions.</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CommunityLearningPage;
