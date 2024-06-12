import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <div className="copyrightText">
        <p>&copy; 2024. All rights reserved by <Link to='/' rel='noopener' target='_blank'>Raj Marathe</Link></p>
      </div>
  )
}

export default Footer