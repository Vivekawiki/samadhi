import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import PageHeader from '../../components/shared/PageHeader';

const ServicesPage = () => {
  const location = useLocation();

  // Navigation links for Services section
  const servicesLinks = [
    { name: "Satsangs & Spiritual Gatherings", path: "/services/satsangs" },
    { name: "Hinduism for Children", path: "/services/hinduism-for-children" },
    { name: "Special Functions & Festivals", path: "/services/special-functions" },
    { name: "Community Outreach", path: "/services/community-outreach" },
    { name: "Nutrition Programme", path: "/services/nutrition-programme" },
  ];

  // Check if we're on the main services page or a subpage
  const isMainServicesPage = location.pathname === '/services';

  return (
    <PageLayout title="Services">
      <div className="flex items-center justify-center py-12 bg-gradient-to-br from-indian-cream to-white mt-20">
        <div className="inline-block p-6 rounded-lg bg-gradient-to-br from-indian-cream to-white border border-indian-saffron shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-[1.01] text-center">
          <h1 className="text-3xl font-heading font-bold mb-4 text-black">Our Services</h1>
          <p className="text-gray-700">
            Explore the spiritual and community services offered by the Ramakrishna Centre
          </p>
        </div>
      </div>

      <div className="w-full bg-gradient-to-br from-indian-cream to-white py-12 -mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-8 overflow-x-auto pb-3 scrollbar-none">
            {servicesLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`tab-nav-link text-md ${link.name.length > 15 ? 'long-item' : ''} ${
                  location.pathname === link.path
                    ? 'active text-spiritual-500'
                    : 'text-gray-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {isMainServicesPage ? (
          // Main Services page content
          <div className="prose prose-lg max-w-none animate-fade-in">
            <h2 className="text-3xl font-heading font-semibold mb-6">Services Offered by the Ramakrishna Centre</h2>

            <p>
              The Ramakrishna Centre of South Africa offers a variety of spiritual and community services aimed at promoting spiritual growth, education, and community welfare in line with the teachings of Sri Ramakrishna, Holy Mother Sri Sarada Devi, and Swami Vivekananda.
            </p>

            <p>
              Explore the sections below to learn more about our various services and how you can participate.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {servicesLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block p-6 bg-gradient-to-br from-indian-cream to-white border border-indian-saffron rounded-lg pop-shadow-card transition-all duration-300"
                >
                  <h3 className="text-xl font-heading font-semibold mb-2">{link.name}</h3>
                  <p className="text-gray-600 mb-2">
                    {link.name === "Satsangs & Spiritual Gatherings" && "Join our regular spiritual gatherings, meditation sessions, and discourses."}
                    {link.name === "Hinduism for Children" && "Educational programs designed to teach Hindu values and philosophy to children."}
                    {link.name === "Special Functions & Festivals" && "Celebrations of special occasions, holy days, and religious festivals."}
                    {link.name === "Community Outreach" && "Our initiatives to serve the community through various welfare programs."}
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
      </div>
    </PageLayout>
  );
};

export default ServicesPage;
