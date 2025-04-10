
import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import { Card, CardContent } from '../ui/card';
import './trinity.css';

const HolyTrinity = () => {
  // Custom styles for each deity image container
  const imageStyles = {
    ramakrishna: {
      backgroundImage: "url('/lovable-uploads/ff802407-da30-4efc-941c-05f69a329db7.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat'
    },
    saradaDevi: {
      backgroundImage: "url('/lovable-uploads/6103c45d-7ef6-40da-a95e-d5695cd3526d.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat'
    },
    vivekananda: {
      backgroundImage: "url('/lovable-uploads/0ee38c83-a4f6-4d5b-8142-1c66e6c7ff04.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat'
    }
  };

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
    <section className="py-16 bg-gradient-to-br from-indian-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="The Holy Trinity"
          subtitle="Understanding Sri Ramakrishna, Sri Sarada Devi, and Swami Vivekananda"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {deities.map((deity, index) => (
            <div key={index} className="flex flex-col items-center p-6 border-2 border-indian-saffron/50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-indian-cream to-white trinity-container">
              <div
                className="w-48 h-64 overflow-hidden border-4 border-indian-saffron shadow-lg mb-6 bg-white rounded-lg trinity-image"
                style={index === 0 ? imageStyles.ramakrishna :
                       index === 1 ? imageStyles.saradaDevi :
                       imageStyles.vivekananda}
                aria-label={deity.name}
              ></div>
              <h3 className="text-2xl font-heading font-bold mb-1 trinity-name">{deity.name}</h3>
              <h4 className="text-lg text-spiritual-600 mb-3 trinity-role">{deity.role}</h4>
              <p className="text-center text-gray-600">{deity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HolyTrinity;
