/* eslint-disable prettier/prettier */
import React, {useState,useEffect} from 'react';
import { ScrollView ,SafeAreaView, View, Image, Text, StyleSheet} from 'react-native';
import AppBarNavigation from '../../components/AppBarNavigation';
import DateList from './components/DateList';
import DateItem from './components/DateItem';
import IsPortraid from '../../Utils/IsPortraid';
import { useSelector } from 'react-redux';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

export default ({navigation}) => {
  const [portraid,setPortraid] = useState(IsPortraid((value:boolean) => value));
  const userId = useSelector(state => state.user.userId);
  console.log(userId);

  useEffect(() => {
    IsPortraid((value:boolean)=>{
      setPortraid(value);
    });
  });

  const USER_DATE = gql`
    query getUserDates($IdUsuarioParticipante: ID!){
      getUsuariosCitas(IdUsuarioParticipante:$IdUsuarioParticipante){
        Motivo
        FechaCita
        UsuarioNutricionista{
          Nombre
        }
      }
    }
  `;

  const {data, loading, error} = useQuery(USER_DATE,{variables:{IdUsuarioParticipante: userId}});

  const datesList = () => {
    if (loading) {return <Text>Cargando</Text>;}
    if (error) {return <Text>Error al cargar</Text>;}
    return (
      <DateList>
      {
        data.getUsuariosCitas.map((cita,i) => {
          return (
            <DateItem
              key={i}
              fechaCita={cita.FechaCita}
              usuarioNutricionista={cita.UsuarioNutricionista.Nombre}
              motivo={cita.Motivo}
            />
          );
        })
      }
      </DateList>
    );
  };

  return (
    <SafeAreaView style={{ height:'100%' }}>
      <AppBarNavigation title="Citas" navigation={navigation}/>
      <View style={{ display: portraid ? 'flex' : 'none' }}>
        <Image style={Styles.controlImg} source={require('../../assets/calendar-line.png')}/>
        <Text style={Styles.controlText}>Tus citas</Text>
      </View>
      <ScrollView>
        {datesList()}
      </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  controlImg:{
    alignSelf:'center',
    width:100,
    height:100 ,
    resizeMode:'stretch',
  },
  controlText:{
    textAlign:'center',
    fontSize:22.5,
  },
});
