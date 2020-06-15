/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import { View, Modal, StyleSheet, Text, Image } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useSelector } from 'react-redux';
import { FlatGrid } from 'react-native-super-grid';
import { Button } from 'native-base';
import Ripple from 'react-native-material-ripple';

interface ModalAddUserProps{
    visible: boolean,
    onBtnClose: Function,
    onUserClick: (userItem:any) => void
}

export default (options: ModalAddUserProps) => {
    const userId = useSelector(state => state.user.userId);
    const GET_USERS = gql`
    query getPacientes($IdUsuarioNutricionista: Int!){
        Pacientes(IdUsuarioNutricionista:$IdUsuarioNutricionista){
          UsuarioParticipante{
            IdUsuario
            Nombre
            PrimerApellido
            UsuarioImg
          }
        }
      }
    `;
    const { data, loading, error ,refetch } = useQuery(GET_USERS,{variables:{IdUsuarioNutricionista:parseInt(userId)}});
    const UsersList = () => {
        if (loading) {return <Text style={Styles.caption}>Cargando...</Text>;}
        if (error) {return <Text style={Styles.caption}>Error al cargar</Text>;}
        return (
            <FlatGrid
                itemDimension={130}
                items={data.Pacientes}
                renderItem={
                    ({item, index}) => (
                        <View style={Styles.userItem} onTouchStart={()=>{onUserClick(item.UsuarioParticipante);}}>
                            <Ripple>
                                <Image
                                    source={{ uri:item.UsuarioParticipante.UsuarioImg }}
                                    style={Styles.userImg}
                                />
                            </Ripple>
                            <Text style={Styles.userText}>
                                { item.UsuarioParticipante.Nombre }
                            </Text>
                        </View>
                    )
                }
            />
        );
    };

    const onUserClick = async (item:any) => {
        try {
            await options.onUserClick(item);
            await refetch();
        } catch (error) {
            console.error(error);
        } finally {

        }
    };

    useEffect(() => {
        let reload = async () => {await refetch()};
        reload();
    }, [options.visible]);

    return (
        <Modal animationType={'slide'} transparent={true} visible={options.visible}>
            <View style={Styles.modalStyle}>
                <Text style={Styles.caption}>
                    Añadir usuario
                </Text>
                <UsersList/>
                <View style={Styles.modalActions}>
                    <Button style={Styles.btnCerrar} danger={true} onPress={()=>options.onBtnClose()}>
                        <Text style={Styles.btnCerrar}>
                            Cerrar
                        </Text>
                    </Button>
                </View>
            </View>
        </Modal>
    );
};

const Styles = StyleSheet.create({
    modalStyle:{
        backgroundColor:'rgba(0,0,0,.5)',
        width:'100%',
        height:'100%',
    },
    caption:{
        backgroundColor:'rgba(0,0,0,.75)',
        color:'white',
        fontSize:30,
        padding:10,
        textAlign:'center',
    },
    userItem:{
        justifyContent:'center',
    },
    userText:{
        color:'white',
        fontSize:25,
        textAlign:'center',
    },
    userImg:{
        width:'75%',
        height:120,
        alignSelf:'center',
        borderRadius:10,
    },
    btnCerrar:{
        color:'white',
        fontSize:25,
        padding: 15,
        borderRadius: 10,
        textAlign:'center',
    },
    modalActions:{
        padding:15,
        backgroundColor:'rgba(0,0,0,.75)',
    },
});
