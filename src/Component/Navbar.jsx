import React, { useEffect, useState } from "react";
import logo from "../assets/image/House-Market-Logo-scaled.jpg";
import sticky_logo from "../assets/image/House-Market-Logo-scaled.jpg";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  const [closeMenu, setClosemenu] = useState(true);


  return (
    <>
      <div id="site-wrapper">
        <div id="site-header">
          <div id="masthead" className="header-v4">
            <div className="wrapper">
              <div className="brand has-logo has-sticky-logo">
                <h1 className="logo"><Link to="/"><img src={logo} alt="Konstruct" /></Link></h1>
              </div>
              <nav className="navigator">
                <ul className="menu">
                  <li>
                    <Link to='/about' className="text-decoration-none">ABOUT US</Link>
                  </li>
                  <li><Link to='/mortgageconsulting' className="text-decoration-none">Mortgage consulting</Link></li>
                  <li><Link to="/realestateconsulting" className="text-decoration-none">Real estate consulting</Link></li>
                  <li><Link to="/partners" className="text-decoration-none">Partners</Link></li>
                  <li><Link to="/contact" className="text-decoration-none">Contact</Link></li>
                </ul>
              </nav>
            </div>
              <nav id="site-navigator-mobile" class="navigator-mobile">
                <Link to="#" class="navigator-toggle">
                  <i class="fa fa-bars"></i>
                </Link>
                <ul id="menu-main-menu-1" class="menu">
                   <li>
                    <Link to='/about' className="text-decoration-none">ABOUT US</Link>
                  </li>
                  <li><Link to='/mortgageconsulting' className="text-decoration-none">Mortgage consulting</Link></li>
                  <li><Link to="/realestateconsulting" className="text-decoration-none">Real estate consulting</Link></li>
                  <li><Link to="/partners" className="text-decoration-none">Partners</Link></li>
                  <li><Link to="/contact" className="text-decoration-none">Contact</Link></li>
                </ul>
              </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar