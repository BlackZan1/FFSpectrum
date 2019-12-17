import React from 'react';
import userWP from '../../../img/userWP.png';
import './LoginBlock.scss';
import ModalLogin from '../ModalLogin/ModalLogin';

const LoginBlock = (props) => {
    let [isOpen, setIsOpen] = React.useState(false);

    const toggleIsOpen = (isOpen) => {
        setIsOpen(isOpen);
    }

    return <>
        <div className='LoginBlock' onClick={() => toggleIsOpen(true)}>
            <div className='LoginBlock-image'>
                <img src={props.picture !== null ? props.picture : userWP} alt="Loading..."/>
            </div>
        </div>

        {
            isOpen ? <ModalLogin toggleIsOpen={toggleIsOpen} {...props} /> : null
        } 
    </>
}

export default LoginBlock;