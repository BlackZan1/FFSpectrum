import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class HeaderContainer extends React.Component {
    render() {
        let { picture, login, collection } = this.props.user;
        let { isAuth } = this.props;

        return <Header picture={picture} login={login} isAuth={isAuth} userItems={collection}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.dataUser.isAuth,
        user: state.dataUser.user,
    }
}

export default connect(mapStateToProps)(HeaderContainer);