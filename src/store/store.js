import {createStore, applyMiddleware} from 'redux';
import AllReducer from './reducer/index';
import Thunk from 'redux-thunk';

const store = createStore(AllReducer, {}, applyMiddleware(Thunk));

export default store;
