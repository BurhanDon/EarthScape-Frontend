import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
    <div className="smIcons">
        <a href='' className="insta"> 
        <FaInstagram />
        </a>
        <a href='' className="youtube"> 
        <FaYoutube />
        </a>
        <a href='' className="facebook"> 
        <FaFacebook />
        </a>
    </div>
    <div className='underline'></div>
    <div className='copyright'>&copy;<span id="year">2024</span><span> EarthScape. All rights reserved.</span></div>
    </div>
  )
}

export default Footer