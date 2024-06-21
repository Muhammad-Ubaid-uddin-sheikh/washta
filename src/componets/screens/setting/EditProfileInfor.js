import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import InputFeilds from '../../allDynamicsComponets/inputFeilds'
import InputPassword from '../../allDynamicsComponets/InputPassowrd'
import Button from '../../allDynamicsComponets/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'react-native-axios'


const ApiUrl  = 'https://washta-9006f93279b8.herokuapp.com/api/Customer/Profile'
const EditProfileInfor = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: '',
        carName: '',
        carType: '',
        phone: '',
        carPlateNumber: ''
      });
      const fetchUserData = async () => {
        try {
          const accessToken = await AsyncStorage.getItem('accessToken');
          const response = await axios.get(ApiUrl, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });
    
          if (response.data.status) {
            setFormData(response.data.data || {});
            console.log(JSON.stringify(response.data.data))
          } else {
            Alert.alert('Failed to fetch user data');
          }
        } catch (error) {
          Alert.alert(JSON.stringify(error.response));
        }
      };
      useEffect(()=>{
        fetchUserData()
      },[])
  return (
  
   <View style={styles.mainDivInf}>
      <ScrollView>
    <InputFeilds keyboardType='default'  focus={true} labelName='Full Name' value={formData.username} onChangeText={(value) => setFormData({ ...formData, username: value })} />
      <InputFeilds keyboardType='email-address'  focus={true} labelName='Email' value={formData.email} onChangeText={(value) => setFormData({ ...formData, email: value })} />
      <InputFeilds keyboardType='numeric'  focus={true} labelName='Phone Number' value={formData.phone} onChangeText={(value) => setFormData({ ...formData, phone: value })} />
      <InputPassword   focus={true} labelName='Password' value={formData.password} onChangeText={(value) => setFormData({ ...formData, password: value })} />
      <InputFeilds keyboardType='default'   focus={true} labelName='Car Name' value={formData.carName} onChangeText={(value) => setFormData({ ...formData, carName: value })} />
      <InputFeilds keyboardType='default'   focus={true} labelName='Car Plate Number' value={formData.carPlateNumber} onChangeText={(value) => setFormData({ ...formData, carPlateNumber: value })} />
      <InputFeilds keyboardType='default'  focus={true} labelName='Car Type' value={formData.carType} onChangeText={(value) => setFormData({ ...formData, carType: value })} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button text="Save" Link={() => navigation.navigate('StepTwo')} />
      </View>
   </View>
  )
}
const styles = StyleSheet.create({
    mainDivInf:{
    paddingHorizontal:15,
    flex:1
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
      }
})
export default EditProfileInfor