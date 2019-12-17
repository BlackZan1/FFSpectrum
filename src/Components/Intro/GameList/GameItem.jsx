import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ picture, id }) => {
    return (
        <div className='GameItem'>
            <NavLink to={`/game/${id}`}>
                <img width={200} src={ picture } alt="Loading..."/>  
            </NavLink>  
        </div>
    )
}