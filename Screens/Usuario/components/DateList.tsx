/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default ({children}) => {
    return (
        <View style={Styles.controlContainer}>
            {children}
        </View>
    );
};

const Styles = StyleSheet.create({
    controlContainer:{
        paddingVertical:10,
        paddingHorizontal:15,
    },
});
