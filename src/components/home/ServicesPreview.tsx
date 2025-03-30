
import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import Card from '../shared/Card';
import { BookOpen, Heart, Users, Baby, Star } from 'lucide-react';

// Service items with icons
const services = [
  {
    title: "Spiritual Gatherings",
    description: "Join our regular satsangs, meditation sessions, and spiritual discourses based on the teachings of Vedanta philosophy.",
    icon: <Users className="w-12 h-12 text-spiritual-500" />,
    link: "/services/satsangs"
  },
  {
    title: "Hinduism for Children",
    description: "Fun educational programs designed specifically for children to learn about Hindu values, philosophy, and culture in an engaging way.",
    icon: <Baby className="w-12 h-12 text-spiritual-500" />,
    link: "/services/hinduism-for-children",
    isChildThemed: true
  },
  {
    title: "Community Outreach",
    description: "Various humanitarian services including nutrition programs, women empowerment initiatives, and educational support for the underprivileged.",
    icon: <Heart className="w-12 h-12 text-spiritual-500" />,
    link: "/services/community-outreach"
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Services"
          subtitle="Explore the various spiritual, educational, and humanitarian services we offer"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center p-6 ${
                service.isChildThemed 
                  ? "bg-gradient-to-br from-spiritual-50 to-yellow-50 rounded-2xl border-2 border-spiritual-100" 
                  : "bg-gray-50 rounded-lg"
              } hover:shadow-md transition-all duration-300 card-hover`}
            >
              <div className={`mb-4 ${service.isChildThemed ? "animate-bounce" : ""}`}>
                {service.icon}
                {service.isChildThemed && <Star className="w-6 h-6 text-spiritual-500 ml-8 -mt-3" />}
              </div>
              <h3 className={`text-xl font-heading font-semibold mb-3 ${service.isChildThemed ? "text-spiritual-600" : ""}`}>
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a 
                href={service.link} 
                className={`mt-auto inline-flex items-center ${
                  service.isChildThemed 
                    ? "text-spiritual-600 hover:text-spiritual-700" 
                    : "text-spiritual-600 hover:text-spiritual-700"
                } font-medium`}
              >
                Learn More
                <svg 
                  className="ml-1 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
