/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import AppBarNavigation from '../../components/AppBarNavigation';

export default ({navigation}) => {
    return (
        <SafeAreaView style={{ height:'100%' }}>
            <AppBarNavigation title="Citas" navigation={navigation}/>
        </SafeAreaView>
    );
};
