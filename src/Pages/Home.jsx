import React, { useEffect, useState } from 'react'
import logo from "../assets/image/House-Market-Logo-scaled.jpg"
// import sticky_logo from "../assets/images/logo_sticky.png"
// import slider_1 from "../assets/images/slides/slider_1.jpg"
// import slider_2 from "../assets/images/slides/slider_2.jpg"
// import slider_3 from "../assets/images/slides/slider_3.jpg"
// import slider_4 from "../assets/images/slides/slider_4.jpg"
import img_about01 from "../assets/images/shortcode/img_about01.jpg"
import img_about02 from "../assets/images/shortcode/img_about02.jpg"
// import img_about03 from "../assets/images/shortcode/img_about03.jpg"
// import img_portfolio01 from "../assets/images/shortcode/img_portfolio01.jpg"
// import img_portfolio02 from "../assets/images/shortcode/img_portfolio02.jpg"
// import img_portfolio03 from "../assets/images/shortcode/img_portfolio03.jpg"
// import img_portfolio04 from "../assets/images/shortcode/img_portfolio04.jpg"
// import img_portfolio05 from "../assets/images/shortcode/img_portfolio05.jpg"
// import img_portfolio06 from "../assets/images/shortcode/img_portfolio06.jpg"
// import img_portfolio07 from "../assets/images/shortcode/img_portfolio07.jpg"
// import img_portfolio08 from "../assets/images/shortcode/img_portfolio08.jpg"
// import who_are_we from "../assets/images/shortcode/img_whoweare.jpg"
import img_clientlogo01 from "../assets/images/shortcode/img_clientlogo01.png"
import img_clientlogo02 from "../assets/images/shortcode/img_clientlogo02.png"
import img_clientlogo03 from "../assets/images/shortcode/img_clientlogo03.png"
import img_clientlogo04 from "../assets/images/shortcode/img_clientlogo04.png"
import img_clientlogo05 from "../assets/images/shortcode/img_clientlogo05.png"
import img_clientlogo06 from "../assets/images/shortcode/img_clientlogo06.png"
import avatar01 from "../assets/images/shortcode/avatar01.jpg"
import avatar02 from "../assets/images/shortcode/avatar02.jpg"
import avatar03 from "../assets/images/shortcode/avatar03.jpg"
// import logo_footer from "../assets/images/shortcode/logo_footer1.png"
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router'

const Home = () => {
  const [properties, setProperties] = useState([])
  const url = "http://localhost:3000/Properties"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json();
        // const propData = Array.isArray(data.products) ? data.products : [];

        const formattedProp = data.map((properties) => ({
          id: properties.id,
          housename: properties.housename,
          location: properties.location,
          thumbnail: properties.thumbnail
        }))
        console.log(formattedProp)
        setProperties(formattedProp)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    };
    fetchData()
  }, [])
  return (
    <>
      <div id="site-wrapper">
        <Navbar />
        {/* <!-- /#site-header --> */}
        <div id="site-content">
          <div id="page-body">
            {/* <!-- Slider --> */}
            <div className="tp-banner-container">
              <div className="tp-banner" >
                <div class="properties-page-banner  align-items-center justify-content-center">
                  <h1 class="banner-text fw-bold ">Providing Housing Demand  & Supply Solution</h1>
                  <p className='qute'><i>. . . your sure plug</i></p>
                </div>
              </div>
            </div>
            <section className="feature_box">
              <div className="container">
                <div className="row">
                  <div className="col-sm-9 left">
                    <h3>Premium Mortgage Service</h3>
                    <p className="text"> Click to register for 1-year Basic premium mortgage service.</p>
                  </div>
                  <div className="col-sm-3 right">
                    <p><Link to="/properties" className="flat_btn01">Explore</Link></p>
                    {/* <p><Link to="/signup" className="flat_btn01">Sign UP</Link></p> */}
                  </div>
                </div>
              </div>
            </section>
            <section className="services">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-13 left">
                    <div className="row">
                      <div className="col-sm-4">
                        <article>
                          <p className="img_wrap"><a href="#"><img src={img_about01} width="448" height="348" alt="Construction Management" title="" /></a></p>
                          {/* <h4>Mortgage Consulting/Brokerage Service</h4> */}
                          <p className="content">As Mortgage experts, we provide professional mortgage consulting services and guidance making sure your housing goal is achieved.</p>
                        </article>
                      </div>
                      <div className="col-sm-4">
                        <article>
                          <p className="img_wrap"><a href="#"><img src={img_about02} width="448" height="348" alt="Construction Management" title="" /></a></p>
                          {/* <h4>Real Estate Consulting Services</h4> */}
                          <p className="content">Leverage house market data driven systems for business insights, service delivery, professional advice and client data management. </p>
                        </article>
                      </div>
                      <div className="col-sm-4">
                        <ul className="iconlist iconlist services-list">
                          <li><i className="fa fa-check"></i>Rent to Own Mortgage.</li>
                          <li><i className="fa fa-check"></i> Cooperative Mortgage</li>
                          <li><i className="fa fa-check"></i>National Housing Fund (NHF) Mortgage</li>
                          <li><i className="fa fa-check"></i> Real Estate Developer/Broker Mortgage</li>
                          <li><i className="fa fa-check"></i> Home renovation loan</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="portfolio">
              <div className="portfolio-filters">
                <ul>
                  <li className="active"><a data-filter="*" href="#">All</a></li>
                  <li><a data-filter=".architecture" href="#">Architecture</a></li>
                  <li><a data-filter=".buildings" href="#">Buildings</a></li>
                  <li><a data-filter=".office" href="#">Office</a></li>
                  <li><a data-filter=".interior-design" href="#">Interior Design</a></li>
                </ul>
              </div>
              <div className="portfolio-wrapper">
                <div className="entries-wrapper four-columns clearfix">

                  {properties.map((property) => (
                    <article class="item architecture m-5" key={property.id}>
                      <div class="media gallery">
                        <img src={property.thumbnail} width="555" height="415" alt="" />
                        <div class="overlay">
                          <Link to={`/propertydetails/${property.id}`} class="readmore"><i class="fa fa-link"></i></Link>
                          <a href={property.thumbnail} class="quickview">
                            <i class="fa fa-search"></i>
                          </a>
                        </div>
                      </div>
                      <div class="title">
                        <h2><a href="#">{property.housename}</a></h2>
                        <p class="entry-meta">{property.location}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <p className="btn_viewall"><a className="flat_btn01" href="projects/index.html" title="Projects" >View all Properties</a></p>
            </section>
            <section className="count_to flat_counter parallax" data-waypoint-active="yes">
              {/* <div className="overlay"></div> */}
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <h2 className="twhite text-white">If you are looking for Construction Companies in US<br />Then you have just landed in the right place.</h2>
                  </div>
                </div>
              </div>
            </section>
            <section className="why_us">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-sm-8">
                    <h3 className="flat_title">WHY CHOOSE US?</h3>
                    <div className="why_us_wrap">
                      <div className="col-md-6 col-sm-6">
                        <div className="iconbox  inline-left rounded">
                          <div className="box-header">
                            <div className="box-icon"><i className="fa fa-check"></i></div>
                            <h4 className="box-title">Experience</h4>
                          </div>
                          <div className="box-content">
                            We bring you the benefit, each with over 20 years experience. we know exactly what is required, and when it needs to be done.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="iconbox  inline-left rounded">
                          <div className="box-header">
                            <div className="box-icon"><i className="fa fa-check"></i></div>
                            <h4 className="box-title">Superior Quality</h4>
                          </div>
                          <div className="box-content">
                            We are versatile, regardless of the design of your home, we can help you make the right decisions and leave you with a result that you love.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="iconbox  inline-left rounded">
                          <div className="iconbox  inline-left rounded">
                            <div className="box-header">
                              <div className="box-icon"><i className="fa fa-check"></i></div>
                              <h4 className="box-title">Honest and Dependable</h4>
                            </div>
                            <div className="box-content">
                              For us, honesty is the only policy and we strive to complete all projects with integrity. We are one of the most trusted construction companies in US
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="iconbox  inline-left rounded">
                          <div className="box-header">
                            <div className="box-icon"><i className="fa fa-check"></i></div>
                            <h4 className="box-title">Very competitive Rates</h4>
                          </div>
                          <div className="box-content">
                            The best part is we deliver high quality work at very highly competitive prices. Contact us for quotation and you will find that prices are truly affordable
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="who_we_are">
                      <h3 className="flat_title">WHO WE ARE?</h3>
                      <p className="media"><Link to="#"><img src={logo} alt="who we are" /></Link></p>
                      <p>House Market is one of the largest privately owned properties companies in the region with a turnover in excess of U₦125,000,000.</p>
                      <p className="btn_downbrochure"><Link title="Download our Brochure" to="/about"><span>About Us<i className="fa fa-file-pdf-o"></i></span></Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="clients">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12"><h3 className="flat_title">WHAT OUR CLIENTS SAY</h3></div>
                  <div className="clients_logo clearfix">
                    <div className="col-md-2 col-sm-4 col-xs-4">
                      <p><a href="#"><img src={img_clientlogo01} alt="client logo" /></a></p>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4">
                      <p><a href="#"><img src={img_clientlogo02} alt="client logo" /></a></p>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4">
                      <p><a href="#"><img src={img_clientlogo03} alt="client logo" /></a></p>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4">
                      <p><a href="#"><img src={img_clientlogo04} alt="client logo" /></a></p>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4">
                      <p><a href="#"><img src={img_clientlogo05} alt="client logo" /></a></p>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4">
                      <p><a href="#"><img src={img_clientlogo06} alt="client logo" /></a></p>
                    </div>
                  </div>
                  <div className="container-fluid clients_say">
                    <div className="col-sm-4">
                      <div className="testimonial">
                        <div className="testimonial-content">
                          <blockquote>
                            We especially want to thank your staff for their consistent, exemplary professional contributions… The community is so pleased with the new facility.
                          </blockquote>
                        </div>
                        <div className="testimonial-meta">
                          <div className="testimonial-image">
                            <img src={avatar01} alt="Jennifer A" />
                          </div>
                          <div className="testimonial-author">
                            <strong className="author-name">Jennifer A </strong>
                            <div className="author-info"><span className="subtitle">Chair</span> <span className="divider">-</span> <span className="company">Decor, Inc</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="testimonial">
                        <div className="testimonial-content">
                          <blockquote>
                            Tung Phan is very conscientious and thoughtful. He always calls to inform us about time frames, changes and costs. He is certainly an asset to your company.
                          </blockquote>
                        </div>
                        <div className="testimonial-meta">
                          <div className="testimonial-image">
                            <img src={avatar02} alt="John Doe" />
                          </div>
                          <div className="testimonial-author">
                            <strong className="author-name">John Doe</strong>
                            <div className="author-info"><span className="subtitle">President/CEO</span> <span className="divider">-</span> <span className="company">Interior Co.,LTD</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="testimonial">
                        <div className="testimonial-content">
                          <blockquote>
                            Your people were a joy to work with, and I can assure you that I would be the first in line to recommend Konstruct Construction for any construction project
                          </blockquote>
                        </div>
                        <div className="testimonial-meta">
                          <div className="testimonial-image">
                            <img src={avatar03} alt="Dos Santos" />
                          </div>
                          <div className="testimonial-author">
                            <strong className="author-name">Dos Santos</strong>
                            <div className="author-info"><span className="subtitle">Administrator</span> <span className="divider">-</span> <span className="company">Uma Decor</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home