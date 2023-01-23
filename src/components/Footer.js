import React from "react"
import twitter from "../img/twitter.png"
import facebook from "../img/facebook.png"
import instagram from "../img/instagram.png"
import github from "../img/github.png"

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/kingsamito">
                <img
                    src={github}
                    alt="github" />
            </a>
            <a href="https://facebook.com/profile.php?id=100016840693810">
                <img
                    src={facebook}
                    alt="facebook" />
            </a>
            <a href="https://twitter.com/kingsamito_">
                <img
                    src={twitter}
                    alt="twitter" />
            </a>
            <a href="https://instagram.com/kingsamito_">
                <img
                    src={instagram}
                    alt="instagram" />
            </a>
        </div>
    )
}