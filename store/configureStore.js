/* eslint-disable prettier/prettier */
import { createStore,combineReducers } from 'redux';
import count from '../reducers/countReducer';
import user from '../reducers/userReducer';

const rootReducer = combineReducers({ count, user });

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
