import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollToTop from '@/components/shared/ScrollToTop';
import Footer from '@/components/layout/Footer';
import ImageWithLinks from './ImageWithLinks';

// Define the clickable areas for each page
const pageClickableAreas = [
  // Page 1 clickable areas
  [
    {
      shape: 'rect' as const,
      coords: '142,630,442,680', // Perfectly positioned clickable area
      href: 'https://forms.gle/E1x1zG2DUBqBsRXy9', // Updated Google Form link
      alt: 'Registration form link'
    }
  ],
  // Page 2 clickable areas - no clickable areas
  []
];

const SeminarRegistration = () => {
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

  // Preload images to avoid flicker when changing pages
  useEffect(() => {
    const preloadImages = () => {
      for (let i = 1; i <= totalPages; i++) {
        const img = new Image();
        img.src = `/pics/seminar_website_${i}.jpg`;
        img.onload = () => {
          if (i === currentPage) {
            setIsLoading(false);
          }
        };
      }
    };

    preloadImages();
  }, [currentPage, totalPages]);

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

            <div className={`${isLoading ? 'hidden' : 'block'} w-full flex justify-center items-center relative`}>
              {/* Previous Button - Left Side */}
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`absolute left-[28%] z-5 flex items-center justify-center w-10 h-10 rounded-full bg-white/80 shadow-md ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed opacity-50'
                    : 'text-indian-saffron hover:bg-indian-saffron/10 hover:scale-110 transition-transform'
                }`}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Image Container */}
              <div className="w-[36.5%] overflow-hidden rounded-md transition-all duration-300 hover:scale-[1.01]">
                {currentPage === 1 ? (
                  <a
                    href="https://forms.gle/E1x1zG2DUBqBsRXy9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer relative z-20 block"
                  >
                    <img
                      src={`/pics/seminar_website_${currentPage}.jpg`}
                      alt="Seminar Registration Form - Page 1"
                      width="100%"
                      height="auto"
                      className="max-w-full h-auto border-2 border-indian-saffron/30 rounded-md transition-all duration-300 hover:border-indian-saffron shadow-sm hover:shadow-md"
                    />
                  </a>
                ) : (
                  <div className="relative z-20">
                    <img
                      src={`/pics/seminar_website_${currentPage}.jpg`}
                      alt={`Seminar Registration Form - Page ${currentPage}`}
                      width="100%"
                      height="auto"
                      className="max-w-full h-auto border-2 border-indian-saffron/30 rounded-md transition-all duration-300 shadow-sm"
                    />
                  </div>
                )}
              </div>

              {/* Next Button - Right Side */}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`absolute right-[28%] z-5 flex items-center justify-center w-10 h-10 rounded-full bg-white/80 shadow-md ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed opacity-50'
                    : 'text-indian-saffron hover:bg-indian-saffron/10 hover:scale-110 transition-transform'
                }`}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="flex justify-center items-center p-4">
              <div className="text-gray-700">
                Page {currentPage} of {totalPages}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SeminarRegistration;
