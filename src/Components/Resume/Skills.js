import React from 'react'
import { motion } from 'framer-motion'
import SkillCard from '../Cards/SkillCard'

const Skills = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} className='resumeContainer'>
            <div className='programmingContainer'>
                <div className="resumeNavTitle">
                    <p>Features</p>
                    <h2>Programming Skills</h2>
                </div>
                <div className='skillCardContainer'>
                    <SkillCard
                        title='HTML'
                        per='100%' />
                    <SkillCard
                        title='CSS'
                        per='80%' />
                    <SkillCard
                        title='Javascript'
                        per='75%' />
                </div>
            </div>
            <div className='toolsContainer'>
                <div className="resumeNavTitle">
                    <p>Features</p>
                    <h2>Tools</h2>
                </div>
                <div className='skillCardContainer'>
                    <SkillCard
                        title='WordPress'
                        per='75%' />
                    <SkillCard
                        title='Bootstrap'
                        per='60%' />
                    <SkillCard
                        title='visual studio'
                        per='80%' />
                    <SkillCard
                        title='React'
                        per='75%' />
                    <SkillCard
                        title='Xamp'
                        per='75%' />

                </div>
            </div>
        </motion.div>
    )
}

export default Skills