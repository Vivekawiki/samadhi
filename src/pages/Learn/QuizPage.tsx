
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import PageHeader from '../../components/shared/PageHeader';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const QuizPage = () => {
  // Sample quizzes for demonstration
  const featuredQuizzes = [
    {
      id: 'basic-concepts',
      title: 'Basic Hindu Concepts',
      description: 'Test your knowledge of fundamental Hindu concepts',
      questionCount: 10,
      difficulty: 'Beginner'
    },
    {
      id: 'deities',
      title: 'Hindu Deities',
      description: 'How well do you know the major deities in Hinduism?',
      questionCount: 15,
      difficulty: 'Intermediate'
    },
    {
      id: 'scriptures',
      title: 'Hindu Scriptures',
      description: 'Test your knowledge of the Vedas, Upanishads, and other texts',
      questionCount: 12,
      difficulty: 'Advanced'
    }
  ];

  const categoryQuizzes = [
    {
      id: 'philosophy',
      title: 'Hindu Philosophy',
      description: 'Questions about the six schools of Hindu philosophy',
      questionCount: 15,
      difficulty: 'Advanced'
    },
    {
      id: 'festivals',
      title: 'Hindu Festivals',
      description: 'Test your knowledge about major Hindu festivals',
      questionCount: 10,
      difficulty: 'Beginner'
    },
    {
      id: 'epics',
      title: 'Hindu Epics',
      description: 'Questions about the Ramayana and Mahabharata',
      questionCount: 20,
      difficulty: 'Intermediate'
    },
    {
      id: 'bhagavad-gita',
      title: 'Bhagavad Gita',
      description: 'Test your knowledge of the Bhagavad Gita',
      questionCount: 18,
      difficulty: 'Intermediate'
    }
  ];
  
  const communityQuizzes = [
    {
      id: 'user-quiz-1',
      title: 'Vedic Concepts',
      author: 'Amit Patel',
      description: 'Community quiz about Vedic concepts and practices',
      questionCount: 8,
      difficulty: 'Intermediate'
    },
    {
      id: 'user-quiz-2',
      title: 'Hindu Symbols',
      author: 'Priya Sharma',
      description: 'Test your knowledge of important Hindu symbols',
      questionCount: 12,
      difficulty: 'Beginner'
    }
  ];

  return (
    <PageLayout title="Interactive Quizzes | Hinduism for Children">
      <PageHeader 
        title="Interactive Quizzes" 
        subtitle="Test your knowledge on various topics in Hindu philosophy"
        backgroundImage="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Link to="/learn" className="inline-flex items-center text-spiritual-500 hover:text-spiritual-600 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Learning Centre
          </Link>
          
          <div className="mb-10">
            <p className="text-xl text-gray-700 mb-8">
              Welcome to our interactive quiz platform. Challenge yourself with these quizzes to test and enhance your knowledge 
              of Hindu philosophy, practices, and traditions. Complete quizzes to track your progress and identify areas for further study.
            </p>
          </div>
          
          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="featured">Featured Quizzes</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="community">Community Quizzes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="featured">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredQuizzes.map(quiz => (
                  <Card key={quiz.id} className="hover:shadow-md transition-shadow cursor-pointer bg-gradient-to-br from-indian-cream to-white border border-indian-saffron/30">
                    <Link to={`/learn/quizzes/${quiz.id}`}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-medium mb-2">{quiz.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{quiz.description}</p>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{quiz.questionCount} Questions</span>
                          <span>{quiz.difficulty}</span>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="categories">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryQuizzes.map(quiz => (
                  <Card key={quiz.id} className="hover:shadow-md transition-shadow cursor-pointer bg-gradient-to-br from-indian-cream to-white border border-indian-saffron/30">
                    <Link to={`/learn/quizzes/${quiz.id}`}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-medium mb-2">{quiz.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{quiz.description}</p>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{quiz.questionCount} Questions</span>
                          <span>{quiz.difficulty}</span>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="community">
              <div className="space-y-6">
                <p className="text-lg mb-6">
                  These quizzes have been created by our community members. You can also contribute by submitting your own questions!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {communityQuizzes.map(quiz => (
                    <Card key={quiz.id} className="hover:shadow-md transition-shadow cursor-pointer bg-gradient-to-br from-indian-cream to-white border border-indian-saffron/30">
                      <Link to={`/learn/quizzes/${quiz.id}`}>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-medium mb-1">{quiz.title}</h3>
                          <p className="text-xs text-gray-500 mb-2">Created by {quiz.author}</p>
                          <p className="text-gray-600 text-sm mb-3">{quiz.description}</p>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>{quiz.questionCount} Questions</span>
                            <span>{quiz.difficulty}</span>
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
                
                <div className="flex justify-center mt-8">
                  <Link to="/learn/submit" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-spiritual-500 hover:bg-spiritual-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-spiritual-500">
                    Submit Your Own Questions
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
};

export default QuizPage;
