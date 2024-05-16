import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import {  Fonts, FontsGeneral } from '../screens/style';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Home = ({text,Link}) => {
  
  return (
    <View  >
        <TouchableOpacity style={styles.container} onPress={Link}>
        <Text  style={styles.text}>
        {text}
      </Text>
        </TouchableOpacity>
      
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    width:'100%',
    backgroundColor:'#747EEF',
    borderRadius:100
  },
  text: {
    width: 200,
    fontFamily:Fonts.MEDIUM,
    textAlign:'center',
    color:'white',
    fontSize:16,
    padding:10,
   
  }
});

export default Home;
