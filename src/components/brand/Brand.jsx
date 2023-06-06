import React from 'react';

import { html, css, js, bootstrap, python, reactlogo } from './imports';
import './brand.css';


const Brand = () => {
  return(
  <div className="barna__brand section__padding">
    <div>
      <img src={html} alt="html" />
    </div>
    <div>
      <img src={css} alt="css" />
    </div>
    <div>
      <img src={js} alt="js" />
    </div>
    <div>
      <img src={bootstrap} alt="bootstrap" />
    </div>
    <div>
      <img src={python} alt="python" />
    </div>
    <div>
      <img src={reactlogo} alt="react" />
    </div>
</div> 
  )
};

export default Brand;