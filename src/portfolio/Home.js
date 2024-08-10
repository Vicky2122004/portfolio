import React from 'react'
import './Home.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function Home() {
  return (
    <section id='home'>
        <div className='profile-cont'>
            <img src='vignesh.jpg' alt='profile-image' height={450} width={450} title='profile'/>
        </div>

        <div className='profile-name'>
            <h1>It's <span className='vignesh'>VIGNESH</span></h1>   
        </div>

        <div className='designation'>
            <h1>FULL STACK DEVELOPER</h1>
        </div>

        <div className='home-intro'>
            <p>Hi I am <span className='p-name'>Vignesh</span>, a passionate <span className='p-designation'>Full Stack Developer</span> with a focus on creating intuitive and responsive platforms using <span className='p-react'>ReactJs</span>.</p>
        </div>

        <section className='social-media-cont'>
            <div className='facebook-cont'>
                <a href='#' title='Facebook'><FaFacebook className='facebook'/></a>
            </div>

            <div className='linkedIn-cont'>
                <a href='#' title='LinkedIn'><FaLinkedin className='linkedIn'/></a>
            </div>

            <div className='instagram-cont'>
                <a href='#' title='Instagram'><FiInstagram className='instagram'/></a>
            </div>

            <div className='gitHub-cont'>
                <a href='#' title='GitHub'><FaGithub className='gitHub'/></a>
            </div>
        </section>

        <div className='home-down-cont'>
            <button className='home-down' title='Download CV'>Download CV</button>
        </div>
    </section>
  )
}

export default Home