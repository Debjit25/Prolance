import React from "react";
import "./Footer.scss";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src="/img/logo-white.png" alt="" className="logo" />
          <p>
            Prolance is a vibrant platform where talented college students
            showcase their skills and offer freelance services. Our mission is
            to bridge the gap between academia and the professional world,
            empowering students to gain real-world experience and connect with
            clients who value fresh, innovative solutions.
          </p>
          <div className="footer-social-icons">
            <RiTwitterXFill />
            <FaFacebook />
            <FaLinkedin />
            <FaGithubSquare />
            <FaInstagramSquare />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-9382770011</li>
            <li>contact@prolance.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Prolance.com - All rights reserved.
      </p>
    </div>
  );
};




export default Footer;
