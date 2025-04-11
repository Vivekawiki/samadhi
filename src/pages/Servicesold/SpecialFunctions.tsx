
import React from 'react';

const SpecialFunctions = () => {
  return (
    <div className="prose prose-lg max-w-none animate-fade-in">
      <h2 className="text-3xl font-heading font-semibold mb-6">Special Functions & Festivals</h2>
      
      <p>
        Throughout the year, the Ramakrishna Centre celebrates various Hindu festivals and special functions 
        related to the lives of Sri Ramakrishna, Holy Mother Sri Sarada Devi, and Swami Vivekananda.
      </p>
      
      <h3 className="text-2xl font-heading font-semibold mt-8 mb-4">Annual Calendar of Major Events</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 mt-4 mb-8">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 border-b text-left">Month</th>
              <th className="px-6 py-3 border-b text-left">Festival/Event</th>
              <th className="px-6 py-3 border-b text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border-b">January</td>
              <td className="px-6 py-4 border-b">Swami Vivekananda Jayanti</td>
              <td className="px-6 py-4 border-b">Celebration of Swami Vivekananda's birthday</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border-b">February</td>
              <td className="px-6 py-4 border-b">Sri Ramakrishna Jayanti</td>
              <td className="px-6 py-4 border-b">Celebration of Sri Ramakrishna's birthday</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b">March/April</td>
              <td className="px-6 py-4 border-b">Ram Navami</td>
              <td className="px-6 py-4 border-b">Celebration of Lord Rama's birth</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border-b">July/August</td>
              <td className="px-6 py-4 border-b">Guru Purnima</td>
              <td className="px-6 py-4 border-b">Day to honor spiritual masters</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b">August/September</td>
              <td className="px-6 py-4 border-b">Krishna Janmashtami</td>
              <td className="px-6 py-4 border-b">Celebration of Lord Krishna's birth</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border-b">October</td>
              <td className="px-6 py-4 border-b">Durga Puja</td>
              <td className="px-6 py-4 border-b">Worship of Divine Mother Durga</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b">October/November</td>
              <td className="px-6 py-4 border-b">Diwali</td>
              <td className="px-6 py-4 border-b">Festival of Lights</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border-b">December</td>
              <td className="px-6 py-4 border-b">Holy Mother's Birthday</td>
              <td className="px-6 py-4 border-b">Celebration of Sri Sarada Devi's birthday</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p>
        All festivals are celebrated with special pujas (worship ceremonies), bhajans (devotional songs), 
        talks on the significance of the occasion, and prasad (blessed food offering). 
        Larger celebrations may include cultural programs.
      </p>
      
      <div className="my-8 p-6 bg-spiritual-50 rounded-lg">
        <h3 className="text-xl font-heading font-semibold mb-4">Special Functions</h3>
        <p>
          The Centre also holds special retreats, seminars, and workshops throughout the year. 
          These events are announced on our home page and through our email newsletter.
        </p>
        <p className="mt-4">
          For information about upcoming events, please check our home page or contact the Centre office.
        </p>
      </div>
    </div>
  );
};

export default SpecialFunctions;
