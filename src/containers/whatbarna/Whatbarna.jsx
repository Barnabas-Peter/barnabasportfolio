import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatbarna.css';

const Whatbarna = () => (
  <div className="barna__whatbarna section__margin" id="wbarna">

      <div className="barna__whatbarna-feature">
            <Feature title="Who is Barnabas" text="Barnabas Muuo Peter possesses a remarkable repertoire of programming skills that empower him to turn ideas into reality in the digital realm. With expertise in languages such as HTML, CSS, JavaScript, and Python, he is well-versed in the tools necessary to craft innovative and interactive web applications. Barnabas's proficiency in these programming languages allows him to build robust and visually appealing websites, ensuring seamless user experiences and captivating designs. ." />
          
      </div>

         <div className="barna__whatbarna-heading">
           <h1 className="gradient__text">Discover the Three Pillars of Success</h1>
           {/* <p>Explore the Library</p> */}
         </div>

      <div className="barna__whatbarna-container">
       <Feature title="Innovation" text="Pushing the boundaries to deliver innovative solutions tailored to specific project requirements." />
      <Feature title="Problem-solving and Critical Thinking" text="Crafting bespoke solutions for each project by deeply understanding their distinct needs, objectives, and obstacles." />
     <Feature title="Collaboration" text="Emphasizing teamwork and collaboration to efficiently and effectively complete projects and exceed expectations" />
      </div>

  </div>
);

export default Whatbarna;