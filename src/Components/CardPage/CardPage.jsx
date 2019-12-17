import React from 'react';
import './CardPage.scss';
import Title from '../Title/Title';

export default (props) => {
    return <>
        <Title>
            <div className='CardPage-name'>
                {props.cardBody.name}
            </div>
        </Title>

        <div className='CardPage'>
            <div className='CardPage-info'>
                

                {props.cardBody.description}
                {props.cardBody.job}

                <div>
                    <p>Age: {props.cardBody.age}</p>
                    <p>Gender: {props.cardBody.gender}</p>
                    <p>Race: {props.cardBody.race}</p>
                </div>

                <div>
                    From: {props.cardBody.origin}
                </div>
            </div>

            <div className='CardPage-image'>
                <img className='image-border' src={'https://www.freepnglogos.com/uploads/border-png/classic-borders-transparent-pictures-14.png'} alt="Loading..."/>

                <img src={props.cardBody.picture} alt="Loading..."/>
            </div>
        </div>
    </>
}