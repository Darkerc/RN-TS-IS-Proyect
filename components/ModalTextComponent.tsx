/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Modal, GestureResponderEvent, TextInput } from 'react-native';
import Styles from '../Styles/ModalStyle';
import StyleButtons from '../Styles/StyleButtons';
import { Button, Label, Textarea } from 'native-base';

interface ModalProps {
    visible: boolean,
    modalMessage: string,
    btnAcept: Function,
    btnClose: Function
}

export default (options:ModalProps) =>{
    return (
        <Modal animationType={'slide'} transparent={true} visible={options.visible}>
            <View style={[Styles.ModalStyle, {backgroundColor:'rgba(255,255,255,.80)'}]}>
                <View style={Styles.ModalCont}>
                    <Text style={{ color:'white', fontSize:30 }}>
                        {options.modalMessage}
                    </Text>
                    <TextInput
                        style={{ color:'white', fontSize:17.5, backgroundColor:'#66f', borderRadius:10 }}
                    />
                </View>
                <View style={{ flexDirection:'row', justifyContent:'space-evenly', width:'100%' }}>
                    <Button success={true} onPress={()=>{options.btnAcept()}} style={{ color:'white', fontSize:30, padding:25, borderRadius:20 }}> 
                        <Label style={{ color:'white', fontSize:30 }}>
                            Aceptar
                        </Label>
                    </Button>
                    <Button danger={true} onPress={()=>{options.btnClose()}} style={{ color:'white', fontSize:30, padding:25, borderRadius:20 }}>
                        <Label style={{ color:'white', fontSize:30 }}>
                            Cerrar
                        </Label>
                    </Button>
                </View>
            </View>
        </Modal>
    );
};
