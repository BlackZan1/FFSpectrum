import React from 'react';
import underline from '../../img/title-underline.png';
import './Title.css';

export default (props) => {
    return (
        <div className='Title'>
            <div className='Title-p' >
                {props.children}
            </div>

            <img src={underline} alt="-"/>
        </div>
    )
}