
import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
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
  return (
    <section className="py-16 bg-gradient-to-br from-indian-cream to-white w-full">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <SectionHeader
            title="Nutrition Programme Activities"
            subtitle="Recent humanitarian efforts to serve our community"
          />
        </div>

        <div className="max-w-[1140px] mx-auto relative">
          <Carousel opts={{
            align: "start",
            loop: true,
            slides: { perView: 3, spacing: 8 }
          }}>
            <CarouselContent className="-ml-2">
              {activities.slice(0, 3).map((activity) => (
                <CarouselItem key={activity.id} className="pl-2 basis-1/3">
                  <div className="h-[475px] flex flex-col bg-white rounded-lg overflow-hidden shadow-md border-2 border-indian-saffron/40 hover:border-indian-saffron/60 hover:shadow-lg transition-all hover:scale-[1.02] duration-300">
                    <Link to={activity.link} className="h-full flex flex-col">
                      <div className="h-[75%] bg-indian-cream/20">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="h-[25%] p-5 bg-gradient-to-br from-indian-cream to-white border-t-2 border-indian-saffron/40">
                        <h3 className="text-xl font-heading font-semibold text-indian-maroon line-clamp-1 mb-2">
                          {activity.title}
                        </h3>
                        <p className="text-base text-gray-700 line-clamp-2">
                          {activity.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 h-12 w-12" />
            <CarouselNext className="-right-12 h-12 w-12" />
          </Carousel>
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
