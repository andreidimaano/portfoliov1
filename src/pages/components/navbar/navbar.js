import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
        <nav className='navbar-container'>
          <div className='navbar-logo'>
              <Link to='/'>ad</Link>
              </div>
          <div className="navbar-links">
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#jobs">Experience</a>
                </li>
                <li>
                  <a href="#projects">Work</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <div>
                <a target="_blank" href="https://drive.google.com/file/d/1fEB61K0ypOM1ZqQ2kQin6Hcrmf_PXX17/view?usp=sharing" className="resume-button">Resume</a>
              </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar;  