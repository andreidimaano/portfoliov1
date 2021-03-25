import React ,{ useState } from 'react';
import "./Experience.css";
import nexii from "./nexii";
import rchs from "./rchs";

function Experience() {
    let [buttonOne, setB1] = useState(true);
    let [buttonTwo, setB2] = useState(false);
    let [currentInfo, setInfo] = useState({
        title: nexii.title,
        location: nexii.location,
        date: nexii.date,
        bulletpoints: nexii.bulletpoints
    });

    function handleB1() {
        setB1(true);
        setB2(false);
        setInfo(nexii);
    }

    function handleB2() {
        setB1(false);
        setB2(true);
        setInfo(rchs);
    }

    return (
        <div id="jobs" className="experience">
             <h2 className="heading">Andrei's Experience</h2>
             <div className="inner">
                <ul className="jobs-list">
                    <li>
                        <button onClick={handleB1} className={`job-item ${buttonOne ? "active" : ""}`}>
                            <span>nex-ii</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={handleB2} className={`job-item ${buttonTwo ? "active" : ""}`}>
                            <span>RCHS</span>
                        </button>
                    </li>
                </ul>
                <div className="job-info">
                    <h3>
                        <span>{currentInfo.title}</span>
                        <span className="company">&nbsp;@&nbsp;
                            <a className="inline-link" href={currentInfo.location.href} rel="noopener noreferrer" target="_blank">{currentInfo.location.company}</a>
                        </span>
                    </h3>
                    <p className="range">{currentInfo.date}</p>
                    <div>
                        <ul>
                            {currentInfo.bulletpoints.map((desc) => (
                                <li key={desc}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Experience;