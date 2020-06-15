/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Form} from 'native-base';
import {Text, ScrollView} from 'react-native';
import LoginStyles from '../Styles/LoginStyles';
import IsPortraid from '../Utils/IsPortraid';
import Ripple from 'react-native-material-ripple';
import WaitScreenModal from '../components/WaitScreenModal';
import InputItem, {PickerItem, DatePickerItem} from './InputItem';
import {gql} from 'apollo-boost';
import {useMutation} from '@apollo/react-hooks';

interface LoginProps{
  navigation: any
}

const Login = (props:LoginProps) => {
  const [portraid, setPortraid] = useState(
    IsPortraid((value: Boolean) => value),
  );
  const [modal, setModal] = useState(false);
  const [userData, setUserData] = useState({
    Nombre: '',
    PrimerApellido: '',
    SegundoApellido: '',
    Contrasena: '',
    TipoUsuario: 'Participante',
    FechaNacimiento: '',
    Direccion: '',
    Telefono: '',
    Correo: '',
    Pais: '',
    Genero: 'Hombre',
    UsuarioImg:'',
    NSS: '',
    NoControl: '',
  });

  const CREATE_USER = gql`
    mutation InsertarUsuario($UsuarioInput: UsuarioInput) {
      insertarUsuario(UsuarioInput: $UsuarioInput) {
        Nombre
      }
    }
  `;
  const [userMutation] = useMutation(CREATE_USER, {
    variables: {UsuarioInput: userData},
  });

  const createNewUser = async () => {
    setModal(!modal);
    const { data } = await userMutation();
    setModal(false);
    props.navigation.navigate('Login');
    console.log(data);
  };

  useEffect(() => {
    IsPortraid((value: Boolean) => {
      setPortraid(value);
    });
  }, [portraid]);

  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
      style={[LoginStyles.FormCont, {width: portraid ? '100%' : '75%'}]}>
      <Form
        style={{width: '95%', alignItems: 'center', justifyContent: 'center'}}>
        <InputItem
          PlaceholderText="Nombre"
          BottomText="Nombre del usuario"
          onValueChange={(Nombre) => {
            setUserData({...userData, Nombre});
          }}
        />
        <InputItem
          PlaceholderText="Primer apellido"
          BottomText="Primer Apellido del usuario"
          onValueChange={(PrimerApellido) => {
            setUserData({...userData, PrimerApellido});
          }}
        />
        <InputItem
          PlaceholderText="Segundo apellido"
          BottomText="Segundo Apellido del usuario"
          onValueChange={(SegundoApellido) => {
            setUserData({...userData, SegundoApellido});
          }}
        />
        <InputItem
          PlaceholderText="Contraseña"
          BottomText="Contraseña del usuario"
          onValueChange={(Contrasena) => {
            setUserData({...userData, Contrasena});
          }}
        />
        <InputItem
          PlaceholderText="URL imagen usuario"
          BottomText="Imagen del usuario"
          onValueChange={(UsuarioImg) => {
            setUserData({...userData, UsuarioImg});
          }}
        />
        <PickerItem
          PlaceholderText="Tipo de usuario"
          PickerItems={[
            {Label: 'Participante'},
            {Label: 'Proveedor'},
            {Label: 'Nutricionista'},
          ]}
          BottomText="Seleccionar tipo de usuario"
          onValueChange={(TipoUsuario) => {
            setUserData({...userData, TipoUsuario});
          }}
        />
        <DatePickerItem
          PlaceHolderText="Fecha de nacimiento"
          onValueChange={(FechaNacimiento) => {
            setUserData({...userData, FechaNacimiento});
          }}
        />
        <InputItem
          PlaceholderText="Direccion"
          BottomText="Direccion del usuario"
          onValueChange={(Direccion) => {
            setUserData({...userData, Direccion});
          }}
        />
        <InputItem
          PlaceholderText="Telefono"
          BottomText="Telefono del usuario"
          onValueChange={(Telefono) => {
            setUserData({...userData, Telefono});
          }}
        />
        <InputItem
          PlaceholderText="Correo"
          BottomText="Correo del usuario"
          onValueChange={(Correo) => {
            setUserData({...userData, Correo});
          }}
        />
        <InputItem
          PlaceholderText="Pais"
          BottomText="Pais del usuario"
          onValueChange={(Pais) => {
            setUserData({...userData, Pais});
          }}
        />
        <PickerItem
          PlaceholderText="Genero"
          PickerItems={[{Label: 'Hombre'}, {Label: 'Mujer'}]}
          BottomText="Seleccione su genero"
          onValueChange={(Genero) => {
            setUserData({...userData, Genero});
          }}
        />
        <InputItem
          PlaceholderText="NSS"
          BottomText="NNS del usuario"
          onValueChange={(NSS) => {
            setUserData({...userData, NSS});
          }}
        />
        <InputItem
          PlaceholderText="No.Control"
          BottomText="No.Control del usuario"
          onValueChange={(NoControl) => {
            setUserData({...userData, NoControl});
          }}
        />
        <Ripple style={LoginStyles.SubmitBtn} onPress={createNewUser}>
          <Text style={LoginStyles.SubmitBtnText}>Registrarse</Text>
        </Ripple>
        <WaitScreenModal
          modalMessage="Espere un momento por favor"
          visible={modal}
        />
      </Form>
    </ScrollView>
  );
};

export default Login;
