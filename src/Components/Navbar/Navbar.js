import React, { useState } from 'react'
import logo from '../../assets/logo.webp'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  const [hamburgerOpen, setHamburgerOpen] = useState(''); //whether hamburger is toggled or not

  const toggleHamburger = () => {
    if (hamburgerOpen === '') {
      setHamburgerOpen('active');
    }
    else {
      setHamburgerOpen('');
    }
  }

  return (
    <>
      <header>
        <div><img src={logo} alt="logo" className='logo' /></div>
        <div className={`hamburger ${hamburgerOpen}`} onClick={toggleHamburger}>
          <div>
            <span className="line1" ></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
        <nav className={`nav-bar ${hamburgerOpen}`}>
          <ul>
            <li><NavLink to="/" onClick={toggleHamburger}>Home</NavLink></li>
            <li><NavLink to="/project" onClick={toggleHamburger}>Project</NavLink></li>
            <li><NavLink to="/resume" onClick={toggleHamburger}>Resume</NavLink></li>
            <li><NavLink to="/contact" onClick={toggleHamburger}>Contact</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

