import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router'

const RealEstateConsulting = () => {
  return (
    <>
      <Navbar />
      <div className="" id='site-content'>
        <div id="page-header">
          <div class="wrapper">
            <h2 class="title">REALESTATE CONSULTING</h2>
            <div class="breadcrumbs">
              <span class="trail-browse">You are here:</span>
              <span class="trail-begin"><Link to="/" title="Konstruct" rel="home">Home</Link></span>
              <span class="sep">/</span>
              <Link to="/realestateconsulting" title="Konstruct">Realestate Consulting</Link>
            </div>
          </div>
        </div>
      </div>
      RealEstateConsulting
      <Footer />
    </>
  )
}

export default RealEstateConsulting