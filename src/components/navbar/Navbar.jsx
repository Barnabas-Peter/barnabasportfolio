import React,{useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
// import logo from '../../assets/logo.svg'
import './navbar.css';

const Menu = () =>(
  <>
<p><a href="#home">Home</a></p>
<p><a href="#wbarna">About</a></p>
{/* <p><a href="#possibility">Open AI</a></p> */}
<p><a href="#features">Experience</a></p>
<p><a href="#blog">Library</a></p> 
<p><a href="#footer">Contact Me</a></p>
</>
)

//BEM
const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <div className="barna__navbar">
      <div className="barna__navbar-links">
        {/* <div className="barna__navbar-links_logo">
          <img src={logo} alt="logo" />
          </div> */}
          <div className="barna__navbar-links_container">
          <Menu/>
          </div>
      </div>

      {/* <div className="barna__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}



      <div className="barna__navbar-menu">
        {toggleMenu
        ?<RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
        :<RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="barna__navbar-menu_container scale-up-center">
            <div classsName="barna__navbar-menu_container_links "> 
            <Menu/>

              <div className="barna__navbar-menu_container-links-sign ">
              <p>Sign in</p>
              <button type="button">Sign up</button>
              </div>

            </div>
        </div>
      )}
         </div>
    </div>
  )
}

export default Navbar
