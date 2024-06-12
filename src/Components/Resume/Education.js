import React from 'react'
import ResumeCard from '../Cards/ResumeCard'
import { motion } from "framer-motion"

const Education = ({ isEducationActive,isExperienceActive }) => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}} className='resumeContainer'>
            <div className={`eudcationContainer ${isEducationActive ? 'active' : ''}`}>
                <div className="resumeNavTitle">
                    <p>2014-2021</p>
                    <h2>Academic Qualification</h2>
                </div>
                <div className='resumeCardContainer'>
                    <ResumeCard
                        title="Msc in Computer Science"
                        subtitle="Pratibha college (2019-2021)"
                        result="82%"
                        des="At Pratibha College of Commerce and Computer Studies,
                I gained in-depth knowledge in advanced computer science concepts and practical applications. 
                I developed strong analytical and problem-solving skills through hands-on projects and research."
                    />
                    <ResumeCard
                        title="Bsc in Computer Science"
                        subtitle="V.P.S College of Arts, Science & commerce (2016-2019)"
                        result="76.47%"
                        des="I completed my B.Sc. in Computer Science, 
                where I gained a strong foundation in computer programming, algorithms, and data structures.
                I also learned about database management, software engineering, and network systems."                />
                    <ResumeCard
                        title="HSC Higher Education"
                        subtitle="D.P Metha Jr.College (2014-2016)"
                        result="59.08%"
                        des="I completed my Higher Secondary Certificate (HSC) under the State Board of Maharashtra,
                            where I focused on science subjects."
                    />
                    <ResumeCard
                        title="SSC Secondary Education"
                        subtitle="V.P.S High School (2014-2016)"
                        result="71.40%"
                        des="I completed my Secondary School Certificate (SSC) under the State Board of Maharashtra,
                             where I received a well-rounded education in various subjects including mathematics, science, social studies, and languages."
                    />
                </div>
            </div>
            <div className={`experienceContainer ${isExperienceActive ? 'active' : ''}`}>
                <div className="resumeNavTitle">
                    <p>2021-2024</p>
                    <h2>Job Experience</h2>
                </div>
                <div className='resumeCardContainer'>
                    <ResumeCard
                        title="FreeLancer Website Developer"
                        subtitle="Website Developer (Sep 2022-Present)"
                        result="Remote"
                        des="Skilled Website developer with expertise in designing and developing custom websites.
                            Proficient in creating responsive, user-friendly sites that meet client specifications and business goals.
                            Collaborate with clients to understand their needs and deliver high-quality solutions."
                    />
                    <ResumeCard
                        title="Pragmasys Consulting LLP"
                        subtitle="Software Developer Trainee (March 2022 - May 2022)"
                        result="Pune"
                        des="Work on real-world projects under the guidance of experienced developers, contributing to coding, testing, 
                            and debugging tasks.Apply theoretical knowledge from coursework to practical projects, gaining valuable hands-on experience in 
                            software development."
                    />
                    <ResumeCard
                        title="Pawar Software Solution Pvt. Ltd."
                        subtitle="Web Developer Intern (Dec 2020 - Jun 2021)"
                        result="PCMC"
                        des="Designed and developed responsive websites, ensuring cross-browser compatibility and optimal user 
                            experience."
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Education