import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router'

const SignUp = () => {
    return (

        <>
            <Navbar />
            <div className="" id='site-content'>
                <div id="page-header">
                    <div class="wrapper">
                        <h2 class="title">SIGN UP</h2>
                        <div class="breadcrumbs">
                            <span class="trail-browse">You are here:</span>
                            <span class="trail-begin"><Link to="/" title="Konstruct" rel="home">Home</Link></span>
                            <span class="sep">/</span>
                            <Link to="/signup" title="Konstruct">Sign Up</Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2>Registration is for mortgage information service</h2>
                    <details>
                        <summary className='container'>
                            The services are FMBN product (rent to own, Cooperative Loan, construction loan, Home renovation loan, NHF mortgage loan) information sharing & current properties available for mortgage and other mortgage available offerings in the market. A further demand in service for profiling, processing and property sourcing is a different service cost fee.
                        </summary>
                    </details>

                    <details className='my-3'>
                        <summary className='container'>
                            Registration is N20,000 
                            <br />
                            <summary> Individual creates account by filling the form below after paying the sum of N20,000 for Basic Premium Mortgage Service or as best advised</summary>
                            <br />
                            They fill the Off-Taker Data Form
                        </summary>
                    </details>
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

            </div>
            <Footer />
        </>
    )
}

export default SignUp