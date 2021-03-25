import React from 'react'
import "./left.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function left() {
    return (
        <div className="left">
            <ul className="left-container">
                <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/andreidimaano">
                        <GitHubIcon className="left-icon"/>
                    </a>
                </li>
                <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/andrei-dimaano/">
                        <LinkedInIcon className="left-icon"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default left
