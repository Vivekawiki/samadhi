
import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import { Card, CardContent } from '../ui/card';

const HolyTrinity = () => {
  const deities = [
    {
      name: "Sri Ramakrishna",
      role: "The Spiritual Teacher",
      description: "Sri Ramakrishna Paramahamsa was a mystic and saint whose spiritual experiences and teachings formed the foundation of the Ramakrishna Movement.",
      image: "/lovable-uploads/ff802407-da30-4efc-941c-05f69a329db7.png"
    },
    {
      name: "Sri Sarada Devi",
      role: "The Holy Mother",
      description: "Sri Sarada Devi, known reverently as Holy Mother, was the spiritual consort of Sri Ramakrishna and embodied unconditional love and compassion.",
      image: "/lovable-uploads/6103c45d-7ef6-40da-a95e-d5695cd3526d.png"
    },
    {
      name: "Swami Vivekananda",
      role: "The Universal Ambassador",
      description: "Swami Vivekananda was the chief disciple of Sri Ramakrishna and the founder of the Ramakrishna Math and Mission, spreading Vedanta philosophy worldwide.",
      image: "/lovable-uploads/0ee38c83-a4f6-4d5b-8142-1c66e6c7ff04.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 bg-opacity-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="The Holy Trinity"
          subtitle="Understanding Sri Ramakrishna, Sri Sarada Devi, and Swami Vivekananda"
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
              "The Holy Trinity represents the spiritual foundation of the Ramakrishna movement, embodying the teacher (Sri Ramakrishna), 
              the compassionate mother (Sri Sarada Devi), and the dynamic disciple (Swami Vivekananda) who spread the teachings worldwide."
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HolyTrinity;
