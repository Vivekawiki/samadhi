import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollToTop from '@/components/shared/ScrollToTop';
import Footer from '@/components/layout/Footer';
import ImageWithLinks from './ImageWithLinks';

// This is an example of how we would define the clickable areas for each page
// In a real implementation, these coordinates would need to be measured precisely
const pageClickableAreas = [
  // Page 1 clickable areas
  [
    {
      shape: 'rect' as const,
      coords: '100,200,300,230', // Example coordinates (x1,y1,x2,y2)
      href: 'mailto:example@example.com',
      alt: 'Email link'
    },
    {
      shape: 'rect' as const,
      coords: '150,300,350,330', // Example coordinates
      href: 'https://example.com',
      alt: 'Website link'
    }
  ],
  // Page 2 clickable areas
  [
    {
      shape: 'rect' as const,
      coords: '120,250,320,280', // Example coordinates
      href: 'tel:+1234567890',
      alt: 'Phone number'
    }
  ]
];

const SeminarRegistrationWithImages = () => {
  // Add effect to close any open mobile menu when this page loads
  useEffect(() => {
    // Find and close the mobile menu if it's open
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      // Find the close button and click it
      const closeButton = mobileMenu.querySelector('button[aria-label="Close"]');
      if (closeButton) {
        (closeButton as HTMLButtonElement).click();
      }
    }
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Preload images to avoid flicker when changing pages
  useEffect(() => {
    const preloadImages = () => {
      for (let i = 1; i <= totalPages; i++) {
        const img = new Image();
        img.src = `/pics/seminar_website-${i}.jpg`; // Assuming we have JPG versions
        img.onload = () => {
          if (i === currentPage) {
            setIsLoading(false);
          }
        };
      }
    };

    preloadImages();
  }, [currentPage, totalPages]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indian-cream to-white">
      <ScrollToTop />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-3">
          <Link
            to="/services/special-functions"
            className="inline-flex items-center text-indian-saffron hover:text-indian-saffron/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Link>
        </div>

        <div className="bg-gradient-to-br from-indian-cream to-white border border-indian-saffron rounded-lg shadow-lg overflow-hidden max-w-full">
          <div className="p-0">
            {isLoading && (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indian-saffron"></div>
              </div>
            )}

            <div className={`${isLoading ? 'hidden' : 'block'} w-full flex justify-center`}>
              <div className="w-[45%] overflow-hidden rounded-md shadow-md">
                <ImageWithLinks
                  src={`/pics/seminar_website-${currentPage}.jpg`} // Assuming we have JPG versions
                  alt={`Seminar Registration Form - Page ${currentPage}`}
                  width="100%"
                  height="auto"
                  mapName={`seminar-map-${currentPage}`}
                  clickableAreas={pageClickableAreas[currentPage - 1]}
                />
              </div>
            </div>

            <div className="flex justify-between items-center p-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`flex items-center px-4 py-2 rounded-md ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-indian-saffron hover:bg-indian-saffron/10'
                }`}
              >
                <ChevronLeft className="mr-1 h-5 w-5" />
                Previous
              </button>

              <div className="text-gray-700">
                Page {currentPage} of {totalPages}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center px-4 py-2 rounded-md ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-indian-saffron hover:bg-indian-saffron/10'
                }`}
              >
                Next
                <ChevronRight className="ml-1 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SeminarRegistrationWithImages;
