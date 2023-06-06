import React from 'react'

import {Blog,Features,Footer,Header, Whatbarna} from './containers';
import {Brand,CTA,Navbar} from './components';
import './App.css'; 
import Possibility from './containers/possibility/Possibility';


const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>

        <Header/>

       </div>
       <Brand/>
       
       <Whatbarna/>

       {/* Services */}
       <Features/>  

       <CTA/>
       <Possibility/>

       <Blog/>

       <Footer/>
 </div>
  )
}

export default App