import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import { FontsGeneral } from '../style';
import Button from '../../allDynamicsComponets/Button'
import IconBtnArrow from '../../allDynamicsComponets/IconBtnArrow';
import SecurityIcon from '../../../assets/security.png'
const Security = () => {
    const [isActive, setIsActive] = useState(true);
    const [sound, setsound] = useState(false);

  return (
   <View style={styles.mainNotifcation}>
    <ToggleSwitch
  isOn={isActive}
  onColor="#747EEF"
  offColor="#cccccc"
  label="Remember login details"
  labelStyle={{ color: "black",justifyContent:'space-between',flexDirection:'row',width:300,fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15}}
  size="medium"
  onToggle={()=>setIsActive(!isActive)}
  
/>
<View style={{marginTop:20}}>
<ToggleSwitch
  isOn={sound}
  onColor="#747EEF"
  offColor="#cccccc"
  label="Touch ID"
  labelStyle={{ color: "black",justifyContent:'space-between',flexDirection:'row',width:300,fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15}}
  size="medium"
  onToggle={()=> setsound(!sound)}
  
/>
</View>
<View style={{paddingTop:20,paddingHorizontal:10}}>
<IconBtnArrow Imagess ={ SecurityIcon} Name="Change Password"/>
</View>

<View style={styles.buttonContainer}>
        <Button text="Save" Link={() => navigation.navigate('StepTwo')} />
      </View>
   </View>
  )
}
const styles = StyleSheet.create({
    mainNotifcation:{
        flex:1,
        paddingHorizontal:15
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
      }
})
export default Security