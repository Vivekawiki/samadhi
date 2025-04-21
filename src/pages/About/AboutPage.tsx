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

  ];

  // Check if we're on the main about page or a subpage
  const isMainAboutPage = location.pathname === '/about';

  return (
    <PageLayout title="About">
      <div className="flex items-center justify-center py-12 bg-gradient-to-br from-indian-cream to-white">
        <div className="inline-block p-6 rounded-lg bg-gradient-to-br from-indian-cream to-white border border-indian-saffron shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-[1.01] text-center">
          <h1 className="text-3xl font-heading font-bold mb-4 text-black">About Us</h1>
          <p className="text-gray-700">
            Learn about the Ramakrishna Centre, our philosophy, and our history
          </p>
        </div>
      </div>

      <div className="w-full bg-gradient-to-br from-indian-cream to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Navigation */}
        <div className="mb-12">
          <nav className="flex space-x-8 overflow-x-auto pb-3 scrollbar-none">
            {aboutLinks.map((link) => (
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

        {isMainAboutPage ? (
          // Main About page content
          <div className="prose prose-lg max-w-none animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {aboutLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block p-6 bg-gradient-to-br from-indian-cream to-white border border-indian-saffron rounded-lg pop-shadow-card transition-all duration-300"
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
      </div>
    </PageLayout>
  );
};

export default AboutPage;
