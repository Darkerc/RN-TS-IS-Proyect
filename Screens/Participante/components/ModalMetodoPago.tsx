/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { PickerItem } from '../../../components/InputItem';
import { Button, Label } from 'native-base';

interface ModalMP{
    visible: boolean,
    onSelectedMethod: Function,
    onCancel:() => void,
}

const ModalMetodoPago = (options:ModalMP) => {
    const [method, setMethod] = useState('Efectivo');
    const selectedMethod = (itemValue:string) => setMethod(itemValue);

    return (
        <Modal animationType={'slide'} transparent={true} visible={options.visible}>
            <View style={Styles.modalStyle}>
                <PickerItem
                    PickerItems={[
                        {Label:'Efectivo'},
                        {Label:'Tarjeta'},
                    ]}
                    BottomText="Elija su metodo de pago"
                    PlaceholderText="Metodo de pago"
                    onValueChange={selectedMethod}
                />
                <View style={Styles.modalActions}>
                    <Button style={Styles.btnAction} success={true} onPress={()=>{options.onSelectedMethod(method);}}>
                        <Label style={Styles.btnAction}>
                            Seleccionar
                        </Label>
                    </Button>
                    <Button style={Styles.btnAction} danger={true} onPress={()=>{options.onCancel();}}>
                        <Label style={Styles.btnAction}>
                            Cancelar
                        </Label>
                    </Button>
                </View>
            </View>
        </Modal>
    );
};

const Styles = StyleSheet.create({
    modalStyle:{
        backgroundColor:'rgba(0,0,0,.75)',
        width:'100%',
        height:'100%',
        padding:20,
        justifyContent:"space-evenly"
    },
    modalActions:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    btnAction:{
        color:'white',
        padding:10,
        borderRadius:10,
        fontSize:25,
    }
})

export default ModalMetodoPago;
