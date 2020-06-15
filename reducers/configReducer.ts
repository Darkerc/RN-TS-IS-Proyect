/* eslint-disable prettier/prettier */
import { PRODUCT_ACTIONS } from '../constants';

const initialState = {
    productItems:[],
    productCount:0,
    totalCalories:0,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_ACTIONS.ADD_PRODUCT:
            state.productItems.push(action.payload);
            state.totalCalories += action.payload.calorias;
            return {
                ...state,
                productCount:state.productItems.length,
            };
        default:
            return initialState;
    }

};

export default productReducer;
