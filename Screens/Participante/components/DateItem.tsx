/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

interface DateProps{
    fechaCita: string,
    motivo: string,
    usuarioNutricionista: string
}

export default (props:DateProps) => {

    let dateDate = new Date(parseInt(props.fechaCita));

    return (
        <View style={Styles.dateContainer}>
            <Text style={Styles.day}>
                Miercoles
            </Text>
            <View style={Styles.dataBox}>
                <Text style={[Styles.dataItem, Styles.dateItemText]}>Fecha</Text>
                <Text style={[Styles.dataItem,Styles.dateResult]}>
                    {dateDate.getUTCDate()} / {dateDate.getUTCMonth() + 1} / {dateDate.getUTCFullYear()}
                </Text>
            </View>
            <View style={Styles.dataBox}>
                <Text style={[Styles.dataItem, Styles.dateItemText]}>Hora</Text>
                <Text style={[Styles.dataItem,Styles.dateResult]}>
                    {dateDate.getUTCHours()} : {dateDate.getUTCMinutes()} 
                </Text>
            </View>
            <View style={Styles.dataBox}>
                <Text style={[Styles.dataItem, Styles.dateItemText]}>Motivo</Text>
                <Text style={[Styles.dataItem,Styles.dateResult]}>{props.motivo}</Text>
            </View>
            <View style={Styles.docContainer}>
                <Text style={Styles.docText}>
                    Nutriologa:
                </Text>
                <Text style={Styles.docName}>
                    {props.usuarioNutricionista}
                </Text>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    dateContainer:{
        backgroundColor:'#ddd',
        margin:5,
        marginHorizontal:10,
        paddingBottom:10,
        paddingHorizontal:10,
    },
    day:{
        backgroundColor:'purple',
        color:'white',
        fontSize:25,
        textAlign:'center',
    },
    dataBox:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical:2.5,
    },
    dataItem:{
        fontSize:22,
        width:'50%'
    },
    dateItemText:{
        paddingLeft:20,
    },
    dateResult:{
        borderWidth:3,
        borderColor:'#000',
        padding:5,
        textAlign:'center',
        backgroundColor:'#CCF',
    },
    docContainer:{
        justifyContent:'center',
    },
    docText:{
        fontSize:25,
        textAlign:'center',
        padding:2
    },
    docName:{
        fontSize:20,
        textAlign:'center',
        padding:2
    }
});
