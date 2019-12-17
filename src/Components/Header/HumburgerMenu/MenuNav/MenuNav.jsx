import React from 'react';
import './MenuNav.scss';
import { NavLink } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import underline from '../../../../img/title-underline.png';

export default (props) => {
    console.log(props);

    return (
        <Transition in={!props.isClosed} timeout={500} appear={true}>
            <div className='Menu-nav'>
                <div className='Menu-user'>
                    <div className='Menu-user-info'>
                        <p>{props.login}</p>

                        <div className='Menu-user-image'> 
                            <img src={props.picture} alt="Loading..."/>
                        </div>
                    </div>
                </div>

                <div className='Menu-routes'>
                    <NavLink exact to={'/FFSpectrum'} activeClassName='selected'>Search</NavLink>
                    <img src={underline} alt="-"/>

                    <NavLink exact to={'/collection/characters'} activeClassName='selected'>Collection</NavLink>
                    <img src={underline} alt="-"/>

                    <NavLink exact to={'/userPage'} activeClassName='selected'>My collection <span>{props.userItems.length}</span></NavLink>
                    <img src={underline} alt="-"/>

                    <NavLink to={'/'}>Log Out</NavLink>
                </div>
            </div>
        </Transition>
    )
}