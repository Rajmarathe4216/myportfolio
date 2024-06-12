import React from 'react'
import { motion } from 'framer-motion'
import './Card.css'

const SkillCard = ({title,per}) => {
    return (
        <div className='skillCard'>
            <p>{title}</p>
            <span className='outerProgressBar'>
                <motion.span
                initial={{x:"-100%",opacity:0}}
                animate={{x:0,opacity:1}} 
                transition={{duration:0.5,delay:0.5}}
                style={{width:`${per}`}} className='innerProgressBar'>
                    <span>{per}</span>
                </motion.span>
            </span>
        </div>
    )
}

export default SkillCard