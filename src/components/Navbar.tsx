"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen // Keep background when menu is open
          ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Left Side: Logo (Icon + Name) */}
          <a href="#" className="flex items-center space-x-3">
            <Image
              src="/favicon.ico"
              alt="Trishar M. Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-2xl font-bold">
              Trishar M.
            </span>
          </a>
          
          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8">
            <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? (
                // Close Icon (X)
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                // Hamburger Icon
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/10 backdrop-blur-lg">
          <ul className="flex flex-col items-center space-y-6 py-8">
            <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-cyan-400">About</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-cyan-400">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
