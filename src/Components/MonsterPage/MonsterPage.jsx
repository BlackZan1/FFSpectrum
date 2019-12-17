import React from 'react';
import './MonsterPage.scss';
import Title from '../Title/Title';

export default (props) => {
    return <>
        <Title>
            <div className='MonsterPage-name'>
                {props.cardBody.name}
            </div>
        </Title>

        <div className='MonsterPage'>
            <div className='MonsterPage-info'>
                

                {props.cardBody.description}

                <p>
                    From: {props.cardBody.game}
                </p>
            </div>

            <div className='MonsterPage-image'>
                <img className='image-border' src={'https://www.freepnglogos.com/uploads/border-png/classic-borders-transparent-pictures-14.png'} alt="Loading..."/>

                <img src={props.cardBody.picture} alt="Loading..."/>
            </div>
        </div>
    </>
}