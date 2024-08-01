import React from "react";
import "./Footer.scss";

// function Footer() {
//   return (
//     <div className="footer">
//       <div className="container">
//         <div className="top">
//           <div className="item">
//             <h2>Categories</h2>
//             <span>Graphics & Design</span>
//             <span>Digital Marketing</span>
//             <span>Writing & Translation</span>
//             <span>Video & Animation</span>
//             <span>Music & Audio</span>
//             <span>Programming & Tech</span>
//             <span>Data</span>
//             <span>Business</span>
//             <span>Lifestyle</span>
//             <span>Photography</span>
//             <span>Sitemap</span>
//           </div>
//           <div className="item">
//             <h2>About</h2>
//             <span>Press & News</span>
//             <span>Partnerships</span>
//             <span>Privacy Policy</span> 
//             <span>Terms of Service</span>
//             <span>Intellectual Property Claims</span>
//             <span>Investor Relations</span>
//             <span>Contact Sales</span>
//           </div>
//           <div className="item">
//             <h2>Support</h2>
//             <span>Help & Support</span>
//             <span>Trust & Safety</span>
//             <span>Selling on Prolance</span>
//             <span>Buying on Prolance</span>
//           </div>
//           {/* <div className="item">
//             <h2>Community</h2>
//             <span>Customer Success Stories</span>
//             <span>Community hub</span>
//             <span>Forum</span>
//             <span>Events</span>
//             <span>Blog</span>
//             <span>Influencers</span>
//             <span>Affiliates</span>
//             <span>Podcast</span>
//             <span>Invite a Friend</span>
//             <span>Become a Seller</span>
//             <span>Community Standards</span>
//           </div> */}
//           {/* <div className="item">
//             <h2>More From Prolance</h2>
//             <span>Prolance Business</span>
//             <span>Prolance Pro</span>
//             <span>Prolance Logo Maker</span>
//             <span>Prolance Guides</span>
//             <span>Get Inspired</span>
//             <span>Prolance Select</span>
//             <span>ClearVoice</span>
//             <span>Prolance Workspace</span>
//             <span>Learn</span>
//             <span>Working Not Working</span>
//           </div> */}
//         </div>
//         <hr />
//         <div className="bottom">
//           <div className="left">
//             <h2>Prolance</h2>
//             <span>Copyright 2024 © Prolance.com - All rights reserved.</span>
//           </div>
//           <div className="right">
//             <div className="social">
//               <img src="/img/twitter.png" alt="" />
//               <img src="/img/facebook.png" alt="" />
//               <img src="/img/linkedin.png" alt="" />
//               <img src="/img/pinterest.png" alt="" />
//               <img src="/img/instagram.png" alt="" />
//             </div>
//             <div className="link">
//               <img src="/img/language.png" alt="" />
//               <span>English</span>
//             </div>
//             <div className="link">
//               {/* <img src="/img/coin.png" alt="" /> */}
//               <span>₹</span>
//             </div>
//             <img src="/img/accessibility.png" alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src="/img/logo-white.png" alt="" className="logo"/>
          <p>
            Prolance is a vibrant platform where talented college students
            showcase their skills and offer freelance services. Our mission is
            to bridge the gap between academia and the professional world,
            empowering students to gain real-world experience and connect with
            clients who value fresh, innovative solutions.
          </p>
          <div className="footer-social-icons">
            <img src="/img/twitter.png" alt="" />
            <img src="/img/facebook.png" alt="" />
            <img src="/img/linkedin.png" alt="" />
            <img src="/img/pinterest.png" alt="" />
            <img src="/img/instagram.png" alt="" />
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
