import React from 'react'
import "./Headline.css"

function Headline() {
    return (
        <div className="headline">
            <div>
                <h2 className="big-heading">Andrei Dimaano</h2>
            </div>
            <div>
                <h3 className="big-heading">Aspiring Software Engineer</h3>
            </div>
            <div>
                <a className="email-link"href="mailto:andreiidimaano@gmail.com">Get In Touch</a>
            </div>
        </div> 
    )
}

export default Headline;

