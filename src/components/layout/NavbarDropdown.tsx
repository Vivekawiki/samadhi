
import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from './NavbarData';

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
  return (
    <div className="relative group">
      <button
        className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
        onClick={onMouseEnter}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {item.name}
      </button>
      {/* Desktop Dropdown */}
      <div
        className={`absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 transform opacity-0 scale-95 pointer-events-none ${
          isOpen ? 'opacity-100 scale-100 pointer-events-auto' : ''
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
