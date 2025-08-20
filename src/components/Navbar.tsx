import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full max-w-5xl flex justify-between items-center py-6">
      {/* Left Side: Your Name/Logo */}
      <div className="text-2xl font-bold">
        Trishar M.
      </div>
      
      {/* Right Side: Navigation Links */}
      <ul className="flex items-center space-x-8">
        <li><a href="#about" className="hover:text-cyan-400">About</a></li>
        <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;