/* eslint-disable prettier/prettier */
import React, {useState,useEffect} from 'react';
import { ScrollView ,SafeAreaView, View, Image, Text, StyleSheet} from 'react-native';
import AppBarNavigation from '../../components/AppBarNavigation';
import DateList from './components/DateList';
import DateItem from './components/DateItem';
import IsPortraid from '../../Utils/IsPortraid';

export default ({navigation}) => {
  const [portraid,setPortraid] = useState(IsPortraid((value:boolean) => value));
  useEffect(() => {
    IsPortraid((value:boolean)=>{
      setPortraid(value);
    });
  });

  return (
    <SafeAreaView style={{ height:'100%' }}>
      <AppBarNavigation title="Citas" navigation={navigation}/>
      <View style={{ display: portraid ? 'flex' : 'none' }}>
        <Image style={Styles.controlImg} source={require('../../assets/calendar-line.png')}/>
        <Text style={Styles.controlText}>Tus citas</Text>
      </View>
      <ScrollView>
        <DateList>
          <DateItem />
          <DateItem />
          <DateItem />
          <DateItem />
        </DateList>
      </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  controlImg:{
    alignSelf:'center',
    width:100,
    height:100 ,
    resizeMode:'stretch',
  },
  controlText:{
    textAlign:'center',
    fontSize:22.5,
  },
});
