import React from 'react';
import SectionHeader from '../../components/shared/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';

const PresenceInSA = () => {
  const communityImpacts = [
    "Spiritual programs that promote inner peace and harmony",
    "Educational activities for children and adults",
    "Humanitarian services for the underprivileged",
    "Cultural events that celebrate India's spiritual heritage",
    "Interfaith dialogues promoting religious harmony"
  ];

  return (
    <div className="animate-fade-in">
      <SectionHeader 
        title="Presence in South Africa" 
        subtitle="The history and growth of the Ramakrishna Movement in South Africa"
        alignment="left"
      />
      
      <div className="prose prose-lg max-w-none mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-heading font-semibold mb-4">Introduction</h3>
            <p>
              The idea of starting a Ramakrishna Movement in Africa had germinated in the mind of Swami Vivekananda, 
              the principal architect of the organisation, for in 1897 he wrote to his brother monk, Swami Shivananda Mahapurush: 
              “Mr Setlur... writes to me to send somebody to Africa... No immediate results can be expected but in the long run 
              it will prove more beneficial work for India than any yet attempted.”
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md h-full flex">
            <img 
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="South African Landscape" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3">Early Beginnings</h3>
              <p>
                The seeds of the Ramakrishna Movement in South Africa were planted in the early 20th century when the teachings of Swami Vivekananda began reaching the shores of South Africa. Literature from the Ramakrishna Order found its way to interested individuals and small study groups formed around these teachings.
              </p>
              <p className="mt-4 text-sm italic text-gray-600">
                [Placeholder: Specific historical details about the first organized Ramakrishna-related activities in South Africa and the key figures involved.]
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3">Establishment of the Centre</h3>
              <p>
                The Ramakrishna Centre of South Africa was officially established in [placeholder year] in Durban, making it one of the earliest Ramakrishna Mission centers outside India. The Johannesburg branch was later established in [placeholder year] to serve the growing number of devotees in the Gauteng province.
              </p>
              <p className="mt-4 text-sm italic text-gray-600">
                [Placeholder: Details about the founding of the Johannesburg branch, including key personalities and milestone events.]
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3">Growth and Development</h3>
              <p>
                Over the decades, the Johannesburg branch has grown significantly, expanding its activities and outreach programs. The Centre has evolved from small gatherings in devotees' homes to a full-fledged institution with its own premises, regular spiritual programs, educational initiatives, and humanitarian services.
              </p>
              <p className="mt-4 text-sm italic text-gray-600">
                [Placeholder: Timeline of key developments, expansion of services, acquisition of properties, etc.]
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-heading font-semibold mb-4">Spiritual Leadership</h3>
              <p>
                The spiritual guidance of resident swamis (monks) from the Ramakrishna Order has been instrumental in maintaining the authenticity of the teachings and practices at the Centre. Over the years, several swamis have served at the Johannesburg branch, each contributing to its growth and spiritual ambiance.
              </p>
              <p className="mt-4 text-sm italic text-gray-600">
                [Placeholder: Information about past and present spiritual heads of the Centre, their contributions, etc.]
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-heading font-semibold mb-4">Community Impact</h3>
              <p className="mb-4">
                The Ramakrishna Centre in Johannesburg has made significant contributions to the local community through various initiatives:
              </p>
              <ul className="grid grid-cols-1 gap-3">
                {communityImpacts.map((impact, index) => (
                  <li key={index} className="bg-white/50 p-3 rounded border border-indian-saffron/20 flex items-center">
                    <span className="w-2 h-2 bg-indian-saffron rounded-full mr-2"></span>
                    {impact}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm italic text-gray-600">
                [Placeholder: Specific examples of community impact, testimonials, statistics, etc.]
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-gradient-to-r from-indian-cream to-white border border-indian-saffron/30 mb-12">
          <CardContent className="p-6">
            <h4 className="text-xl font-heading font-semibold mb-4">Looking to the Future</h4>
            <p className="mb-4">
              As the Ramakrishna Centre of South Africa, Johannesburg continues to grow, it remains committed to its founding principles while adapting to the changing needs of the community. The New Ashram Project represents the next significant step in this journey, aiming to create expanded facilities for spiritual, educational, and humanitarian activities.
            </p>
            <p>
              Through this project and ongoing programs, the Centre seeks to continue the legacy of Sri Ramakrishna, Holy Mother Sri Sarada Devi, and Swami Vivekananda in South Africa, serving as a beacon of spiritual light and humanitarian service for generations to come.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PresenceInSA;
