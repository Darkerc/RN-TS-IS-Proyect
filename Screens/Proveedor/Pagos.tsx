/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, Image, SafeAreaView} from 'react-native';
import AppBarNavigation from '../../components/AppBarNavigation';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import CRUDBar from '../../components/CRUDBar';

export default ({navigation}) => {
  const tableHead = ['Producto', 'Calorias', 'Precio', 'Cantidad', 'Modo de pago'];
  const producData = [
    {img:<Image style={styles.productImage} source={require('../../assets/product.png')}/>, calorias:90, precio:200, cantidad:10, modoPago:'Tarjeta'},
    {img:<Image style={styles.productImage} source={require('../../assets/product.png')}/>, calorias:120, precio:150, cantidad:15, modoPago:'Tarjeta'},
    {img:<Image style={styles.productImage} source={require('../../assets/product.png')}/>, calorias:30, precio:300, cantidad:5, modoPago:'Tarjeta'},
    {img:<Image style={styles.productImage} source={require('../../assets/product.png')}/>, calorias:300, precio:120, cantidad:1, modoPago:'Efectivo'},
    {img:<Image style={styles.productImage} source={require('../../assets/product.png')}/>, calorias:10, precio:70, cantidad:14, modoPago:'Efectivo'},
  ];

  return (
    <SafeAreaView style={{ height:'100%' }}>
      <AppBarNavigation title="Pagos" navigation={navigation}/>
      <CRUDBar/>
      <ScrollView>
        <Table borderStyle={{borderWidth: 1, borderColor: '#000'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          {
            producData.map((userData, i) => (
              <TableWrapper key={i} style={styles.row} borderStyle={{borderWidth: 1, borderColor: '#000'}}>
                <Cell textStyle={styles.text} data={userData.img}/>
                <Cell textStyle={styles.text} data={userData.calorias}/>
                <Cell textStyle={styles.text} data={userData.precio}/>
                <Cell textStyle={styles.text} data={userData.cantidad}/>
                <Cell textStyle={styles.text} data={userData.modoPago}/>
              </TableWrapper>
            ))
          }
        </Table>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40,  padding:5 },
  text: { textAlign:'center' },
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding:5,
  },
  productImage:{ width:'100%', height:100, resizeMode:'stretch'},
  icon:{
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
  },
});
