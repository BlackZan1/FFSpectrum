import { getCharacter, getMonster } from "../DAL/API";

const SET_CARD_BODY = 'SET-CARD-BODY', TOGGLE_CARD_FETCHING = 'TOGGLE-CARD-FETCHING';

let initialState = {
    cardBody: [],
    isCardFetching: true, 
}

let cardReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CARD_BODY:
            return {
                ...state,
                cardBody: {...action.body[0],}
            }
        case TOGGLE_CARD_FETCHING:
            return {
                ...state,
                isCardFetching: action.isCardFetch,
            } 
        default:
            return state;
    }
}

export const setCardBody = (body) => ({type: SET_CARD_BODY, body});
const toggleCardFetching = (isCardFetch) => ({type: TOGGLE_CARD_FETCHING, isCardFetch});

export const getCardBody = (name, type) => (dispatch) => {
    dispatch(toggleCardFetching(true));

    if(name.trim() === '') return dispatch(setCardBody(null))

    switch(type) {
        case 'monsters':
            getMonster(name)
            .then(res => {
                dispatch(setCardBody(res));
                dispatch(toggleCardFetching(false));
            })
            
            break;
        case 'characters':
            getCharacter(name)
            .then(res => {
                dispatch(setCardBody(res));
                dispatch(toggleCardFetching(false));
            })

            break;
        default:
            return null;
    }
}

export default cardReducer;