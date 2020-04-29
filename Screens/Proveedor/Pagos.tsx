/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import AppBarNavigation from '../../components/AppBarNavigation';

export default ({navigation}) => {
  return (
    <View>
      <AppBarNavigation title="Pagos" navigation={navigation}/>
      <Text>Pagos</Text>
    </View>
  );
};