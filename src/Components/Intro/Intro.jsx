import React from 'react';
import GameList from './GameList/GameList';
import Title from '../Title/Title';
import './Intro.scss';
import Loader from '../Loader/Loader';

class Intro extends React.PureComponent {
    render() {
        return (
        <div className='Intro'>
            <Title>Collect characters</Title>

            {this.props.games.length === 16 ? <GameList games={this.props.games} isFetching={this.props.isFetching} /> : <Loader title={'Loading...'} height={600}/>}
        </div>   
        )
    }
}

export default Intro;