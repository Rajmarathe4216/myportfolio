import React, { useState } from 'react'
import Title from '../Layouts/Title'
import './Resume.css'
import Education from './Education'
import Skills from './Skills'
import Certificates from './Certificates'
const Resume = () => {
    const [educationData, setEducationData]=useState(true);
    const [skillData, setSkillData]=useState(false);
    const [experienceData, setExperienceData]=useState(false);
    const [certificateData, setCertificateData]=useState(false);
    return (
        <section className="resume">
            <div className='resumeNav'>
                <Title title="What I Have Done Till Now" des="My Resume" />
            </div>
            <div>
                <ul>
                    <li onClick={()=>
                        setEducationData(true) &
                        setSkillData(false) &
                        setExperienceData(false) &
                        setCertificateData(false)} className={`${educationData?"active":""}`} >Education</li>
                    <li onClick={()=>
                        setEducationData(false) &
                        setSkillData(true) &
                        setExperienceData(false) &
                        setCertificateData(false)} className={`${skillData?"active":""}`}>Professional Skills</li>
                    <li onClick={()=>
                        setEducationData(false) &
                        setSkillData(false) &
                        setExperienceData(true) &
                        setCertificateData(false)} className={`${experienceData?"active":""}`}>Experience</li>
                    <li onClick={()=>
                        setEducationData(false) &
                        setSkillData(false) &
                        setExperienceData(false) &
                        setCertificateData(true)} className={`${certificateData?"active":""}`}>Certificates</li>
                </ul>
            </div>
            { educationData && <Education isEducationActive={educationData}/>}
            { skillData && <Skills/>}
            { experienceData && <Education isExperienceActive={experienceData}/>}
            { certificateData && <Certificates/>}
        </section>
    )
}

export default Resume