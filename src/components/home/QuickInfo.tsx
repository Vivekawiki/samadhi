
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../shared/SectionHeader';
import Button from '../shared/Button';

const QuickInfo = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Our Centre"
          subtitle="Serving the spiritual and cultural needs of the community in Johannesburg"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
          {/* Image Column */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Ramakrishna Centre"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          
          {/* Text Column */}
          <div className="space-y-6 max-w-2xl">
            <h3 className="text-2xl font-heading font-semibold">Our Mission</h3>
            <p className="text-gray-700">
              The Ramakrishna Centre of South Africa, Johannesburg is dedicated to the propagation of the teachings of Sri Ramakrishna, Holy Mother Sri Sarada Devi, and Swami Vivekananda. We strive to promote the harmony of religions, the spiritual upliftment of humanity, and service to all beings.
            </p>
            <p className="text-gray-700">
              Founded on the principle of "Service to humanity is service to God," our Centre offers a variety of spiritual, educational, and humanitarian services to the community, regardless of religion, race, or background.
            </p>
            
            <div className="pt-4">
              <Button href="/about/our-centre">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
        
        {/* New Ashram Project Banner */}
        <div className="mt-20 bg-spiritual-50 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-semibold text-spiritual-800">New Ashram Project</h3>
              <p className="text-gray-700">
                Help us build a new spiritual center to better serve our growing community. The new ashram will provide expanded facilities for meditation, education, and community outreach programs.
              </p>
              <div className="pt-2">
                <Button href="/new-ashram-project" variant="primary">
                  Support Our Project
                </Button>
              </div>
            </div>
            
            <div className="h-[250px] rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="New Ashram Project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;
