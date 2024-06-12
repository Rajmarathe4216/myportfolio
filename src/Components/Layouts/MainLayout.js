import React from 'react'
import Hero from '../Hero/Hero';
import Projects from '../Project/Project';
import Resume from '../Resume/Resume';
import './MainLayout.css'
import Contact from '../Contact/Contact';

const MainLayout = () => {
    return (
        <div>
            <Hero />
            <Projects />
            <Resume />
            <Contact/>
        </div>
    )
}

export default MainLayout