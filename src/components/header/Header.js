import React from 'react';
import logo from './logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
                This is <code>Cart</code> App!!
            </p>
            <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                Learn React
            </a>
        </header>
    );
};

export default Header;
