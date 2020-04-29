/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Modal, GestureResponderEvent } from 'react-native';
import Styles from '../Styles/ModalStyle';
import StyleButtons from '../Styles/StyleButtons';

interface ModalProps {
    visible?: boolean | true,
    btnPressed?: ((event: GestureResponderEvent) => void)
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
                </View>
            </View>
        </Modal>
    );
};
