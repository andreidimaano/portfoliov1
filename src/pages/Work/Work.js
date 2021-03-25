import React from 'react'
import "./Work.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import twiine from "./twiine.js";
import trieuloo from "./trieuloo.js";
import dragon from "./dragon.js";

function Work() {
    return (
        <div id="projects" className="work">
            <h2 className="heading">Andrei's Creations</h2>
            <div className="inner"> 
                <div className="project">
                    <div className="project-image twiine">
                        <a rel="noopener noreferrer" target="_blank" href={twiine.href[0]}>
                            <img className="img img1" src="images/twiine1.png" alt="twiine1 img"/>
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href={twiine.href[0]}>
                            <img className=" img img2" src="images/twiine2.png" alt="twiine2 img"/>
                        </a>
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">{twiine.title}</h3>
                        <p className="project-overline">{twiine.overline}</p>
                        <div className="project-description">{twiine.description}</div>
                        <ul className="project-tech-list">
                            {twiine.tech.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                        <div className="project-links">
                            <a rel="noopener noreferrer" target="_blank" href={twiine.href[0]}>
                                <GitHubIcon className="project-icon"/>
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href={twiine.href[1]}>
                                <OpenInNewIcon className="project-icon"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image trieuloo">
                        <a rel="noopener noreferrer" target="_blank" href={trieuloo.href[1]}>
                            <img className="mobile-img img img2" src="images/blobfish.png" alt="trieuloo img"/>
                        </a>
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">{trieuloo.title}</h3>
                        <p className="project-overline">{trieuloo.overline}</p>
                        <div className="project-description">{trieuloo.description}</div>
                        <ul className="project-tech-list">
                            {trieuloo.tech.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                        <div className="project-links">
                            <a rel="noopener noreferrer" target="_blank" href={trieuloo.href[0]}>
                                <GitHubIcon className="project-icon"/>
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href={trieuloo.href[1]}>
                                <OpenInNewIcon className="project-icon"/>
                            </a>
                        </div>
                    </div>
                    <div className="project-image trieuloo">
                        <a rel="noopener noreferrer" target="_blank" href={trieuloo.href[1]}>
                            <img className="web-img img img2" src="images/blobfish.png" alt="trieuloo img"/>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image dragon">
                        <a rel="noopener noreferrer" target="_blank" href={dragon.href[0]}>
                            <img className="img img1" src="images/Workout1.png" alt="Workout1 img"/>
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href={dragon.href[0]}>
                            <img className="img img2" src="images/Workout2.png" alt="Workout2 img"/>
                        </a>
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">{dragon.title}</h3>
                            <p className="project-overline">{dragon.overline}</p>
                            <div className="project-description">{dragon.description}</div>
                            <ul className="project-tech-list">
                                {dragon.tech.map((tech) => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>
                            <div className="project-links">
                                <a rel="noopener noreferrer" target="_blank" href={dragon.href[0]}>
                                    <GitHubIcon className="project-icon"/>
                                </a>
                                <a rel="noopener noreferrer" target="_blank" href={dragon.href[1]}>
                                    <OpenInNewIcon className="project-icon"/>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;