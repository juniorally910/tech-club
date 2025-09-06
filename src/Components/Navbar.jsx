import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/programs", label: "Programs" },
    { to: "/projects", label: "Projects" },
    { to: "/mentorship", label: "Mentorship" },
    { to: "/community", label: "Community" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          ETC
        </NavLink>

       
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `hover:text-blue-600 ${isActive ? "text-blue-600 font-semibold" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        
        <NavLink to="/join" className="hidden sm:inline">
          <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Join Cohort
          </button>
        </NavLink>

        
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <ul className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-3 text-gray-700 font-medium">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `block hover:text-blue-600 ${isActive ? "text-blue-600 font-semibold" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/join"
              className="block text-blue-600 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Join Cohort
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
