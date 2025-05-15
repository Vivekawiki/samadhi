import React, { useState, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const SeminarToast = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Hide the toast after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 left-4 md:left-auto z-50 md:max-w-md w-auto bg-white rounded-lg shadow-lg border border-indian-saffron/30 overflow-hidden">
      <div className="bg-gradient-to-r from-indian-cream to-white p-3 sm:p-4 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close notification"
        >
          <X size={16} />
        </button>

        <div className="flex items-start">
          <div className="flex-shrink-0 mr-2 sm:mr-3 hidden sm:block">
            <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-indian-saffron" />
          </div>
          <div>
            <h3 className="font-semibold text-spiritual-700 text-sm sm:text-base pr-4">Upcoming Seminar (18th May)</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2 sm:line-clamp-none">
              Sri Ramakrishna's Organisational Wisdom and the Early History of the Ramakrishna Movement in South Africa (1897-1965)
            </p>
            <Link
              to="/services/seminar-registration"
              className="inline-block mt-2 px-2 sm:px-3 py-1 bg-indian-saffron text-white text-xs sm:text-sm rounded-full hover:bg-indian-saffron/80 transition-colors"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeminarToast;
