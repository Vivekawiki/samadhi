
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import PageHeader from '../../components/shared/PageHeader';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, MessagesSquare, HelpCircle, Users, Video } from 'lucide-react';

const LearningCommunity = () => {
  return (
    <PageLayout title="Learning Community">
      <PageHeader 
        title="Learning Community" 
        subtitle="Connect with fellow learners and test your knowledge"
        backgroundImage="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/learn" className="inline-flex items-center text-spiritual-500 hover:text-spiritual-600 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Learning Centre
          </Link>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-semibold mb-6">Join Our Learning Community</h2>
            
            <p>
              Our learning community provides a space for students of all ages to connect, share insights, and deepen their understanding of Hindu philosophy and practices.
            </p>
            
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-heading font-semibold mb-3 flex items-center">
                  <Video className="w-5 h-5 mr-2 text-spiritual-500" />
                  Lessons
                </h3>
                <p>Access our structured lesson content with videos, quizzes and supplementary materials.</p>
                <Link to="/learn/lessons" className="mt-4 text-spiritual-500 hover:text-spiritual-600 inline-flex items-center">
                  Browse Lessons
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-heading font-semibold mb-3 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-spiritual-500" />
                  Interactive Quizzes
                </h3>
                <p>Test your knowledge with our collection of quizzes on various topics in Hinduism.</p>
                <div className="mt-4 text-spiritual-500">Coming soon</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-heading font-semibold mb-3 flex items-center">
                  <MessagesSquare className="w-5 h-5 mr-2 text-spiritual-500" />
                  Discussion Forums
                </h3>
                <p>Engage in thoughtful discussions about Hindu philosophy, ethics, and practices.</p>
                <div className="mt-4 text-spiritual-500">Coming soon</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-heading font-semibold mb-3 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-spiritual-500" />
                  Q&A Sessions
                </h3>
                <p>Submit your questions about Hinduism and get answers from knowledgeable practitioners.</p>
                <div className="mt-4 text-spiritual-500">Coming soon</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-heading font-semibold mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-spiritual-500" />
                  Study Groups
                </h3>
                <p>Join virtual study groups focused on specific texts or topics in Hindu philosophy.</p>
                <div className="mt-4 text-spiritual-500">Coming soon</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg my-8 border-l-4 border-spiritual-500">
              <h4 className="text-xl font-heading font-semibold mb-2">Coming Soon</h4>
              <p>
                Some of our learning community features are under development and will be launched soon. 
                Check back for updates or register for our newsletter to be notified when these features become available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LearningCommunity;
