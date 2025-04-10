import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { staggerElements } from '@/lib/animation';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface AnimatedBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const AnimatedBreadcrumb = ({ items, className = '' }: AnimatedBreadcrumbProps) => {
  const location = useLocation();
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (breadcrumbRef.current) {
      const elements = breadcrumbRef.current.querySelectorAll('.breadcrumb-item');
      staggerElements(elements, 0.1);
    }
  }, [location.pathname]);
  
  return (
    <nav 
      ref={breadcrumbRef}
      className={`flex items-center py-3 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <Link 
        to="/" 
        className="breadcrumb-item flex items-center text-gray-500 hover:text-spiritual-600 transition-colors"
      >
        <Home className="h-4 w-4 mr-1" />
        <span className="sr-only">Home</span>
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={item.path}>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          <Link
            to={item.path}
            className={`breadcrumb-item ${
              index === items.length - 1
                ? 'font-medium text-spiritual-600'
                : 'text-gray-500 hover:text-spiritual-600 transition-colors'
            }`}
            aria-current={index === items.length - 1 ? 'page' : undefined}
          >
            {item.label}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default AnimatedBreadcrumb;
