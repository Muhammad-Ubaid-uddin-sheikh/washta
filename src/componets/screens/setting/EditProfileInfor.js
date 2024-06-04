import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import InputFeilds from '../../allDynamicsComponets/inputFeilds'
import InputPassword from '../../allDynamicsComponets/InputPassowrd'
import Button from '../../allDynamicsComponets/Button'
const EditProfileInfor = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullName: '',
        carName: '',
        carType: '',
        number: '',
        carPlateNumber: ''
      });
  return (
  
   <View style={styles.mainDivInf}>
      <ScrollView>
    <InputFeilds keyboardType='default'  focus={true} labelName='Full Name' value={formData.fullName} onChangeText={(value) => setFormData({ ...formData, fullName: value })} />
      <InputFeilds keyboardType='email-address'  focus={true} labelName='Email' value={formData.email} onChangeText={(value) => setFormData({ ...formData, email: value })} />
      <InputFeilds keyboardType='numeric'  focus={true} labelName='Phone Number' value={formData.number} onChangeText={(value) => setFormData({ ...formData, number: value })} />
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