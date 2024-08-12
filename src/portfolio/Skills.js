import './Skills.css'
import React from 'react'

function Skills() {
  return (
    <section id='skills'>
        <div className='skills-head'>
            <h1>Skills</h1>
        </div>

        <section className='skill-logo-cont'>
            <div className='html-cont'>
                <img 
                src='projects/html.png'
                alt='html'
                className='html'
                />
                <div className='overlay'>
                    <p>HTML5</p>
                </div>
            </div>
            <div className='html-cont'>
                <img 
                src='projects/css.png'
                alt='html'
                className='html'
                />
                <div className='overlay'>
                    <p>CSS3</p>
                </div>
            </div>
            <div className='html-cont'>
                <img 
                src='projects/js.png'
                alt='html'
                className='js'
                />
                 <div className='overlay'>
                    <p>JavaScript</p>
                </div>
            </div>
            <div className='html-cont'>
                <img 
                src='projects/react.png'
                alt='html'
                className='js'
                />
                 <div className='overlay'>
                    <p>ReactJs</p>
                </div>
            </div>
            <div className='html-cont'>
                <img 
                src='projects/node.png'
                alt='html'
                className='js'
                />
                 <div className='overlay'>
                    <p>NodeJs</p>
                </div>
            </div>
            <div className='html-cont'>
                <img 
                src='projects/mongoDB.png'
                alt='html'
                className='js'
                />
                 <div className='overlay'>
                    <p>MongoDB</p>
                </div>
            </div>
            <div className='html-cont'>
                <img 
                src='projects/tailwind.png'
                alt='html'
                className='js'
                />
                 <div className='overlay'>
                    <p>TailWind</p>
                </div>
            </div>
            <div className='html-cont'>
                <img 
                src='projects/bootstrap.png'
                alt='html'
                className='js'
                />
                 <div className='overlay'>
                    <p>BootStrap</p>
                </div>
            </div>
            <div className='remotion-cont'>
                <img 
                src='projects/remotion-3d.png'
                alt='html'
                className='remotion'
                />
                 <div className='overlay'>
                    <p>Remotion</p>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Skills