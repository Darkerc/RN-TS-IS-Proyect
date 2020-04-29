/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  PrincipalContainer: {
    display:'flex',
    flex: 1,
    justifyContent:'space-between',
    height: '100%',
    backgroundColor: '#0A214D',
  },
  PImageContainer:{

  },
  Pimage: {
    alignSelf: 'center',
    width: 300,
    height: 135,
  },
  PBtnStartContainer:{
    width: '75%',
    alignSelf:'center',
    padding: 40
  },
  PBtnSingUpContainer:{
    padding: 20,
    flexDirection: "row",
    justifyContent:"flex-end"
  } 
});
