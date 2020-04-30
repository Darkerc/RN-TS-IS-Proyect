/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface propsTitle{
    title:string
}

export default ({children, title}) => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>
                {title}
            </Text>
            <ScrollView contentContainerStyle={Styles.containerItems} horizontal={true}>
                {children}
            </ScrollView>
        </View>
    );
};

const Styles = StyleSheet.create({
    title:{
        textAlign:'center',
        fontSize:25,
        marginVertical:5,
    },
    container:{
        padding:5,
    },
    containerItems:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
  });
