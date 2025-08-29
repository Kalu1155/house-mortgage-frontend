import React, { useState } from "react";
import logo from "../assets/image/House-Market-Logo-scaled.jpg";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="site-wrapper">
      <div id="site-header">
        <div id="masthead" className="header-v4">
          <div className="wrapper">
            {/* Logo */}
            <div className="brand has-logo has-sticky-logo">
              <h1 className="logo">
                <Link to="/">
                  <img src={logo} alt="Konstruct" />
                </Link>
              </h1>
            </div>

            {/* Desktop Nav */}
            <nav className="navigator">
              <ul className="menu">
                <li><Link to="/about">ABOUT US</Link></li>
                <li><Link to="/mortgageconsulting">Mortgage consulting</Link></li>
                <li><Link to="/realestateconsulting">Real estate consulting</Link></li>
                <li><Link to="/partners">Partners</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>

            {/* Mobile Nav */}
            <nav
              id="site-navigator-mobile"
              className={`navigator-mobile ${menuOpen ? "active" : ""}`}
             >
              <button
                className="navigator-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
              </button>
              <ul className="menu">
                <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</Link></li>
                <li><Link to="/mortgageconsulting" onClick={() => setMenuOpen(false)}>Mortgage consulting</Link></li>
                <li><Link to="/realestateconsulting" onClick={() => setMenuOpen(false)}>Real estate consulting</Link></li>
                <li><Link to="/partners" onClick={() => setMenuOpen(false)}>Partners</Link></li>
                <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
