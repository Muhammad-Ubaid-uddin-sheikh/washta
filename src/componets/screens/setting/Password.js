import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import INputPasword from '../../allDynamicsComponets/InputPassowrd'
import Button from '../../allDynamicsComponets/Button'
import { useNavigation } from '@react-navigation/native'
const Password = () => {
    const [CureentPas, setCurrentPas] = React.useState('');
    const [Password,setPassword] = useState('')
    const [RePassword,setRePassword] = useState('')
   const navigation = useNavigation()
    return (
    <View style={{paddingHorizontal:10,flex:1}}>
 <INputPasword focus={true} labelName='Current Password' value={CureentPas} onChangeText={(text) => setCurrentPas(text)} /> 
 <INputPasword focus={true} labelName='New Password' value={Password} onChangeText={(text) => setPassword(text)} /> 
 <INputPasword focus={true} labelName='Confirm Password' value={RePassword} onChangeText={(text) => setRePassword(text)} /> 
 <View style={styles.buttonContainer}>
        <Button text="Change Password" Link={() => navigation.navigate('Security')} />
      </View>
 </View>
  )
}
const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
      }
})
export default Password