
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import SectionHeader from '../../components/shared/SectionHeader';
import Button from '../../components/shared/Button';

const TimelinePage = () => {
  return (
    <PageLayout title="Timeline & Progress">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="Timeline & Progress" 
            subtitle="Following our journey from vision to reality"
            alignment="left"
          />
          
          <div className="prose prose-lg max-w-none mb-12">
            <div className="my-8 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Construction Progress" 
                className="w-full h-auto"
              />
            </div>
            
            <h3 className="text-2xl font-heading font-semibold mb-4">Project Timeline</h3>
            <p>
              Our New Ashram Project is progressing through several carefully planned phases. Below is our projected timeline, subject to funding availability and other factors.
            </p>
            
            <div className="space-y-12 mt-8">
              {/* Timeline item 1 */}
              <div className="relative pl-8 border-l-2 border-spiritual-200">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-spiritual-500"></div>
                <div className="mb-1 text-spiritual-500 font-semibold">Phase 1: Planning & Design (Completed)</div>
                <div className="text-sm text-gray-500 mb-2">January 2022 - December 2022</div>
                <div>
                  <ul>
                    <li>Formation of the Building Committee</li>
                    <li>Needs assessment and requirement gathering</li>
                    <li>Architectural concept development</li>
                    <li>Initial fundraising planning</li>
                  </ul>
                </div>
              </div>
              
              {/* Timeline item 2 */}
              <div className="relative pl-8 border-l-2 border-spiritual-200">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-spiritual-500"></div>
                <div className="mb-1 text-spiritual-500 font-semibold">Phase 2: Land Acquisition (In Progress)</div>
                <div className="text-sm text-gray-500 mb-2">January 2023 - June 2023</div>
                <div>
                  <ul>
                    <li>Site selection and evaluation</li>
                    <li>Land purchase negotiations</li>
                    <li>Securing necessary permits</li>
                    <li>Detailed architectural plans</li>
                  </ul>
                </div>
              </div>
              
              {/* Timeline item 3 */}
              <div className="relative pl-8 border-l-2 border-spiritual-200">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-300"></div>
                <div className="mb-1 text-gray-600 font-semibold">Phase 3: Major Fundraising Campaign</div>
                <div className="text-sm text-gray-500 mb-2">July 2023 - December 2024</div>
                <div>
                  <ul>
                    <li>Launch of public fundraising campaign</li>
                    <li>Corporate sponsorship outreach</li>
                    <li>Special fundraising events</li>
                    <li>International donor engagement</li>
                  </ul>
                </div>
              </div>
              
              {/* Timeline item 4 */}
              <div className="relative pl-8 border-l-2 border-spiritual-200">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-300"></div>
                <div className="mb-1 text-gray-600 font-semibold">Phase 4: Construction</div>
                <div className="text-sm text-gray-500 mb-2">January 2025 - December 2026</div>
                <div>
                  <ul>
                    <li>Groundbreaking ceremony</li>
                    <li>Foundation work</li>
                    <li>Building construction</li>
                    <li>Interior development</li>
                    <li>Landscaping and exterior work</li>
                  </ul>
                </div>
              </div>
              
              {/* Timeline item 5 */}
              <div className="relative pl-8">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-300"></div>
                <div className="mb-1 text-gray-600 font-semibold">Phase 5: Opening & Dedication</div>
                <div className="text-sm text-gray-500 mb-2">January 2027</div>
                <div>
                  <ul>
                    <li>Prana Pratishtha ceremony</li>
                    <li>Grand opening celebrations</li>
                    <li>Dedication to the public</li>
                    <li>Commencement of regular activities</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-heading font-semibold mt-12 mb-4">Current Progress</h3>
            <p>
              We are currently in Phase 2 of our project, focused on land acquisition and detailed planning. Recent developments include:
            </p>
            <ul>
              <li>Identification of potential sites in the Johannesburg area</li>
              <li>Preliminary negotiations with property owners</li>
              <li>Consultation with architectural firms specializing in spiritual spaces</li>
              <li>Initial fundraising efforts that have secured 20% of our Phase 2 target</li>
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-lg my-8 border-l-4 border-spiritual-500">
              <h4 className="text-xl font-heading font-semibold mb-2">Progress Updates</h4>
              <p>
                We are committed to transparency throughout this project. Regular updates will be posted on this page, and major milestones will be shared in our newsletter and social media channels.
              </p>
              <p className="mt-4">
                If you would like to receive direct updates about the New Ashram Project, please sign up for our dedicated project newsletter.
              </p>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-xl font-semibold mb-6">
                Help us reach our next milestone
              </p>
              <Button href="/new-ashram-project/fundraising" size="lg">
                Contribute Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TimelinePage;
