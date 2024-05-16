import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity,} from 'react-native'
import Arrow from 'react-native-vector-icons/MaterialIcons'
import { FontsGeneral } from '../screens/style';
const Profile = ({data,showButton,ReviewBtn,TrackBtn}) => {
    // const [showButton, setShowButton] = useState(true);
  return (
      <View style={styles.MainContainer}>
        <View style={styles.secondDivTitle}>
           <View style={styles.mainBoxCarNameSelect} >
            
               <View>
               <Text style={{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15,color:'black'}}>{data.Name}</Text>
               <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center",width:'100%'}}>
              
                <View style={{paddingTop:10}}>
                <Text style={{fontFamily:FontsGeneral.REGULARSANS,fontSize:12,color:'black'}}>Order ID:</Text>
                <Text style={{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:14,color:'black',paddingTop:3}}>{data.orderId}</Text>
                </View>
               
                <View style={{paddingTop:10}}>
                <Text style={{fontFamily:FontsGeneral.REGULARSANS,fontSize:12,color:'black'}}>Order Date:</Text>
                <Text style={{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:14,color:'black',paddingTop:3}}>{data.OrderDate}</Text>
                </View>

                <View style={{paddingTop:10}}>
                <Text style={{fontFamily:FontsGeneral.REGULARSANS,fontSize:12,color:'black'}}>Cost:</Text>
                <Text style={{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:14,color:'black',paddingTop:3}}>{data.Cost}</Text>
                </View>

           </View>
               
         </View>
             
              </View>
              {showButton && (
              <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:15}}>
                <TouchableOpacity onPress={ReviewBtn}  style={{flexDirection:'row',width:'48%',justifyContent:'space-between',alignItems:"center",backgroundColor:'transparent',paddingHorizontal:6,paddingVertical:2,borderRadius:8,borderWidth:1}}>
                  <Text style={{textAlign:'center',fontFamily:FontsGeneral.MEDIUMSANS,fontSize:14,color:'black',width:'100%',paddingVertical:7}}>{data.transparentBtn}</Text>
      
                </TouchableOpacity>
                <TouchableOpacity onPress={TrackBtn} style={{flexDirection:'row',width:'48%',alignItems:"center",backgroundColor:'#747EEF',paddingHorizontal:6,paddingVertical:2,borderRadius:8}}>
                  <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:14,color:'white',textAlign:'center'}}>{data.colorBtntext}</Text>
                  <Arrow name='keyboard-arrow-right' size={24} color={'white'} />
                  </View>
                 
                </TouchableOpacity>
               </View>
              )}
            </View>
          </View>

  )
}
const styles = StyleSheet.create({
  mainBoxCarNameSelect:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  
    width:'100%',
 
  },
  row: {
    flexDirection: 'row', // Arrange points and text horizontally
    alignItems: 'top', // Center content vertically
    gap: 20,

  },
  ShoeCon: {
    textAlign: 'center',
    justifyContent: 'center',
    // width:85
  },
  secondDivTitle:{
backgroundColor:'#F2F3FD',
    width:'100%',
    borderRadius:10,
    padding:15,
  },
  ShoeContainer: {
    marginTop: 5,
  },
  MainContainer: {
    backgroundColor: 'white',
    flex: 1,
    marginTop:10
  },
})


export default Profile
