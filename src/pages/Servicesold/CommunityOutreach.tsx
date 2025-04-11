import React from 'react';
import PageHeader from '../../components/shared/PageHeader';

const CommunityOutreach = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Community Outreach"
        subtitle="Our initiatives to serve the community"
        backgroundImage="/lovable-uploads/services.png"
      />
      <div className="max-w-4xl mx-auto mt-8">
        <p className="text-lg text-gray-700 mb-6">
          The Ramakrishna Centre of South Africa is committed to serving the community through various outreach programs.
        </p>
      </div>
    </div>
  );
};

export default CommunityOutreach;
