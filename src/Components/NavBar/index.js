import { Link } from "react-router-dom";
import  "./main.css";
// import styled from "styled-components";

// const NavbarSection=styled.div`
// padding: 20px 0;
// overflow: hidden;
// background: #fff;
// position: relative;
// border-bottom: 1px solid #000;
// `

const Navbar=()=>{
  return(
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h2 className="logo-text">Ultra Profile</h2>
        </div>
        <ul className="ul-list">
          <li className="list-item"><Link to="/">Home</Link></li>
          <li className="list-item"><Link to="/work">Work</Link></li>
          <li className="list-item"><Link to="/portfolio">Portfolio</Link></li>
          <li className="list-item"><Link to="/resume">Resume</Link></li>
          <li className="list-item"><Link to="/about">About</Link></li>
          <li className="list-item"><Link to="/contact">Contact</Link></li>
        </ul> 
      </div>
    </div>
  )
}
export default Navbar;