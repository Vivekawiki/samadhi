
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import SectionHeader from '../../components/shared/SectionHeader';
import Button from '../../components/shared/Button';
import { Card } from '@/components/ui/card';
import { Check, Home, Book, Users, Bed, FileText, Building, Heart, Target } from 'lucide-react';

const VisionPage = () => {
  const features = [
    { icon: <Home className="h-8 w-8 text-indian-saffron" />, title: "Temple", description: "A serene temple for worship and meditation" },
    { icon: <Book className="h-8 w-8 text-indian-saffron" />, title: "Classrooms", description: "Modern classrooms for spiritual and educational programs" },
    { icon: <FileText className="h-8 w-8 text-indian-saffron" />, title: "Library", description: "A library housing spiritual literature and resources" },
    { icon: <Bed className="h-8 w-8 text-indian-saffron" />, title: "Accommodation", description: "Facilities for visiting swamis and retreat participants" },
    { icon: <Users className="h-8 w-8 text-indian-saffron" />, title: "Community Spaces", description: "Gathering spaces for satsangs and celebrations" },
    { icon: <Building className="h-8 w-8 text-indian-saffron" />, title: "Offices", description: "Administrative offices to manage our growing activities" },
    { icon: <Heart className="h-8 w-8 text-indian-saffron" />, title: "Service Center", description: "Facilities for our humanitarian service programs" },
  ];

  const challenges = [
    "Limited space for larger gatherings and events",
    "Insufficient classrooms for our expanding educational programs",
    "Inadequate facilities for accommodating visitors and retreat participants",
    "Growing need for dedicated spaces for various service activities",
    "Rising maintenance costs for our aging current building",
  ];

  return (
    <PageLayout title="Project Vision & Necessity">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Project Vision & Necessity" 
            subtitle="Building a spiritual home for generations to come"
            alignment="left"
          />
          
          <div className="mt-8 rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1566264956194-e49942084030?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="New Ashram Project Vision" 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
            <div className="bg-gradient-to-br from-indian-cream to-white p-8 rounded-lg border border-indian-saffron">
              <h2 className="text-3xl font-heading font-semibold mb-6 text-indian-blue">Our Vision</h2>
              <p className="text-gray-700 mb-6">
                The vision for our new ashram is to create a spiritual sanctuary that embodies the ideals of Sri Ramakrishna, 
                Holy Mother Sri Sarada Devi, and Swami Vivekananda. This center will serve as a beacon of spiritual light, 
                offering a space for meditation, study, and service to the community.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start p-4 rounded-md bg-white shadow-sm border border-indian-saffron/20">
                    <div className="mr-4 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-indian-cream to-white p-8 rounded-lg border border-indian-saffron">
                <h2 className="text-3xl font-heading font-semibold mb-6 text-indian-blue">Why It's Necessary</h2>
                <p className="text-gray-700 mb-6">
                  Our current facilities have served us well for many years, but as our community has grown, 
                  we face increasing constraints:
                </p>
                
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-indian-saffron mr-2 mt-0.5" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Card className="p-6 bg-gradient-to-br from-indian-cream to-white border border-indian-saffron">
                <h3 className="text-2xl font-heading font-semibold mb-4 flex items-center">
                  <Target className="mr-2 h-6 w-6 text-indian-saffron" />
                  A Centre for All
                </h3>
                <p className="text-gray-700">
                  The new ashram will be a welcoming space for people of all backgrounds, beliefs, and walks of life. 
                  It will be a place where anyone seeking spiritual growth, peace, and community can find support and guidance.
                </p>
                <p className="mt-4 text-gray-700">
                  We are committed to creating an environment that honors the universality of Vedanta's teachings 
                  while providing practical facilities for our community's needs.
                </p>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-12 py-8 bg-gradient-to-br from-indian-cream to-white rounded-lg border border-indian-saffron">
            <p className="text-xl font-semibold mb-6">
              Help us bring this vision to life
            </p>
            <Button href="/new-ashram-project/fundraising" size="lg" className="bg-indian-saffron hover:bg-indian-saffron/90 text-white">
              Support the Project
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default VisionPage;
