
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from './NavbarData';
import gsap from 'gsap';

interface NavbarDropdownProps {
  item: NavItem;
  isActive: (href: string) => boolean;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({
  item,
  isActive,
  isOpen,
  onMouseEnter,
  onMouseLeave
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dropdownRef.current && isOpen) {
      gsap.fromTo(dropdownRef.current.children,
        { opacity: 0, y: -5 },
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          stagger: 0.03,
          ease: 'power2.out'
        }
      );
    }
  }, [isOpen]);

  return (
    <div 
      className="relative group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        to={item.href}
        className={`nav-link px-4 py-2 text-sm font-medium tracking-wide ${isActive(item.href) ? 'active' : ''}`}
      >
        {item.name}
      </Link>
      {/* Desktop Dropdown */}
      <div
        ref={dropdownRef}
        className={`absolute left-0 mt-0 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-150 transform ${
          isOpen ? 'opacity-100 scale-100 z-50' : 'opacity-0 scale-95 invisible pointer-events-none'
        }`}
      >
        <div className="py-1 dropdown-content">
          {item.dropdown?.map((subItem) => (
            <Link
              key={subItem.name}
              to={subItem.href}
              className={`block w-full px-4 py-3 text-sm hover:bg-spiritual-50 transition-colors ${
                isActive(subItem.href) ? 'text-spiritual-600 bg-spiritual-50/50' : 'text-gray-700'
              }`}
            >
              {subItem.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarDropdown;
