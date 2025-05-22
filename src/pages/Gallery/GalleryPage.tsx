import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import SectionHeader from '../../components/shared/SectionHeader';
import { Card } from '@/components/ui/card';
import { galleryImages } from '../../data/galleryData';

// Filter to only show event images
const eventImages = galleryImages.filter(image => image.category === 'events');

const GalleryPage = () => {

  return (
    <PageLayout title="Gallery">
      {/* Header in the style of Hinduism for Children */}
      <div className="flex items-center justify-center py-12 bg-gradient-to-br from-indian-cream to-white">
        <div className="inline-block p-6 rounded-lg bg-gradient-to-br from-indian-cream to-white border border-indian-saffron shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-[1.01] text-center">
          <h1 className="text-3xl font-heading font-bold mb-4 text-black">Gallery</h1>
          <p className="text-gray-700">
            Visual journey through our centre's events, activities, and spiritual heritage
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-gradient-to-br from-indian-cream to-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Recent Events"
            subtitle="Browse images from our recent events and activities"
          />

          {/* Gallery Grid */}
          <GalleryGrid images={eventImages} />
        </div>
      </div>
    </PageLayout>
  );
};

// Gallery Grid Component
interface GalleryGridProps {
  images: GalleryImage[];
}

const GalleryGrid = ({ images }: GalleryGridProps) => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  // Function to handle image load success
  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };

  // Function to handle image load error
  const handleImageError = (id: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: false
    }));
  };

  // Filter out images that failed to load
  const validImages = images.filter(image => loadedImages[image.id] !== false);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((image) => (
        <Link
          key={image.id}
          to={`/gallery/image/${image.id}`}
          className={`block transform transition-all duration-300 hover:scale-[1.02] h-[300px] ${
            loadedImages[image.id] === false ? 'hidden' : ''
          }`}
        >
          <Card className="overflow-hidden border border-indian-saffron/30 bg-white pop-shadow-card h-full relative">
            {/* Image fills the entire card */}
            <div className="w-full h-full absolute inset-0">
              <img
                src={image.path}
                alt={image.title}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                onLoad={() => handleImageLoad(image.id)}
                onError={() => handleImageError(image.id)}
              />
            </div>
            {/* No text overlay or content on the cards */}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default GalleryPage;
