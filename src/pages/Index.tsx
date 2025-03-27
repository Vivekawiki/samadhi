
import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import HomeBanner from '../components/home/HomeBanner';
import FeaturedEvents from '../components/home/FeaturedEvents';
import QuickInfo from '../components/home/QuickInfo';
import ServicesPreview from '../components/home/ServicesPreview';

const Index = () => {
  return (
    <PageLayout>
      <HomeBanner />
      <QuickInfo />
      <ServicesPreview />
      <FeaturedEvents />
    </PageLayout>
  );
};

export default Index;
