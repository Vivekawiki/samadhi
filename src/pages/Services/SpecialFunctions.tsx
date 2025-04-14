
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const SpecialFunctions = () => {
  return (
    <PageLayout title="Special Functions & Festivals">
      <div className="w-full bg-white mt-20">
        <div className="w-full bg-gradient-to-br from-indian-cream to-white border-t border-indian-saffron/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block p-6 rounded-lg bg-gradient-to-br from-indian-cream to-white border border-indian-saffron shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-[1.01] text-center w-full mb-8">
                <h1 className="text-3xl font-heading font-bold mb-4 text-black">Special Functions & Festivals</h1>
                <p className="text-gray-700">
                  Throughout the year, the Ramakrishna Centre celebrates various Hindu festivals and special functions 
                  related to the lives of Sri Ramakrishna, Holy Mother Sri Sarada Devi, and Swami Vivekananda.
                </p>
              </div>

              <div className="mt-12 bg-white rounded-lg p-6 shadow-sm border border-indian-saffron/20">
                <h3 className="text-2xl font-heading font-semibold mb-6">Annual Calendar of Major Events</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-gradient-to-br from-indian-cream to-white border border-indian-saffron/30 rounded-lg">
                    <thead>
                      <tr className="bg-indian-saffron/10">
                        <th className="px-6 py-3 border-b border-indian-saffron/30 text-left font-heading">Month</th>
                        <th className="px-6 py-3 border-b border-indian-saffron/30 text-left font-heading">Festival/Event</th>
                        <th className="px-6 py-3 border-b border-indian-saffron/30 text-left font-heading">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">January</td>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">Swami Vivekananda Jayanti</td>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">Celebration of Swami Vivekananda's birthday</td>
                      </tr>
                      <tr className="bg-indian-saffron/5">
                        <td className="px-6 py-4 border-b border-indian-saffron/30">February</td>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">Sri Ramakrishna Jayanti</td>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">Celebration of Sri Ramakrishna's birthday</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">September/October</td>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">Durga Puja</td>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">Worship of Divine Mother Durga</td>
                      </tr>
                      <tr className="bg-indian-saffron/5">
                        <td className="px-6 py-4 border-b border-indian-saffron/30">October/November</td>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">Diwali</td>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">Festival of Lights</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">December</td>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">Holy Mother's Birthday</td>
                        <td className="px-6 py-4 border-b border-indian-saffron/30">Celebration of Sri Sarada Devi's birthday</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-indian-cream to-white rounded-lg border border-indian-saffron/30">
                  <h3 className="text-xl font-heading font-semibold mb-4">Special Functions</h3>
                  <p className="text-gray-700">
                    The Centre also holds special retreats, seminars, and workshops throughout the year. 
                    These events are announced on our home page and through our email newsletter.
                  </p>
                  <p className="mt-4 text-gray-700">
                    For information about upcoming events, please check our home page or contact the Centre office.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-indian-cream to-white rounded-lg border border-indian-saffron/30">
                  <p className="text-gray-700">
                    All festivals are celebrated with special pujas (worship ceremonies), bhajans (devotional songs), 
                    talks on the significance of the occasion, and prasad (blessed food offering). 
                    Larger celebrations may include cultural programs.
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



