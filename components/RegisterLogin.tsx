/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { View, TextInput, Text, ScrollView } from 'react-native';
import LoginStyles from '../Styles/LoginStyles';
import IsPortraid from '../Utils/IsPortraid';
import Ripple from 'react-native-material-ripple';
import WaitScreenModal from '../components/WaitScreenModal';

const Login = () =>{
    const [portraid,setPortraid] = useState(IsPortraid((value:Boolean) => value));
    const [modal,setModal] = useState(false);
    const modalBtnPressed = () => {
        setModal(!modal);
        setTimeout(() => {
            setModal(false);
        }, 2500);
    };

    useEffect(()=>{
        IsPortraid((value:Boolean) => {
            setPortraid(value);
        });
    });

    return (
        <ScrollView contentContainerStyle={{ alignItems:'center', justifyContent:'center' }} style={[LoginStyles.FormCont,{width: portraid ? '100%' : '75%'}]}>
            <View style={LoginStyles.FormGroup}>
                <TextInput
                    style={LoginStyles.FormInput}
                    placeholderTextColor="white"
                    placeholder="Tu direccion de correo electronico"
                />
                <Text style={LoginStyles.FormText}>
                        Ingrese su correo electronico
                </Text>
            </View>
            <View style={LoginStyles.FormGroup}>
                <TextInput
                    style={LoginStyles.FormInput}
                    placeholderTextColor="white"
                    placeholder="Contraseña"
                />
                <Text style={LoginStyles.FormText}>
                        Introduzca una contraseña
                </Text>
            </View>
            <View style={LoginStyles.FormGroup}>
                <TextInput
                    style={LoginStyles.FormInput}
                    placeholderTextColor="white"
                    placeholder="Nombre de usuario"
                />
                <Text style={LoginStyles.FormText}>
                    Aparecera en todos los pedidos que realize
                </Text>
            </View>
            <Ripple style={LoginStyles.SubmitBtn} onPress={modalBtnPressed}>
                <Text style={LoginStyles.SubmitBtnText}>
                    Registrarse
                </Text>
            </Ripple>
            <WaitScreenModal modalMessage="Espere un momento por favor" visible={modal} />
        </ScrollView>
    );
};

export default Login;
