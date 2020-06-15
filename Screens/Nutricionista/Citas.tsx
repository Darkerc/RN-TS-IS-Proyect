/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import AppBarNavigation from '../../components/AppBarNavigation';
import DateItem from './components/DateItem';
import CRUDBar from '../../components/CRUDBar';
import ModalGetUser from './components/ModalGetUsers';
import ModalAddDate from './components/ModalAddDate';
import WaitScreenModal from '../../components/WaitScreenModal';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';
import { gql } from 'apollo-boost';

export default ({navigation}) => {

    const GET_DATE = gql`
        query getDate($IdUsuarioNutricionista: ID!){
            getCitas(IdUsuarioNutricionista: $IdUsuarioNutricionista){
                IdCita
                Motivo
                FechaCita
                UsuarioParticipante{
                    Nombre
                    UsuarioImg
                }
            }
        }
    `;

    const CREATE_DATE = gql`
    mutation crearCita($CitaInput:CitaInput!){
        crearCita(CitaInput:$CitaInput){
            IdCita
        }
    }
    `;

    const DELETE_DATE = gql`
        mutation eliminarCita($IdCita: ID!){
            eliminarCita(IdCita: $IdCita)
        }
    `;

    const [currentUser,setCurrentUser] = useState({
        IdUsuario: '0',
        Nombre: '',
        PrimerApellido: '',
        UsuarioImg: '',
    });
    const [modalAddUser, setModalAddUser] = useState(false);
    const [modalAddDate, setModalAddDate] = useState(false);
    const [modalWaiting, setModalWaiting] = useState(false);
    const userID = useSelector(state => state.user.userId);
    const { data, loading, error, refetch } = useQuery(GET_DATE,{variables:{IdUsuarioNutricionista:userID}});
    const [deleteDate] = useMutation(DELETE_DATE);
    const [createNewDate] = useMutation(CREATE_DATE);

    const dateDeleted = async (cita:any) => {
        let isDeleted = await deleteDate({variables:{
            IdCita:cita.IdCita,
        }});
        await refetch();
        console.log(isDeleted);
    };

    const datesList = () => {
        if (loading) {return <Text>Cargando</Text>;}
        if (error) {return <Text>Error al cargar</Text>;}
        return (
            <>
            {
                data.getCitas.map((cita, i)=>{
                    return (
                        <DateItem
                            key={i}
                            idCita={cita.IdCita}
                            motivo={cita.Motivo}
                            fechaCita={cita.FechaCita}
                            usuario={cita.UsuarioParticipante.Nombre}
                            img={cita.UsuarioParticipante.UsuarioImg}
                            onDelete={() => dateDeleted(cita)}
                        />
                    );
                })
            }
            </>
        );
    };

    const getUser = (user:any) => {
        setCurrentUser(user);
        setModalAddDate(true);
    };

    const createDate = async (date:Date,motivo:string) => {
        try {
            setModalWaiting(true);
            await createNewDate({variables:{
                CitaInput:{
                    FKUsuarioParticipante: parseInt(currentUser.IdUsuario),
                    FKUsuarioNutricionista: parseInt(userID) ,
                    FechaCita: date,
                    Motivo: motivo,
                  },
            }});
            await refetch();
        } catch (error) {
            console.log(error);
        } finally {
            setModalWaiting(false);
            setModalAddDate(false);
            setModalAddUser(false);
        }
    };

    return (
        <SafeAreaView style={{ height:'100%' }}>
            <AppBarNavigation title="Citas" navigation={navigation}/>
            <CRUDBar
                onClickPlus={()=>setModalAddUser(true)}
            />
            <ScrollView>
                {datesList()}
            </ScrollView>
            <ModalGetUser
                visible={modalAddUser}
                onBtnClose={()=>{setModalAddUser(false);}}
                onUserClick={user=>{getUser(user);}}
            />
            <ModalAddDate
                visible={modalAddDate}
                onDateSubmit={createDate}
            />
            <WaitScreenModal
                visible={modalWaiting}
                modalMessage="Espere un momento porfavor..."
            />
        </SafeAreaView>
    );
};
