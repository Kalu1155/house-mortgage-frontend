import React from 'react'
import logo from "../assets/image/House-Market-Logo-scaled.jpg";
// import facebook from "../assets/icons/facebook.svg";
// import linkedin from "../assets/icons/linkedin.svg";
// import instagram from "../assets/icons/instagram.svg";
import bee from "../assets/icons/bee.svg";
import social from "../assets/icons/social.svg";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



const Footer = () => {
    return (
        <>
            <footer className='rounded shadow'>
                <div className="footer">
                    <div className="footer-contact">
                        <figure>
                            <Link to='/'><img src={logo} alt="" /></Link>
                        </figure>
                        <h4>Contact Us</h4>
                        <p>Call: +2348065528365</p>
                        <p>C14 NAF Valley Shopping Mall, Asokoro Abuja</p>
                        <h6 className="mb-3">Email: info@housemarketng.com</h6>

                        <div className="footer-social-media">
                            <ul>
                                <li className='list-color'><Link><FaFacebookF /></Link></li>
                                <li className='list-color'><Link><FaLinkedin /></Link></li>
                                <li><Link><img src={social} alt="" /></Link></li>
                                <li className='list-color'><Link><FaInstagram /></Link></li>

                                <li><Link><img src={bee} alt="" /></Link></li>
                            </ul>
                        </div>

                    </div>
                    <div className="footer-socials">

                    </div>
                    <div className="list">
                        <ul>
                            <li>Features</li>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/about">Our Projects</Link></li>
                            <li><Link to='/mortgageconsulting'>Mortgage Consulting</Link></li>
                            <li><Link to='/realestateconsulting'>Real Estate Consulting</Link></li>
                            <li><Link to='/partners'>Partners</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="list">
                        <ul>
                            <li>Company</li>
                            <li><Link to='/about'>About Us</Link></li>
                            <li><Link>Press</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li><Link>Career</Link></li>
                            <li><Link>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="list">
                        <ul>
                            <li>Terms and policies</li>
                            <li><Link>Terms Of Services</Link></li>
                            <li><Link>Privacy Policy</Link></li>
                            <li><Link>Security</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer