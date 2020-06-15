/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { addProduct } from '../../../actions/products';
import { useDispatch } from 'react-redux';
import Ripple from "react-native-material-ripple";

interface productItemProp{
    src?: string,
    id:number,
    nombre: string,
    calorias: number,
    costo: number,
    img: string
}

export default (productProps: productItemProp) => {

    const dispatch = useDispatch();
    const productTouched = () => {
        dispatch(addProduct(productProps));
    };

    return (
        <Ripple style={Style.productContainer} onPress={productTouched}>
            <Image style={Style.imgProduct} source={{ uri:productProps.img }}/>
            <Text style={Style.textInfo}>{productProps.nombre}</Text>
            <Text style={Style.textInfo}>Calorias: {productProps.calorias}</Text>
            <Text style={Style.textInfo}>Costo: ${productProps.costo}</Text>
        </Ripple>
    );
};

const Style = StyleSheet.create({
    productContainer:{
        justifyContent:'center',
        marginHorizontal:10,
    },
    imgProduct:{
        width: 120,
        height: 120,
        borderRadius:10,
        resizeMode:'stretch',
    },
    textInfo:{
        textAlign:'center',
        fontSize:14,
        marginTop:0.5,
    },
});
