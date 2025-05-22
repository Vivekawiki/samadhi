import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Download, Share } from 'lucide-react';
import ImageViewLayout from '../../components/layout/ImageViewLayout';
import { getImageById, galleryImages } from '../../data/galleryData';
import { Button } from '@/components/ui/button';
import Footer from '../../components/layout/Footer';

// Filter to only show event images
const eventImages = galleryImages.filter(image => image.category === 'events');

const GalleryImageView = () => {
  const { imageId } = useParams<{ imageId: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Find the current image and its index
  const currentImage = imageId ? getImageById(imageId) : undefined;
  const currentIndex = currentImage
    ? eventImages.findIndex(img => img.id === imageId)
    : -1;

  // Get previous and next image IDs
  const prevImageId = currentIndex > 0
    ? eventImages[currentIndex - 1].id
    : eventImages[eventImages.length - 1].id;

  const nextImageId = currentIndex < eventImages.length - 1
    ? eventImages[currentIndex + 1].id
    : eventImages[0].id;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        navigate(`/gallery/image/${prevImageId}`);
      } else if (e.key === 'ArrowRight') {
        navigate(`/gallery/image/${nextImageId}`);
      } else if (e.key === 'Escape') {
        navigate('/gallery');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, prevImageId, nextImageId]);

  // Handle image loading
  useEffect(() => {
    if (currentImage) {
      setIsLoading(true);
      const img = new Image();
      img.src = currentImage.path;
      img.onload = () => setIsLoading(false);
      img.onerror = () => setIsLoading(false);
    }
  }, [currentImage]);

  // Handle share functionality
  const handleShare = async () => {
    if (navigator.share && currentImage) {
      try {
        await navigator.share({
          title: currentImage.title,
          text: currentImage.description || 'Check out this image from Ramakrishna Centre, Johannesburg',
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };

  // Handle download functionality
  const handleDownload = () => {
    if (currentImage) {
      const link = document.createElement('a');
      link.href = currentImage.path;
      link.download = `${currentImage.title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!currentImage) {
    return (
      <ImageViewLayout title="Image Not Found">
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
          <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
            <h2 className="text-2xl font-bold mb-4">Image Not Found</h2>
            <p className="mb-6">The image you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/gallery">Return to Gallery</Link>
            </Button>
          </div>
        </div>
      </ImageViewLayout>
    );
  }

  return (
    <ImageViewLayout title={currentImage.title}>
      <div className="flex flex-col min-h-screen">
        {/* Main content - added pt-20 for navbar spacing */}
        <div className="flex-grow flex items-center justify-center bg-gradient-to-b-indian-cream-to-white relative pt-20">
          {/* Close button */}
          <button
            onClick={() => navigate('/gallery')}
            className="absolute top-24 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={() => navigate(`/gallery/image/${prevImageId}`)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => navigate(`/gallery/image/${nextImageId}`)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image container */}
          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
            {isLoading ? (
              <div className="animate-pulse bg-gray-300 w-full max-w-4xl aspect-square md:aspect-auto md:h-[80vh]"></div>
            ) : (
              <img
                src={currentImage.path}
                alt={currentImage.title}
                className="max-h-[80vh] max-w-full object-cover border border-indian-saffron"
              />
            )}
          </div>
        </div>



        {/* Footer */}
        <Footer />
      </div>
    </ImageViewLayout>
  );
};

export default GalleryImageView;
