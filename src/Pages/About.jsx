import React from 'react'
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div class="properties-page-banner d-flex align-items-center justify-content-center">
        <div class="">
          <h2 class="fs-1 fw-semibold mb-4 text-center"  >ABOUT US</h2>
        </div>
      </div>
      <h3 className=" text-center mx-5 mt-5 fw-bolder">WHO WE ARE</h3>
      <p className=" mx-5 mt-4 text-left">
        Established in 2022, House Market Limited is a data driven orient and game changer in the demand and supply value-chain with a focus on Real Estate Management and Consulting, Mortgage, Marketing and Sales Consulting services using sustainable methods that thrive on Property and Finance Technology <b>(Prop FinTech)</b> systems.
        At House Market Ltd, our leadership team comprises of industry’s experienced expert with passion for excellence. As we continue to revolutionize the Real Estate sector, our vision is to becoming the leading Real Estate Property Technology solution in Nigeria and Africa; we thrive to impact in Integrity and professionalism within the purview of world best practice.
      </p>
      <div class="container-fluid mt-3 d-flex  flex-column flex-md-row align-items-center justify-content-center">

        <p class="border-2 shadow-sm rounded-4 p-3 m-3 card-hover w-100 h-25 d-inline-block">
          <h3>Mission</h3>
          <br />
          To provide seamlessness by transforming Real Estate business service delivery, mortgage services delivery with marketing and sales strategies using Data driven insights.</p>
        <p class="border-2 shadow-sm rounded-4 p-4 m-3 card-hover w-100 h-25 d-inline-block">
          <h3 className="pb-1">Vision</h3>
          <br />
          To become a reliable source of housing/property data in the Real estate demand and Supply delivery value-chain</p>
      </div>

      <h3 className="mx-5 mt-5 fw-bolder text-primary-emphasis">- Our Services</h3>
      <h3 className="mx-5 mt-4 fw-semibold">Mortgage Consulting/Brokerage Services</h3>
      <h5 className="mx-5 mt-4 ">We provide;</h5>
      <div class="container">
        <ul>
          <li class="p-2">Mortgage Information & property Sourcing service <b>(Basic Premium Service)</b></li>
          <li class="p-2">Mortgage Profiling service</li>
          <li class="p-2">Mortgage Processing service</li>
        </ul>

      </div>
      <h3 className="mx-5 mt-4 fw-semibold">Real Estate Consulting Services</h3>
      <p className="mx-5 mt-4 ">We are a consulting, <b>Property and Finance Technology (PropTech)</b> driven company; we provide solution and seamlessness using data driven insights for decision making and company/customer data management. Our services include;</p>
      <div class="container">
        <ul>
          <li class="p-2">Capacity Building/Training: Real Estate data analytics and management systems</li>
          <li class="p-2">Property & Project Management </li>
          <li class="p-2">Marketing Services</li>
          <li class="p-2">Professional Project Planning & Advisory services</li>
        </ul>
      </div>
      <h3 className="mx-5 mt-4 fw-semibold">-Mortgage Consulting/Brokerage Service</h3>
      <p className="mx-5 mt-4 ">As Mortgage experts, we provide professional mortgage consulting services and guidance making sure your housing goal is achieved.</p>
      <p className="mx-5 mt-4 ">We strive to provide you firsthand information on financing opportunities, mortgage properties from the <b>Federal Mortgage Bank of Nigeria (FMBN)</b> and other private mortgage financing institutions.</p>
      <h5 className="mx-5 mt-4 ">Our services include;</h5>
      <div class="container">
        <ul>
          <li class="p-2">Mortgage Information & property Sourcing service <b>(Basic Premium Service)</b> </li>
          <li class="p-2">Mortgage Profiling service</li>
          <li class="p-2">Mortgage Processing service</li>
        </ul>
      </div>
      <h3 className="mx-5 mt-4 fw-semibold">Real Estate Consulting Services</h3>
      <p className="mx-5 mt-4 ">We are a consulting, <b>Property and Finance Technology (PropTech)</b> driven company; we provide solution and seamlessness using data driven insights for decision making and company/customer data management. Our services include;</p>
      <div class="container">
        <ul>
          <li class="p-2">Capacity Building/Training: Real Estate data analytics and management systems</li>
          <li class="p-2">Property & Project Management </li>
          <li class="p-2">Marketing Services</li>
          <li class="p-2">Professional Project Planning & Advisory services</li>
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default About