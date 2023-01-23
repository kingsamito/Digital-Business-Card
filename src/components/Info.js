import React from "react"
import sam from "../img/sam.JPG"
import mail from "../img/mail.png"
import linkedin from "../img/linkedin.png"

export default function Info() {
    return (
        <div className="info">
            <img className="perImg"
                src={sam}
                alt="personal" />
            <h3>Usikpedo Samuel</h3>
            <p><i>Web Developer</i></p>
            <button>
                <a className="mailink" href="mailto:usikpedosamuel@gmail.com">
                    <img
                        src={mail}
                        height="24px"
                        className="mail"
                        alt="mail logo" />Email
                </a>
            </button>
            <button>
                <a href="https://www.linkedin.com/mwlite/in/samuel-usikpedo-155483151">

                    <img
                        src={linkedin}
                        height="17px"
                        className="linked"
                        alt="linkedin logo" />LinkedIn
                </a>
            </button>
        </div>
    )
}