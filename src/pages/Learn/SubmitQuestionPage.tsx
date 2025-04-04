
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import NotFoundMessage from '../../components/learn/NotFoundMessage';

const SubmitQuestionPage = () => {
  // This is a placeholder that will be expanded in the future
  const isUnderDevelopment = true;

  if (isUnderDevelopment) {
    return (
      <NotFoundMessage 
        title="Question Submission Coming Soon"
        message="Our question submission platform is under development. Soon you'll be able to contribute to our growing question bank."
        backTo="/learn"
        backLabel="Return to Learning Centre"
      />
    );
  }

  return (
    <PageLayout title="Submit Questions | Hinduism for Children">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Future question submission form will go here */}
          <p>Question submission functionality is under development.</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default SubmitQuestionPage;
