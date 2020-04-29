/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  FormCont:{
      padding:5,
  },
  FormGroup: {
      width: '100%',
      padding:15,
      justifyContent:'center',
      alignItems:'center',
  },
  FormText:{
      width: '100%',
      color:'white',
      fontSize: 17,
      padding: 8,
      textAlign:'center',
  },
  FormInput:{
      color:'white',
      backgroundColor:'#66f',
      borderRadius: 20,
      width:'100%',
      padding:20,
      fontSize:20,
  },
  SubmitBtn:{
      width:'75%',
      color:'white',
      padding:20,
      textAlign:'center',
      backgroundColor:'#490',
      fontSize:20,
      marginVertical:25,
  },
  SubmitBtnText:{
      textAlign:'center',
      color:'#fff',
      fontSize:20
  }
});

export default styles;
