import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router'

const MortgageConsulting = () => {
  return (
    <>
      <Navbar />
      <div className="" id='site-content'>
        <div id="page-header">
          <div class="wrapper">
            <h2 class="title">MORTGAGE SERVICE</h2>
            <div class="breadcrumbs">
              <span class="trail-browse">You are here:</span>
              <span class="trail-begin"><Link to="/" title="Konstruct" rel="home">Home</Link></span>
              <span class="sep">/</span>
              <Link to="/mortgageconsulting" title="Konstruct">Mortgage Service</Link>
            </div>
          </div>
        </div>
      </div>
      <h3 className=" text-center mx-5 mt-5 fw-bolder">Mortgage Premium Service (MPS)</h3>
      <p className=" mx-5 mt-4 text-left">
        House Market Mortgage Premium Service system provides for exclusive mortgage opportunities across Nigeria. Registration provides you information on mortgage products; Rent–to-Own mortgage properties, Low, Medium & High-end Mortgage Properties and other mortgage Finance systems available to prospects. We collaborate with Housing Finance institutions in public & private sector. With the <b>Federal Mortgage Bank of Nigeria (FMBN), Ministry of Finance Incorporated Real Estate Fund (MREIF)</b>, Real Estate Developers Home Ownership Plan and other private sector driven mortgage systems, we are your reliable source for mortgage information and opportunities in Nigeria.
      </p>

      <div className="p-5">
        <div className="text">
          <h5 className="mx-5 mt-4 ">Subscribe to our One (1) year Mortgage Basic Premium Services <b>(@ Ten thousand naira only N10, 000.00)</b> for information on mortgage products as;</h5>
          <div class="container">
            <ul>
              <li class="p-2">National Housing Fund (NHF) & Federal Mortgage Bank Properties</li>
              <li class="p-2">Co-operative Mortgage</li>
              <li class="p-2">MREIF Mortgage</li>
              <li class="p-2">Others</li><p>After successful registration, payment & submission, prospects are directed to fill the off-taker data form.</p>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="mx-5 mt-5 fw-bolder">- OFF-TAKER DATA FORM</h3>

       
        <p>
           <i>Enroll for a Mortgage of choice </i>
        <br />
          Data you provide enables for data driven decision making and customer choice satisfaction. We make participation in mortgage possible for all thus making your mortgage/house ownership plan a reality. Fill the Off-Taker form below to begin searching for a suitable mortgage of choice.</p>
      </div>

      
                <div className="row align-items-center justify-content-center">

                <div className="col-sm-5 d-flex align-items-center justify-content-center">
                    <div className="shadow rounded-4 p-3 m-3 form">
                        <h3 class="widget-title">Personal Info</h3>
                        <form id="login-form" method="post" action="#">
                            <div class="input-wrap">
                                <input type="text" className='mx-5 px-5 my-3' placeholder="First name" name="username" id="username" />
                            </div>
                            <div class="input-wrap">
                                <input type="text" className='mx-5 my-3 px-5' placeholder="Middle Name" name="username" id='username' />
                            </div>
                            <div class="input-wrap">
                                <input type="text" className='mx-5 my-3 px-5' placeholder="Last Name" name="username" id='username' />
                            </div>

                            <div class="input-wrap">
                                <input type="text" className='mx-5 my-3 px-5' placeholder="Phone.No" name="username" id='username' />
                            </div>
                            <div class="input-wrap">
                                <input type="text" className='mx-5 my-3 px-5' placeholder="Age" name="username" id='username' />
                            </div>

                            <div class="input-wrap">
                                <input type="text" className='mx-5 my-3 px-5' placeholder="Email" name="username" id='username' />
                            </div>
                            <div class="send-wrap row">
                                <p type="submit" id="submitLogin" class="bg-white shadow-none col-sm-7 left" name="submit"></p>
                                <button type="submit" id="submitLogin" class="button col-sm-4 left" name="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>

                  <div className="col-sm-5 d-flex align-items-center justify-content-center">
                    <div className="shadow rounded-4 p-3 m-3 form">
                        <h3 class="widget-title">Other Info</h3>
                        <form id="login-form" method="post" action="#">
                            <div class="input-wrap">
                                <input type="text" className='mx-5 px-5 my-3' placeholder="Place Of Work" name="username" id="username" />
                            </div>
                            <div class="input-wrap">
                                <input type="text" className='mx-5 my-3 px-5' placeholder="NHF Contributor" name="username" id='username' />
                            </div>
                            <div class="input-wrap">
                                <input type="text" className='mx-5 my-3 px-5' placeholder="Civil Servant" name="username" id='username' />
                            </div>

                            <div class="input-wrap">
                                <input type="text" className='mx-5 my-3 px-5' placeholder="Self-employed" name="username" id='username' />
                            </div>
                            <div class="input-wrap">
                                <input type="text" className='mx-5 my-3 px-5' placeholder="Monthly Salary/Income amount " name="username" id='username' />
                            </div>

                            <div class="input-wrap">
                                <input type="text" className='mx-5 my-3 px-5' placeholder="Other income" name="username" id='username' />
                            </div>
                            <div class="send-wrap row">
                                <p type="submit" id="submitLogin" class="bg-white shadow-none col-sm-7 left" name="submit"></p>
                                <button type="submit" id="submitLogin" class="button col-sm-4 left" name="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
      <Footer />
    </>
  )
}

export default MortgageConsulting