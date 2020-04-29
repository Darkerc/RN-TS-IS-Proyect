/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import AppBarNavigation from '../../components/AppBarNavigation';

export default ({navigation}) => {
  return (
    <View>
      <AppBarNavigation title="Menu diario" navigation={navigation}/>
      <Text>Menu diario</Text>
    </View>
  );
};
