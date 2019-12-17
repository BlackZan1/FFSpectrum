import React from 'react';
import { NavLink } from 'react-router-dom';
import './CollectionItem.scss';

export default (props) => {
    console.log(props);

    return <NavLink to={`/${props.monsterId ? 'monsters' : 'characters'}/${props.name}`} className="Collection-item">
        <div className='Collection-item-top'>
            <img src={props.picture} alt="Loading..."/>
        </div>
    </NavLink>
}