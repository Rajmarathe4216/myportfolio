import React from 'react'
import { motion } from 'framer-motion'
import Certificate1 from '../../assets/JavascriptCertificate.png'
import Certificate2 from '../../assets/HtmlCertificate.jpeg'
import Certificate3 from '../../assets/CssCertificate.png'
import './Resume.css'
import CertificateCard from '../Cards/CertificateCard'
const Certificates = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}} className='resumeContainer'>
            <div className='certificateContainer'>
                <div className="resumeNavTitle">
                    <p>2021-2024</p>
                    <h2>Certificates</h2>
                </div>
                <div className='certificateGridContainer'>
                    <CertificateCard
                        title="JavaScript-Programming"
                        des="Organization-Infosys SpringBoard"
                        src={Certificate1}
                    />
                    <CertificateCard
                        title="Front End Development - HTML"
                        des="Organization-Great Learning"
                        src={Certificate2}
                    />
                    <CertificateCard
                        title="Cascading Style Sheet"
                        des="Organization-Infosys SpringBoard"
                        src={Certificate3}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Certificates