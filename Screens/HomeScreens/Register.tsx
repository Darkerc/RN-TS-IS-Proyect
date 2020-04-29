/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import GeneralStyle from '../../Styles/GeneralScreen';
import AppBar from '../../components/AppBar';
import RegisterLogin from '../../components/RegisterLogin';
import LinearGradient from 'react-native-linear-gradient';

const Register = ({navigation}) => {

  return (
    <LinearGradient colors={['#09337E', '#b5b6d2', '#09337E']} style={[GeneralStyle.ScreenStyle,{alignItems:'center'}]}>
        <AppBar title="Registro" navigation={navigation}/>
        <RegisterLogin />
        <Text style={{ width:'100%', color:'white', textAlign:'center', fontSize:15, padding:15}}>
            Al registrate aceptas nuestra politicas de uso y politicas de privacidad
        </Text>
    </LinearGradient>
  );
};

export default Register;
