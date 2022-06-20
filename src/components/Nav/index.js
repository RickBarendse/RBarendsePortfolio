import React from 'react';

function Nav() {

    return(
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Rick Barendse Portfolio
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">About Me</a>
                    </li>
                    <li className="mx-2">
                        <span>Contat Me</span>
                    </li>
                    <li className="mx-2">
                        <span>Porfolio</span>
                    </li>
                    <li className="mx-2">
                        <span>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;