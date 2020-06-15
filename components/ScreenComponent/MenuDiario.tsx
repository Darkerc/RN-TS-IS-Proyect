/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Text} from 'react-native';
import AppBarNavigation from '../../components/AppBarNavigation';
import ProductList from '../ProductList';
import ProductItem from '../ProductItem';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

export default ({navigation}) => {

  const GET_DINNERS_DISH = gql`
  {
    CafeteriasPlatillos{
      IdCafeteria
      Edificio
      Platillos{
        IdPlatillo
        NombrePlatillo
        Precio
        Calorias
        PlatilloImg
        Existencias
      }
    }
  }
  `;
  const { data, loading, error } = useQuery(GET_DINNERS_DISH);

  return (
    <SafeAreaView style={Styles.container}>
      <AppBarNavigation title="Menu diario" navigation={navigation}/>
      <ScrollView>
        {
          loading ?
          <Text>
            Cargando
          </Text>
          :
          data.CafeteriasPlatillos.map((cafeteria: { Edificio: string, Platillos: Array<{ Calorias: number; Precio: number; NombrePlatillo: string ;IdPlatillo: number; PlatilloImg: string}> }, i: number) => {
            return (
              <ProductList title={`Cafeteria edificio ${cafeteria.Edificio}`} key={i}>
                {
                  cafeteria.Platillos.map((platillo: { Calorias: number, Precio: number, NombrePlatillo: string, IdPlatillo: number, PlatilloImg: string}, index:number) => {
                    return (
                      <ProductItem
                        key={index}
                        id={platillo.IdPlatillo}
                        nombre={platillo.NombrePlatillo}
                        calorias={platillo.Calorias}
                        costo={platillo.Precio}
                        img={platillo.PlatilloImg}
                      />
                    );
                  })
                }
              </ProductList>
            );
          })
        }
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
    fontSize:17.5,
  },
  buyIcon:{
    position:'absolute',
    top:10,
    right:10,
  },
  buyIconFB:{
    position:'absolute',
    top:-7.5,
    right:-6,
    zIndex:20,
  },
  buyIconText:{
    fontSize:15,
  },
});
