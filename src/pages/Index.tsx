
import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import HomeBanner from '../components/home/HomeBanner';
import FeaturedEvents from '../components/home/FeaturedEvents';
import RecentActivities from '../components/home/RecentActivities';
import HolyTrinity from '../components/home/HolyTrinity';
import QuickInfo from '../components/home/QuickInfo';
import ServicesPreview from '../components/home/ServicesPreview';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <PageLayout>
      <HomeBanner />
      <HolyTrinity />
      <QuickInfo />
      <ServicesPreview />
      <RecentActivities />
      <FeaturedEvents />
      
      {/* Quick link to Donate page */}
      <div className="py-10 bg-gradient-to-r from-indian-cream to-white border-t border-indian-saffron/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-6 rounded-lg bg-gradient-to-r from-indian-cream to-white border border-indian-saffron">
            <h2 className="text-2xl font-heading font-semibold mb-4">Support Our Mission</h2>
            <p className="mb-6 max-w-2xl mx-auto text-gray-700">
              Your generous contributions help us continue our spiritual and humanitarian services to the community.
            </p>
            <Link to="/donate">
              <Button className="bg-indian-saffron hover:bg-indian-saffron/90 text-white gap-2">
                <Heart className="h-5 w-5" />
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
