import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
    isAuth: state.dataUser.isAuth
})

export const AuthRedirectComponent = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            return (this.props.isAuth) ? <Component {...this.props} /> : <Redirect to='/login' />
        }
    }

    return connect(mapStateToProps)(RedirectComponent);
}