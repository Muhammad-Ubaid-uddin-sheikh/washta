import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import IconBtnArrow from '../../allDynamicsComponets/IconBtnArrow'
import EditProfile from '../../../assets/EditProfileIcon.png'
import Bell from '../../../assets/Bell.png'
import Ticket from '../../../assets/Ticket.png'
import ShieldUser from '../../../assets/ShieldUser.png'
import QuestionCircle from '../../../assets/QuestionCircle.png'
import Logout from '../../../assets/Logout2.png'
import ShieldWarning from '../../../assets/ShieldWarning.png'
const Setting = () => {
  return (
   
      <ScrollView style={styles.mainsettingcon} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <IconBtnArrow Imagess = {EditProfile} Name="Edit profile information"/>
        <IconBtnArrow Imagess = { Bell} Name="Notifications"/>
        <IconBtnArrow Imagess = { Ticket} Name="Promo Codes"/>
        <IconBtnArrow Imagess = { ShieldUser} Name="Security"/>
        <IconBtnArrow Imagess = { QuestionCircle} Name="Help & Support"/>
        <IconBtnArrow Imagess = { ShieldWarning} Name="Privacy policy"/>
        <View style={{paddingBottom:10}}>
        <IconBtnArrow Imagess = { Logout} Name="Log Out"/>
        </View>
        
        </ScrollView>
 
  )
}
const styles = StyleSheet.create({
  mainsettingcon:{
    paddingHorizontal:15,
    backgroundColor:'white',
    paddingBottom:10
  }
})
export default Setting