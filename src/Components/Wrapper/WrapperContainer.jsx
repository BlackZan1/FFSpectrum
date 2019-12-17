import React from 'react';

import Wrapper from './Wrapper';

import { connect } from 'react-redux';

import { getData } from '../../Redux/charListReducer';
import { countBalance } from '../../Redux/userReducer';
import { setToCollectionMid } from '../../Redux/userReducer';


class WrapperContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeValue = this.onChangeValue.bind(this);
        this.buyCharacter = this.buyCharacter.bind(this);
        this.toggleSearchType = this.toggleSearchType.bind(this);
    }

    state = {
        isLack: false,
        searchType: 'characters',
        value: '',
        isSold: false,
    }

    toggleSearchType() {
        if (this.state.searchType === 'characters') {
            this.setState(prevState => ({
                ...prevState,
                searchType: 'monsters'
            }));
        }
        else if(this.state.searchType === 'monsters') {
            this.setState(prevState => ({
                ...prevState,
                searchType: 'characters'
            }));
        }
    }

    onChangeValue(values) {
        let {value} = values;

        if(value === undefined) value = '';

        this.setState(prevState => ({
            ...prevState,
            value
        }));

        setTimeout(() => {
            this.props.getData(value, this.state.searchType);
        }, 250);
    }

    buyCharacter(price) {
        if(this.props.balance >= price) {
            this.setState(prevState => ({
                ...prevState,
                isLack: false,
            }));

            this.props.countBalance(price);
        }
        else {
            this.setState(prevState => ({
                ...prevState,
                isLack: true,
            }));
        }
    }

    render() {
        return <Wrapper list={this.props.list}
                        onChangeValue={this.onChangeValue}
                        isFetching={this.props.isListFetching}
                        value={this.state.value}
                        setToCollectionMid={this.props.setToCollectionMid}
                        balance={this.props.balance}
                        buyCharacter={this.buyCharacter}
                        isLack={this.state.isLack}
                        userCollection={this.props.userCollection}
                        searchType={this.state.searchType}
                        toggleType={this.toggleSearchType}
                        isSold={this.state.isSold}
                />
    }
}

let mapStateToProps = (state) => {
    return {
        list: state.dataCharList.list,
        isListFetching: state.dataCharList.isListFetching,
        balance: state.dataUser.user.balance,
        userCollection: state.dataUser.user.collection,
    }
}

export default connect(mapStateToProps, { getData, setToCollectionMid, countBalance})(WrapperContainer);