
import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import EventCard from '../shared/EventCard';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';

// Sample recent activities data focused on Nutrition Programme
const activities = [
  {
    title: 'April Nutrition Programme Distribution',
    date: 'April 15, 2023',
    time: '9:00 AM - 1:00 PM',
    location: 'Community Center',
    description: 'Monthly distribution of essential food items to 150 families in need, providing nutritional support to the community.',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/services/community-outreach',
  },
  {
    title: 'March Nutrition Programme Distribution',
    date: 'March 18, 2023',
    time: '9:00 AM - 1:00 PM',
    location: 'Community Center',
    description: 'Distribution of food parcels and nutritional supplements to underprivileged families, supporting approximately 175 households.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/services/community-outreach',
  },
  {
    title: 'February Nutrition Programme Distribution',
    date: 'February 20, 2023',
    time: '9:00 AM - 1:00 PM',
    location: 'Community Center',
    description: 'Monthly food distribution service providing essential nutritional support to families in need, with educational materials on balanced diets.',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/services/community-outreach',
  },
];

const RecentActivities = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indian-cream to-white border-t border-indian-saffron/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nutrition Programme Activities"
          subtitle="Recent monthly distributions supporting our local community"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {activities.map((activity, index) => (
            <Link key={index} to="/services/community-outreach" className="block">
              <EventCard
                title={activity.title}
                date={activity.date}
                time={activity.time}
                location={activity.location}
                description={activity.description}
                image={activity.image}
                link="/services/community-outreach"
                className="border-indian-saffron bg-gradient-to-br from-indian-cream to-white"
              />
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/services/community-outreach" variant="outline" className="border-indian-saffron text-indian-saffron hover:bg-indian-saffron/10">
            Learn More About Our Community Outreach
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentActivities;
