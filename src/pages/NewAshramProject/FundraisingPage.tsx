
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import SectionHeader from '../../components/shared/SectionHeader';
import Button from '../../components/shared/Button';
import { Link } from 'react-router-dom';

const FundraisingPage = () => {
  return (
    <PageLayout title="Fundraising">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="Support the New Ashram Project" 
            subtitle="Join us in building a spiritual home for generations to come"
            alignment="left"
          />
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="lead text-xl text-gray-700">
              Your contribution to the New Ashram Project will help create a spiritual sanctuary that serves our community and upholds the teachings of Sri Ramakrishna, Holy Mother Sri Sarada Devi, and Swami Vivekananda for generations to come.
            </p>
            
            {/* Fundraising Progress */}
            <div className="my-10 bg-gradient-to-r from-indian-cream to-white p-6 rounded-lg shadow-sm border border-indian-saffron/30">
              <h3 className="text-2xl font-heading font-semibold mb-4">Fundraising Progress</h3>
              <div className="mb-2 flex justify-between">
                <span className="font-medium">Current: R10,000,000</span>
                <span className="font-medium">Goal: R60,000,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div 
                  className="bg-spiritual-500 h-4 rounded-full" 
                  style={{ width: '16.7%' }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                16.7% of our goal reached. Thank you to all our donors!
              </p>
            </div>
            
            <h3 className="text-2xl font-heading font-semibold mb-4">How to Donate</h3>
            <p>
              We offer several convenient ways to contribute to the New Ashram Project:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-6 border border-indian-saffron/30 rounded-lg shadow-sm bg-gradient-to-r from-indian-cream to-white">
                <h4 className="text-xl font-heading font-semibold mb-3">Online Donation</h4>
                <p className="mb-4">
                  Make a secure online donation through our payment portal. All major credit cards accepted.
                </p>
                <Link to="/donate">
                  <Button>
                    Donate Online
                  </Button>
                </Link>
              </div>
              
              <div className="p-6 border border-indian-saffron/30 rounded-lg shadow-sm bg-gradient-to-r from-indian-cream to-white">
                <h4 className="text-xl font-heading font-semibold mb-3">Bank Transfer</h4>
                <p className="mb-4">
                  You can make a direct deposit or EFT to our building fund account:
                </p>
                <div className="bg-white/80 p-4 rounded-lg text-sm border border-indian-saffron/20">
                  <p><strong>Acc Name:</strong> The Ramakrishna Centre of South Africa, Johannesburg</p>
                  <p><strong>Acc Type:</strong> Business Account</p>
                  <p><strong>Bank:</strong> First National Bank</p>
                  <p><strong>Branch Code:</strong> 200607</p>
                  <p><strong>Branch Name:</strong> 4 Merchant Place 390</p>
                  <p><strong>Acc Number:</strong> 62858238035</p>
                  <p><strong>Swift Code:</strong> FIRNZAJJ</p>
                  <p><strong>Reference:</strong> Your name</p>
                </div>
                <div className="mt-4 text-sm bg-gray-50 p-3 rounded-lg border border-indian-saffron/20">
                  <p><strong>Please Note:</strong> Kindly forward proof of deposit to the following email address for ease of issuing receipts:</p>
                  <p className="font-medium">johannesburg@ramakrishna-phoenix.org.za</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 border border-indian-saffron/30 rounded-lg shadow-sm bg-gradient-to-r from-indian-cream to-white my-8">
              <h4 className="text-xl font-heading font-semibold mb-3">In Person</h4>
              <p className="mb-2">
                Visit our centre to make a donation in person by cash, check, or card:
              </p>
              <p className="text-sm mb-4">
                <strong>Address:</strong> Postnet Suite 204, Private Bag X3, Northriding, 2162<br />
              </p>
              <Button href="/contact">
                Contact Us
              </Button>
            </div>
            
            <h3 className="text-2xl font-heading font-semibold mb-4">Donation Programs</h3>
            <div className="bg-gradient-to-r from-indian-cream to-white p-6 rounded-lg my-8 border border-indian-saffron/30">
              <p className="mb-4">
                We offer several specific donation programs to suit different interests and capacities:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/50 p-4 rounded border border-indian-saffron/20">
                  <h5 className="font-semibold mb-2">Monthly Giving</h5>
                  <p className="text-sm">Set up a recurring monthly donation to support the project over time.</p>
                </div>
                <div className="bg-white/50 p-4 rounded border border-indian-saffron/20">
                  <h5 className="font-semibold mb-2">Named Gifts</h5>
                  <p className="text-sm">Donate toward specific rooms or facilities in memory of loved ones.</p>
                </div>
                <div className="bg-white/50 p-4 rounded border border-indian-saffron/20">
                  <h5 className="font-semibold mb-2">Corporate Sponsorship</h5>
                  <p className="text-sm">Businesses can sponsor major aspects of the project.</p>
                </div>
                <div className="bg-white/50 p-4 rounded border border-indian-saffron/20">
                  <h5 className="font-semibold mb-2">Material Donations</h5>
                  <p className="text-sm">Contribute building materials, furniture, or other needed items.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-indian-cream to-white p-6 rounded-lg my-8 border border-indian-saffron/30">
              <h4 className="text-xl font-heading font-semibold mb-2">Tax Benefits</h4>
              <p>
                The Ramakrishna Centre of South Africa is a registered non-profit organization. Certain local donations to the Centre may qualify for Section 18A taxation benefits from the South African Revenue Service.
              </p>
              <p className="mt-4">
                Tax certificates will be issued for all qualifying donations. Please ensure you provide your full name and contact details when making a donation.
              </p>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-xl font-semibold mb-6">
                Every contribution makes a difference
              </p>
              <Link to="/donate">
                <Button size="lg">
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FundraisingPage;
