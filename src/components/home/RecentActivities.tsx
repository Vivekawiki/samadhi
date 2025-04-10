
import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import EventCard from '../shared/EventCard';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';

// Sample recent activities data
const activities = [
  {
    title: 'Food Donation Drive',
    date: 'March 15, 2024',
    time: '9:00 AM - 1:00 PM',
    location: 'Diepsloot Community Centre',
    description: 'Distributed food parcels and hot meals to 200 families in the Diepsloot community.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/services/community-outreach',
  },
  {
    title: 'Women Empowerment Workshop',
    date: 'February 28, 2024',
    time: '10:00 AM - 3:00 PM',
    location: 'Centre Hall',
    description: 'Conducted skills development training for 50 women, focusing on entrepreneurship and financial literacy.',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/services/community-outreach',
  },
  {
    title: 'Back-to-School Supply Distribution',
    date: 'January 20, 2024',
    time: '8:00 AM - 12:00 PM',
    location: 'Northriding Primary School',
    description: 'Provided school supplies, uniforms, and books to 150 underprivileged children starting the new school year.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/services/community-outreach',
  },
];

const RecentActivities = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indian-cream to-white w-full">
      <SectionHeader
        title="Nutrition Programme Activities"
        subtitle="Recent humanitarian efforts to serve our community"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {activities.map((activity, index) => (
          <Link key={index} to="/services/community-outreach">
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
          View All Outreach Activities
        </Button>
      </div>
    </section>
  );
};

export default RecentActivities;
