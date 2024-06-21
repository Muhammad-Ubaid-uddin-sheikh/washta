import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputFeilds from '../../allDynamicsComponets/inputFeilds';
import Button from '../../allDynamicsComponets/Button';
import { Fonts, FontsGeneral } from '../style';
import INputPasword from '../../allDynamicsComponets/InputPassowrd'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from 'react-native-toast-notifications';
import axios from 'react-native-axios'
const ApiUrl  = 'https://washta-9006f93279b8.herokuapp.com/api/auth/login'

const LoginScreen = ({navigation}) => {
  const [email, setemail] = useState('');
  const [Feildpassword, setFeildpassword] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast()
  const paylod = {
    username: email,
    password: Feildpassword,
    role : "customer"
}
const ButtonClick = async () => {
  if (!email || !Feildpassword ) {
    toast.show("Incomplete Details Plz fill All Details",{type: "danger",animationType:"zoom-in"}); 
    }  else{
      setLoading(true)
        try {
      const response = await axios.post(ApiUrl, {
        ...paylod
      });
      setLoading(true);
      if (response.data.status) {
          const { accessToken, user, } = response.data.data;
          await AsyncStorage.setItem('accessToken', accessToken);
          await AsyncStorage.setItem('Token',accessToken);
          await AsyncStorage.setItem('user', JSON.stringify(user));
          navigation.navigate('Dashbaord')
        console.log(paylod,'paylod')
      }
    } 
    catch (error) {
      console.log(JSON.stringify(error.response));  
    }finally{
      setLoading(false);
  }
}
};
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
        <Button loading={loading} text="Sign In" Link={ButtonClick} />
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
