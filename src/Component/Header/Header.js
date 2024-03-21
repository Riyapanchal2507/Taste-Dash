import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  useEffect(()=>{},[btnNameReact]);
  return (
    <div className='header'>
      <img src='https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018'/>
      <div className='nav-items'>
          <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about'>About Us</NavLink> </li>
              <li><NavLink to='/contact'>Contact Us</NavLink> </li>
              <li><NavLink to='/cart'>Cart</NavLink> </li>
              <button className='login'
              onClick={()=>{
                btnNameReact === "Login" 
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              }}>{btnNameReact}</button>
          </ul>
      </div>
    </div>
  );
}

export default Header;
