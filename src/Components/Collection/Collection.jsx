import React from 'react';
import CollectionItem from '../UserPage/CollectionItem/CollectionItem';
import './Collection.scss';
import Title from '../Title/Title';
import { NavLink } from 'react-router-dom';

const Collection = ({allCollection, type, filterTags, filterCharCollection}) => {
    let collection;
    console.log(allCollection)

    switch(type) {
        case 'characters':
            collection = allCollection.characters;
            break;
        case 'monsters':
            collection = allCollection.monsters;
            break;
        default:
            return null;
    }

    const showCharacters = collection.map((item, index) => {
        return <CollectionItem key={index} {...item} />
    })

    return (
        <div className='CollectionPage'>
            <Title>All <span className='Title-span'>{type.toUpperCase()}</span> / All <NavLink className='Title-a' to={`/collection/${type === 'characters' ? 'monsters' : 'characters'}`}>{type === 'characters' ? 'MONSTERS >' : 'CHARACTERS >'}</NavLink></Title>

            {
                type === 'characters' && (
                    <div className='CollectionPage-filter'>
                        <div className='No-filter'>
                            <button onClick={() => filterCharCollection()}>All characters</button>
                        </div>

                        <div className='Filter-gender'>
                            Filter by gender => {filterTags[0].map((tag, index) => (
                                <button key={index + Math.random()} onClick={() => filterCharCollection('gender', tag)}>{tag} </button>
                            ))}
                        </div>

                        <div className='Filter-race'>
                            Filter by race => {filterTags[1].map((tag, index) => (
                                <button key={index + Math.random()} onClick={() => filterCharCollection('race', tag)}>{tag} </button>
                            ))}
                        </div>
                    </div>
                )
            }

            <div className='CollectionPage-list'>
                {showCharacters}
            </div>
        </div>
    )
}

export default Collection;