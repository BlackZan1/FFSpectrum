import React from 'react';
import { NavLink } from 'react-router-dom';
import underline from '../../../img/block-underline.png';
import LoginBlock from '../LoginBlock/LoginBlock';

export default (props) => {
    return (
        <div className='Header-nav'>
            <ul>
                <li><NavLink to='/FFSpectrum'>Search</NavLink> <img src={underline} alt="-"/></li>
                <li><NavLink to='/collection/characters'>Collection</NavLink> <img src={underline} alt="-"/></li>
                <li>
                    {
                        props.isAuth ? <LoginBlock picture={props.picture} login={props.login} userItems={props.userItems}/> : 
                        <> <NavLink to='/login'>Login</NavLink> <img src={underline} alt="-"/> </>
                    }
                </li>
            </ul>
        </div>  
    )
}