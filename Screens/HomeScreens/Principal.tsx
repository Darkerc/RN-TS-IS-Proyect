/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {View, Image, Text} from 'react-native';
import Style from '../../Styles/Principal';
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';
import ModalTextComponent from '../../components/ModalTextComponent';

const Principal = ({navigation}) => {
const [modal, setModal] = useState(false);
  const setGQLURI = () => {
  };

  const openModal = () => {setModal(!modal); console.log(modal);};
  const closeModal = () => {setModal(!modal);};

  return (
    <LinearGradient
      colors={['#09337E', '#b5b6d2', '#09337E']}
      style={Style.PrincipalContainer}>
      <View
        style={[
          Style.PBtnStartContainer,
          {flexDirection: 'row', justifyContent: 'center', width:'100%'},
        ]}>
        <Ripple
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text
            style={{
              textAlign: 'center',
              padding: 18,
              fontSize: 18,
              color: 'white',
              backgroundColor: '#490',
              width:'100%'
            }}>
            Iniciar sesion
          </Text>
        </Ripple>
        <ModalTextComponent
            btnAcept={setGQLURI}
            modalMessage="Enviar url del servidor"
            visible={modal}
            btnClose={closeModal}
        />
        {/* <View onTouchStart={openModal}>
          <Icon
            size={50}
            name="settings"
            color="white"
            backgroundColor="#fff"
          />
        </View> */}
      </View>
      <View style={Style.PImageContainer}>
        <Image
          style={Style.Pimage}
          source={require('../../assets/logo-universidad.png')}
        />
      </View>
      <View style={Style.PBtnStartContainer}>
        <Ripple
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text
            style={{
              textAlign: 'center',
              padding: 17,
              fontSize: 17,
              color: 'white',
              backgroundColor: '#b9b600',
            }}>
            Registro
          </Text>
        </Ripple>
      </View>
    </LinearGradient>
  );
};

export default Principal;
