import React, { useRef } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IconBtnArrow from '../../allDynamicsComponets/IconBtnArrow'
import EditProfile from '../../../assets/EditProfileIcon.png'
import Bell from '../../../assets/Bell.png'
import Ticket from '../../../assets/Ticket.png'
import ShieldUser from '../../../assets/ShieldUser.png'
import QuestionCircle from '../../../assets/QuestionCircle.png'
import Logout from '../../../assets/Logout2.png'
import ShieldWarning from '../../../assets/ShieldWarning.png'
import BottomSheet from "react-native-gesture-bottom-sheet";
import { Fonts, FontsGeneral } from '../style'
import Button from '../../allDynamicsComponets/Button'
import { useNavigation } from '@react-navigation/native'
const Setting = () => {
  const bottomSheet = useRef();
  const navigation = useNavigation()
  return (
   
      <ScrollView style={styles.mainsettingcon} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <IconBtnArrow HandleClick={()=>navigation.navigate('EditProfileInfor')} Imagess = {EditProfile} Name="Edit profile information"/>
        <IconBtnArrow HandleClick={()=>navigation.navigate('Notifications')} Imagess = { Bell} Name="Notifications"/>
        <IconBtnArrow Imagess = { Ticket} Name="Promo Codes"/>
        <IconBtnArrow HandleClick={()=>navigation.navigate('Security')} Imagess = { ShieldUser} Name="Security"/>
        <IconBtnArrow HandleClick={()=>navigation.navigate('HelpAndSupport')} Imagess = { QuestionCircle} Name="Help & Support"/>
        <IconBtnArrow HandleClick={()=>navigation.navigate('PrivacyAndPolicy')} Imagess = { ShieldWarning} Name="Privacy policy"/>
        <View style={{paddingBottom:10}}>
        <IconBtnArrow  HandleClick={() => bottomSheet.current.show()} Imagess = { Logout} Name="Log Out"/>
        </View>
        <SafeAreaView style={styles.container}>
       
       <BottomSheet
        hasDraggableIcon
        ref={bottomSheet}
        height={250}
        
        onRequestClose={() => bottomSheet.current.close()}
      >
        {/* Content of the Bottom Sheet */}
        <View style={styles.bottomSheetContent}>
          <Text style={styles.bottomSheetText}>Logout</Text>
          <Text style={{fontFamily:Fonts.MEDIUM,textAlign:'center',paddingTop:10,fontSize:15}}>Are you sure you want to log out?</Text>
       <View style={{paddingTop:20,paddingBottom:10}}>
        <Button text='Yes, Logout'/>
        <TouchableOpacity onPress={() => bottomSheet.current.close()} style={{width:'100%',borderWidth:1,textAlign:'center',borderRadius:50,marginTop:10}}>
          <Text style={{textAlign:'center',fontFamily:FontsGeneral.MEDIUMSANS,fontSize:16,color:'black',paddingVertical:13}}>Cencel</Text>
        </TouchableOpacity>
        </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
        </ScrollView>
 
  )
}
const styles = StyleSheet.create({
  mainsettingcon:{
    paddingHorizontal:15,
    backgroundColor:'white',
    paddingBottom:10
  },
  bottomSheetContent:{
    paddingTop:10,
    paddingHorizontal:20
  },
  bottomSheetText:{
textAlign:'center',
fontFamily:FontsGeneral.MEDIUMSANS,
fontSize:25,
color:'black',

  },
  text: {
    color: "white",
    fontWeight: "600",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
export default Setting