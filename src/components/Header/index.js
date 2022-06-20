import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <header>
            <h1 href="/">Rick Barendse Portfolio</h1>
            <div>
                <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}></Nav>
            </div>
        </header>
    );
}

export default Header;