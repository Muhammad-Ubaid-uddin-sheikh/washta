import React from 'react'
import { Text, View } from 'react-native'
import { Fonts, FontsGeneral } from '../style'

const PrivacyAndPolicy = () => {
  return (
   <View style={{paddingHorizontal:15,flex:1}}>
    <Text style={{fontFamily:FontsGeneral.MEDIUMSANS,color:'black',fontSize:16}}>
    1. Types data we collect 
    </Text>
    <Text style={{fontFamily:Fonts.REGULAR,color:'black',paddingTop:5,paddingBottom:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</Text>
   <Text style={{fontFamily:FontsGeneral.MEDIUMSANS,color:'black',fontSize:16}}>2. Use of your personal data </Text>
   <Text style={{fontFamily:Fonts.REGULAR,color:'black',paddingTop:5,paddingBottom:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</Text>
   </View>
  )
}

export default PrivacyAndPolicy