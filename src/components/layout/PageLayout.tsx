
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const PageLayout = ({ children, title }: PageLayoutProps) => {
  // Set document title when component mounts
  useEffect(() => {
    const defaultTitle = 'Ramakrishna Centre of South Africa, Johannesburg';
    document.title = title ? `${title} | ${defaultTitle}` : defaultTitle;
    
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Main content with padding for fixed navbar */}
      <main className="flex-grow pt-20">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
