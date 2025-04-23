
const SpecialFunctions = () => {
  return (
      <div className="w-full bg-white">
        <div className="w-full bg-gradient-to-br from-indian-cream to-white">
          {/* Replaced py-8 with pb-8 */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="max-w-4xl mx-auto mt-8">
              <div className="inline-block p-6 rounded-lg bg-gradient-to-br from-indian-cream to-white border border-indian-saffron shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-[1.01] text-center w-full mb-8">
                <h1 className="text-3xl font-heading font-bold mb-4 text-black">Upcoming Events</h1>
                <p className="text-gray-700">
                  Celebrations of religious festivals and other special programmes extending our service activities (seminars/workshops etc).
                </p>
              </div>

              <div className="mt-12 bg-gradient-to-br from-indian-cream to-white rounded-lg p-6 shadow-sm border border-indian-saffron/20">
                <h3 className="text-2xl font-heading font-semibold mb-6">Upcoming Programmes</h3>

                {/* Desktop view - table */}
                <div className="hidden md:block overflow-x-auto">
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
                          <p>Sunday, 18th May</p>
                          <p className="mt-1 text-sm text-gray-600">10 AM - 12 PM</p>
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

                {/* Mobile view - cards */}
                <div className="md:hidden space-y-6">
                  {/* Event 1 */}
                  <div className="bg-gradient-to-br from-indian-cream to-white border border-indian-saffron/30 rounded-lg p-4 shadow-sm pop-shadow-card">
                    <div className="font-semibold text-lg mb-2 bg-indian-saffron/10 p-2 rounded">Sunday, 18th May</div>
                    <div className="text-sm text-gray-600 mb-3">10 AM - 12 PM</div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="font-medium">Event:</div>
                      <div>Seminar</div>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="font-medium">Details:</div>
                      <div className="text-sm">Sri Ramakrishna's Organisational Wisdom and the Early History of the Ramakrishna Movement in South Africa (1897-1965)</div>
                    </div>
                  </div>

                  {/* Event 2 */}
                  <div className="bg-gradient-to-br from-indian-cream to-white border border-indian-saffron/30 rounded-lg p-4 shadow-sm pop-shadow-card">
                    <div className="font-semibold text-lg mb-2 bg-indian-saffron/10 p-2 rounded">24th May, Saturday</div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="font-medium">Event:</div>
                      <div>Nutrition Programme</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="font-medium">Details:</div>
                      <div>Hamper Distribution</div>
                    </div>
                  </div>

                  {/* Event 3 */}
                  <div className="bg-gradient-to-br from-indian-cream to-white border border-indian-saffron/30 rounded-lg p-4 shadow-sm pop-shadow-card">
                    <div className="font-semibold text-lg mb-2 bg-indian-saffron/10 p-2 rounded">24th May, Saturday</div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="font-medium">Event:</div>
                      <div>Women's Empowerment Programme</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="font-medium">Details:</div>
                      <div>Skills development workshop</div>
                    </div>
                  </div>
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
  );
};

export default SpecialFunctions;
