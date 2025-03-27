
import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import EventCard from '../shared/EventCard';
import Button from '../shared/Button';

// Sample events data
const events = [
  {
    title: 'Sunday Satsang',
    date: 'Every Sunday',
    time: '9:00 AM - 11:00 AM',
    location: 'Main Temple Hall',
    description: 'Join us for our weekly Sunday Satsang, featuring bhajans (devotional songs), readings from sacred texts, and a spiritual discourse.',
    image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/services/satsangs',
  },
  {
    title: 'Hinduism for Children Classes',
    date: 'Every Saturday',
    time: '10:00 AM - 12:00 PM',
    location: 'Education Building',
    description: 'Weekly classes teaching fundamental concepts of Hinduism, Vedanta philosophy, and moral values to children through engaging activities and stories.',
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/services/hinduism-for-children',
  },
  {
    title: 'Meditation Workshop',
    date: 'June 15, 2023',
    time: '6:00 PM - 8:00 PM',
    location: 'Meditation Hall',
    description: 'Learn meditation techniques based on Vedantic principles. This workshop is suitable for beginners and those looking to deepen their practice.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/services/special-functions',
  },
];

const FeaturedEvents = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Upcoming Events"
          subtitle="Join us for these upcoming spiritual gatherings and educational programs"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              image={event.image}
              link={event.link}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/services" variant="outline">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
