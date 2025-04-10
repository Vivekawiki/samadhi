
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../shared/SectionHeader';
import Button from '../shared/Button';
import './quickinfo.css';

const QuickInfo = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indian-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Our Centre"
          subtitle="Serving the spiritual and cultural needs of the community in Johannesburg"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-center">
          {/* Image Column */}
          <div className="relative h-[400px] mission-image-container pop-shadow" style={{ marginBottom: '20px' }}>
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Ramakrishna Centre"
              className="mission-image"
            />
            <div className="mission-image-overlay"></div>
          </div>

          {/* Text Column */}
          <div className="space-y-6 max-w-2xl">
            <h3 className="text-2xl font-heading font-semibold tracking-tight">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed tracking-wide">
              The Ramakrishna Centre of South Africa was founded in 1942 by Swami Nischalananda. Its Johannesburg Centre (started 1954) is a registered PBO/NPO (930050436/161-189 NPO) providing humanitarian and social services for over 75 years.
            </p>
            <p className="text-gray-700 leading-relaxed tracking-wide">
              The Centre promotes peace and harmony, uplifting disadvantaged communities through outreach including medical aid, skills development, education, and distributing value-based literature.
            </p>

            <div className="pt-4">
              <Button href="/about/our-centre">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>

        {/* New Ashram Project Banner */}
        <div className="mt-20 bg-gradient-to-r from-spiritual-50 to-white rounded-lg p-8 md:p-12 border border-spiritual-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-semibold text-spiritual-800 tracking-tight">New Ashram Project</h3>
              <p className="text-gray-700 leading-relaxed tracking-wide">
                The Johannesburg Centre conducts a wide-range of welfare work and is developing a fixed premises to expand on this. The sole purpose of this development is to serve and uplift society and to promote spirituality and tranquility, where devotees can find God in themselves and around them.
              </p>
              <div className="pt-2">
                <Button href="/new-ashram-project" variant="primary">
                  Support Our Project
                </Button>
              </div>
            </div>

            <div className="h-[250px] ashram-image-container pop-shadow-brown" style={{ marginBottom: '20px' }}>
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="New Ashram Project"
                className="ashram-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;
