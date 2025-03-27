
import React from 'react';

const CommunityOutreach = () => {
  return (
    <div className="prose prose-lg max-w-none animate-fade-in">
      <h2 className="text-3xl font-heading font-semibold mb-6">Community Outreach</h2>
      
      <p>
        The Ramakrishna Centre is committed to serving the community through various outreach programs, 
        following Swami Vivekananda's guiding principle that "Service to humanity is service to God."
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-heading font-semibold mb-4">Nutrition Programme</h3>
          <p>
            Our Nutrition Programme provides regular meals to those in need in the surrounding communities. 
            This initiative aims to fight hunger and foster a sense of compassion and care for those less fortunate.
          </p>
          <h4 className="font-bold mt-4 mb-2">How You Can Help</h4>
          <ul>
            <li>Donate non-perishable food items</li>
            <li>Volunteer for meal preparation and distribution</li>
            <li>Sponsor meals for special occasions</li>
            <li>Provide financial contributions to sustain the program</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-heading font-semibold mb-4">Women Empowerment Programme (WEP)</h3>
          <p>
            The WEP supports women in developing skills for financial independence and personal growth. 
            Through workshops, training sessions, and mentoring, we help women become self-reliant and confident.
          </p>
          <h4 className="font-bold mt-4 mb-2">Activities</h4>
          <ul>
            <li>Vocational training in various crafts and skills</li>
            <li>Financial literacy and entrepreneurship workshops</li>
            <li>Health and wellness education</li>
            <li>Support groups and counseling services</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg my-8">
        <h3 className="text-xl font-heading font-semibold mb-4">Children's Value Classes</h3>
        <p>
          Beyond our regular Hinduism for Children program, we offer special value-based education classes 
          in schools and community centers. These classes focus on universal values like truth, compassion, 
          and respect, presented in an interfaith, inclusive manner.
        </p>
        <h4 className="font-bold mt-4 mb-2">Program Details</h4>
        <ul>
          <li>Weekly classes in partner schools</li>
          <li>Holiday programs during school breaks</li>
          <li>Special workshops for teachers and parents</li>
          <li>Distribution of educational materials</li>
        </ul>
      </div>
      
      <div className="my-8 p-6 bg-spiritual-50 rounded-lg border-l-4 border-spiritual-500">
        <h3 className="text-xl font-heading font-semibold mb-4">Get Involved</h3>
        <p>
          Our community outreach programs rely on the generous support of volunteers and donors. 
          If you would like to contribute your time, skills, or resources to any of these initiatives, 
          please contact our Community Service Coordinator.
        </p>
        <p className="mt-4">
          "The best way to find yourself is to lose yourself in the service of others." - Mahatma Gandhi
        </p>
      </div>
    </div>
  );
};

export default CommunityOutreach;
