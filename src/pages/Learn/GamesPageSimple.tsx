import React from 'react';
import PageLayout from '../../components/layout/PageLayout';

const GamesPageSimple = () => {
  return (
    <PageLayout className="no-top-padding">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Learning Games</h1>
        <p className="mt-4">This is a simple test page for games.</p>
      </div>
    </PageLayout>
  );
};

export default GamesPageSimple;
