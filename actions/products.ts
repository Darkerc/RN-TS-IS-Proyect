/* eslint-disable prettier/prettier */
import { PRODUCT_ACTIONS } from '../constants';
import {ProductItem} from '../interfaces/ProductData';

export function addProduct(product:ProductItem){
    return {
        type:PRODUCT_ACTIONS.ADD_PRODUCT,
        payload: product,
    };
}

export function cleanProductData(){
    return {
        type:PRODUCT_ACTIONS.CLEAN_PRODUCTS_DATA,
    };
}

export function deleteProduct(product:any){
    return {
        type:PRODUCT_ACTIONS.DELETE_PRODUCT,
        payload:product,
    };
}
