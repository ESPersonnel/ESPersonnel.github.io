import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, MailIcon, HomeIcon } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { to: '/', icon: <HomeIcon size={20} />, label: 'Home' },
    { to: '/projects', icon: <Box size={20} />, label: 'Projects' },
    { to: '/contact', icon: <MailIcon size={20} />, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col items-center space-y-4">

          <div className="flex space-x-12">
            {navItems.map(({ to, icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center space-x-2 text-sm font-medium transition-colors
                  ${isActive ? 'text-purple-600' : 'text-gray-600 hover:text-purple-500'}`
                }
              >
                {icon}
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;