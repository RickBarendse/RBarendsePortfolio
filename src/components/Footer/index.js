import React from 'react';

function Footer() {
    return (
        <footer>
            <a href="https://github.com/RickBarendse" target="_blank" rel="noopener noreferrer">
                <img src={require("../../assets/images/github.png")} alt="GitHUub" className="logo"></img>
            </a>
            <a href="https://www.linkedin.com/in/rick-barendse/" target="_blank" rel="noopener noreferrer">
                <img src={require("../../assets/images/linkedin.png")} alt="LinkedIn" className="logo"></img>
            </a>
            <a href="https://stackoverflow.com/users/19377447/rick-barendse" target="_blank" rel="noopener noreferrer">
                <img src={require("../../assets/images/stackoverflow.webp")} alt="StackOverflow" className="logo"></img>
            </a>
        </footer>
    )
}

export default Footer;