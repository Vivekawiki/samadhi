
import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import { Card, CardContent } from '../ui/card';

const HolyTrinity = () => {
  const deities = [
    {
      name: "Brahma",
      role: "The Creator",
      description: "The creator deity who is traditionally depicted with four faces and four arms. He is responsible for the creation of the universe and all beings.",
      image: "https://images.unsplash.com/photo-1562767332-ce0b1e2c2ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Vishnu",
      role: "The Preserver",
      description: "The preserver and protector of the universe. Vishnu is associated with mercy, goodness, and the maintenance of cosmic order (dharma).",
      image: "https://images.unsplash.com/photo-1583391733981-8b530057166e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Shiva",
      role: "The Destroyer",
      description: "Known as the destroyer, Shiva represents the end of the cosmic cycle, clearing the path for regeneration and new creation through Brahma.",
      image: "https://images.unsplash.com/photo-1567591414240-e9c0cc916582?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 bg-opacity-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="The Holy Trinity"
          subtitle="Understanding the three primary deities of Hindu cosmology who govern creation, preservation, and dissolution"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {deities.map((deity, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-indian-saffron shadow-lg mb-6">
                <img 
                  src={deity.image} 
                  alt={deity.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-1">{deity.name}</h3>
              <h4 className="text-lg text-spiritual-600 mb-3">{deity.role}</h4>
              <p className="text-center text-gray-600">{deity.description}</p>
            </div>
          ))}
        </div>
        
        <Card className="mt-10 bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30">
          <CardContent className="p-6">
            <p className="text-center text-lg italic text-gray-700 font-heading">
              "The Trinity represents the cosmic functions of creation (Brahma), preservation (Vishnu), 
              and destruction or transformation (Shiva). Together, they symbolize the cycle of existence 
              and the divine forces that govern our universe."
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HolyTrinity;
