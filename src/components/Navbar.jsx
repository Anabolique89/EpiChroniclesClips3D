import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0 p-2'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain p-4' />
      </NavLink>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex text-md gap-7 font-large text-xl'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <a 
          href="https://10zpwk-n0.myshopify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-600 transition-colors duration-200"
        >
          Shop
        </a>
        <NavLink to='/Contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Contact
        </NavLink>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className='md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none'
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      <nav className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className='flex flex-col py-4'>
          <NavLink 
            to='/about' 
            className={({ isActive }) => `px-8 py-3 text-lg border-b border-gray-100 ${isActive ? "text-blue-600" : "text-black"} hover:bg-gray-50`}
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            to='/projects' 
            className={({ isActive }) => `px-8 py-3 text-lg border-b border-gray-100 ${isActive ? "text-blue-600" : "text-black"} hover:bg-gray-50`}
            onClick={closeMenu}
          >
            Collections
          </NavLink>
          <a
            href="https://10zpwk-n0.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-lg border-b border-gray-100 text-black hover:bg-gray-50"
            onClick={closeMenu}
          >
            Shop
          </a>
          <NavLink 
            to='/Contact' 
            className={({ isActive }) => `px-8 py-3 text-lg ${isActive ? "text-blue-600" : "text-black"} hover:bg-gray-50`}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


