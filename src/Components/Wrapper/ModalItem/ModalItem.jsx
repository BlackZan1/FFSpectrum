import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './ModalItem.scss';

export default (props) => {
    let [isClosed, setClosed] = React.useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setClosed(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='ModalItem' style={isClosed ? {display: 'none'} : {display: 'flex'}}>
            <p>You bought <span>{props.name}</span></p>

            <div className='ModalItem-info'>
                Thank you for your purchase

                <NavLink to={'/userPage'}>Go to your collection</NavLink>
            </div>
        </div>
    )
}