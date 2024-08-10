import React, { useState } from 'react'
import './About.css'

function About() {
  const [readMore, setReadMore] = useState(false)

  return (
    <section id='about'>
        <div className='about-heading'>
        <h1>About <span className='me'>Me</span></h1>
        </div>

        <div className='about-profile'>
            <img src='vignesh.jpg' width={500} height={500} title='Profile'/>
        </div>

        <div className='about-desk'>
            <p>Hi I am <span className='about-desk-name'>Vignesh</span>, a passionate <span className='about-desk-designation'>Full Stack Developer</span> with a focus on creating intuitive and responsive platforms using ReactJs. With a strong foundation in technologies such as <span className='about-desk-tech'>HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB,</span> I thrive on turning complex problems into elegant, user-friendly solutions. My approach to development emphasizes clean code and efficient performance. I am constantly learning and evolving, staying up-to-date with the latest industry trends and best practices to ensure that my work is always at the cutting edge of technology. Whether it's developing dynamic user interfaces or robust server-side logic, I am committed to delivering high-quality work that meets the needs and expectations of users.</p>
        </div>
    </section>
  )
}

export default About