import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const Satsangs = () => {
  return (
    <PageLayout title="Satsangs & Spiritual Gatherings">
      <div className="w-full bg-white">
        <div className="w-full bg-gradient-to-br from-indian-cream to-white border-t border-indian-saffron/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block p-6 rounded-lg bg-gradient-to-br from-indian-cream to-white border border-indian-saffron shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-[1.01] text-center w-full mb-8">
                <h1 className="text-3xl font-heading font-bold mb-4 text-black">Satsangs & Spiritual Gatherings</h1>
                <p className="text-gray-700">
                  Join our regular spiritual gatherings for meditation, prayers, and discourses on Vedantic teachings
                </p>
              </div>

              <div className="mt-12 bg-gradient-to-br from-indian-cream to-white rounded-lg p-6 shadow-sm border border-indian-saffron/20">
                <h3 className="text-2xl font-heading font-semibold mb-6">Regular Schedule</h3>
                
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-indian-cream to-white p-6 rounded-lg border border-indian-saffron/30">
                    <h4 className="font-bold text-xl mb-3">Sunday Satsang</h4>
                    <p className="text-gray-700">Time: 9:00 AM - 11:00 AM</p>
                    <p className="text-gray-700">Format: Meditation, Bhajans (Devotional Songs), and Discourse</p>
                  </div>

                  <div className="bg-gradient-to-br from-indian-cream to-white p-6 rounded-lg border border-indian-saffron/30">
                    <h4 className="font-bold text-xl mb-3">Thursday Evening Meditation</h4>
                    <p className="text-gray-700">Time: 7:00 PM - 8:00 PM</p>
                    <p className="text-gray-700">Format: Guided Meditation and Short Reading</p>
                  </div>

                  <div className="bg-gradient-to-br from-indian-cream to-white p-6 rounded-lg border border-indian-saffron/30">
                    <h4 className="font-bold text-xl mb-3">Saturday Study Group</h4>
                    <p className="text-gray-700">Time: 3:00 PM - 4:30 PM</p>
                    <p className="text-gray-700">Format: Reading and Discussion of Spiritual Texts</p>
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

export default Satsangs;



