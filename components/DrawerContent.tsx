/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, ScrollView, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { USER_TYPES } from '../constants';
import { CommonActions } from '@react-navigation/native';

const Content = ({navigation}) => {

  const selectedData = useSelector(state => state.user);

  const capitalize = (String:string) => {
    return String.charAt(0).toUpperCase() + String.slice(1);
  };

  const stackNavigationTo = (name:string) =>{
    navigation.dispatch(CommonActions.reset({
      index:1,
      routes:[
        { name },
      ],
    }));
  };

  return (
    <ScrollView style={Styles.DrawerPanel}>
      <View
        onTouchStart={() => {
          navigation.toggleDrawer();
        }}
        style={Styles.DrawerIconToggle}>
        <Icon size={50} name="dehaze" color="white" backgroundColor="#fff" />
      </View>
      <View style={Styles.DrawerContent}>
        <View>
          {
            selectedData.userType === USER_TYPES.NUTRICIONISTA &&
              <Image
                source={require('../assets/imgNayanci.jpeg')}
                style={Styles.userImg}
              />
          }
          {
            selectedData.userType === USER_TYPES.PROVEEDOR &&
              <Image
                source={require('../assets/imgLeo.jpeg')}
                style={Styles.userImg}
              />
          }
          {
            selectedData.userType === USER_TYPES.USUARIO &&
              <Image
                source={require('../assets/imgEder.jpg')}
                style={Styles.userImg}
              />
          }
        </View>
        <View style={Styles.userTypeImgCont}>
          {
            selectedData.userType === USER_TYPES.NUTRICIONISTA &&
              <Image
                source={require('../assets/nutricionista.png')}
                style={Styles.userTypeImg}
              />
          }
          {
            selectedData.userType === USER_TYPES.PROVEEDOR &&
              <Image
                source={require('../assets/proveedor.png')}
                style={Styles.userTypeImg}
              />
          }
          {
            selectedData.userType === USER_TYPES.USUARIO &&
              <Image
                source={require('../assets/hombre_mujer.png')}
                style={Styles.userTypeImg}
              />
          }
          <Text style={Styles.userTypeText}>
            {
              capitalize(selectedData.userType)
            }
          </Text>
        </View>
        <View style={Styles.alpesImgLogoCont}>
          <Image
            source={require('../assets/logo-en-negro.png')}
            style={Styles.alpesImgLogo}
          />
        </View>
        <View style={Styles.userNameCont}>
          <Icon
            style={Styles.userNameIcon}
            name="people"
            size={45}
            color="white"
          />
          <Text style={Styles.userName}>
            {selectedData.userName}
          </Text>
        </View>
        <View style={Styles.optionsCont}>
          {
            selectedData.userDrawerScreens.map((data,i) => {
              return (
                <Text key={i} onPress={()=>{navigation.navigate(`${data.screenName}`)}} style={Styles.optionsItem}>{data.drawerScreenName}</Text>
              );
            })
          }
        </View>
        <Text onPress={()=>navigation.navigate('SplashScreen')} style={Styles.logout}>
          Cerrar sesion
        </Text>
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  DrawerPanel: {
    flex: 1,
    padding: 5,
    backgroundColor: '#242215',
    height: '100%',
    position: 'relative',
  },
  DrawerContent:{
    paddingTop:25,
  },
  DrawerIconToggle: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex:2,
  },
  userImg: {
    borderRadius: 100,
    width: '70%',
    height: 185,
    borderColor: 'cyan',
    borderWidth: 2,
    alignSelf: 'center',
  },
  userTypeImgCont:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:5,
  },
  userTypeImg:{
    width: '20%',
    height:50,
    marginRight:10,
  },
  userTypeText:{
    color:'white',
    fontSize: 23,
  },
  alpesImgLogoCont: {
    backgroundColor: 'cyan',
    width: '75%',
    height: 60,
    alignSelf: 'center',
    marginVertical: 20,
  },
  alpesImgLogo: {
    width: '100%',
    height: '100%',
  },
  userNameCont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  userNameIcon: {
    paddingRight: 5,
  },
  userName: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  optionsCont: {
    textAlign: 'center',
    padding: 20,
    paddingLeft: 40,
  },
  optionsItem: {
    color: 'white',
    fontSize: 22,
    paddingVertical: 10,
  },
  logout: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default Content;
