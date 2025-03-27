
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import SectionHeader from '../../components/shared/SectionHeader';
import Button from '../../components/shared/Button';

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
            <div className="my-10 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-heading font-semibold mb-4">Fundraising Progress</h3>
              <div className="mb-2 flex justify-between">
                <span className="font-medium">Current: R2,500,000</span>
                <span className="font-medium">Goal: R15,000,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div 
                  className="bg-spiritual-500 h-4 rounded-full" 
                  style={{ width: '17%' }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                17% of our goal reached. Thank you to our 128 donors!
              </p>
            </div>
            
            <h3 className="text-2xl font-heading font-semibold mb-4">How to Donate</h3>
            <p>
              We offer several convenient ways to contribute to the New Ashram Project:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-white">
                <h4 className="text-xl font-heading font-semibold mb-3">Online Donation</h4>
                <p className="mb-4">
                  Make a secure online donation through our payment portal. All major credit cards accepted.
                </p>
                <Button>
                  Donate Online
                </Button>
              </div>
              
              <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-white">
                <h4 className="text-xl font-heading font-semibold mb-3">Bank Transfer</h4>
                <p className="mb-4">
                  You can make a direct deposit or EFT to our building fund account:
                </p>
                <div className="text-sm">
                  <p><strong>Account Name:</strong> Ramakrishna Centre Building Fund</p>
                  <p><strong>Bank:</strong> First National Bank</p>
                  <p><strong>Account Number:</strong> 12345678910</p>
                  <p><strong>Branch Code:</strong> 250655</p>
                  <p><strong>Reference:</strong> Your Name + NAP</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-white">
                <h4 className="text-xl font-heading font-semibold mb-3">SnapScan</h4>
                <p className="mb-4">
                  Scan our SnapScan QR code to donate quickly from your mobile device.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg w-40 h-40 mx-auto md:mx-0 flex items-center justify-center">
                  <span className="text-gray-400 text-sm text-center">QR Code Placeholder</span>
                </div>
              </div>
              
              <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-white">
                <h4 className="text-xl font-heading font-semibold mb-3">In Person</h4>
                <p className="mb-2">
                  Visit our centre to make a donation in person by cash, check, or card:
                </p>
                <p className="text-sm mb-4">
                  <strong>Address:</strong> 123 Spiritual Lane, Johannesburg, 2000<br />
                  <strong>Hours:</strong> Tuesday to Sunday, 9:00 AM to 5:00 PM
                </p>
                <Button href="/contact">
                  Contact Us
                </Button>
              </div>
            </div>
            
            <h3 className="text-2xl font-heading font-semibold mb-4">Donation Programs</h3>
            <p>
              We offer several specific donation programs to suit different interests and capacities:
            </p>
            <ul>
              <li><strong>Monthly Giving:</strong> Set up a recurring monthly donation to support the project over time.</li>
              <li><strong>Named Gifts:</strong> Donate toward specific rooms or facilities in memory of loved ones.</li>
              <li><strong>Corporate Sponsorship:</strong> Businesses can sponsor major aspects of the project.</li>
              <li><strong>Material Donations:</strong> Contribute building materials, furniture, or other needed items.</li>
              <li><strong>Volunteer Time:</strong> Offer your professional skills or labor to support the project.</li>
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-lg my-8 border-l-4 border-spiritual-500">
              <h4 className="text-xl font-heading font-semibold mb-2">Tax Benefits</h4>
              <p>
                The Ramakrishna Centre of South Africa is a registered non-profit organization (NPO #123456) and Public Benefit Organization (PBO #987654). All donations qualify for tax benefits under Section 18A of the Income Tax Act.
              </p>
              <p className="mt-4">
                Tax certificates will be issued for all donations. Please ensure you provide your full name and contact details when making a donation.
              </p>
            </div>
            
            <h3 className="text-2xl font-heading font-semibold mb-4">Recognition</h3>
            <p>
              We deeply appreciate all contributions to the New Ashram Project. Donors will be recognized in the following ways:
            </p>
            <ul>
              <li>All donors will be listed in our project completion commemorative book (unless anonymity is requested).</li>
              <li>Donors contributing R10,000 or more will be recognized on our Donor Wall in the new ashram.</li>
              <li>Major donors (R100,000+) will be invited to special recognition events and ceremonies.</li>
            </ul>
            <p>
              While we offer these tokens of appreciation, we know that the greatest reward for your generosity is the knowledge that you are helping to create a spiritual sanctuary that will serve countless seekers for generations to come.
            </p>
            
            <div className="text-center mt-12">
              <p className="text-xl font-semibold mb-6">
                Every contribution makes a difference
              </p>
              <Button size="lg">
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FundraisingPage;
