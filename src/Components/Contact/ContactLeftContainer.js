import React from 'react'
import contactImg from '../../assets/Contact.jpg'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'


const ContactLeftContainer = () => {
  return (
    <motion.div
    initial={{ opacity: 0,y:100 }}
    whileInView={{ opacity: 1,y:0 }}
    transition={{duration:1}} className="contactImgContainer">
      <img src={contactImg} alt="ContactImage" />

      <div className="contactData">
        <h3>Raj Marathe</h3>
        <p>Web Developer & Designer</p>
        <p className='contactDes'>As a dedicated freelancer, I bring personalized attention and
          a passion for excellence to each project, ensuring your vision is brought to
          life with precision and creativity. Contact me via email or call me</p>
        <p className="contactInfo">Phone: <span>+91 9922422194</span></p>
        <p className="contactInfo">Email: <span>rajmarathe30@gmail.com</span></p>
      </div>
      <div className="contactLinkContainer">
        <h2>FIND ME ON</h2>
        <div className="contactIconContainer">
          <a href='https://www.' rel='noreferrer' target='_blank'> <span className="contactSocialIcon"><FaFacebookF /></span></a>
          <a href='https://www.' rel='noreferrer' target='_blank'> <span className="contactSocialIcon"><FaLinkedinIn /></span></a>
          <a href='https://www.' rel='noreferrer' target='_blank'> <span className="contactSocialIcon"><FaInstagram /></span></a>
          <a href='https://www.' rel='noreferrer' target='_blank'> <span className="contactSocialIcon"><FaGithub /></span></a>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactLeftContainer