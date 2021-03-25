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
                <a target="_blank" href="/resume.pdf" className="resume-button">Resume</a>
              </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar;  