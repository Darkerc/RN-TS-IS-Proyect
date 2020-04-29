/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface barOptions {
    title: string,
    navigation: any
}

export default (options:barOptions) =>{
    return (
        <View style={Styles.barContainer}>
            <View onTouchStart={()=>{options.navigation.openDrawer()}} onTouchEnd={()=>{options.navigation.openDrawer()}} style={Styles.barIconContainer}>
                <Icon onPress={()=>{options.navigation.openDrawer()}} styles={Styles.barIcon} size={50} name="dehaze" color="#000" />
            </View>
            <Text style={Styles.barText}>{options.title}</Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    barContainer:{
        padding: 15,
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        position:'relative',
    },
    barIconContainer:{
        position:'absolute',
        left:10,
        zIndex:5,
    },
    barIcon:{
        padding:15,
        zIndex:2,
    },
    barText:{
        width:'100%',
        textAlign:'center',
        fontSize:25,
    },
});
