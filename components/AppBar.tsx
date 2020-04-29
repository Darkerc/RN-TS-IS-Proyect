/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface appBarProps {
    title: string,
    navigation: any
}

const AppBar = (options: appBarProps) =>{
    return (
        <View style={AppBarStyle.mainBar}>
            <View style={AppBarStyle.goBackImgCont} onTouchStart={() => {options.navigation.goBack(); }}>
                <Image style={AppBarStyle.goBackImg} source={require('../assets/arrow.png')} />
            </View>
            <Text style={AppBarStyle.appText}>
                {options.title}
            </Text>
        </View>
    );
};

export default AppBar;

const AppBarStyle = StyleSheet.create({
    mainBar:{
        flexDirection:'row',
        position:'relative',
        padding: 15,
    },
    goBackImgCont:{
        position:'absolute',
        left: 10,
        alignSelf:'center',
        margin:'auto',
        padding:15,
        zIndex:2
    },
    goBackImg:{
        zIndex:1
    },
    appText:{
        width:'100%',
        color:'white',
        alignSelf:'center',
        textAlign:'center',
        fontSize: 30,
    },
});
