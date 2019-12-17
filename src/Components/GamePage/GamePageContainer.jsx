import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllGames } from '../../Redux/gamesReducer';
import GamePage from './GamePage';
import BigLoader from '../Loader/BigLoader';

class GamePageContainer extends React.Component {
    state = {
        game: [],
        isLoaded: false,
    }

    componentDidMount() {
        if(this.props.games.length === 0) {
            this.props.getAllGames();
        }

        setTimeout(() => {
            let { gameId } = this.props.match.params;

            this.setState({
                game: this.props.games.filter(a => a.gameId === gameId),
                isLoaded: true,
            });
        }, 750);
    }

    render() {
        return <>
            {
                this.state.isLoaded ? <GamePage game={this.state.game}/> : <BigLoader />
            }
            
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        games: state.dataGames.games,
    }
}

let WithUrlContainer = withRouter(GamePageContainer)

export default connect(mapStateToProps, { getAllGames })(WithUrlContainer);