
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import SectionHeader from '../../components/shared/SectionHeader';
import Button from '../../components/shared/Button';

const VisionPage = () => {
  return (
    <PageLayout title="Project Vision & Necessity">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="Project Vision & Necessity" 
            subtitle="Building a spiritual home for generations to come"
            alignment="left"
          />
          
          <div className="prose prose-lg max-w-none mb-12">
            <div className="my-8 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1566264956194-e49942084030?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="New Ashram Project Vision" 
                className="w-full h-auto"
              />
            </div>
            
            <h3 className="text-2xl font-heading font-semibold mb-4">Our Vision</h3>
            <p>
              The vision for our new ashram is to create a spiritual sanctuary that embodies the ideals of Sri Ramakrishna, Holy Mother Sri Sarada Devi, and Swami Vivekananda. This center will serve as a beacon of spiritual light, offering a space for meditation, study, and service to the community.
            </p>
            <p>
              We envision a multi-purpose facility that will include:
            </p>
            <ul>
              <li>A serene temple for worship and meditation</li>
              <li>Modern classrooms for spiritual and educational programs</li>
              <li>A library housing spiritual literature and resources</li>
              <li>Accommodation for visiting swamis and retreat participants</li>
              <li>Community gathering spaces for satsangs and celebrations</li>
              <li>Administrative offices to manage our growing activities</li>
              <li>Facilities for our humanitarian service programs</li>
            </ul>
            
            <h3 className="text-2xl font-heading font-semibold mb-4">Why It's Necessary</h3>
            <p>
              Our current facilities have served us well for many years, but as our community has grown, we face increasing constraints:
            </p>
            <ul>
              <li>Limited space for larger gatherings and events</li>
              <li>Insufficient classrooms for our expanding educational programs</li>
              <li>Inadequate facilities for accommodating visitors and retreat participants</li>
              <li>Growing need for dedicated spaces for various service activities</li>
              <li>Rising maintenance costs for our aging current building</li>
            </ul>
            <p>
              The new ashram will allow us to better fulfill our mission of spreading the universal teachings of Vedanta and serving humanity, especially in the Johannesburg area where there is a growing interest in spiritual practices and teachings.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg my-8 border-l-4 border-spiritual-500">
              <h4 className="text-xl font-heading font-semibold mb-2">A Centre for All</h4>
              <p>
                The new ashram will be a welcoming space for people of all backgrounds, beliefs, and walks of life. It will be a place where anyone seeking spiritual growth, peace, and community can find support and guidance.
              </p>
              <p className="mt-4">
                We are committed to creating an environment that honors the universality of Vedanta's teachings while providing practical facilities for our community's needs.
              </p>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-xl font-semibold mb-6">
                Help us bring this vision to life
              </p>
              <Button href="/new-ashram-project/fundraising" size="lg">
                Support the Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default VisionPage;
