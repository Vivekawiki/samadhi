
import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import HomeBanner from '../components/home/HomeBanner';
import FeaturedEvents from '../components/home/FeaturedEvents';
import RecentActivities from '../components/home/RecentActivities';
import HolyTrinity from '../components/home/HolyTrinity';
import QuickInfo from '../components/home/QuickInfo';
import ServicesPreview from '../components/home/ServicesPreview';

const Index = () => {
  return (
    <PageLayout>
      <HomeBanner />
      <QuickInfo />
      <HolyTrinity />
      <ServicesPreview />
      <RecentActivities />
      <FeaturedEvents />
    </PageLayout>
  );
};

export default Index;
