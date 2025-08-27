import React, { useEffect, useState } from "react";
import logo from "../assets/image/House-Market-Logo-scaled.jpg";
import sticky_logo from "../assets/image/House-Market-Logo-scaled.jpg";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 ${isSticky ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="wrapper flex justify-between items-center py-3 px-6">
        
        {/* Logo */}
        <h1 className="logo">
          <Link to="/">
            <img src={isSticky ? sticky_logo : logo} alt="House Market" className="h-12" />
          </Link>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-semibold">
          <Link to="/about" className="hover:text-blue-500">About Us</Link>
          <Link to="/mortgageconsulting" className="hover:text-blue-500">Mortgage Consulting</Link>
          <Link to="/realestateconsulting" className="hover:text-blue-500">Real Estate Consulting</Link>
          <Link to="/partners" className="hover:text-blue-500">Partners</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black bg-opacity-80 text-white text-center py-6 space-y-4">
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/mortgageconsulting" onClick={() => setMenuOpen(false)}>Mortgage Consulting</Link>
          <Link to="/realestateconsulting" onClick={() => setMenuOpen(false)}>Real Estate Consulting</Link>
          <Link to="/partners" onClick={() => setMenuOpen(false)}>Partners</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;


const [menuOpen, setMenuOpen] = useState(false);

import { RiCloseLine, RiMenu3Line } from "react-icons/ri";


 {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>





{/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black bg-opacity-80 text-white text-center py-6 space-y-4">
          <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
          <Link to="/mortgageconsulting" onClick={() => setMenuOpen(false)}>Mortgage Consulting</Link>
          <Link to="/realestateconsulting" onClick={() => setMenuOpen(false)}>Real Estate Consulting</Link>
          <Link to="/partners" onClick={() => setMenuOpen(false)}>Partners</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}