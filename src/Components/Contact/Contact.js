import React from 'react'
import Title from '../Layouts/Title'
import './Contact.css'
import ContactLeftContainer from './ContactLeftContainer'
import ContactRightContainer from './ContactRightContainer'
const Contact = () => {
  return (
    <section className='contact'>
      <div className='contactTitle'>
        <Title title="Ready to Craft Your Digital Vision? Reach Out Today!" des="Contact with Me" />
      </div>
      <div className="contactContainer">
        <div className="contactCardContainer">
          <ContactLeftContainer />
          <ContactRightContainer/>
        </div>
      </div>
    </section>
  )
}

export default Contact