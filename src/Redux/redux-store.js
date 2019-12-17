import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import gamesReducer from './gamesReducer';
import charListReducer from './charListReducer';
import collectionReducer from './collectionReducer';
import userReducer from './userReducer';
import cardReducer from './cardReducer';

let allReducers = combineReducers({
    dataGames: gamesReducer,
    dataCharList: charListReducer,
    dataCollection: collectionReducer,
    dataUser: userReducer,
    dataCard: cardReducer,
    form: formReducer,
})

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
window.store = store;