import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import ScrollToTop from '../shared/ScrollToTop';
import { pageTransition } from '../../lib/animation';

interface ImageViewLayoutProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const ImageViewLayout = ({ children, title, className = '' }: ImageViewLayoutProps) => {
  const mainRef = useRef<HTMLDivElement>(null);

  // Set document title when component mounts
  useEffect(() => {
    const defaultTitle = 'Ramakrishna Centre of South Africa, Johannesburg';
    document.title = title ? `${title} | ${defaultTitle}` : defaultTitle;

    // Scroll to top on page change
    window.scrollTo(0, 0);

    // Apply page transition animation
    if (mainRef.current) {
      pageTransition(mainRef.current);
    }
  }, [title]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main content with padding for fixed navbar */}
      <main
        ref={mainRef}
        className={`flex-grow ${className}`} // Removed default pt-20 padding
      >
        {children}
      </main>

      <ScrollToTop />
    </div>
  );
};

export default ImageViewLayout;
