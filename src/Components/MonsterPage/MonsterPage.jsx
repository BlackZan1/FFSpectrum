import React from 'react';
import './MonsterPage.scss';
import Title from '../Title/Title';
import { Redirect } from 'react-router-dom';

export default (props) => {
    if(!props.cardBody) return <Redirect to={'/collection/monsters'} />

    return <>
        <Title>
            <div className='CardPage-name'>
                {props.cardBody.name}
            </div>
        </Title>

        <div className='CardPage'>
            <div className='CardPage-info'>
                

                {props.cardBody.description}

                <p>
                    From: {props.cardBody.game}
                </p>
            </div>

            <div className='CardPage-image'>
                <img className='image-border' src={'https://www.freepnglogos.com/uploads/border-png/classic-borders-transparent-pictures-14.png'} alt="Loading..."/>

                <img src={props.cardBody.picture} alt="Loading..."/>
            </div>
        </div>
    </>
}