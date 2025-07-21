import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.svg'
import photo from "../../assets/my_photo.jpeg"
import theme_pattern from '../../assets/theme_pattern.svg'


const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={photo} alt="" className='name' />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            Hello! I'm Ajay, a B.Tech graduate from MAIT, specializing in full-stack development.
                            I have a passion for creating dynamic and responsive web applications.
                            With a strong foundation in both front-end and back-end technologies, I strive to deliver seamless user experiences.
                        </p>
                        <p> My passion for full-stack development is not only for building functional applications, but also for solving real-world problems through clean, efficient, and scalable code.

 </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS </p> <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS </p> <hr style={{ width: "70%" }} />
                        </div> <div className="about-skill">
                            <p>JavaScript </p> <hr style={{ width: "80%" }} />
                        </div> <div className="about-skill">
                            <p>Node JS </p> <hr style={{ width: "60%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>50+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>

        </div>
    )
}

export default About