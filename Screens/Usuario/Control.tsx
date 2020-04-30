/* eslint-disable prettier/prettier */
import React,{useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, Image, StyleSheet, Text} from 'react-native';
import AppBarNavigation from '../../components/AppBarNavigation';
import ControlList from './components/ControlList';
import ControItem from './components/ControItem';
import IsPortraid from "../../Utils/IsPortraid";

export default ({navigation}) => {
  const [portraid,setPortraid] = useState(IsPortraid((value:boolean) => value));

  useEffect(() => {
    IsPortraid((value:boolean)=>{
      setPortraid(value);
    });
  });

  return (
    <SafeAreaView style={{ height:'100%' }}>
      <AppBarNavigation title="Control" navigation={navigation}/>
      <View style={{ display: portraid ? 'flex' : 'none' }}>
        <Image style={Styles.controlImg} source={require('../../assets/815128.png')}/>
        <Text style={Styles.controlText}>Tu control diario</Text>
      </View>
      <ScrollView>
        <ControlList>
          <ControItem />
          <ControItem />
          <ControItem />
        </ControlList>
      </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  controlImg:{
    alignSelf:'center',
    width:100,
    height:100 ,
    resizeMode:"stretch"
  },
  controlText:{
    textAlign:'center',
    fontSize:22.5
  }
})