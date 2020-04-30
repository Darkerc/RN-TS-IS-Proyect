/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import AppBarNavigation from '../../components/AppBarNavigation';
import DateItem from "./components/DateItem";
import CRUDBar from "../../components/CRUDBar";

export default ({navigation}) => {
    return (
        <SafeAreaView style={{ height:'100%' }}>
            <AppBarNavigation title="Citas" navigation={navigation}/>
            <CRUDBar/>
            <ScrollView>
                <DateItem/>
                <DateItem/>
                <DateItem/>
                <DateItem/>
            </ScrollView>
        </SafeAreaView>
    );
};
