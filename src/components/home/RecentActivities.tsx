
import React, { useState, useRef } from 'react';
import SectionHeader from '../shared/SectionHeader';
import EventCard from '../shared/EventCard';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './carousel.css';

// Nutrition programme activities data with real images
const activities = [
  {
    id: 'march2025',
    title: 'March Nutrition Workshop',
    date: 'March 15, 2025',
    location: 'Centre Hall',
    description: 'Workshop on balanced diets and healthy eating habits.',
    image: '/images/nutrition/march2025.jpg',
    link: '/services/nutrition-programme/image/march2025',
  },
  {
    id: 'feb2025',
    title: 'February Food Distribution',
    date: 'February 18, 2025',
    location: 'Diepsloot Community Centre',
    description: 'Food parcels with staples and fresh produce for 220 families.',
    image: '/images/nutrition/feb2025.jpg',
    link: '/services/nutrition-programme/image/feb2025',
  },
  {
    id: 'jan2025',
    title: 'January Food Relief',
    date: 'January 20, 2025',
    location: 'Soweto Community Centre',
    description: 'Emergency food relief for families affected by recent floods.',
    image: '/images/nutrition/jan2025.jpg',
    link: '/services/nutrition-programme/image/jan2025',
  },
  {
    id: 'december2024',
    title: 'December Holiday Program',
    date: 'December 15, 2024',
    location: 'Alexandra Township',
    description: 'Special holiday nutrition program for children and families.',
    image: '/images/nutrition/december2024.jpg',
    link: '/services/nutrition-programme/image/december2024',
  },
  {
    id: 'november2024',
    title: 'November Food Drive',
    date: 'November 10, 2024',
    location: 'Diepsloot Community Centre',
    description: 'Community food drive providing meals to 180 families.',
    image: '/images/nutrition/november2024.jpg',
    link: '/services/nutrition-programme/image/november2024',
  },
  {
    id: 'september2024',
    title: 'September Food Distribution',
    date: 'September 22, 2024',
    location: 'Soweto Community Hall',
    description: 'Food distribution supporting 200 families in Soweto.',
    image: '/images/nutrition/september2024.jpg',
    link: '/services/nutrition-programme/image/september2024',
  },
];

const RecentActivities = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Calculate if we can scroll left or right
  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = scrollPosition < maxScroll;

  // Handle scrolling left and right
  const handleScroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const cardWidth = container.querySelector('.card-container')?.clientWidth || 0;
    const scrollAmount = cardWidth + 24; // Card width + gap (24px)

    if (direction === 'left' && canScrollLeft) {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right' && canScrollRight) {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Update scroll position when scrolling
  const handleScrollEvent = () => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    setScrollPosition(container.scrollLeft);
    setMaxScroll(container.scrollWidth - container.clientWidth);
  };

  // Initialize maxScroll on component mount
  React.useEffect(() => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      setMaxScroll(container.scrollWidth - container.clientWidth);

      // Add resize listener to update maxScroll when window resizes
      const handleResize = () => {
        setMaxScroll(container.scrollWidth - container.clientWidth);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-indian-cream to-white w-full">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <SectionHeader
            title="Nutrition Programme Activities"
            subtitle="Recent humanitarian efforts to serve our community"
          />
        </div>
        <div className="flex justify-center mb-4 max-w-[977px] mx-auto">
          <div className="flex space-x-2">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full ${canScrollLeft ? 'bg-spiritual-100 text-spiritual-600 hover:bg-spiritual-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`p-2 rounded-full ${canScrollRight ? 'bg-spiritual-100 text-spiritual-600 hover:bg-spiritual-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto hide-scrollbar pb-4 w-full max-w-[977px] mx-auto"
          onScroll={handleScrollEvent}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-[30px]">
            {activities.map((activity, index) => (
              <div key={index} className="flex-shrink-0" style={{ width: '300px' }}>
                <Link to={activity.link}>
                  <div className="h-[400px] flex flex-col bg-white rounded-lg overflow-hidden border border-indian-saffron hover:shadow-md transition-all hover:scale-[1.02] duration-300">
                    <div className="h-[75%] overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="h-[25%] p-4 bg-gradient-to-br from-indian-cream to-white border-t border-indian-saffron">
                      <h3 className="text-xl font-heading font-semibold mb-2 text-indian-maroon line-clamp-1">
                        {activity.title}
                      </h3>
                      <p className="text-gray-700 text-sm line-clamp-2">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            href="/services/nutrition-programme" 
            variant="outline" 
            className="border-indian-saffron text-indian-saffron hover:bg-indian-saffron/10"
          >
            View All Nutrition Programme Activities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentActivities;
