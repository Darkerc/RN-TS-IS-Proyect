/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';
import GeneralStyle from '../../Styles/GeneralScreen';
import AppBar from '../../components/AppBar';
import RegisterLogin from '../../components/RegisterLogin';
import LinearGradient from 'react-native-linear-gradient';
// import DocumentPicker from 'react-native-document-picker';

const Register = ({navigation}) => {

  // const base64Encode = (file:any) => {
  //   return new Buffer(file).toString('base64');
  // };

  // const selectFile = async () => {
  //   try {
  //     const res = await DocumentPicker.pick({
  //       type:[DocumentPicker.types.images],
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <LinearGradient colors={['#09337E', '#b5b6d2', '#09337E']} style={[GeneralStyle.ScreenStyle,{alignItems:'center'}]}>
        <AppBar title="Registro" navigation={navigation}/>
        <RegisterLogin navigation={navigation} />
        <Text style={{ width:'100%', color:'white', textAlign:'center', fontSize:15, padding:15}}>
            Al registrate aceptas nuestra politicas de uso y politicas de privacidad
        </Text>
    </LinearGradient>
  );
};

export default Register;
