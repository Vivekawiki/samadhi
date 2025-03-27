
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import PageHeader from '../../components/shared/PageHeader';

const AboutPage = () => {
  const location = useLocation();
  
  // Navigation links for About section
  const aboutLinks = [
    { name: "Our Centre", path: "/about/our-centre" },
    { name: "Vedanta", path: "/about/vedanta" },
    { name: "The Holy Trinity", path: "/about/holy-trinity" },
    { name: "Presence in South Africa", path: "/about/presence-in-sa" },
  ];

  // Check if we're on the main about page or a subpage
  const isMainAboutPage = location.pathname === '/about';

  return (
    <PageLayout title="About">
      <PageHeader 
        title="About Us" 
        subtitle="Learn about the Ramakrishna Centre, our philosophy, and our history"
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8 overflow-x-auto pb-3 scrollbar-none">
            {aboutLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-md ${
                  location.pathname === link.path
                    ? 'border-spiritual-500 text-spiritual-500'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        
        {isMainAboutPage ? (
          // Main About page content
          <div className="prose prose-lg max-w-none animate-fade-in">
            <h2 className="text-3xl font-heading font-semibold mb-6">Welcome to the Ramakrishna Centre of South Africa, Johannesburg</h2>
            
            <p>
              The Ramakrishna Centre of South Africa is dedicated to the propagation of the universal teachings of Vedanta as exemplified in the lives of Sri Ramakrishna, Holy Mother Sri Sarada Devi, and Swami Vivekananda. Our Centre serves as a spiritual haven for all seekers, irrespective of their religious background.
            </p>
            
            <p>
              Explore the sections below to learn more about our Centre, the philosophy of Vedanta, the Holy Trinity of the Ramakrishna Order, and our presence in South Africa.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {aboutLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-xl font-heading font-semibold mb-2">{link.name}</h3>
                  <p className="text-gray-600 mb-2">
                    {link.name === "Our Centre" && "Learn about our Centre's history, mission, and values."}
                    {link.name === "Vedanta" && "Explore the philosophy of Vedanta and its universal principles."}
                    {link.name === "The Holy Trinity" && "Discover the lives and teachings of Sri Ramakrishna, Sri Sarada Devi, and Swami Vivekananda."}
                    {link.name === "Presence in South Africa" && "Learn about the history and growth of the Ramakrishna movement in South Africa."}
                  </p>
                  <span className="text-spiritual-500 inline-flex items-center">
                    Read More
                    <svg 
                      className="ml-1 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          // Render subpages via Outlet
          <Outlet />
        )}
      </div>
    </PageLayout>
  );
};

export default AboutPage;
