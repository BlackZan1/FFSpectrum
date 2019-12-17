import React from 'react';
import { connect } from 'react-redux';
import { getCharForCollection, getCharacters } from '../../Redux/collectionReducer';
import UserPage from './UserPage';
import BigLoader from '../Loader/BigLoader';
import { compose } from 'redux';
import { AuthRedirectComponent } from '../../HOC/AuthRedirectComponent';

class UserPageContainer extends React.Component {
    componentDidMount() {
        let { userCollection, getCharForCollection, getCharacters, allCollection } = this.props;

        getCharForCollection(userCollection);
        getCharacters(allCollection);
    }

    componentDidUpdate() {
        console.log(window.pageYOffset)
    }

    render() {
        return <>
            {
                this.props.isFetching ? <BigLoader /> : <UserPage user={this.props.user} userItems={this.props.userItems}/>
            }
        </>
            
    }
}

let mapStateToProps = (state) => {
    return {
        userCollection: state.dataUser.user.collection,
        userItems: state.dataCollection.userItems,
        allCollection: state.dataCollection.allCollection,
        isFetching: state.dataCollection.isCollFetching,
        user: state.dataUser.user,
    }
}

export default compose(
    connect(mapStateToProps, {getCharForCollection, getCharacters}),    
    AuthRedirectComponent
)(UserPageContainer);
