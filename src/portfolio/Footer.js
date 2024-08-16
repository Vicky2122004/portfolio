import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <section id="footer">
            <section className="foot-social-cont">
            <div className='foot-facebook-cont'>
                <a href="https://www.facebook.com/people/Vignesh-T/pfbid0BkLuuUPxLgYvrYA5MtFoBQ8k39tAnNPxjdmakrvoL9HKgen6xnrYv8ymrQzBY1Jpl/" target="_blank" title='Facebook'><FaFacebook className='foot-facebook'/></a>
            </div>

            <div className='foot-linkedIn-cont'>
                <a href="https://www.linkedin.com/in/vignesh-t-470a63257/" target="_blank" title='LinkedIn'><FaLinkedin className='foot-linkedIn'/></a>
            </div>

            <div className='foot-instagram-cont'>
                <a href="https://www.instagram.com/vignesh_t_2004/" target='_blank' title='Instagram'><FiInstagram className='foot-instagram'/></a>
            </div>

            <div className='foot-gitHub-cont'>
                <a href='https://github.com/Vicky2122004' target='_blank' title='GitHub'><FaGithub className='foot-gitHub'/></a>
            </div>
            </section>

            <section className='link'>
                <div className='foot-faq'>
                    <a href='#'>FAQ</a>
                </div>
                <div className='foot-projects'>
                    <a href='#projects'>Projects</a>
                </div>
                <div className='foot-contact'>
                    <a href='#contact'>Contact</a>
                </div>
                <div className='foot-privacyPolicy'>
                    <a href='#'>Privacy Policy</a>
                </div>
            </section>

            <div className='copy-rights-cont'>
                <p className='copy-rights'>&copy;Vignesh T | All Rights Reserved</p>
            </div>
        </section>
    )
}