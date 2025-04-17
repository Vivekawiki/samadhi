import React from 'react';
import { Heart, Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';

const NutritionProgramme = () => {
  const nutritionActivities = [
    {
      id: 1,
      title: "Food Distribution",
      description: "Weekly distribution of food parcels to families in need",
      image: "/images/nutrition/food-distribution.jpg"
    },
    {
      id: 2,
      title: "Community Kitchen",
      description: "Daily meals served at our community kitchen",
      image: "/images/nutrition/community-kitchen.jpg"
    },
    {
      id: 3,
      title: "School Feeding",
      description: "Providing nutritious meals to school children",
      image: "/images/nutrition/school-feeding.jpg"
    }
  ];

  return (
    <PageLayout title="Nutrition Programme">
      <div className="min-h-screen w-full bg-gradient-to-br from-indian-cream to-white">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block p-6 rounded-lg bg-gradient-to-br from-indian-cream to-white border border-indian-saffron shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-[1.01] text-center w-full mb-8">
                <h1 className="text-3xl font-heading font-bold mb-4 text-black flex items-center justify-center gap-2">
                  <Heart className="w-8 h-8 text-indian-saffron" />
                  Nutrition Programme
                </h1>
                <p className="text-gray-700">
                  Our core community service initiative focusing on providing nutritious meals 
                  and food support to those in need within our community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
                {nutritionActivities.map((activity) => (
                  <div 
                    key={activity.id} 
                    className="h-auto flex flex-col bg-gradient-to-br from-indian-cream to-white rounded-lg overflow-hidden shadow-sm border border-indian-saffron/30 hover:shadow-md transition-all hover:scale-[1.02] duration-300"
                  >
                    <Link to={`/services/nutrition-programme/image/${activity.id}`} className="h-full flex flex-col">
                      <div className="h-[200px] md:h-[250px] overflow-hidden bg-gradient-to-br from-indian-cream to-white border-b border-indian-saffron/30 flex items-center justify-center px-4">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="w-[90%] h-full object-contain transform hover:scale-105 transition-transform duration-300 rounded-lg"
                        />
                      </div>
                      <div className="flex-grow p-4 bg-gradient-to-br from-indian-cream to-white">
                        <h3 className="text-lg md:text-xl font-heading font-semibold mb-1 md:mb-2 text-indian-maroon">
                          {activity.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-700">{activity.description}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="bg-gradient-to-br from-indian-cream to-white p-6 rounded-lg shadow-sm border border-indian-saffron/30">
                  <h3 className="text-xl font-heading font-semibold mb-4 text-indian-blue flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-indian-saffron" />
                    Programme Schedule
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indian-saffron"></span>
                      Daily Meals: 12:00 PM - 2:00 PM
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indian-saffron"></span>
                      Food Parcel Distribution: Every Saturday
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indian-saffron"></span>
                      School Feeding: During School Terms
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-indian-cream to-white p-6 rounded-lg shadow-sm border border-indian-saffron/30">
                  <h3 className="text-xl font-heading font-semibold mb-4 text-indian-blue flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-indian-saffron" />
                    Locations
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indian-saffron"></span>
                      Main Centre Kitchen
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indian-saffron"></span>
                      Mobile Distribution Points
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indian-saffron"></span>
                      Partner Schools
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indian-cream to-white p-8 rounded-lg border border-indian-saffron/30 shadow-sm">
                <h3 className="text-xl font-heading font-semibold mb-6 text-indian-blue flex items-center gap-2">
                  <Users className="w-6 h-6 text-indian-saffron" />
                  How to Help
                </h3>
                <p className="text-gray-700 mb-6">
                  You can support our Nutrition Programme through:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-indian-cream to-white p-4 rounded-lg border border-indian-saffron/30">
                    <h4 className="font-semibold mb-2 text-indian-maroon">Volunteer</h4>
                    <p className="text-sm text-gray-700">Join us in food preparation and distribution</p>
                  </div>
                  <div className="bg-gradient-to-br from-indian-cream to-white p-4 rounded-lg border border-indian-saffron/30">
                    <h4 className="font-semibold mb-2 text-indian-maroon">Donate</h4>
                    <p className="text-sm text-gray-700">Contribute food items or funds</p>
                  </div>
                  <div className="bg-gradient-to-br from-indian-cream to-white p-4 rounded-lg border border-indian-saffron/30">
                    <h4 className="font-semibold mb-2 text-indian-maroon">Spread Awareness</h4>
                    <p className="text-sm text-gray-700">Help us reach more people in need</p>
                  </div>
                  <div className="bg-gradient-to-br from-indian-cream to-white p-4 rounded-lg border border-indian-saffron/30">
                    <h4 className="font-semibold mb-2 text-indian-maroon">Partner With Us</h4>
                    <p className="text-sm text-gray-700">Join as a business or organization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NutritionProgramme;


