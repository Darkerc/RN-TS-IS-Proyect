/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Modal, GestureResponderEvent } from 'react-native';
import Styles from '../Styles/ModalStyle';
import StyleButtons from '../Styles/StyleButtons';
import { Button, Label } from 'native-base';

interface ModalProps {
    visible?: boolean | true,
    btnPressed?: ((event: GestureResponderEvent) => void)
    btnYesNo?: Function,
    btnClose?: Function,
    modalMessage: string,
}

export default (options:ModalProps) =>{
    return (
        <Modal animationType={'slide'} transparent={true} visible={options.visible}>
            <View style={Styles.ModalStyle}>
                <View style={Styles.ModalCont}>
                    <Text style={Styles.ModalText}>
                        {options.modalMessage}
                    </Text>
                    {
                       options.btnPressed &&
                       <View style={{alignItems:'center'}}>
                            <Text style={[StyleButtons.SuccesBtn]} onPress={options.btnPressed}>
                                Cerrar
                            </Text>
                        </View>
                    }
                    {
                        options.btnYesNo &&
                        <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
                            <Button success={true} style={[StyleButtons.SuccesBtn]} onPress={()=>{if (options.btnYesNo){options.btnYesNo();}}}>
                                <Label style={{ color:'white', marginRight:5 }}>Aceptar</Label>
                            </Button>
                            <Button danger={true} style={[StyleButtons.SuccesBtn]} onPress={()=>{if (options.btnClose){options.btnClose();}}}>
                                <Label style={{ color:'#fff', marginLeft:5 }}>Cancelar</Label>
                            </Button>
                        </View>
                    }
                </View>
            </View>
        </Modal>
    );
};
