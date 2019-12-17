import React from 'react';
import loader from '../../img/chocobo.gif';
import './Loader.css';

export default () => {
    return (
        <div className='Wrapper-big-loader'>
            <img src={loader} alt="Loader :)"/>
            <p>Loading...</p>
        </div>
    )
}