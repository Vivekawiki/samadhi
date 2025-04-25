import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import SectionHeader from '../../components/shared/SectionHeader';
import Button from '../../components/shared/Button';
import { Card } from '@/components/ui/card';
import { Check, Home, Book, Users, Bed, FileText, Building, Heart, Target, Church, BookOpen, Flower2 } from 'lucide-react';

const VisionPage = () => {
  const features = [
    { icon: <Home className="h-8 w-8 text-indian-saffron" />, title: "Temple", description: "A serene temple for worship and meditation" },
    { icon: <Book className="h-8 w-8 text-indian-saffron" />, title: "Classrooms", description: "Modern classrooms for spiritual and educational programs" },
    { icon: <FileText className="h-8 w-8 text-indian-saffron" />, title: "Library", description: "A library housing spiritual literature and resources" },
    { icon: <Bed className="h-8 w-8 text-indian-saffron" />, title: "Accommodation", description: "Facilities for visiting scholars and professional volunteers" },
    { icon: <Users className="h-8 w-8 text-indian-saffron" />, title: "Community Spaces", description: "Gathering spaces for satsangs and celebrations" },
    { icon: <Building className="h-8 w-8 text-indian-saffron" />, title: "Offices", description: "Administrative offices to manage our growing activities" },
    { icon: <Heart className="h-8 w-8 text-indian-saffron" />, title: "Service Center", description: "Facilities for our humanitarian service programs" },
  ];

  const challenges = [
    "Limited space for larger gatherings and events",
    "Insufficient classrooms for our expanding educational programs",
    "Inadequate facilities for accommodating visitors and retreat participants",
    "Growing need for dedicated spaces for various service activities"
  ];

  return (
    <PageLayout title="Project Vision & Necessity">
      <div className="min-h-screen w-full bg-gradient-to-br from-indian-cream to-white">
        <div className="w-full">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto">
              <SectionHeader
                title="Project Vision & Necessity"
                subtitle="Building a spiritual home for generations to come"
                alignment="left"
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
                <div className="bg-gradient-to-br from-indian-cream to-white p-8 rounded-lg border border-indian-saffron pop-shadow-card">
                  <h2 className="text-3xl font-heading font-semibold mb-6 text-black">Our Vision</h2>
                  <p className="text-black mb-6">
                    The vision for our new ashram is to create a spiritual sanctuary that embodies the ideals of Sri Ramakrishna,
                    Holy Mother Sri Sarada Devi, and Swami Vivekananda. This center will serve as a beacon of spiritual light,
                    offering a space for meditation, study, and service to the community.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start p-4 rounded-md bg-gradient-to-br from-indian-cream to-white shadow-sm border border-indian-saffron/20 pop-shadow-card">
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
                  <div className="bg-gradient-to-br from-indian-cream to-white p-8 rounded-lg border border-indian-saffron pop-shadow-card">
                    <h2 className="text-3xl font-heading font-semibold mb-6 text-black">Why It's Necessary</h2>
                    <p className="text-black mb-6">
                      For several years we have been operating from rented premises. This has severely restricted the scope of our spiritual and humanitarian activities. Currently, we have:
                    </p>

                    <ul className="space-y-3">
                      {challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-8 w-8 text-indian-saffron mr-2 mt-0.5" />
                          <span className="text-black">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Card className="p-6 bg-gradient-to-br from-indian-cream to-white border border-indian-saffron pop-shadow-card">
                    <h3 className="text-2xl font-heading font-semibold mb-4 flex items-center">
                      <Target className="mr-2 h-6 w-6 text-indian-saffron" />
                      A Centre for All
                    </h3>
                    <p className="text-gray-700 mb-4">
                      The new Centre will have:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <Check className="h-8 w-8 text-indian-saffron" />
                        </div>
                        <span className="ml-3">A place of worship – The Temple</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <Check className="h-8 w-8 text-indian-saffron" />
                        </div>
                        <span className="ml-3">A Swami Vivekananda Skills Development Centre – Conducting medical, skills-development, and value-based education programmes</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <Check className="h-8 w-8 text-indian-saffron" />
                        </div>
                        <span className="ml-3">An administration building – supporting the welfare & humanitarian activities</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <Check className="h-8 w-8 text-indian-saffron" />
                        </div>
                        <span className="ml-3">Residential facilities – For monks and professional volunteers</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <Check className="h-8 w-8 text-indian-saffron" />
                        </div>
                        <span className="ml-3">Classrooms</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div className="text-center mt-12 py-8 bg-gradient-to-br from-indian-cream to-white rounded-lg border border-indian-saffron pop-shadow-card">
                <p className="text-xl font-semibold mb-6">
                  Help us bring this vision to life
                </p>
                <Button href="/new-ashram-project/fundraising" size="lg" className="bg-indian-saffron hover:bg-indian-saffron/90 text-white">
                  Support the Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default VisionPage;
