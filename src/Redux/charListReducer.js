import { getCharacter, getRandomCharacter, getMonster } from "../DAL/API";

const SET_CHARACTER = 'SET-CHARACTER', 
TOGGLE_FETCHING = 'TOGGLE-FETCHING', SET_RAND_CHARACTER = 'SET-RAND-CHARACTER';

let initialState = {
    list: [],
    randItem: [],
    isListFetching: false,
}

let charListReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CHARACTER: 
            return {
                ...state,
                list: action.items,
            }
        case SET_RAND_CHARACTER:
            return {
                ...state,
                randItem: action.item,
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isListFetching: action.isFetch,
            }
        default:
            return state;
    }
}

export const setData = (items) => ({type: SET_CHARACTER, items});
export const setRandomCharacter = (item) => ({type: SET_RAND_CHARACTER, item});
const toggleFetching = (isFetch) => ({type: TOGGLE_FETCHING, isFetch});

export const getData = (name, type) => (dispatch) => {
    if(name.trim() === '') {
        dispatch(setData([]));
    } 
    else {
        dispatch(toggleFetching(true));

        switch(type) {
            case 'characters':
                getCharacter(name)
                .then(res => {
                    dispatch(setData(res));
                    dispatch(toggleFetching(false));
                })

                break;
            case 'monsters':
                getMonster(name)
                .then(res => {
                    console.log(res)
                    dispatch(setData(res));
                    dispatch(toggleFetching(false));
                })

                break;
            default:
                return false;
        }
    }
}

export const getRandomCharacterFromAPI = () => (dispatch) => {
    getRandomCharacter()
    .then(res => {
        dispatch(setRandomCharacter(res));
    }) 
}

export default charListReducer;