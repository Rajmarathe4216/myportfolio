import React from 'react'
import { FaEye } from 'react-icons/fa'
import { motion } from 'framer-motion'

const CertificateCard = ({ title, des, src }) => {
  return (
    <motion.div
    initial={{ opacity: 0,y:100 }}
    whileInView={{ opacity: 1,y:0 }}
    transition={{duration:0.5}} className='certificateCardContainer'>
      <div className="certificateCardImage">
        <img src={src} alt="src" />
      </div>
      <div className="certificateCardData">
        <h3>{title}</h3>
        <p>{des}</p>
        <span>
          <FaEye />
        </span>
      </div>
    </motion.div>
  )
}

export default CertificateCard