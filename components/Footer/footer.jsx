import React from 'react'
import "./footer.css"
import { assets } from '../../assets/assets'

const footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=''/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt blanditiis, laboriosam facere tenetur autem qui enim suscipit ullam? Iure distinctio praesentium blanditiis porro voluptatem non ipsam, minima labore nam sint.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 1234567890</li>
                    <li>contact@swigspot.com</li>
                </ul>
            </div>
        </div>
    <hr />
    <p className='footer-copyright'>Copyright 2024 © SwigSpot.com - All Right  Reserved</p>
    </div>
  )
}

export default footer
