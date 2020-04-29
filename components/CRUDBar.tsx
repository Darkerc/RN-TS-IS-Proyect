/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, StyleSheet, TextInput } from 'react-native';

export default () =>{
    return (
        <View style={Styles.barContainer}>
            <View style={Styles.barContainerItem}>
                <Icon name="add-circle-outline" color="green" size={35}/>
                <Icon name="delete" color="red" size={35}/>
            </View>
            <View style={[Styles.barContainerItem,Styles.barContainerItemText]}>
                <Icon name="search" color="blue" size={35}/>
                <TextInput style={Styles.txtInput} placeholder="Buscar"/>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    barContainer:{
        borderColor:'#000',
        borderWidth:3,
        paddingVertical:2,
        paddingHorizontal:3,
        margin:6,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    barContainerItem:{
        flexDirection:'row',
        alignItems:'center',
    },
    barContainerItemText:{
        justifyContent:'flex-end',
    },
    txtInput:{
        width:'65%',
        backgroundColor:'#CCF',
        borderWidth:1,
        borderColor:'#000',
        borderRadius:10,
        margin:0,
        paddingHorizontal:10,
        fontSize:20
    },
});


