import React from 'react';
import Logo from './Logo/Logo';
import './Header.scss';
import Navbar from './Navbar/Navbar';
import HumMenu from './HumburgerMenu/Menu';

const Header = (props) => {
    return (
        <div className='Header'>
            <Logo />
  
            <Navbar {...props} />

            <HumMenu {...props} />
        </div>
    )
}

export default Header;