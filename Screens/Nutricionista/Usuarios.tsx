/* eslint-disable prettier/prettier */
import React,{useEffect, useState} from 'react';
import {StyleSheet, Image, ScrollView, SafeAreaView} from 'react-native';
import AppBarNavigation from '../../components/AppBarNavigation';
import CRUDBar from '../../components/CRUDBar';
import IsPortraid from '../../Utils/IsPortraid';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default ({navigation}) => {
  const [portraid,setPortraid] = useState(IsPortraid((value:Boolean) => value));
  const tableHead = ['id', 'Usuarios', 'Nombre', 'Peso', 'Edad', 'Calorias'];
  const tableData = [
    {id: 1, usuario:<Image style={[styles.productImage,{ height: portraid ? 65 : 100}]} source={require('../../assets/nutricionista.png')} />,nombre: 'Nombre de ejemplo',peso:'100kg',edad:21,calorias:500},
    {id: 2, usuario:<Image style={[styles.productImage,{ height: portraid ? 65 : 100}]} source={require('../../assets/nutricionista.png')} />,nombre: 'Nombre de ejemplo',peso:'100kg',edad:21,calorias:500},
    {id: 3, usuario:<Image style={[styles.productImage,{ height: portraid ? 65 : 100}]} source={require('../../assets/nutricionista.png')} />,nombre: 'Nombre de ejemplo',peso:'100kg',edad:21,calorias:500},
    {id: 4, usuario:<Image style={[styles.productImage,{ height: portraid ? 65 : 100}]} source={require('../../assets/nutricionista.png')} />,nombre: 'Nombre de ejemplo',peso:'100kg',edad:21,calorias:500},
  ];

  useEffect(()=>{
    IsPortraid((value:Boolean) => setPortraid(value));
  });

  return (
    <SafeAreaView style={{ height:'100%' }}>
      <AppBarNavigation title="Usuarios" navigation={navigation}/>
      <CRUDBar />
      <ScrollView>
        <Table borderStyle={{borderWidth: 1, borderColor: '#000'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          {
            tableData.map((userData, i) => (
              <TableWrapper key={i} style={styles.row} borderStyle={{borderWidth: 1, borderColor: '#000'}}>
                <Cell textStyle={styles.text} data={userData.id}/>
                <Cell textStyle={styles.text} data={userData.usuario}/>
                <Cell textStyle={styles.text} data={userData.nombre}/>
                <Cell textStyle={styles.text} data={userData.edad}/>
                <Cell textStyle={styles.text} data={userData.peso}/>
                <Cell textStyle={styles.text} data={userData.calorias}/>
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
  productImage:{ width:'100%' },
});

