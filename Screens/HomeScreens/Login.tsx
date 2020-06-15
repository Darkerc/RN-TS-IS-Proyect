/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import AppBar from '../../components/AppBar';
import LoginStyles from '../../Styles/LoginStyles';
import Ripple from 'react-native-material-ripple';
import StyleButtons from '../../Styles/StyleButtons';
import {CommonActions} from '@react-navigation/native';
import {setUser} from '../../actions/user';
import {cleanProductData} from '../../actions/products';
import {useMutation} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const Login = ({navigation}) => {
  const [Correo, setCorreo] = useState('');
  const [Contrasena, setContrasena] = useState('');
  const GET_USER = gql`
    mutation ObtenerUsuario($Correo: String!, $Contrasena: String!) {
      ObtenerUsuario(Correo: $Correo, Contrasena: $Contrasena) {
        Nombre
        PrimerApellido
        IdUsuario
        TipoUsuario
        UsuarioImg
      }
    }
  `;
  const [userData] = useMutation(GET_USER, {variables: {Correo, Contrasena}});
  const dispatch = useDispatch();
  const stackNavigationTo = async () => {
    try {
      const {data:{ObtenerUsuario}} = await userData();
      if (ObtenerUsuario != null) {
        dispatch(
          setUser({
            userId:ObtenerUsuario.IdUsuario,
            userImg: ObtenerUsuario.UsuarioImg,
            userName: `${ObtenerUsuario.Nombre} ${ObtenerUsuario.PrimerApellido}`,
            userType: ObtenerUsuario.TipoUsuario,
          }),
        );
        dispatch(cleanProductData());
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: ObtenerUsuario.TipoUsuario}],
          }),
        );
      } else {
        console.log('usuario no encontrado');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const emailInput = (text: string) => {
    setCorreo(text);
  };
  const passwordInput = (text: string) => {
    setContrasena(text);
  };

  return (
    <View style={{height: '100%'}}>
      <View style={{backgroundColor: '#0A214D'}}>
        <AppBar title="Iniciar sesion" navigation={navigation} />
      </View>
      <ScrollView
        contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
        style={[LoginStyles.FormCont]}>
        <Text style={{padding: 10, fontSize: 25, color: '#000'}}>
          Iniciar sesion con tu E-mail
        </Text>
        <View style={LoginStyles.FormGroup}>
          <TextInput
            style={LoginStyles.FormInput}
            placeholderTextColor="white"
            placeholder="E-mail"
            autoCompleteType="email"
            onChangeText={emailInput}
          />
        </View>
        <View style={LoginStyles.FormGroup}>
          <TextInput
            style={LoginStyles.FormInput}
            placeholderTextColor="white"
            placeholder="Contraseña"
            autoCompleteType="password"
            secureTextEntry={true}
            onChangeText={passwordInput}
          />
        </View>
        <Ripple
          onPress={() => {
            stackNavigationTo();
          }}
          style={[StyleButtons.SuccesBtn, {width: '75%', marginTop: 20}]}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
            Acceder
          </Text>
        </Ripple>
        <Text style={{margin: 20, fontSize: 15, color: '#18f'}}>
          ¿Olvidaste tu contraseña?
        </Text>
      </ScrollView>
    </View>
  );
};

export default Login;
