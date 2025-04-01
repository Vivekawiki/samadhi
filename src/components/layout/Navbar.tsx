
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigation } from './NavbarData';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import UserAccountNav from '../auth/UserAccountNav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Check if link is active
  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(`${href}/`);
  };

  // Toggle dropdown menu
  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/2e549f27-8429-4042-95be-36194a9d309c.png" 
                alt="Ramakrishna Centre Logo" 
                className="h-12" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <DesktopNavigation 
            navigation={navigation}
            isActive={isActive}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />

          {/* User account navigation */}
          <div className="hidden md:flex items-center ml-4">
            <UserAccountNav />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <UserAccountNav />
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 ml-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-spiritual-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileNavigation 
        isOpen={isOpen}
        navigation={navigation}
        isActive={isActive}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
      />
    </nav>
  );
};

export default Navbar;
