import React from 'react';
import { Heart, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';

const CommunityOutreach = () => {
  return (
    <PageLayout title="Community Outreach">
      <div className="w-full bg-white">
        <div className="w-full bg-gradient-to-br from-indian-cream to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-3xl font-heading font-semibold mb-6 text-indian-blue flex items-center gap-2">
                <Heart className="w-7 h-7 text-indian-saffron" />
                Community Outreach
              </h2>

              <p className="text-gray-700 mb-8">
                The Ramakrishna Centre is committed to serving the community through various outreach programs,
                following Swami Vivekananda's guiding principle that "Service to humanity is service to God."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-gradient-to-br from-indian-cream to-white rounded-lg overflow-hidden shadow-sm border border-indian-saffron/20 hover:shadow-md transition-all hover:scale-[1.02] duration-300">
                  <Link to="/services/nutrition-programme" className="block">
                    <h3 className="text-xl font-heading font-semibold mb-4 p-4 bg-gradient-to-br from-indian-cream to-white text-spiritual-600 border-b border-spiritual-100">
                      Nutrition Programme
                    </h3>
                    <div className="p-4">
                      <p className="text-gray-700">
                        Our Nutrition Programme provides regular meals to those in need in the surrounding communities.
                        This initiative aims to fight hunger and foster a sense of compassion and care for those less fortunate.
                      </p>
                      <p className="mt-4 text-spiritual-600 hover:text-spiritual-700 font-medium inline-flex items-center">
                        View Nutrition Programme Details
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-indian-cream to-white rounded-lg overflow-hidden shadow-sm border border-indian-saffron/20 hover:shadow-md transition-all hover:scale-[1.02] duration-300">
                  <div className="p-4">
                    <h3 className="text-xl font-heading font-semibold mb-4 text-spiritual-600">
                      Women Empowerment Programme (WEP)
                    </h3>
                    <p className="text-gray-700 mb-4">
                      The WEP supports women in developing skills for financial independence and personal growth.
                      Through workshops, training sessions, and mentoring, we help women become self-reliant and confident.
                    </p>
                    <h4 className="font-bold mt-4 mb-2 text-spiritual-600">Activities</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-spiritual-400"></span>
                        Vocational training in various crafts and skills
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-spiritual-400"></span>
                        Financial literacy and entrepreneurship workshops
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-spiritual-400"></span>
                        Health and wellness education
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-spiritual-400"></span>
                        Support groups and counseling services
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indian-cream to-white rounded-lg shadow-sm border border-indian-saffron/20 my-8">
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-4 text-spiritual-600 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-indian-saffron" />
                    Children's Value Classes
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Beyond our regular Hinduism for Children program, we offer special value-based education classes
                    in schools and community centers. These classes focus on universal values like truth, compassion,
                    and respect, presented in an interfaith, inclusive manner.
                  </p>
                  <h4 className="font-bold mt-4 mb-2 text-spiritual-600">Program Details</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Weekly classes in partner schools",
                      "Holiday programs during school breaks",
                      "Special workshops for teachers and parents",
                      "Distribution of educational materials"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-spiritual-400"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indian-cream to-white rounded-lg border-l-4 border-spiritual-500 p-6">
                <h3 className="text-xl font-heading font-semibold mb-4 text-spiritual-600 flex items-center gap-2">
                  <Users className="w-5 h-5 text-indian-saffron" />
                  Get Involved
                </h3>
                <p className="text-gray-700 mb-4">
                  Our community outreach programs rely on the generous support of volunteers and donors.
                  If you would like to contribute your time, skills, or resources to any of these initiatives,
                  please contact our Community Service Coordinator.
                </p>
                <p className="italic text-gray-600 border-l-2 border-spiritual-300 pl-4">
                  "The best way to find yourself is to lose yourself in the service of others." - Mahatma Gandhi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CommunityOutreach;





