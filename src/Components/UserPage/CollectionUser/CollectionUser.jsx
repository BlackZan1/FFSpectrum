import React from 'react';
import userWP from '../../../img/userWP.png';
import './CollectionUser.scss';

export default ({user}) => {
    return (
        <div className='User-page-fixed' id={'userBlock'}>
            <div className='User-info'>
                <div className='User-name'>{user.name}</div>
            
                <div className='User-login'>{user.login}</div>
            </div>

            <div className='User-image'>
                <img src={user.picture !== null ? user.picture : userWP} alt="Loading..."/>
            </div>
        </div>
    )
}