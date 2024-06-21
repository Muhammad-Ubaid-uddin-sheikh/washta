import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert,} from 'react-native';
import InputFeilds from '../../allDynamicsComponets/inputFeilds';
import Button from '../../allDynamicsComponets/Button';
import { Fonts, FontsGeneral } from '../style';
import InputPassword from '../../allDynamicsComponets/InputPassowrd'
import{ useToast } from 'react-native-toast-notifications';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'react-native-axios'
const ApiUrl  = 'https://washta-9006f93279b8.herokuapp.com/api/auth/Signup'
const LoginScreen = ({navigation}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const toast = useToast()
    const handleCheckBoxToggle = () => {
      setIsChecked(!isChecked);
    };
const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    carName: '',
    carType: '',
    number: '',
    carPlateNumber: '',
    CarManufacturer:''
  });
  const paylod={
    username: formData?.fullName,
    password: formData?.password,
    name: formData?.fullName,
    email: formData?.email,
    phone: formData?.number,
    role : "customer",
    car: {
        vehicleManufacturer: formData?.CarManufacturer,
        vehiclePlateNumber: formData?.carPlateNumber,
        vehicleName: formData?.carName,
        vehicleType: formData?.carType
    }
}
const ButtonClick = async () => {
  if (!formData.fullName || !formData.email || !formData.carName || !formData.password || !formData.carType || !formData.number || !formData.carPlateNumber) {
              toast.show("Incomplete Details Plz fill All Details",{type: "danger",animationType:"zoom-in"});
          
    }  else{
      setIsLoggingOut(false)
      setLoading(false)
  // console.log(paylod)
  try {
      const response = await axios.post(ApiUrl, {
        ...paylod
      });
      setLoading(true);
      if (response.data.status) {
          const { accessToken, user, } = response.data.data;
          // await AsyncStorage.setItem('accessToken', accessToken);
          // await AsyncStorage.setItem('Token',accessToken);
          // await AsyncStorage.setItem('user', JSON.stringify(user));
          navigation.navigate('OtpScreen',{paylod})
        console.log(paylod,'paylod')
      }
    } 
    catch (error) {
      
      console.log(JSON.stringify(error.response));  
    }finally{
      setIsLoggingOut(false);
      setLoading(false);
  }
}
};

  return (
    <>
   
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.containerButton}>
    <View style={styles.container}>
       
      <View style={styles.topContent}>
     
        <Text style={styles.heading}>We’re glad to have you!</Text>
        <Text style={styles.paragraph}>Get the best service available in the UAE{'\n'} from most professional Sellers.</Text>
        
        <View style={styles.inputContainer}>
    
     <InputFeilds keyboardType='default'  focus={true} labelName='Full Name' value={formData.fullName} onChangeText={(value) => setFormData({ ...formData, fullName: value })} />
      <InputFeilds keyboardType='email-address'  focus={true} labelName='Email' value={formData.email} onChangeText={(value) => setFormData({ ...formData, email: value })} />
      <InputFeilds keyboardType='numeric'  focus={true} labelName='Phone Number' value={formData.number} onChangeText={(value) => setFormData({ ...formData, number: value })} />
      <InputPassword   focus={true} labelName='Password' value={formData.password} onChangeText={(value) => setFormData({ ...formData, password: value })} />
      <InputFeilds keyboardType='default'   focus={true} labelName='Car Name' value={formData.carName} onChangeText={(value) => setFormData({ ...formData, carName: value })} />
      <InputFeilds keyboardType='default'   focus={true} labelName='Car Plate Number' value={formData.carPlateNumber} onChangeText={(value) => setFormData({ ...formData, carPlateNumber: value })} />
      <InputFeilds keyboardType='default'  focus={true} labelName='Car Type' value={formData.carType} onChangeText={(value) => setFormData({ ...formData, carType: value })} />
      <InputFeilds keyboardType='default'  focus={true} labelName='Car Manufacturer' value={formData.CarManufacturer} onChangeText={(value) => setFormData({ ...formData, CarManufacturer: value })} />

      </View>
     
      </View>
      <TouchableOpacity style={{width:'100%',paddingTop:20}} onPress={handleCheckBoxToggle} activeOpacity={0.8}>
      <View style={{ flexDirection: 'row', alignItems: 'center', }}>
        <View style={{ width: 20, height: 20, borderRadius: 50, borderWidth: 1, borderColor: '#747EEF', backgroundColor: isChecked ? '#747EEF' : 'transparent', justifyContent: 'center', alignItems: 'center',marginLeft:10 }}>
          {isChecked && <View style={{ width: 7, height: 7, borderRadius: 50, backgroundColor: 'white' }} />}
        </View>
        <Text style={styles.paragraphText}>I agree with the <Text style={{color:'#747EEF',textDecorationLine:'underline'}}>terms of service</Text>  and <Text style={{color:'#747EEF',textDecorationLine:'underline'}}>privacy policy</Text></Text>
      </View>
    </TouchableOpacity>
      
    </View>
    
    </ScrollView>
    <Spinner
        visible={isLoggingOut}
        textContent={'loading...'}
        textStyle={styles.loaderText}
        animation="fade"
        overlayColor="rgba(0, 0, 0, 0.7)"
        color="white" 
      />
    <View style={styles.bottomContent}>
        <Button loading={loading} text="Sign Up" Link={ButtonClick} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    paragraphText:{
        fontFamily:Fonts.REGULAR,
        fontSize:13,
        paddingLeft:10,
        color:'black'
    },
    containerButton:{
        position:'relative'
    },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  topContent: {
    alignItems: 'center',
    width:'100%',
    paddingTop:20
  },
  bottomContent: {
    width:'100%',
    bottom:20,
    paddingHorizontal:20,
    paddingTop:40
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
