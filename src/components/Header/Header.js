import React from 'react';

import './/Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h2 className='header-name'>ANYTIME FITNESS</h2>
            <div>
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/Fitness blog">Fitness blog</a>
                <a href="/Contact">Contact</a>
            </div>
        </nav>
    );
};

export default Header;