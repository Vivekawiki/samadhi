import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import PageHeader from '../../components/shared/PageHeader';
import GalleryCategoryList from '../../components/gallery/GalleryCategoryList';

const GalleryPage = () => {
  return (
    <PageLayout title="Gallery">
      <div className="flex items-center justify-center py-12 bg-gradient-to-br from-indian-cream to-white">
        <div className="inline-block p-6 rounded-lg bg-gradient-to-br from-indian-cream to-white border border-indian-saffron shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-[1.01] text-center">
          <h1 className="text-3xl font-heading font-bold mb-4 text-black">Gallery</h1>
          <p className="text-gray-700">
            Browse photos and videos from our events and activities
          </p>
        </div>
      </div>

      <div className="w-full bg-gradient-to-br from-indian-cream to-white py-12 -mt-6">
        <div className="container mx-auto px-4">
        <GalleryCategoryList />
        </div>
      </div>
    </PageLayout>
  );
};

export default GalleryPage;
