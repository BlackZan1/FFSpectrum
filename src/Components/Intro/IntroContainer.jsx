import React from 'react';
import { connect } from 'react-redux';
import { getAllGames } from '../../Redux/gamesReducer';
import Intro from './Intro';

class IntroContainer extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);

        return (this.props.games.length === 0) ? this.props.getAllGames() : null;
    }

    render() {
        return (
            <Intro isGamesFetching={this.props.isGamesFetching} games={this.props.games}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        games: state.dataGames.games,
        isGamesFetching: state.dataGames.isGamesFetching,
    }
}

export default connect(mapStateToProps, { getAllGames })(IntroContainer);



