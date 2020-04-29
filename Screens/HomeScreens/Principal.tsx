/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text} from 'react-native';
import Style from '../../Styles/Principal';
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';

const Principal = ({navigation}) => {

  return (
    <LinearGradient colors={['#09337E', '#b5b6d2', '#09337E']}  style={Style.PrincipalContainer}>
        <View style={Style.PBtnSingUpContainer}>
            <Ripple onPress={()=>{navigation.navigate('Login');}}>
                <Text style={{ padding:18, fontSize:18, color:'white', backgroundColor:'#149' }}>
                    Iniciar sesion
                </Text>
            </Ripple>
        </View>
        <View style={Style.PImageContainer}>
            <Image style={Style.Pimage} source={require('../../assets/logo-universidad.png')}/>
        </View>
        <View style={Style.PBtnStartContainer}>
            <Ripple onPress={()=>{navigation.navigate('Register');}}>
                <Text style={{ textAlign:'center' , padding:17, fontSize:17, color:'white', backgroundColor:'#490' }}>
                    Empezar
                </Text>
            </Ripple>
        </View>
    </LinearGradient>
  );
};

export default Principal;
