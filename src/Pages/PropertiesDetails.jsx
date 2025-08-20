import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { useParams } from 'react-router-dom';
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import data from '../../HouseData.json'
// import port_1 from '../assets/images/common/img_single_portfolio01.jpg'
import port_2 from '../assets/images/common/img_single_portfolio02.jpg'

const PropertiesDetails = () => {
  const { id } = useParams();
  const { Properties } = data;
  const property = Properties.find(p => p.id.toString() === id);

  if (!property) return <div>Property not found</div>;
  return (
    <>
      <Navbar />
      <div className="" id='site-content'>
        <div id="page-header">
          <div class="wrapper">
            <h2 class="title">Propperty Details</h2>
            <div class="breadcrumbs">
              <span class="trail-browse">You are here:</span>
              <span class="trail-begin"><Link to="/" title="Konstruct" rel="home">Home</Link></span>
              <span class="sep">/</span>
              <Link to="/item" title="Konstruct">Properties</Link>
              <span class="sep">/</span>
              <Link to="/item" title="Konstruct">Item 1</Link>
            </div>
          </div>
        </div>
      </div>
      <div id="page-body">
        <div class="wrapper">
          <div class="content-wrap">
            <main id="main-content" class="content">
              <div class="portfolio-container portfolio-single portfolio-content-left portfolio-content-sticky">
                <div class="portfolio-entries">
                  <article class="portfolio-item">
                    <div class="entry-wrapper">
                      <div class="entry-cover cover-list">
                        <ul class="media-list gallery">
                          <li class="image-item">
                            <Link to="images/common/img_single_portfolio01.jpg" class="quickview">
                              <img src={property.thumbnail} alt="Sky Tower" />
                            </Link>
                          </li>
                        </ul>
                        <div className="more_img">
                          <ul className='row'>
                            <li className="col-sm-3 image-item">
                              <Link to="images/common/img_single_portfolio02.jpg" class="quickview">
                                <img src={port_2} alt="Sky Tower" />
                              </Link>
                            </li>
                            <li className="col-sm-3 image-item">
                              <Link to="images/common/img_single_portfolio02.jpg" class="quickview">
                                <img src={port_2} alt="Sky Tower" />
                              </Link>
                            </li>
                            <li className="col-sm-3 image-item">
                              <Link to="images/common/img_single_portfolio02.jpg" class="quickview">
                                <img src={port_2} alt="Sky Tower" />
                              </Link>
                            </li>
                            <li className="col-sm-3 image-item">
                              <Link to="images/common/img_single_portfolio02.jpg" class="quickview">
                                <img src={port_2} alt="Sky Tower" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="entry-content">
                        <div class="entry-details">
                          <h3>Project Details</h3>
                          <ul class="entry-details-content">
                            <li class="date">
                              <strong>Construction Date</strong>
                              <p>{property.construction_date}</p>
                            </li>
                            <li class="location">
                              <strong>Location</strong>
                              <p>{property.housename}</p>
                            </li>
                            <li class="surface-area">
                              <strong>Surface Area</strong>
                              <p>{property.surface_area}</p>
                            </li>
                            <li class="investor">
                              <strong>Construction Investor</strong>
                              <p>{property.construction_investor}</p>
                            </li>
                            <li class="value">
                              <strong>Value</strong>
                              <p>${property.value}</p>
                            </li>
                            <li class="categories">
                              <strong>Categories:</strong>
                              <p><a href="showcase01.html">Buildings</a><span class="divider">, </span><a href="showcase01.html">Office</a></p>
                            </li>
                            <li class="tags">
                              <strong>Tags:</strong>
                              <p><a href="showcase01.html">Building</a><span class="divider">, </span><a href="showcase01.html">Office</a></p>
                            </li>
                          </ul>
                        </div>
                        <div class="entry-description">
                          <h3>Project Description</h3>
                          <div class="entry-desc-content">
                            <p>{property.Property_desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              {/* <!-- .navigation --> */}
              {/* <section class="box related-portfolios">
				                <div class="box-wrapper">
				                    <h3 class="box-title"><span>Related Portfolio</span></h3>
				                    <div class="box-content">
				                        <div class="portfolio-container portfolio-grid portfolio-four-columns">
				                            <div class="portfolio-entries">
				                                <div class="entries-wrapper">
				                                    <article class="hentry">
				                                        <div class="entry-wrapper">
				                                            <div class="entry-cover">
				                                                <img src="images/common/img_related_portfolio01.jpg" width="555" height="415" alt="Time City"/>
				                                                <div class="entry-links">
				                                                    <a href="portfolio-single.html" class="readmore">
				                                                    <span></span>
				                                                    </a>
				                                                    <a href="images/common/img_related_portfolio01.jpg" class="quickview">
				                                                    <span></span>
				                                                    </a>
				                                                </div>
				                                            </div>
				                                            <div class="entry-content">
				                                                <h2 class="entry-title">
				                                                    <a href="portfolio-single.html">Time City</a>
				                                                </h2>
				                                                <div class="entry-meta">
				                                                    Chicago, US				
				                                                </div>
				                                            </div>
				                                        </div>
				                                    </article>
				                                    <article class="hentry">
				                                        <div class="entry-wrapper">
				                                            <div class="entry-cover">
				                                                <img src="images/common/img_related_portfolio02.jpg" width="555" height="415" alt="Time City"/>
				                                                <div class="entry-links">
				                                                    <a href="portfolio-single.html" class="readmore">
				                                                    <span></span>
				                                                    </a>
				                                                    <a href="images/common/img_related_portfolio02.jpg" class="quickview">
				                                                    <span></span>
				                                                    </a>
				                                                </div>
				                                            </div>
				                                            <div class="entry-content">
				                                                <h2 class="entry-title">
				                                                    <a href="portfolio-single.html">Time City</a>
				                                                </h2>
				                                                <div class="entry-meta">
				                                                    Chicago, US				
				                                                </div>
				                                            </div>
				                                        </div>
				                                    </article>
				                                    <article class="hentry">
				                                        <div class="entry-wrapper">
				                                            <div class="entry-cover">
				                                                <img src="images/common/img_related_portfolio03.jpg" width="555" height="415" alt="Time City"/>
				                                                <div class="entry-links">
				                                                    <a href="portfolio-single.html" class="readmore">
				                                                    <span></span>
				                                                    </a>
				                                                    <a href="images/common/img_related_portfolio03.jpg" class="quickview">
				                                                    <span></span>
				                                                    </a>
				                                                </div>
				                                            </div>
				                                            <div class="entry-content">
				                                                <h2 class="entry-title">
				                                                    <a href="portfolio-single.html">Time City</a>
				                                                </h2>
				                                                <div class="entry-meta">
				                                                    Chicago, US				
				                                                </div>
				                                            </div>
				                                        </div>
				                                    </article>
				                                    <article class="hentry">
				                                        <div class="entry-wrapper">
				                                            <div class="entry-cover">
				                                                <img src="images/common/img_related_portfolio04.jpg" width="555" height="415" alt="Time City"/>
				                                                <div class="entry-links">
				                                                    <a href="portfolio-single.html" class="readmore">
				                                                    <span></span>
				                                                    </a>
				                                                    <a href="images/common/img_related_portfolio04.jpg" class="quickview">
				                                                    <span></span>
				                                                    </a>
				                                                </div>
				                                            </div>
				                                            <div class="entry-content">
				                                                <h2 class="entry-title">
				                                                    <a href="portfolio-single.html">Time City</a>
				                                                </h2>
				                                                <div class="entry-meta">
				                                                    Chicago, US				
				                                                </div>
				                                            </div>
				                                        </div>
				                                    </article>
				                                </div>
				                            </div>
				                        </div>
				                    </div>
				                </div>
				            </section> */}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PropertiesDetails