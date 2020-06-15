/* eslint-disable prettier/prettier */
import React,{useEffect, useState} from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';
import { gql } from 'apollo-boost';
import {StyleSheet, Image, ScrollView, SafeAreaView} from 'react-native';
import AppBarNavigation from '../../components/AppBarNavigation';
import ModalAddUser from './components/ModalAddUser';
import ModalDeleteUser from './components/ModalDeleteUser';
import WaitScreenModal from '../../components/WaitScreenModal';
import CRUDBar from '../../components/CRUDBar';
import IsPortraid from '../../Utils/IsPortraid';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { View, Text } from 'native-base';

export default ({navigation}) => {
  const userId = useSelector(state => state.user.userId);
  const GET_USERS = gql`
  query getPacientes($IdUsuarioNutricionista: Int!){
    Pacientes(IdUsuarioNutricionista:$IdUsuarioNutricionista){
      UsuarioParticipante{
        IdUsuario
        Nombre
        PrimerApellido
        UsuarioImg
        FechaNacimiento
      }
    }
  }
  `;
  const ADD_USER = gql`
    mutation addPaciente($IdUsuarioNutricionista: ID!, $IdUsuario: ID!){
      addPaciente(IdUsuarioNutricionista: $IdUsuarioNutricionista, IdUsuario: $IdUsuario){
        FKUsuarioParticipante
        FKUsuarioNutricionista
      }
    }
  `;
  const DELETE_USER = gql`
    mutation deletePaciente($IdNutricionistaPaciente: ID!){
      deletePaciente(IdNutricionistaPaciente: $IdNutricionistaPaciente)
    }
  `;
  const [modalUsers,setModalUsers] = useState(false);
  const [modalWaiting,setModalWaiting] = useState(false);
  const [modalDeleteUser,setModalDeleteUser] = useState(false);
  const [portraid,setPortraid] = useState(IsPortraid((value:Boolean) => value));
  const tableHead = ['id', 'Usuarios', 'Nombre'];
  const [addUser] = useMutation(ADD_USER);
  const [deleteUser] = useMutation(DELETE_USER);
  const { data, loading, error, refetch } = useQuery(GET_USERS,{variables:{IdUsuarioNutricionista:parseInt(userId)}});
  const UserTable = () => {
    if (loading) {return <Text>Cargando...</Text>;}
    if (error) {return <Text>Error al cargar</Text>;}
    return (
      <>
        {
            data.Pacientes.map((userData, i) => (
              <TableWrapper key={i} style={styles.row} borderStyle={{borderWidth: 1, borderColor: '#000'}}>
                <Cell textStyle={styles.text} data={(i + 1)}/>
                <Cell textStyle={styles.text} data={
                  <Image style={[styles.productImage,{ height: portraid ? 65 : 100}]} source={{ uri:userData.UsuarioParticipante.UsuarioImg }} />
                }/>
                <Cell textStyle={styles.text} data={userData.UsuarioParticipante.Nombre + ' ' + userData.UsuarioParticipante.PrimerApellido}/>
              </TableWrapper>
            ))
          }
      </>
    );
  };

  const onCreateUserClick = async (user:any) => {
    try {
      setModalWaiting(true);
      await addUser({variables:{
        IdUsuarioNutricionista:userId,
        IdUsuario:user.IdUsuario,
      }});
      await refetch();
    } catch (error) {
      console.error(error);
    } finally {
      setModalWaiting(false);
    }
  };

  const onDeleteUserClick = async (user:any) => {
    try {
      setModalWaiting(true);
      await deleteUser({
        variables:{
          IdNutricionistaPaciente:user.IdNutricionistaPaciente
        }
      })
    } catch (error) {
      console.error(error);
    } finally {
      setModalWaiting(false)
    }
  }
 
  useEffect(()=>{
    IsPortraid((value:Boolean) => setPortraid(value));
  });

  return (
    <SafeAreaView style={{ height:'100%' }}>
      <AppBarNavigation title="Usuarios" navigation={navigation}/>
      <CRUDBar
        onClickPlus={()=>setModalUsers(true)}
        onClickTrash={()=>setModalDeleteUser(true)}
      />
      <ScrollView>
        <Table borderStyle={{borderWidth: 1, borderColor: '#000'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <UserTable/>
        </Table>
      </ScrollView>
      <ModalAddUser
        visible={modalUsers}
        onBtnClose={()=>setModalUsers(false)}
        onUserClick={onCreateUserClick}
      />
      <ModalDeleteUser
        visible={modalDeleteUser}
        onBtnClose={()=>setModalDeleteUser(false)}
        onUserClick={onDeleteUserClick}
      />
      <WaitScreenModal
        visible={modalWaiting}
        modalMessage="Realizando operacion, espere..."
      />
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40,  padding:5 },
  text: { textAlign:'center' },
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding:5,
  },
  productImage:{ width:'100%', resizeMode:'center' },
});

