import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router'

const Partners = () => {
  return (
    <>
      <Navbar />
      <div className="" id='site-content'>
        <div id="page-header">
          <div class="wrapper">
            <h2 class="title">PARTNERS</h2>
            <div class="breadcrumbs">
              <span class="trail-browse">You are here:</span>
              <span class="trail-begin"><Link to="/" title="Konstruct" rel="home">Home</Link></span>
              <span class="sep">/</span>
              <Link to="/partners" title="Konstruct">Partners</Link>
            </div>
          </div>
        </div>
      </div>
      Partners
      <Footer />
    </>
  )
}

export default Partners