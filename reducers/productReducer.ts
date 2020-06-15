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
        case PRODUCT_ACTIONS.CLEAN_PRODUCTS_DATA:
            return {
                productItems:[],
                productCount:0,
                totalCalories:0,
            };
        case PRODUCT_ACTIONS.DELETE_PRODUCT:
            let product = action.payload;
            let productItems = state.productItems;

            //Restando calorias
            let totalCalories = state.totalCalories;
            totalCalories -= product.calorias;

            //Eliminando el producto
            const idx = productItems.indexOf(product);
            productItems.splice(idx, 1);

            const productCount = productItems.length;
            return {
                 productItems, totalCalories, productCount,
            };
        default:
            return initialState;
    }

};

export default productReducer;
