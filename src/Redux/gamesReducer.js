import { getGames } from "../DAL/API";

const SET_GAMES = 'SET-GAMES';

let initialState = {
    games: [],
    isGamesFetching: true,
}

let gamesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_GAMES: 
            return {
                ...state,
                games: action.items,
            }
        default:
            return state;
    }
}

export const setGames = (items) => ({type: SET_GAMES, items});

export const getAllGames = () => {
    return (dispatch) => {
        getGames()
        .then(res => {
            dispatch(setGames(res));
        })
    }
}

export default gamesReducer;