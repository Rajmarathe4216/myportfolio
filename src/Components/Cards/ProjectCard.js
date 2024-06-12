import React from 'react'
import './Card.css'
import '../../Components/Project/Project.css'
import { BsGithub } from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'
import { motion } from 'framer-motion'

const ProjectCard = ({ title, des, src }) => {
  return (
    <motion.div
    initial={{ opacity: 0,y:100 }}
    whileInView={{ opacity: 1,y:0 }}
    transition={{type:"spring",stiffness:100}} className='projectCardContainer'>
      <div className="projectCardImage">
        <img src={src} alt="src" />
      </div>
      <div className="projectCardData">
        <div>
          <div style={{ "display": "flex", alignItems: "center", justifyContent: "space-between" }} className='projectCardTitle'>
            <h3>{title}</h3>
            <div style={{ "display": "flex", "gap": "0.5rem" }}>
              <span>
                <BsGithub />
              </span>
              <span>
                <FaGlobe />
              </span>
            </div>
          </div>
          <p style={{ "marginTop": "0.75rem", "fontSize": "0.875rem", "lineHeight": "1.25rem", "letterSpacing": "0.025em", "transitionDuration": "300ms" }}>{des}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard