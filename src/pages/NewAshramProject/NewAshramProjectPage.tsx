import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import PageHeader from '../../components/shared/PageHeader';
import SectionHeader from '../../components/shared/SectionHeader';
import Button from '../../components/shared/Button';
import { Link } from 'react-router-dom';

const NewAshramProjectPage = () => {
  return (
    <PageLayout title="New Ashram Project">
      <div className="flex items-center justify-center py-12 bg-gradient-to-br from-indian-cream to-white">
        <div className="inline-block p-6 rounded-lg bg-gradient-to-br from-indian-cream to-white border border-indian-saffron shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-[1.01] text-center">
          <h1 className="text-3xl font-heading font-bold mb-4 text-black">New Ashram Project</h1>
          <p className="text-gray-700">
            Help us build a new spiritual home for our community
          </p>
        </div>
      </div>

      <div className="w-full bg-gradient-to-br from-indian-cream to-white py-12">
        <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="lead text-xl text-gray-700">
              The Ramakrishna Centre of South Africa, Johannesburg, is embarking on an important journey to build a new ashram to better serve our growing community and expand our spiritual, educational, and humanitarian services.
            </p>

            <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/new-ashram-project/vision" className="block">
                <div className="h-full p-6 rounded-lg pop-shadow-card transition-all duration-300 bg-gradient-to-br from-indian-cream to-white border border-indian-saffron">
                  <h3 className="text-xl font-heading font-semibold mb-3">Project Vision</h3>
                  <p className="text-gray-600">Learn about our vision for the new ashram and why it's necessary</p>
                </div>
              </Link>

              <Link to="/new-ashram-project/timeline" className="block">
                <div className="h-full p-6 rounded-lg pop-shadow-card transition-all duration-300 bg-gradient-to-br from-indian-cream to-white border border-indian-saffron">
                  <h3 className="text-xl font-heading font-semibold mb-3">Timeline & Progress</h3>
                  <p className="text-gray-600">Follow our progress and see what we've accomplished so far</p>
                </div>
              </Link>

              <Link to="/new-ashram-project/fundraising" className="block">
                <div className="h-full p-6 rounded-lg pop-shadow-card transition-all duration-300 bg-gradient-to-br from-indian-cream to-white border border-indian-saffron">
                  <h3 className="text-xl font-heading font-semibold mb-3">Fundraising</h3>
                  <p className="text-gray-600">Learn how you can contribute to this important initiative</p>
                </div>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-spiritual-50 to-white border border-spiritual-200 p-8 rounded-lg my-8 text-center pop-shadow-card">
              <h3 className="text-2xl font-heading font-semibold mb-4">Support Our Vision</h3>
              <p className="mb-6">
                We invite you to be part of this sacred journey. Your support, no matter how big or small, will help us create a space where spiritual seekers can find peace, guidance, and community for generations to come.
              </p>
              <Button href="/new-ashram-project/fundraising" size="lg">
                Donate Now
              </Button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NewAshramProjectPage;
