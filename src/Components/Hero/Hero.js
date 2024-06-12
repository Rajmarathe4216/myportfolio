import React from 'react'
import './Hero.css'
import bg from '../../assets/profile-img.webp'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Hero() {

    const [text] = useTypewriter({
        words: ["Web Developer.", "Web Designer.", "Coder."],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 30,
        delaySpeed: 2000,
    });

    return (
        <section className="Hero">
            <div className="leftContainer">
                <div className="textContainer">
                    <h1>Hi, I'm <br /><span>Raj Marathe</span></h1>
                    <h2>a <span>{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor="#fa0068"
                        />
                    </h2>
                    <p>I am a skilled Web designer with experience in creating visually appealing and user friendly websites.</p>
                </div>
                <div className="linkContainer">
                    <h3>FIND ME ON</h3>
                    <div className="iconContainer">
                        <a href='https://www.linkedin.com' rel='noreferrer' target='_blank'><span className="socialIcon"><FaLinkedinIn /></span></a>
                        <a href='https://www.instagram.com' rel='noreferrer' target='_blank'><span className="socialIcon"><FaInstagram /></span></a>
                        <a href='https://www.facebook.com/' rel='noreferrer' target='_blank'><span className="socialIcon"><FaFacebookF /></span></a>
                        <a href='https://www.github.com' rel='noreferrer' target='_blank'><span className="socialIcon"><FaGithub /></span></a>
                    </div>
                </div>
            </div>
            <div className="rightContainer">
                <div>
                <img src={bg} alt="desktop-bg-img" className='d-bg' />
                </div>
            </div>
        </section>
    )
} 