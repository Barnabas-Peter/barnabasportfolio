import React from 'react';
// import people from '../../assets/people.png';
import laptop from '../../assets/laptop.png';
import './header.css';

const Header = () => (
  <div className="barna__header section__padding" id="home">
    <div className="barna__header-content">
      <h1 className="gradient__text">Step into the World of Barnabas Muuo Peter</h1>
      <p>Barnabas is currently a finalist for his Bachelor's Degree in Computer Science from KIIT University and a Diploma in Business Information Technology from Strathmore University. With a keen interest in data science and a drive to leverage its power for positive change, he embraces the potential of this field. Additionally, as a passionate advocate for youth engagement, he strives to amplify the voices and visions of young people, empowering them to shape a brighter future.</p>

    

      {/* <div className="barna__header-content__people">
       <img src={people} alt="people"/>
        <p> Let this developer bring your vision to life and take your online presence to the next level.</p>
      </div> */}
    </div>

    <div className="barna__header-image">
      <img src={laptop} alt="ai" />
    </div>
  </div>
);

export default Header;