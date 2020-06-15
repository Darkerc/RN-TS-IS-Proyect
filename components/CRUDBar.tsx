/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, StyleSheet, TextInput } from 'react-native';

interface CRUDAppBarOptions{
    onClickPlus?: Function,
    onClickTrash?: Function,
    onSearchBoxChange?: (text:string) => void
}

export default (options:CRUDAppBarOptions) =>{
    return (
        <View style={Styles.barContainer}>
            <View style={Styles.barContainerItem}>
                {
                    options.onClickPlus &&
                    <Icon onPress={()=>{if (options.onClickPlus){options.onClickPlus();}}} name="add-circle-outline" color="green" size={35}/>
                }
                {
                    options.onClickTrash &&
                    <Icon onPress={()=>{if (options.onClickTrash){options.onClickTrash();}}} name="delete" color="red" size={35}/>
                }
            </View>
            <View style={[Styles.barContainerItem,Styles.barContainerItemText]}>
                <Icon name="search" color="blue" size={35}/>
                <TextInput style={Styles.txtInput} placeholder="Buscar" onChangeText={text=>{if (options.onSearchBoxChange){options.onSearchBoxChange(text);}}}/>
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
        fontSize:20,
    },
});


