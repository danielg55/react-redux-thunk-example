import {rootReducer} from './reducers/rootReducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

export default store;