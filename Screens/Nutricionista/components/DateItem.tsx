/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, StyleSheet, Image, Text } from 'react-native';
import Ripple from 'react-native-material-ripple';
import WaitScreenModal from '../../../components/WaitScreenModal';
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

interface DateProps{
    idCita:string|number,
    motivo:string,
    fechaCita:string,
    usuario:string,
    img:string,
    onDelete: Function
}

const UserBox = (textIcon:string, textInfo:string, userData:string) => {
    return (<View style={Style.userBox}>
                <Icon style={Style.textIcon} size={30} name={textIcon} color="#000"/>
                <Text style={Style.textInfo}>
                    {textInfo}
                </Text>
                <Text style={Style.userData}>
                    {userData}
                </Text>
            </View>);
};

export default (props:DateProps) => {
    let dateDate = new Date(parseInt(props.fechaCita));
    const [modalWarning, setModalWarning] = useState(false);
    const DELETE_DATE = gql`
        mutation deleteDate($IdCita: ID!){
            eliminarCita(IdCita:$IdCita)
        }
    `;
    const [deleteDateMutation] = useMutation(DELETE_DATE,{variables:{IdCita:props.idCita}})

    const deleteDate = async () => {
        let { data:{eliminarCita} } = await deleteDateMutation();
        props.onDelete()
        setModalWarning(false);
        console.log(eliminarCita);
    };

    return (
        <View style={Style.dateContainer}>
            <Image style={Style.userImg} source={{ uri:props.img }}/>
            <View style={Style.userInfo}>
                {UserBox('face','Usuario',props.usuario)}
                {UserBox('event','Fecha',`${dateDate.getUTCDate()}/${dateDate.getUTCMonth()}/${dateDate.getUTCFullYear()}`)}
                {UserBox('watch','Hora',`${dateDate.getUTCHours()}:${dateDate.getUTCMinutes()}`)}
                {UserBox('assignment','Motivo',props.motivo)}
            </View>
            <View style={Style.userActions}>
                <Ripple onPress={()=>{setModalWarning(true);}} style={Style.btnRipple}>
                    <Text style={Style.btnActions}>
                        Cancelar
                    </Text>
                </Ripple>
            </View>
            <WaitScreenModal
                modalMessage="Estas segur@ de eliminar esta cita?"
                btnYesNo={deleteDate}
                visible={modalWarning}
                btnClose={()=>setModalWarning(false)}
            />
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
        justifyContent:'center',
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
        justifyContent:'center',
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
    },
});
