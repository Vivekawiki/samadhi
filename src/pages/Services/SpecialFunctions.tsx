import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const SpecialFunctions = () => {
  return (
    <PageLayout title="Upcoming Events">
      <div className="w-full bg-white">
        <div className="w-full bg-gradient-to-br from-indian-cream to-white border-t border-indian-saffron/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block p-6 rounded-lg bg-gradient-to-br from-indian-cream to-white border border-indian-saffron shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-[1.01] text-center w-full mb-8">
                <h1 className="text-3xl font-heading font-bold mb-4 text-black">Upcoming Events</h1>
                <p className="text-gray-700">
                  Celebrations of religious festivals and other special programmes extending our service activities (seminars/workshops etc).
                </p>
              </div>

              <div className="mt-12 bg-gradient-to-br from-indian-cream to-white rounded-lg p-6 shadow-sm border border-indian-saffron/20">
                <h3 className="text-2xl font-heading font-semibold mb-6">Upcoming Programmes</h3>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-gradient-to-br from-indian-cream to-white border border-indian-saffron/30 rounded-lg">
                    <thead>
                      <tr className="bg-indian-saffron/10">
                        <th className="px-6 py-3 border-b border-indian-saffron/30 text-left font-heading">Date</th>
                        <th className="px-6 py-3 border-b border-indian-saffron/30 text-left font-heading">Event</th>
                        <th className="px-6 py-3 border-b border-indian-saffron/30 text-left font-heading">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">
                          <p>18th May, Sunday</p>
                          <p className="mt-1 text-sm text-gray-600">10:00 AM - 12:00 PM</p>
                        </td>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">Seminar</td>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">
                          <p>Sri Ramakrishna's Organisational Wisdom and the Early History of the Ramakrishna Movement in South Africa (1897-1965)</p>
                        </td>
                      </tr>
                      <tr className="bg-indian-saffron/5">
                        <td className="px-6 py-4 border-b border-indian-saffron/30">24th May, Saturday</td>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">Nutrition Programme</td>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">Hamper Distribution</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">24th May, Saturday</td>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">Women's Empowerment Programme</td>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">Skills development workshop</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-indian-cream to-white rounded-lg border border-indian-saffron/30">
                  <h3 className="text-xl font-heading font-semibold mb-4">About Our Events</h3>
                  <p className="text-gray-700">
                    The Centre also holds special retreats, seminars, and workshops throughout the year.
                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SpecialFunctions;



