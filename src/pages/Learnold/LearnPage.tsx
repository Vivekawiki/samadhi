import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import PageHeader from '../../components/shared/PageHeader';

const LearnPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Learning Platform"
        subtitle="Explore our educational resources"
        backgroundImage="/lovable-uploads/learn.png"
      />
      <div className="max-w-4xl mx-auto mt-8">
        <p className="text-lg text-gray-700 mb-6">
          Welcome to our learning platform where you can explore various topics related to Vedanta and Hindu philosophy.
        </p>
      </div>
    </div>
  );
};

export default LearnPage;
