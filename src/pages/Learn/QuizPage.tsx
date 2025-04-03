
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import NotFoundMessage from '../../components/learn/NotFoundMessage';

const QuizPage = () => {
  // This is a placeholder that will be expanded in the future
  const isUnderDevelopment = true;

  if (isUnderDevelopment) {
    return (
      <NotFoundMessage 
        title="Quizzes Coming Soon"
        message="Our interactive quiz platform is under development. Soon you'll be able to test your knowledge on various topics in Hinduism."
        backTo="/learn"
        backLabel="Return to Learning Centre"
      />
    );
  }

  return (
    <PageLayout title="Interactive Quizzes | Hinduism for Children">
      {/* Future quiz content will go here */}
    </PageLayout>
  );
};

export default QuizPage;
