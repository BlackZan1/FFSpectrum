import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getCardBody } from '../../Redux/cardReducer';
import { withRouter, Redirect } from 'react-router-dom';
import BigLoader from '../Loader/BigLoader';
import CardPage from './CardPage';

class CardPageContainer extends React.Component {
    componentDidMount() {
        let { cardName } = this.props.match.params;

        this.props.getCardBody(cardName, 'characters');
    }

    render() {
        let {isFetching, cardBody} = this.props;
        let { cardName } = this.props.match.params;

        return this.props.cardBody.name ? isFetching ? <BigLoader /> : <CardPage cardBody={cardBody} /> : <Redirect to={'/monsters/' + cardName} />
    }
}

let mapStateToProps = (state) => ({
    cardBody: state.dataCard.cardBody,
    isFetching: state.dataCard.isCardFetching
});

export default compose(
    connect(mapStateToProps, { getCardBody }),
    withRouter
)(CardPageContainer);