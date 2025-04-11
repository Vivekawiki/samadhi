import React from 'react';
import { Link } from 'react-router-dom';

const NutritionProgramme = () => {
  // Nutrition programme activities data with real images, sorted from most recent to oldest
  const nutritionActivities = [
    {
      id: 'march2025',
      title: 'March 2025 Nutrition Workshop',
      image: '/images/nutrition/march2025.jpg',
    },
    {
      id: 'feb2025',
      title: 'February 2025 Food Distribution',
      image: '/images/nutrition/feb2025.jpg',
    },
    {
      id: 'jan2025',
      title: 'January 2025 Food Relief',
      image: '/images/nutrition/jan2025.jpg',
    },
    {
      id: 'december2024',
      title: 'December 2024 Holiday Program',
      image: '/images/nutrition/december2024.jpg',
    },
    {
      id: 'november2024',
      title: 'November 2024 Food Drive',
      image: '/images/nutrition/november2024.jpg',
    },
    {
      id: 'september2024',
      title: 'September 2024 Food Distribution',
      image: '/images/nutrition/september2024.jpg',
    },
  ];

  return (
    <div className="prose prose-lg max-w-none animate-fade-in">
      <h2 className="text-3xl font-heading font-semibold mb-6">Nutrition Programme</h2>

      <p>
        The Ramakrishna Centre's Nutrition Programme is one of our core community outreach initiatives,
        dedicated to addressing food insecurity and promoting healthy nutrition in underserved communities
        around Johannesburg.
      </p>

      <div className="bg-gradient-to-br from-indian-cream to-white border border-indian-saffron p-6 rounded-lg my-8 pop-shadow-card">
        <h3 className="text-xl font-heading font-semibold mb-4">Programme Objectives</h3>
        <ul>
          <li>Provide regular nutritious meals to those in need</li>
          <li>Educate communities about balanced nutrition and healthy eating habits</li>
          <li>Support families facing food insecurity</li>
          <li>Collaborate with local organizations to maximize impact</li>
          <li>Create sustainable food solutions through education and empowerment</li>
        </ul>
      </div>

      <h3 className="text-2xl font-heading font-semibold mt-12 mb-6">Recent Activities</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
        {nutritionActivities.map((activity) => (
          <div key={activity.id} className="border border-indian-saffron rounded-lg overflow-hidden pop-shadow-card transition-transform hover:scale-[1.02] duration-300">
            <Link to={`/services/nutrition-programme/image/${activity.id}`} className="block">
              <div className="overflow-hidden" style={{ border: '3px solid #F1A912', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)', backgroundColor: '#f8f8f8', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px', aspectRatio: '4/3' }}>
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="max-w-full max-h-[300px] object-contain"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-lg font-heading font-semibold text-spiritual-600 hover:text-spiritual-700">{activity.title}</h4>
                <p className="text-sm text-gray-500 mt-1">Click to view full size</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-spiritual-50 p-6 rounded-lg border-l-4 border-spiritual-500 my-12">
        <h3 className="text-xl font-heading font-semibold mb-4">How You Can Help</h3>
        <p>
          Our Nutrition Programme relies on the generous support of volunteers and donors.
          Here are ways you can contribute:
        </p>
        <ul>
          <li>Donate non-perishable food items</li>
          <li>Volunteer for meal preparation and distribution</li>
          <li>Sponsor meals for special occasions</li>
          <li>Provide financial contributions to sustain the program</li>
          <li>Share your expertise in nutrition, cooking, or food management</li>
        </ul>
        <p className="mt-4">
          To get involved, please contact our Community Service Coordinator at <a href="mailto:community@ramakrishna.org.za">community@ramakrishna.org.za</a> or call 011-123-4567.
        </p>
      </div>
    </div>
  );
};

export default NutritionProgramme;
