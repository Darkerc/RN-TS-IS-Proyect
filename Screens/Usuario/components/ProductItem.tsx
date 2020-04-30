/* eslint-disable prettier/prettier */
import React, { Props } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface productItemProp{
    props: Props<View>,
    src: string,
    calorias: number,
    costo: number
}

export default () => {
    return (
        <View style={Style.productContainer}>
            <Image style={Style.imgProduct} source={require('../../../assets/product.png')}/>
            <Text style={Style.textInfo}>Caloria: 20</Text>
            <Text style={Style.textInfo}>Costo: $200</Text>
        </View>
    );
};

const Style = StyleSheet.create({
    productContainer:{
        justifyContent:'center',
        margin:5,
    },
    imgProduct:{
        width: 120,
        height: 120,
        borderRadius:10,
    },
    textInfo:{
        textAlign:'center',
        fontSize:15,
        marginTop:2,
    }
})