import './Projects.css'
import { BiLinkExternal } from "react-icons/bi";

export const Projects = () => {
    return (
        <section id="projects">
            <div className="projects-cont">
                <h1>Projects</h1>
            </div>

            <section className='project-cont'>
                <div className='goldrate' title='goldrate'>
                    <img src='/projects/goldrate.jpg' alt='goldrate' height={600} width={300} />
                    <div className='desc'>
                        <p>GoldRate - Remotion</p>
                    </div>
                    <div className='overlay-goldrate'>
                        <a href='https://github.com/yaashschool/Remotion' target='_blank' ><p>View on GitHub <BiLinkExternal className='link'/></p></a>
                        <a href='/projects/goldrate-vid.mp4' target='_blank'><p>Tap to Play Video <BiLinkExternal className='link'/></p></a>
                    </div>
                </div>

                <div className='goldrate' title='Food'>
                    <img src='/projects/goldrate.jpg' alt='goldrate' height={600} width={300} />
                    <div className='desc'>
                        <p>GoldRate - Remotion</p>
                    </div>
                    <div className='overlay-goldrate'>
                        <a href='https://github.com/yaashschool/Remotion' target='_blank' ><p>View on GitHub <BiLinkExternal className='link'/></p></a>
                        <a href='/projects/goldrate-vid.mp4' target='_blank'><p>Tap to Play Video <BiLinkExternal className='link'/></p></a>
                    </div>
                </div>
            </section>
        </section>
    )
}