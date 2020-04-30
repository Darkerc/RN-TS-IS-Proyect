/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Text, View} from 'react-native';
import AppBarNavigation from '../../components/AppBarNavigation';
import ProductList from './components/ProductList';
import ProductItem from './components/ProductItem';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default ({navigation}) => {
  return (
    <SafeAreaView style={Styles.container}>
      <AppBarNavigation title="Menu diario" navigation={navigation}/>
      <Icon style={Styles.buyIcon} name="local-grocery-store" size={50} color="#000"/>
      <Text style={Styles.caloriasInfo}>
        Tus calorias: 90
      </Text>
      <ScrollView>
        <ProductList title="Cafeteria edificio K">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ProductList>
        <ProductList title="Cafeteria edificio L">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ProductList>
        <ProductList title="Cafeteria edificio N">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ProductList>
      </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container:{
    height:'100%',
  },
  caloriasInfo:{
    position:'absolute',
    textAlign:'center',
    left:100,
    right:100,
    top:50,
    fontSize:17.5
  },
  buyIcon:{
    position:'absolute',
    top:10,
    right:10
  }
});
