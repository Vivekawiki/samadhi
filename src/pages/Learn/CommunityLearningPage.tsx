
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import PageHeader from '../../components/shared/PageHeader';
import SectionHeader from '../../components/shared/SectionHeader';
import Button from '../../components/shared/Button';
import NotFoundMessage from '../../components/learn/NotFoundMessage';

const CommunityLearningPage = () => {
  // This is a placeholder that will be expanded in the future
  const isUnderDevelopment = true;

  if (isUnderDevelopment) {
    return (
      <NotFoundMessage 
        title="Community Learning Coming Soon"
        message="We're currently developing our community learning platform. Please check back later for interactive learning activities, quizzes, and the ability to submit questions."
        backTo="/learn"
        backLabel="Return to Learning Centre"
      />
    );
  }

  return (
    <PageLayout title="Community Learning | Hinduism for Children">
      <PageHeader 
        title="Community Learning" 
        subtitle="Engage with our community and enhance your understanding of Hindu philosophy"
        backgroundImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          {/* Future content will go here */}
        </div>
      </div>
    </PageLayout>
  );
};

export default CommunityLearningPage;
