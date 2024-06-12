import React from 'react'
import Title from '../Layouts/Title'
import './Project.css'
import ProjectCard from '../Cards/ProjectCard'
import project1 from '../../assets/RegalVillaProject.webp'
import project2 from '../../assets/LonavalaBungalowsProject.webp'
import project3 from '../../assets/Project3.jpg'
import project4 from '../../assets/Project4.jpg'
import project5 from '../../assets/Project5.jpg'
import project6 from '../../assets/Project6.jpg'

const Project = () => {
    return (
        <section className="project">
            <div className="projectContainer">
                <Title title="What I Have Done Till Now" des="My Projects" />
            </div>
            <div className='projectGridContainer'>
                <ProjectCard
                    title="Regal Villas Lonavala"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur quaerat eligendi beatae provident autem vitae vel saepe recusandae error pariatur, exercitationem aliquid iure? Quo cumque officia quisquam blanditiis voluptatem?"
                    src={project1}
                />
                <ProjectCard
                    title="Lonavala Bungalows"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur quaerat eligendi beatae provident autem vitae vel saepe recusandae error pariatur, exercitationem aliquid iure? Quo cumque officia quisquam blanditiis voluptatem?"
                    src={project2}
                />
                <ProjectCard
                    title="Project 3"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur quaerat eligendi beatae provident autem vitae vel saepe recusandae error pariatur, exercitationem aliquid iure? Quo cumque officia quisquam blanditiis voluptatem?"
                    src={project3}
                />
                <ProjectCard
                    title="Project 4"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur quaerat eligendi beatae provident autem vitae vel saepe recusandae error pariatur, exercitationem aliquid iure? Quo cumque officia quisquam blanditiis voluptatem?"
                    src={project4}
                />
                <ProjectCard
                    title="Project 5"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur quaerat eligendi beatae provident autem vitae vel saepe recusandae error pariatur, exercitationem aliquid iure? Quo cumque officia quisquam blanditiis voluptatem?"
                    src={project5}
                />
                <ProjectCard
                    title="Project 6"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur quaerat eligendi beatae provident autem vitae vel saepe recusandae error pariatur, exercitationem aliquid iure? Quo cumque officia quisquam blanditiis voluptatem?"
                    src={project6}

                />

            </div>
        </section>
    )
}

export default Project