/* eslint-disable prettier/prettier */
import { createStore,combineReducers } from 'redux';
import count from '../reducers/countReducer';
import user from '../reducers/userReducer';
import product from '../reducers/productReducer';

const rootReducer = combineReducers({ count, user, product });

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
