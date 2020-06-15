/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import InputItem from '../../../components/InputItem';
import DateTimePicker from '@react-native-community/datetimepicker';

interface ModalAddDateProps {
  visible: boolean;
  onDateSubmit: (date: Date, motivo: string) => void;
}

export default (options: ModalAddDateProps) => {
  const [motivo, setMotivo] = useState('');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <Modal animationType={'slide'} transparent={true} visible={options.visible}>
      <View style={Styles.modalStyle}>
        <InputItem
          PlaceholderText="Motivo"
          BottomText="Ingrese in motivo para la cita"
          onValueChange={(value) => setMotivo(value)}
        />
        <View>
          <Button onPress={showDatepicker} info={true} style={Styles.btnAction}>
            <Text style={Styles.btnAction}>Establecer fecha</Text>
          </Button>
        </View>
        <View>
          <Button onPress={showTimepicker} info={true} style={Styles.btnAction}>
            <Text style={Styles.btnAction}>Establecer hora</Text>
          </Button>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <Text style={Styles.txtDate}>
          Fecha cita: {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </Text>
        <Button
          onPress={() => options.onDateSubmit(date, motivo)}
          success={true}>
          <Text style={Styles.btnAction}>Crear cita</Text>
        </Button>
      </View>
    </Modal>
  );
};

const Styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: 'rgba(0,0,0,.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnAction: {
    width: '80%',
    padding: 20,
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  txtDate: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,.5)',
    textAlign: 'center',
    fontSize: 25,
    padding: 20,
    borderRadius: 10,
  },
});
