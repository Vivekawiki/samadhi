
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Book, Calendar, Users, Star } from 'lucide-react';

const HinduismForChildren = () => {
  return (
    <PageLayout title="Hinduism for Children">
      <div className="w-full bg-white mt-20">
        <div className="w-full bg-gradient-to-br from-indian-cream to-white border-t border-indian-saffron/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block p-6 rounded-lg bg-gradient-to-br from-indian-cream to-white border-2 border-indian-saffron shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-[1.01] text-center w-full mb-8">
                <h1 className="text-3xl font-heading font-bold mb-4 text-black flex items-center justify-center gap-2">
                  Hinduism for Children
                  <Star className="w-6 h-6 text-indian-saffron" />
                </h1>
                <p className="text-gray-700">
                  Fun and engaging programs to help children learn about Hindu values and culture
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-gradient-to-br from-indian-cream to-yellow-50 rounded-2xl border-2 border-indian-saffron p-6 text-center hover:shadow-md transition-all duration-300">
                  <Book className="w-12 h-12 text-indian-saffron mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-semibold mb-3">Weekly Classes</h3>
                  <p className="text-gray-700">Interactive lessons on Hindu scriptures, stories, and values</p>
                </div>

                <div className="bg-gradient-to-br from-indian-cream to-yellow-50 rounded-2xl border-2 border-indian-saffron p-6 text-center hover:shadow-md transition-all duration-300">
                  <Calendar className="w-12 h-12 text-indian-saffron mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-semibold mb-3">Festival Celebrations</h3>
                  <p className="text-gray-700">Special programs during major Hindu festivals</p>
                </div>

                <div className="bg-gradient-to-br from-indian-cream to-yellow-50 rounded-2xl border-2 border-indian-saffron p-6 text-center hover:shadow-md transition-all duration-300">
                  <Users className="w-12 h-12 text-indian-saffron mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-semibold mb-3">Group Activities</h3>
                  <p className="text-gray-700">Cultural activities, bhajans, and creative workshops</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HinduismForChildren;



