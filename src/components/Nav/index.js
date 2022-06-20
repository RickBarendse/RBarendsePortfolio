import React from 'react';

function Nav(props) {
    const {
        currentPage,
        setCurrentPage
    } = props;

    return(
            <nav>
                <ul className="flex-row">
                    <li className={currentPage === "about" ? "mx-2 navActivt" : "mx-2"}>
                        <span onClick={() => setCurrentPage("about")} data-testid="about">About Me</span>
                    </li>
                    <li className={currentPage === "contact" ? "mx-2 navActivt" : "mx-2"}>
                        <span onClick={() => setCurrentPage("contact")} data-testid="contact">Contat Me</span>
                    </li>
                    <li className={currentPage === "portfolio" ? "mx-2 navActivt" : "mx-2"}>
                        <span onClick={() => setCurrentPage("portfolio")} data-testid="portfolio">Porfolio</span>
                    </li>
                    <li className={currentPage === "resume" ? "mx-2 navActivt" : "mx-2"}>
                        <span onClick={() => setCurrentPage("resume")} data-testid="resume">Resume</span>
                    </li>
                </ul>
            </nav>
    )
}

export default Nav;