import React from 'react';
import './GamePage.scss';

const GamePage = (props) => {
    let showGame = props.game.map(item => {
        return <div className='GamePage' key={item.gameId}>
                <div className='GamePage-image'>
                    <img src={item.picture} alt="Loading..." />
                </div>

                <div className='GamePage-info'>
                    <div className='GamePage-title'>
                        {item.title}
                    </div>

                    {item.description}

                    <a href='/' target='_blanck'>Buy ></a>
                </div>
            </div>
    }) 

    return <>
        {showGame} 
    </>
}

export default GamePage;