import React from 'react';
import peter from '../../assets/peter.jpg';
import './possibility.css';

const Possibility = () => (
  <div className="barna__possibility section__padding" id="possibility">
    <div className="barna__possibility-image">
      <img src={peter} alt="peter" />
    </div>
    <div className="barna__possibility-content">
     {/* <h4>Get Started, take your business online</h4> */}
     <br/>
     <br/>
     <br/>

            <h1 className="gradient__text">Amplifying Youth Voices: <br /> Empowering Change, Inspiring Innovation</h1>
      <p>As a passionate advocate for youth engagement, Barnabas is enthusiastic about amplifying
         the voices and visions of young people, striving to make a positive impact at local, national,
          and global levels. He believes in the power of technology as a catalyst for change and 
          constantly seeks opportunities to leverage his skills and expertise to drive innovation
          and transformation.</p>
      {/* <h4>Get Started, take your business online</h4> */}
    </div>
  </div>
);

export default Possibility;