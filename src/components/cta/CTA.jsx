import React from 'react';
import './cta.css';

const CTA = () => (
  <div className="barna__cta">
    <div className="barna__cta-content">
      {/* <p>Get Started, take your business online</p> */}
      <h3>Join Barnabas on his journey of technological innovation, youth leadership, and making a positive impact.</h3>
    </div>
    <div className="barna__cta-btn">
      <button type="button" onClick={() => { window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=barnabasmuuo.peter@gmail.com'; }}>
        Reach Out
      </button>
    </div>
  </div>
);

export default CTA;
