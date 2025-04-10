import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import gsap from 'gsap';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top with animation
  const scrollToTop = () => {
    // Use GSAP to animate scrolling to top
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 0.8,
      ease: 'power3.inOut'
    });
  };

  // Animate button appearance
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        '#scroll-to-top-btn',
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(1.7)' }
      );
    }
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-spiritual-500 text-white shadow-lg hover:bg-spiritual-600 transition-colors z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
