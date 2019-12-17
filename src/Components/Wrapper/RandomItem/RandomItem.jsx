import React from 'react';
import Item from '../Item/Item';
import { connect } from 'react-redux';
import { getRandomCharacterFromAPI } from '../../../Redux/charListReducer';

class RandomItem extends React.Component {
    componentDidMount() {
        this.props.getRandomCharacterFromAPI();
    }

    render() {
        let { randItem, setToCollectionMid, buyCharacter, isLack, userCollection} = this.props;
        let discountPrice = 240;

        return <>
            {randItem.length === 0 ? '' :
                <Item name={ randItem.name } 
                      description={ randItem.description } 
                      picture={ randItem.picture }
                      price={ discountPrice }
                      origin={ randItem.origin }
                      setToCollectionMid={setToCollectionMid}
                      buyCharacter={buyCharacter}
                      isLack={isLack}
                      userCollection={userCollection}
                      id={randItem.id}
                />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        randItem: state.dataCharList.randItem,
    }
}

export default connect(mapStateToProps, { getRandomCharacterFromAPI })(RandomItem);