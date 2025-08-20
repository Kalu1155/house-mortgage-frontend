import React, { useEffect, useState } from "react";
import logo from "../assets/image/House-Market-Logo-scaled.jpg";
import sticky_logo from "../assets/image/House-Market-Logo-scaled.jpg";
import { Link } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  const [closeMenu, setClosemenu] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100); // 100px down before sticky activates
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
                  <li className="">
                    <Link to='/about' className="text-decoration-none">ABOUT US</Link>
                    {/* <ul className="sub-menu">
                      <li><a href="index.html">Home Default</a></li>
                      <li><a href="index02.html">Home page 02</a></li>
                      <li><a href="index-boxed.html">Home page boxed</a></li>
                      <li><a href="left-side-header.html">Header Left</a></li>
                      <li><a href="top-bar-position.html">Top bar position</a></li>
                      <li><a target="_blank" href="index-onepage.html">One Page Version</a></li>
                    </ul> */}
                  </li>
                  <li><Link to='/mortgageconsulting' className="text-decoration-none">Mortgage consulting</Link></li>
                  <li><Link to="/realestateconsulting" className="text-decoration-none">Real estate consulting</Link>
                  </li>
                  <li>
                    <Link to="/partners" className="text-decoration-none">Partners</Link>
                  </li>
                  <li><Link to="/contact" className="text-decoration-none">Contact</Link></li>
                </ul>
                {/* {
                  showMenu ? (
                    <ul className="menu menu-extra">
                      <li className="navigator-toggle">
                        <Link href="#" className="navigator-toggle"
                          onClick={() => { openMenu(!menu); setShowmenu(!showMenu); }}
                        ><i className="fa fa-bars" ></i></Link>
                      </li>
                    </ul>
                  ) : <RiCloseLine onClick={() => { openMenu(!menu); setClosemenu(!closeMenu); }} />
                } */}
                <ul className="menu menu-extra">
                  <li className="navigator-toggle">
                    <a href="#" className="navigator-toggle"><i className="fa fa-bars"></i></a>
                  </li>
                </ul>
              </nav>

              <nav id="site-navigator-mobile" className="navigator-mobile">
                {/* <!-- /.navigator-toggle --> */}
                <ul id="menu-main-menu-1" className={`${menu ? "block" : "hidden"
                  }  mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
                  <li className="menu-item-has-children">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Features</a>
                  </li>
                  <li><a href="about.html">About us</a></li>
                  <li className="menu-item-has-children">
                    <a href="services.html">Our Services</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="showcase01.html">Projects</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li><a href="products.html">Store</a>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>

            </div>
          </div>
          <div id="masthead-sticky" className={`main-header ${isSticky ? "sticky" : ""}`}>
            <div className="wrapper">
              <div className="brand has-logo has-sticky-logo">
                <h1 className="logo"><a href="index.html"><img src={isSticky ? sticky_logo : logo} alt="Konstruct" /></a></h1>
              </div>
              <nav className="navigator">
                <ul className="menu">
                  <li className="active">
                    <a href="index.html">Home</a>
                    <ul className="sub-menu">
                      <li><a href="index.html">Home Default</a></li>
                      <li><a href="index02.html">Home page 02</a></li>
                      <li><a href="index-boxed.html">Home page boxed</a></li>
                      <li><a href="left-side-header.html">Header Left</a></li>
                      <li><a href="top-bar-position.html">Top bar position</a></li>
                      <li><a target="_blank" href="index-onepage.html">One Page Version</a></li>
                    </ul>
                  </li>
                  <li className="mega-menu">
                    <a href="#">Mega Menu</a>
                    <div className="mega-wrap">
                      <div className="col-sm-4">
                        <h3>FEATURES</h3>
                        <ul className="sub-menu">
                          <li><a href="header-classic.html">Classic</a></li>
                          <li><a href="header-left.html">Left</a></li>
                          <li><a href="header-center.html">Center</a></li>
                          <li><a href="index.html">Modern</a></li>
                          <li><a href="header-transparent.html">Transparent</a></li>
                          <li><a href="header-semi-transparent.html">Semi Transparent</a></li>
                          <li><a href="header-fixed.html">Fixed</a></li>
                          <li><a href="404.html">404</a></li>
                          <li><a href="blank-page.html">Blank page</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <h3>WE ARE KONSTRUCT</h3>
                        <div className="text">
                          <p>Konstruct is an construction company, proudly serving since 1991.Konstruct Construction Company. We will continue to meet the changing needs of our clients with our quality services delivered by the most qualified people.</p>
                          <p>We are uncompromising in our pursuit of excellence. Perhaps the greatest testament to our commitment to quality work is the recognition we have garnered from our peers. Konstruct projects have been honored with more than 600  national awards.</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <h3 className="widget-title">User Login</h3>
                        <form id="login-form" method="post" action="#">
                          <div className="input-wrap">
                            <input type="text" tabindex="1" placeholder="User name" name="username" id="username" />
                          </div>
                          <div className="input-wrap">
                            <input type="password" tabindex="2" placeholder="Password" name="password" id="password" />
                          </div>
                          <div className="send-wrap">
                            <button type="submit" id="submitLogin" className="button" name="submit">Login</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </li>
                  <li><a href="about.html">About us</a></li>
                  <li>
                    <a href="services.html">Our Services</a>
                    <ul className="sub-menu">
                      <li><a href="general-contracting.html">General Contracting</a></li>
                      <li><a href="construction-management.html">Construction Management</a></li>
                      <li><a href="design-build.html">Design-Build</a></li>
                      <li><a href="preconstruction-planning.html">Preconstruction &amp; Planning</a></li>
                      <li><a href="special-projects.html">Special Projects</a></li>
                      <li><a href="sustainable-construction.html">Sustainable Construction</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="showcase01.html">Projects</a>
                    <ul className="sub-menu">
                      <li><a href="showcase01.html">Showcase01</a></li>
                      <li><a href="showcase02.html">Showcase02</a></li>
                      <li><a href="showcase03.html">Showcase03</a></li>
                      <li><a href="full-width.html">Showcase04</a></li>
                      <li><a href="portfolio-single.html">Single Project</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                    <ul className="sub-menu">
                      <li><a href="blog.html">Medium Image Layout</a></li>
                      <li><a href="blog-large-image.html">Large Image Layout</a></li>
                      <li><a href="blog-grid.html">Grid Layout</a></li>
                      <li><a href="blog-masonry.html">Masonry Layout</a></li>
                      <li><a href="blog-single.html">Blog Single</a></li>
                    </ul>
                  </li>
                  <li><a href="products.html">Store</a>
                    <ul className="sub-menu">
                      <li><a href="products-two-columns.html">Products Two Columns</a></li>
                      <li><a href="products-four-columns.html">Products Four Columns</a></li>
                      <li><a href="products-right-sidebar.html">Products Right Sidebar</a></li>
                      <li><a href="product-single.html">Single Product</a></li>
                      <li><a href="cart.html">Shoping Cart</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
                <ul className="menu menu-extra">
                  <li className="off-canvas-toggle">
                    <a href="#"><i className="fa fa-bars"></i></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar