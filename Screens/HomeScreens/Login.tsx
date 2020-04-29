/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import { useDispatch } from 'react-redux';
import AppBar from '../../components/AppBar';
import LoginStyles from '../../Styles/LoginStyles';
import Ripple from 'react-native-material-ripple';
import StyleButtons from '../../Styles/StyleButtons';
import { CommonActions } from '@react-navigation/native';
import { setUser } from '../../actions/user';
import { USER_TYPES } from '../../constants';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const stackNavigationTo = () =>{
    if (email === USER_TYPES.NUTRICIONISTA){
      dispatch(setUser({
        userImg:'../../assets/imgNayanci.jpeg',
        userName:'Nayanci Garcia',
        userType: USER_TYPES.NUTRICIONISTA,
      }));
      navigation.dispatch(CommonActions.reset({
        index:1,
        routes:[
          { name:'Nutricionista' },
        ],
      }));
    } else if (email === USER_TYPES.PROVEEDOR){
      dispatch(setUser({
        userImg:'../../assets/imgLeo.jpeg',
        userName:'Jesus Leonardo',
        userType: USER_TYPES.PROVEEDOR,
      }));
      navigation.dispatch(CommonActions.reset({
        index:1,
        routes:[
          { name:'Proveedor' },
        ],
      }));
    } else if (email === USER_TYPES.USUARIO){
      dispatch(setUser({
        userImg:'../../assets/imgEder.jpg',
        userName:'Eder Reyes',
        userType: USER_TYPES.USUARIO,
      }));
      navigation.dispatch(CommonActions.reset({
        index:1,
        routes:[
          { name:'Usuario' },
        ],
      }));
    } else {
      return;
    }
  };
  const emailInput = (text:string) => {
    setEmail(text);
  };

  return (
    <View style={{ height:'100%' }}>
      <View style={{backgroundColor: '#0A214D'}}>
        <AppBar title="Iniciar sesion" navigation={navigation} />
      </View>
      <ScrollView
        contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
        style={[LoginStyles.FormCont]}>
        <Text style={{ padding:10, fontSize:25, color:'#000' }}>
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
          />
        </View>
        <Ripple onPress={() => {stackNavigationTo();}} style={[StyleButtons.SuccesBtn, {width: '75%', marginTop:20}]}>
          <Text style={{ color:'white', textAlign:'center', fontSize:20 }}>
            Acceder
          </Text>
        </Ripple>
        <Text style={{ margin:20, fontSize:15, color:'#18f' }}>
            ¿Olvidaste tu contraseña?
        </Text>
      </ScrollView>
    </View>
  );
};

export default Login;
