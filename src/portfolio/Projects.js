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
                    <a href='/projects/goldrate-vid.mp4' target='_blank'>
                    <img src='/projects/goldrate.jpg' alt='goldrate' height={600} width={300} />
                    </a>
                    <div className='desc'>
                        <p>GoldRate - Remotion</p>
                    </div>
                </div>

                <div className='goldrate' title='Food'>
                    <a href='/projects/goldrate-vid.mp4' target='_blank'>
                    <img src='/projects/goldrate.jpg' alt='goldrate' height={600} width={300} />
                    </a>
                    <div className='desc'>
                        <p>GoldRate - Remotion</p>
                    </div>
                </div>
            </section>
        </section>
    )
}