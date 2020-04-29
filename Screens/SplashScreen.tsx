/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import Style from '../Styles/SplashScreen';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreens');
    }, 3000);
  });

  return (
    <LinearGradient colors={['#09337E', '#b5b6d2', '#09337E']} style={Style.SplashScreenContainer}>
      <Image style={Style.SplashImage} source={require('../assets/logo.png')} />
    </LinearGradient>
  );
};

export default SplashScreen;
