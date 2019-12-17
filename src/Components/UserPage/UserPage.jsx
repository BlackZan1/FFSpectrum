import React from 'react';
import { NavLink } from 'react-router-dom';
import CollectionItem from './CollectionItem/CollectionItem';
import moggle from '../../img/moogle.png';
import './UserPage.scss';
import CollectionUser from './CollectionUser/CollectionUser';
import Title from '../Title/Title';

const UserPage = ({user, userItems}) => {
    const showCollection = userItems.map((item, index) => {
        return <CollectionItem {...item} key={index} />
    });

    return (
        <div className="User-page">
            <Title>{user.name}'s collection</Title>
            
            <div className='User-page-wrapper'>
                <CollectionUser user={user}/>

                <div className='User-page-container'>
                    <div className='User-page-intro'>You collect {userItems.length} characters</div>

                    <div className='User-page-list'>
                        {userItems.length > 0 ? showCollection : <div className='Go-to-shop'>
                            <img src={moggle} alt="Loading..."/>

                            <NavLink to={'/FFSpectrum'}>Go shopping ></NavLink>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage;