
import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import EventCard from '../shared/EventCard';
import Button from '../shared/Button';

// Sample recent activities data
const activities = [
  {
    title: 'Community Service Day',
    date: 'May 28, 2023',
    time: '8:00 AM - 2:00 PM',
    location: 'Local Community Center',
    description: 'Members gathered to serve meals and distribute essentials to those in need, embodying the Vedantic principle of selfless service (seva).',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/gallery/community-service',
  },
  {
    title: 'Diwali Celebrations',
    date: 'November 12, 2023',
    time: '6:00 PM - 10:00 PM',
    location: 'Main Temple',
    description: 'A grand celebration of the festival of lights with lamp lighting, cultural performances, and a community feast.',
    image: 'https://images.unsplash.com/photo-1635161828037-1669f4e43829?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/gallery/festivals',
  },
  {
    title: 'Yoga & Meditation Retreat',
    date: 'April 15, 2023',
    time: '7:00 AM - 4:00 PM',
    location: 'Ashram Gardens',
    description: 'A day-long retreat focused on yoga practices, guided meditation sessions, and spiritual discussions in the serene environment of our gardens.',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/gallery/retreats',
  },
];

const RecentActivities = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Recent Activities"
          subtitle="A look back at our recent community gatherings and spiritual events"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {activities.map((activity, index) => (
            <EventCard
              key={index}
              title={activity.title}
              date={activity.date}
              time={activity.time}
              location={activity.location}
              description={activity.description}
              image={activity.image}
              link={activity.link}
              className="border-indian-saffron"
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/gallery" variant="outline">
            View All Activities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentActivities;
