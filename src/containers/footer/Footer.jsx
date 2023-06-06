import React from 'react';
// import barnaLogo from '../../assets/logo.svg'
import './footer.css';

const Footer = () => {

  const handleEmailClick = () => {
    window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=barnabasmuuo.peter@gmail.com';
  };

  return (
    <div className="barna__footer section__padding" id="footer">
      <div className="barna__footer-heading">
        <h1 className="gradient__text">Let's make it happen together!</h1>
      </div>

      <div className="barna__footer-btn">
        <button className="transparent-button" onClick={handleEmailClick}>Send me an email</button>
      </div>

      <div className="barna__footer-links">
        <div className="barna__footer-links_logo">
          <p><br /> All Rights Reserved</p>
          {/* <img src={barnaLogo} alt="barna_logo" /> */}
        </div>
        <div className="barna__footer-links_div">
          <h4>Links</h4>
          <p>LinkedIn</p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>

        <div className="barna__footer-links_div">
          <h4>Get in touch</h4>
          <p>Kenya-India</p>
          <p>Email</p>
        </div>
      </div>

      <div className="barna__footer-copyright">
        <p>@2023 BarnabasMuuo. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
