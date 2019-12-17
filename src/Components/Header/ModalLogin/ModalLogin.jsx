import React from 'react';
import underline from '../../../img/block-underline.png';
import { NavLink } from 'react-router-dom';

export default (props) => {
    return (
        <div className='ModalLogin' onMouseLeave={() => props.toggleIsOpen(false)}>
            <div className='ModalLogin-title'>
                {props.login}

                <img src={underline} alt="-"/>
            </div>

            <div className='ModalLogin-nav'>
                <ul>
                    <li><NavLink to='/userPage'>My collection <span>{props.userItems.length}</span></NavLink></li>
                    <li><NavLink to='/collection/characters'>All collection</NavLink></li>
                    <li>Log Out</li>
                </ul>
            </div>
        </div>
    )
}