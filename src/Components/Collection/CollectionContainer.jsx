import React from 'react';
import Collection from './Collection';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getCharacters, getMonsters } from '../../Redux/collectionReducer';
import BigLoader from '../Loader/BigLoader';

class CollectionContainer extends React.Component {
    constructor(props) {
        super(props);

        this.filterCharCollection = this.filterCharCollection.bind(this);
    }

    componentDidMount() {
        let { charType } = this.props.match.params;

        if(charType === 'characters') {
            this.props.getCharacters(this.props.allCollection.characters);

            this.setState(prevState => ({
                ...prevState,
                type: charType,
            }));
        }

        else if(charType === 'monsters') {
            this.props.getMonsters(this.props.allCollection.monsters);
            
            this.setState(prevState => ({
                ...prevState,
                type: charType,
            }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        let { charType } = this.props.match.params;

        if(prevProps.match.params.charType !== charType) {
            if(charType === 'characters') {
                this.props.getCharacters(this.props.allCollection.characters);
    
                this.setState(prevState => ({
                    ...prevState,
                    type: charType,
                }));
            }
    
            else if(charType === 'monsters') {
                this.props.getMonsters(this.props.allCollection.monsters);
                
                this.setState(prevState => ({
                    ...prevState,
                    type: charType,
                }));
            } 
        }
    }

    filterCharCollection(fill, tag) {
        console.log(fill + ' ' + tag)
        let characters = [...this.props.allCollection.characters].filter(item => item[fill] === tag);

        this.setState(prevProps => ({
            ...prevProps,
            collection: {...this.props.allCollection, characters},
        }));

        console.log(characters);
    }

    state = {
        type: '',
        collection: [],
    }

    render() {
        return <>
            {
                this.props.isFetching ? 
                <BigLoader /> 
                : 
                <Collection allCollection={this.state.collection.characters ? this.state.collection : this.props.allCollection} 
                            type={this.state.type} 
                            filterTags={this.props.filterTags}
                            filterCharCollection={this.filterCharCollection}
                />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        allCollection: state.dataCollection.allCollection,
        filterTags: state.dataCollection.filterTags,
        isFetching: state.dataCollection.isCollFetching,
    }
}

export default compose(
    connect(mapStateToProps, { getCharacters, getMonsters }),
    withRouter,
)(CollectionContainer);