/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default () => {
    return (
        <View style={Styles.controlContainer}>
            <Text style={Styles.dateCaption}>Miercoles</Text>
            <View style={Styles.citeContainer}>
                <Text style={[Styles.citeContainerItem]}>
                    Fecha
                </Text>
                <Text style={[Styles.citeContainerItem, Styles.date]}>
                    01/02/2020
                </Text>
            </View>
            <Text style={Styles.motivoText}>
                Motivo
            </Text>
            <Text style={[Styles.controlMessage,Styles.date]}>
                Se excedio de 80 calorias a 90 calorias por comprar 3 platillos
            </Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    controlContainer:{
        padding:10,
        backgroundColor:'#ddd',
        margin:5,
    },
    dateCaption:{
        backgroundColor:'purple',
        color:'white',
        textAlign:'center',
        fontSize:25
    },
    citeContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:2
    },
    citeContainerItem:{
        fontSize:22.5,
    },
    date:{
        borderWidth:3,
        borderColor:'#000',
        padding:3,
        backgroundColor:'#CCF',
        textAlign:'center',
    },
    motivoText:{
        textAlign:'center',
        fontSize:25,
        padding:1,
    },
    controlMessage:{
        fontSize:20
    }
})