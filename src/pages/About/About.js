import React from 'react'
import './About.css'

function About() {
  return (
    <div id="about" className="about-style">
      <h2 className="heading">About Andrei</h2>
      <div className="inner">
        <div className="about-text">
          <div>
            <p>
                Hello! I’m  Andrei, a 19-year-old aspiring SWE based in Los Angeles, CA.
            </p>
            <p>
                I enjoy building and designing, whether that be a website, a mobile 
                application, or anything in between. I aspire to create meaningful 
                products that spark joy in other people’s lives (s.o to Marie Kondo).
            </p>
            <p>
                Currently attending <a rel="noopener noreferrer" target="_blank" href="https://www1.cs.ucr.edu/">UC Riverside</a>, 
                I’m a second-year student and have been coding for one year. I’m 
                currently invested in building projects with my friends and exploring 
                new technologies through personal projects.
            </p>
            <p>
                Here are the technologies I’ve been working with recently:
            </p>
          </div>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>C++</li>
            <li>Flutter</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className="about-img">
          <div className="wrapper">
            <img className="img" src="images/Andrei.jpg " alt="Andrei img"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About