import React from 'react';
import SearchInput from './SearchInput/SearchInput';
import Item from './Item/Item';
import RandomItem from './RandomItem/RandomItem';
import './Wrapper.scss';
import Loader from '../Loader/Loader';

const Wrapper = (
    {
    list, 
    onChangeValue, 
    isFetching, 
    value, 
    setToCollectionMid, 
    balance, buyCharacter, 
    isLack, 
    userCollection,
    searchType,
    toggleType
    }) => {
    const showCharacterCard = list.map((item, index) => {
        return <Item key={index} 
                     picture={item.picture} 
                     name={item.name} 
                     description={item.description} 
                     price={320} 
                     origin={searchType === 'characters' ? item.origin : item.game}
                     setToCollectionMid={setToCollectionMid}
                     id={searchType === 'characters' ? item.id : item.monsterId}
                     race={item.race}
                     buyCharacter={buyCharacter}
                     isLack={isLack}
                     userCollection={userCollection}
        />
    })

    return (
        <div className='Wrapper'>
            <SearchInput onChange={onChangeValue} balance={balance} searchType={searchType} toggleType={toggleType} value={value}/>
 
            <div className='Wrapper-list'>
                {isFetching ? <Loader title={'Character is loading...'} height={300}/> :
                    <>
                        {
                            value === '' ? 
                            <RandomItem setToCollectionMid={setToCollectionMid} buyCharacter={buyCharacter} isLack={isLack} userCollection={userCollection} /> 
                            :
                            <>{
                                list.length >= 1 ? 
                                showCharacterCard : 
                                <p className='Wrapper-list-not-p'>
                                    {searchType.toUpperCase()} is not founded...
                                </p>
                            }</>
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default Wrapper;