/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Item, Picker, Icon, Label, DatePicker } from 'native-base';
import LoginStyles from '../Styles/LoginStyles';

interface DataPickerProps{
    PlaceHolderText: string,
    TopText?: string,
    onValueChange?:(date: any) => void
}

export const DatePickerItem = (DateProps: DataPickerProps) => {
    const [chosenDate, setChosenDate] = useState(new Date());
    const setDate = (newDate:Date) => {
        setChosenDate(newDate);
        if (DateProps.onValueChange){
            DateProps.onValueChange(newDate);
        }
    };

    return (
        <View style={[LoginStyles.FormInput, {justifyContent:'center', alignItems:'center'}]}>
            {
                DateProps.TopText &&
                <Label style={{ color:'#fff', textAlign:'center' }}>
                    {DateProps.TopText}
                </Label>
            }
            <DatePicker
                defaultDate={new Date()}
                locale={'es'}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={'fade'}
                androidMode={'default'}
                placeHolderText={DateProps.PlaceHolderText}
                textStyle={{ color: '#fff' }}
                placeHolderTextStyle={{ color: '#d3d3d3' }}
                onDateChange={setDate}
                disabled={false}
            />
            <Label style={{ color:'#fff', textAlign:'center' }}>Fecha: {chosenDate.toString().substr(4, 12)}</Label>
        </View>
    );
};

export const DateTimePickerItem = (DateProps: DataPickerProps) => {

};

interface PickerItemProps{
    PlaceholderText: string,
    PickerItems:Array<{Label:string,value?:string}>,
    BottomText: string,
    onValueChange?:(itemValue: any, itemPosition: number) => void,
    ref?:any
}

export const PickerItem = (PickerProps:PickerItemProps) => {
    const [pickerValue, setPickerValue] = useState('');

    const valueChange = (itemValue: string, itemPosition: number) => {
        setPickerValue(itemValue);
        if (PickerProps.onValueChange){
            PickerProps.onValueChange(itemValue,itemPosition);
        }
    };

    return (
        <Item style={[LoginStyles.FormGroup,{flexDirection:'column'}]} picker>
        <Picker
            mode="dropdown"
            note
            iosIcon={<Icon name="arrow-down" />}
            style={LoginStyles.FormInput}
            placeholder={PickerProps.PlaceholderText}
            placeholderStyle={{ color: '#fff' }}
            placeholderIconColor="#fff"
            selectedValue={pickerValue}
            onValueChange={valueChange}
        >
            {
                PickerProps.PickerItems.map((PickerValue,i) => {
                    return (
                        <Picker.Item
                            label={PickerValue.Label}
                            value={PickerValue.value ? PickerValue.value : PickerValue.Label}
                            key={i}
                        />
                    );
                })
            }
        </Picker>
        <Label style={LoginStyles.FormText}>
            {PickerProps.BottomText}
        </Label>
        </Item>
    );
};

interface InputItemProps{
    PlaceholderText: string,
    BottomText: string,
    onValueChange?: (value: string) => void
}

const InputItem = (InputProps:InputItemProps) => {
    return (
        <View style={LoginStyles.FormGroup}>
            <TextInput
                style={LoginStyles.FormInput}
                placeholderTextColor="white"
                placeholder={InputProps.PlaceholderText}
                onChangeText={InputProps.onValueChange}
            />
            <Text style={LoginStyles.FormText}>
                    {InputProps.BottomText}
            </Text>
        </View>
    );
};

export default InputItem;
