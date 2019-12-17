import React from 'react';
import underline from '../../../img/block-underline.png';
import './Item.scss';
import ModalItem from '../ModalItem/ModalItem';

export default ({name, description, picture, price, origin, setToCollectionMid, id, race, buyCharacter, isLack, userCollection}) => {
    let [isSold, setSold] = React.useState(false);

    const OnClickAdd = () => {
        let newItem = {
            name,
            description,
            picture,
            origin,
            id,
            race
        }

        setToCollectionMid(newItem);
        buyCharacter(price);

        setTimeout(() => {
            isLack ? setSold(false) : setSold(true);
        }, 300);
    }

    return <>
        <div className='Wrapper-item'>
            <div className='Item-info'>
                <div className='Item-name'>{name}</div>

                <img src={underline} alt="-"/>

                <div className='Item-description'>
                    {description ? description : 'No description :('}
                </div>
            </div>

            <div className='Item-order'>
                <div className='Item-order-price'>
                    <img src={'https://www.freepnglogos.com/uploads/border-png/classic-borders-transparent-pictures-14.png'} alt="Loading..."/>

                    <div>{price} gil</div>
                </div>

                <div className='Item-order-btn'>
                    {isLack ? <div className='Item-order-not'>Not enough gil</div> : 
                        (userCollection.some(item => item.id === id) ? 
                            <>
                                <p>You already have this card</p>
                                <button id={id} onClick={OnClickAdd}>Buy again</button> 
                            </>
                            :
                            <button id={id} onClick={OnClickAdd}>Buy a character</button> 
                        )
                    }
                </div>
            </div>

            <div className='Item-portret'>
                <div className='Item-image'>
                    <img src={picture} alt="Loading"/>
                </div>

                <div className='Item-rotate'>
                    {origin.toUpperCase()}
                </div>
            </div>
        </div>

        {
            isSold && <ModalItem name={name}/>
        }
    </>
}