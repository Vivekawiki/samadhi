import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import PageLayout from '../../components/layout/PageLayout';

const FullSizeImage = () => {
  const { imageId } = useParams();
  const navigate = useNavigate();

  // Map of image IDs to their paths and titles
  const imageMap: Record<string, { path: string, title: string }> = {
    'march2025': {
      path: '/images/nutrition/march2025.jpg',
      title: 'March 2025 Nutrition Workshop'
    },
    'feb2025': {
      path: '/images/nutrition/feb2025.jpg',
      title: 'February 2025 Food Distribution'
    },
    'jan2025': {
      path: '/images/nutrition/jan2025.jpg',
      title: 'January 2025 Food Relief'
    },
    'december2024': {
      path: '/images/nutrition/december2024.jpg',
      title: 'December 2024 Holiday Program'
    },
    'november2024': {
      path: '/images/nutrition/november2024.jpg',
      title: 'November 2024 Food Drive'
    },
    'september2024': {
      path: '/images/nutrition/september2024.jpg',
      title: 'September 2024 Food Distribution'
    },
    'august2024': {
      path: '/images/nutrition/august2024.jpg',
      title: 'August 2024 Nutrition Drive'
    },
    'october1': {
      path: '/images/nutrition/october1.jpg',
      title: 'October 2024 Cooking Workshop'
    },
    'october2': {
      path: '/images/nutrition/october2.jpg',
      title: 'October 2024 Food Distribution'
    }
  };

  const imageInfo = imageId && imageMap[imageId] ? imageMap[imageId] : null;

  const handleClose = () => {
    navigate('/services/nutrition-programme');
  };

  if (!imageInfo) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-heading font-semibold mb-4">Image Not Found</h1>
          <p className="mb-8">The requested image could not be found.</p>
          <button 
            onClick={handleClose}
            className="px-4 py-2 bg-spiritual-500 text-white rounded hover:bg-spiritual-600"
          >
            Return to Nutrition Programme
          </button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-heading font-semibold">{imageInfo.title}</h1>
          <button 
            onClick={handleClose}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg flex justify-center items-center">
          <img 
            src={imageInfo.path} 
            alt={imageInfo.title} 
            className="max-w-full max-h-[80vh] object-contain"
          />
        </div>
        
        <div className="mt-8 text-center">
          <button 
            onClick={handleClose}
            className="px-4 py-2 bg-spiritual-500 text-white rounded hover:bg-spiritual-600"
          >
            Return to Nutrition Programme
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default FullSizeImage;
