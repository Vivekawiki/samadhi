
import React from 'react';
import SectionHeader from '../../components/shared/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';

const OurCentre = () => {
  return (
    <div className="animate-fade-in">
      <SectionHeader 
        title="Our Centre" 
        subtitle="History, Mission, and Values of the Ramakrishna Centre of South Africa, Johannesburg"
        alignment="left"
      />
      
      <div className="prose prose-lg max-w-none mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-4">History</h3>
            <div className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 p-6 rounded-lg shadow-sm">
              <p>
                The Ramakrishna Centre of South Africa, Johannesburg Branch, has a rich history dating back to [placeholder year]. It was established to serve the spiritual needs of the growing community interested in the universal teachings of Vedanta as exemplified by Sri Ramakrishna, Holy Mother Sri Sarada Devi, and Swami Vivekananda.
              </p>
              <p className="mt-4">
                Over the decades, the Centre has grown from small gatherings in devotees' homes to a full-fledged spiritual and cultural institution serving thousands of people across Johannesburg and surrounding areas.
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md h-full flex">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Ramakrishna Centre Building" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <Card className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 mb-12">
          <CardContent className="p-6">
            <h3 className="text-2xl font-heading font-semibold mb-4">Our Mission</h3>
            <p>
              The mission of the Ramakrishna Centre of South Africa, Johannesburg Branch, is to propagate the universal teachings of Vedanta as exemplified in the lives of Sri Ramakrishna, Holy Mother Sri Sarada Devi, and Swami Vivekananda, and to promote:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white/50 p-4 rounded border border-indian-saffron/20">
                <p className="font-medium">The harmony of religions and the spiritual unity of humanity</p>
              </div>
              <div className="bg-white/50 p-4 rounded border border-indian-saffron/20">
                <p className="font-medium">Character building based on spiritual values</p>
              </div>
              <div className="bg-white/50 p-4 rounded border border-indian-saffron/20">
                <p className="font-medium">Service to humanity as service to the Divine</p>
              </div>
              <div className="bg-white/50 p-4 rounded border border-indian-saffron/20">
                <p className="font-medium">Educational and cultural activities that foster spiritual growth</p>
              </div>
              <div className="bg-white/50 p-4 rounded border border-indian-saffron/20">
                <p className="font-medium">Community welfare through various humanitarian services</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-heading font-semibold mb-4">Our Values</h3>
              <p className="mb-4">
                The Ramakrishna Centre is guided by the following core values:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-2"></span>
                  <div>
                    <span className="font-semibold">Universal Acceptance:</span> Recognizing the validity of all religions as paths to the same ultimate reality
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-2"></span>
                  <div>
                    <span className="font-semibold">Service:</span> Serving humanity as a form of worship
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-2"></span>
                  <div>
                    <span className="font-semibold">Spiritual Growth:</span> Encouraging the realization of one's divine nature
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-2"></span>
                  <div>
                    <span className="font-semibold">Harmony:</span> Promoting peace and understanding among all
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-2"></span>
                  <div>
                    <span className="font-semibold">Knowledge:</span> Disseminating the wisdom of Vedanta and other spiritual traditions
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-indian-saffron mt-2 mr-2"></span>
                  <div>
                    <span className="font-semibold">Character:</span> Developing moral and ethical strength
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 h-full">
            <CardContent className="p-6">
              <h4 className="text-xl font-heading font-semibold mb-2">Our Motto</h4>
              <div className="p-6 bg-white/70 rounded-lg mb-4 border border-indian-saffron/20">
                <blockquote className="italic text-xl text-center text-gray-700">
                  "For one's own liberation and for the welfare of the world."
                </blockquote>
              </div>
              <p className="text-gray-700">
                This motto, inspired by Swami Vivekananda, encapsulates our dual commitment to individual spiritual growth and selfless service to humanity.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OurCentre;
