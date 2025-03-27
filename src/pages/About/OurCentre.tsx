
import React from 'react';
import SectionHeader from '../../components/shared/SectionHeader';

const OurCentre = () => {
  return (
    <div className="animate-fade-in">
      <SectionHeader 
        title="Our Centre" 
        subtitle="History, Mission, and Values of the Ramakrishna Centre of South Africa, Johannesburg"
        alignment="left"
      />
      
      <div className="prose prose-lg max-w-none mb-12">
        <h3 className="text-2xl font-heading font-semibold mb-4">History</h3>
        <p>
          The Ramakrishna Centre of South Africa, Johannesburg Branch, has a rich history dating back to [placeholder year]. It was established to serve the spiritual needs of the growing community interested in the universal teachings of Vedanta as exemplified by Sri Ramakrishna, Holy Mother Sri Sarada Devi, and Swami Vivekananda.
        </p>
        <p>
          Over the decades, the Centre has grown from small gatherings in devotees' homes to a full-fledged spiritual and cultural institution serving thousands of people across Johannesburg and surrounding areas.
        </p>
        
        <div className="my-8 rounded-lg overflow-hidden shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Ramakrishna Centre Building" 
            className="w-full h-auto"
          />
        </div>
        
        <h3 className="text-2xl font-heading font-semibold mb-4">Our Mission</h3>
        <p>
          The mission of the Ramakrishna Centre of South Africa, Johannesburg Branch, is to propagate the universal teachings of Vedanta as exemplified in the lives of Sri Ramakrishna, Holy Mother Sri Sarada Devi, and Swami Vivekananda, and to promote:
        </p>
        <ul>
          <li>The harmony of religions and the spiritual unity of humanity</li>
          <li>Character building based on spiritual values</li>
          <li>Service to humanity as service to the Divine</li>
          <li>Educational and cultural activities that foster spiritual growth</li>
          <li>Community welfare through various humanitarian services</li>
        </ul>
        
        <h3 className="text-2xl font-heading font-semibold mb-4">Our Values</h3>
        <p>
          The Ramakrishna Centre is guided by the following core values:
        </p>
        <ul>
          <li><strong>Universal Acceptance:</strong> Recognizing the validity of all religions as paths to the same ultimate reality</li>
          <li><strong>Service:</strong> Serving humanity as a form of worship</li>
          <li><strong>Spiritual Growth:</strong> Encouraging the realization of one's divine nature</li>
          <li><strong>Harmony:</strong> Promoting peace and understanding among all</li>
          <li><strong>Knowledge:</strong> Disseminating the wisdom of Vedanta and other spiritual traditions</li>
          <li><strong>Character:</strong> Developing moral and ethical strength</li>
        </ul>
        
        <div className="bg-gray-50 p-6 rounded-lg my-8 border-l-4 border-spiritual-500">
          <h4 className="text-xl font-heading font-semibold mb-2">Our Motto</h4>
          <blockquote className="italic text-gray-700">
            "For one's own liberation and for the welfare of the world."
          </blockquote>
          <p className="mt-4">
            This motto, inspired by Swami Vivekananda, encapsulates our dual commitment to individual spiritual growth and selfless service to humanity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCentre;
