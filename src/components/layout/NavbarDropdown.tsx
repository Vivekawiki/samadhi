
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
      // Animate dropdown when it opens
      gsap.fromTo(dropdownRef.current.children,
        { opacity: 0, y: -5 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: 'power2.out'
        }
      );
    }
  }, [isOpen]);
  return (
    <div className="relative group">
      <Link
        to={item.href}
        className={`nav-link px-3 py-2 text-sm font-medium ${isActive(item.href) ? 'active' : ''}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {item.name}
      </Link>
      {/* Desktop Dropdown */}
      <div
        ref={dropdownRef}
        className={`absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 transform ${
          isOpen ? 'opacity-100 scale-100 z-50' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="py-1">
          {item.dropdown?.map((subItem) => (
            <Link
              key={subItem.name}
              to={subItem.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
