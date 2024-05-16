import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputFeilds from '../../allDynamicsComponets/inputFeilds';
import Button from '../../allDynamicsComponets/Button';
import { Fonts, FontsGeneral } from '../style';
import INputPasword from '../../allDynamicsComponets/InputPassowrd'

const LoginScreen = ({navigation}) => {
  const [email, setemail] = React.useState('');
  const [Feildpassword, setFeildpassword] = React.useState('');

const ButtonClick = ()=>{
  navigation.navigate('OtpScreen')
  paylod={
    email:email,
    password:Feildpassword
  }
  console.log(paylod)
}

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.heading}>Welcome back!</Text>
        <Text style={styles.paragraph}>Get the best service available in the UAE{'\n'}  from the most professional Sellers.</Text>
        <View style={styles.inputContainer}>
      <InputFeilds focus={true} labelName='Email' value={email} onChangeText={(text) => setemail(text)} />
        <INputPasword focus={true} labelName='Password' value={Feildpassword} onChangeText={(text) => setFeildpassword(text)} />
        <Text style={styles.forgotPas}>Forgot Password?</Text>
      </View>
      </View>
      <View style={styles.bottomContent}>
        <Button text="Sign In" Link={ButtonClick} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 50,
    // paddingBottom: 10,
    backgroundColor: '#fff',
  },
  topContent: {
    alignItems: 'center',
    width:'100%',
    paddingTop:20
  },
  bottomContent: {
    // alignItems: 'center',
    marginBottom: 15,
    width:'100%'
  },
  heading: {
    fontSize: 30,
    fontFamily: FontsGeneral.MEDIUMSANS,
    marginBottom: 12,
    color: 'black',
    textAlign: 'center'
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: Fonts.REGULAR,
    color: 'black',
    width:300
  },
  inputContainer: {
    width: '100%',
  },
  forgotPas: {
    fontSize: 14,
    marginTop: 20,
    textAlign: 'auto',
    fontFamily: FontsGeneral.REGULAR,
    paddingLeft: 12,
    color:'#aaa'
  },
});

export default LoginScreen;
