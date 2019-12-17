import { getAllCharacters, getAllMonsters } from "../DAL/API";

const SET_ALL_COLLECTION = 'SET-ALL-COLLECTION', SET_USER_ITEMS = 'SET-USER-ITEMS', TOGGLE_FETCHING = 'TOGGLE_FETCHING', SET_FILTER_TAGS = 'SET-FILTER-TAGS';

let initialState = {
    userItems: [],
    allCollection: {
        characters: [],
        monsters: [],
    },
    filterTags: [],
    isCollFetching: true,
}

let collectionReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_ITEMS: 
            return {
                ...state,
                userItems: action.items,
            }
        case SET_ALL_COLLECTION:
            if(action.monstItems) {
                return {
                    ...state,
                    allCollection: {
                        ...state.allCollection,
                        monsters: action.monstItems
                    },
                }
            }
            if(action.charItems) {
                return {
                    ...state,
                    allCollection: {
                        ...state.allCollection,
                        characters: action.charItems
                    },
                }
            }
            
            return state;
        case SET_FILTER_TAGS:
            return {
                ...state,
                filterTags: [...state.filterTags, action.buffer],
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isCollFetching: action.isFetch,
            }
        default:
            return state;
    }
}

export const setUserItems = (items) => ({type: SET_USER_ITEMS, items});
export const setAllCollectionOfChar = (charItems) => ({type: SET_ALL_COLLECTION, charItems});
export const setAllCollectionOfMonsters = (monstItems) => ({type: SET_ALL_COLLECTION, monstItems});
const toggleCollFetching = (isFetch) => ({type: TOGGLE_FETCHING, isFetch});
const countFilterTags = (items, type) => {
    let buffer = [];

    items.map(item => {
        return (buffer.some(it => it === item[type])) ? buffer : buffer.push(item[type]);
    });

    return {
        type: SET_FILTER_TAGS, buffer
    }
}

export const getCharForCollection = (items) => (dispatch) => {
    dispatch(setUserItems(items));
}

export const getCharacters = (items) => (dispatch) => {
    dispatch(toggleCollFetching(true));

    if(items.length === 0) {
        getAllCharacters()
        .then(res => {
            dispatch(setAllCollectionOfChar(res));
            dispatch(countFilterTags(res, 'gender'));
            dispatch(countFilterTags(res, 'race'));
            dispatch(toggleCollFetching(false));
        })
    } else {
        setTimeout(() => {
            dispatch(toggleCollFetching(false));
        }, 300);
    } 
}

export const getMonsters = (items) => (dispatch) => {
    dispatch(toggleCollFetching(true));

    if(items.length === 0) {
        getAllMonsters()
        .then(res => {
            dispatch(setAllCollectionOfMonsters(res));
            dispatch(toggleCollFetching(false));
        })
    } else {
        setTimeout(() => {
            dispatch(toggleCollFetching(false));
        }, 300);
    } 
}

export default collectionReducer;