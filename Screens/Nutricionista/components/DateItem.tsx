/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, StyleSheet, Image, Text } from 'react-native';
import Ripple from "react-native-material-ripple";

const UserBox = (textIcon:string, textInfo:string, userData:string) => {
    return (<View style={Style.userBox}>
                <Icon style={Style.textIcon} size={30} name={textIcon} color="#000"/>
                <Text style={Style.textInfo}>
                    {textInfo}
                </Text>
                <Text style={Style.userData}>
                    {userData}
                </Text>
            </View>)
};

export default () => {
    return (
        <View style={Style.dateContainer}>
            <Image style={Style.userImg} source={require('../../../assets/imgEder.jpg')}/>
            <View style={Style.userInfo}>
                {UserBox('face','Usuario','Eder Reyes')}
                {UserBox('event','Fecha','15/04/2020')}
                {UserBox('watch','Hora','20:00')}
                {UserBox('assignment','Motivo','Porque si!!')}
            </View>
            <View style={Style.userActions}>
                <Ripple style={Style.btnRipple}>
                    <Text style={Style.btnActions} onPress={()=>{}}>
                        Cancelar
                    </Text>
                </Ripple>
                <Ripple style={Style.btnRipple}>
                    <Text style={Style.btnActions} onPress={()=>{}}>
                        Agendar
                    </Text>
                </Ripple>
            </View>
        </View>
    );
};

const Style = StyleSheet.create({
    dateContainer:{
        borderWidth:3,
        borderColor:'#000',
        padding:5,
        margin:5,
        justifyContent:'center',
        alignItems:'center',
        elevation:4,
    },
    userImg:{
        width:120,
        height:120,
        borderWidth:2,
        borderColor:'#000',
        borderRadius:200,
    },
    userInfo:{
        padding:2.5,
        width:'100%',
    },
    userBox:{
        flexDirection:'row',
    },
    textIcon:{
        width:'10%',
        justifyContent:"center",
        alignSelf:'center',
        marginBottom:5,
    },
    textInfo:{
        width:'30%',
        padding:7.5,
        textAlign:'left',
        fontSize:20,
    },
    userData:{
        width:'60%',
        padding:5,
        marginVertical:3,
        textAlign:'center',
        fontSize:15,
        borderWidth:3,
        borderColor:'#000',
        backgroundColor:'#eed',
    },
    userActions:{
        flexDirection:'row',
        justifyContent:'center'
    },
    btnRipple:{
        margin:5,
    },
    btnActions:{
        backgroundColor:'#777',
        padding:15,
        color:'white',
        fontSize:15,
        borderRadius:5,
    }
});
