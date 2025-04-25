
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indian-cream to-white border-t border-indian-saffron/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Ramakrishna Centre of South Africa
            </h3>
            <p className="text-gray-600 mb-4">
              Dedicated to the teachings of Sri Ramakrishna, Holy Mother Sri Sarada Devi,
              and Swami Vivekananda. Promoting harmony, spiritual growth, and service.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="https://web.facebook.com/The-Ramakrishna-Centre-of-South-Africa-Johannesburg-102465158298869" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-spiritual-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>

              <a href="https://www.youtube.com/channel/UCmFHx4USh_Vvx6L4jNwMGnA/playlists?view_as=subscriber" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-spiritual-500 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 tracking-tight">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <Link to="/about" className="text-gray-600 hover:text-spiritual-500 transition-colors text-animate">
                About Us
              </Link>
              <Link to="/services" className="text-gray-600 hover:text-spiritual-500 transition-colors">
                Our Services
              </Link>
              <Link to="/new-ashram-project" className="text-gray-600 hover:text-spiritual-500 transition-colors">
                New Ashram Project
              </Link>
              <Link to="/learn" className="text-gray-600 hover:text-spiritual-500 transition-colors">
                Learn Hinduism
              </Link>
              <Link to="/donate" className="text-gray-600 hover:text-spiritual-500 transition-colors">
                Donate
              </Link>

              <Link to="/contact" className="text-gray-600 hover:text-spiritual-500 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-spiritual-500 mt-1 mr-3" />
                <span className="text-gray-600">
                  Postnet Suite 204, Private Bag X3, Northriding, 2162
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-spiritual-500 mr-3" />
                <span className="text-gray-600">johannesburg@ramakrishna-phoenix.org.za</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-indian-saffron/20 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Ramakrishna Centre of South Africa, Johannesburg. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
