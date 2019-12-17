import React from 'react';
import GameItem from './GameItem';
import './GameList.scss';

const GameList = ({ games }) => {
    const showGameList = games.map((item) => (<GameItem picture={item.picture} key={item.gameId} id={item.gameId}/>));

    return (
        <div className='GameList'>
            <div className='GameList-list'>
                {showGameList}
            </div>

            <div className='GameList-p'>
                <p>Characters from all Games</p>
                by SQUARE ENIX
            </div>
        </div>
    )
}

export default GameList;