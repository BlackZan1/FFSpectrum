import React from 'react';
import loader from '../../img/chocobo.gif';
import './Loader.css';

export default ({title, height}) => {
    return (
        <div className='Spectrum-loader' style={{height: `${height}px`}}>
            <p>{title.toUpperCase()}</p>
            <img src={loader} alt='Please wait Is Loader is Loading ... :)' />
        </div>  
    )
}