
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import PageHeader from '../../components/shared/PageHeader';
import GalleryCategoryList from '../../components/gallery/GalleryCategoryList';

const GalleryPage = () => {
  return (
    <PageLayout title="Gallery">
      <PageHeader 
        title="Gallery" 
        subtitle="Browse photos and videos from our events and activities"
        backgroundImage="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />
      
      <div className="container mx-auto px-4 py-12">
        <GalleryCategoryList />
      </div>
    </PageLayout>
  );
};

export default GalleryPage;
