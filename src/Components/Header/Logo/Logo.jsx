import React from 'react';
import logo from '../../../img/logo.png';

export default () => {
    return (
        <div className='Header-logo'>
            <img src={logo} alt="Loading..."/>

            <div className='Header-logo-p'>
                <p>FINAL FANTASY</p>
                <span>SPECTURE OF CHARACTERS</span>
            </div>
        </div>
    )
}