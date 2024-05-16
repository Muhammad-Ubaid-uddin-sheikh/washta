import React from 'react';
import { View, Text, StyleSheet, Image,} from 'react-native';
import { Fonts } from '../style';
import Button from '../../allDynamicsComponets/Button'
const Home = ({navigation}) => {
    
  return (
    <View style={styles.container}>
      <View style={styles.SubContainer}>
      <Image style={styles.logo} source={require('../../../assets/WashtaLogo.png')} />
      </View>
      <View style={styles.SubContainers}>
      <Image style={styles.logoMain} source={require('../../../assets/defualt.png')} />
      </View>
      <View style={styles.SubContainerButton}>
      <Text style={styles.text}>
      Get the best service available in the UAE from most professional Sellers.
      </Text>
      <Button text="Sign In" Link={()=> navigation.navigate('Login')}/>
      </View>
      <View style={[styles.SubContainerButton,{   paddingBottom:30,paddingTop:5}]}>
      <Button text="Sign Up" Link={()=> navigation.navigate('SignUp')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    width:'100%',
    paddingHorizontal:20
  },
  SubContainerButton:{
    width:'100%',
 
  },
  SubContainer:{
padding:0
  },
  text: {
    fontFamily:Fonts.REGULAR,
    color:'#000000',
    paddingBottom:10,
    textAlign:'center',
    fontSize:15
  },
  logo:{
    width:220,
    objectFit:'contain'
  },
  logoMain:{
    width:300,
    objectFit:'contain'
  }
});

export default Home;
