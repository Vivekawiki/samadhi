import React from 'react';
import { ArrowUp } from 'lucide-react';

const SimpleScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-colors z-50"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default SimpleScrollButton;
