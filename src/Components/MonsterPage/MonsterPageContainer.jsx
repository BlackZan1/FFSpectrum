import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getCardBody } from '../../Redux/cardReducer';
import { withRouter } from 'react-router-dom';
import BigLoader from '../Loader/BigLoader';
import MonsterPage from './MonsterPage';

class MonsterPageContainer extends React.Component {
    componentDidMount() {
        let { cardName } = this.props.match.params;
        this.props.getCardBody(cardName, 'monsters');
    }

    render() {
        let {isFetching, cardBody} = this.props;

        return isFetching ? <BigLoader /> : <MonsterPage cardBody={cardBody} />
    }
}

let mapStateToProps = (state) => ({
    cardBody: state.dataCard.cardBody,
    isFetching: state.dataCard.isCardFetching
});

export default compose(
    connect(mapStateToProps, { getCardBody }),
    withRouter
)(MonsterPageContainer);