import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, StyleSheet, ScrollView, TouchableOpacity, Alert, FlatList } from 'react-native'
import ImageEdit from '../../allDynamicsComponets/ImageAdd'
// import Checking from '../../components/inputFeildCustom'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontsGeneral } from '../style';
import Arrow from 'react-native-vector-icons/MaterialIcons'
import Dot from 'react-native-vector-icons/Entypo'
import BokingCompleted from '../../allDynamicsComponets/BookingComplted'
const Profile = ({ navigation }) => {
  const bookingData = [
    {
      Name: 'John Doe Car Hub',
      orderId: 'CS-1095',
      OrderDate: '20 FEB',
      Cost: 'AED 20',
      transparentBtn: 'Cancel',
      colorBtntext: 'Track Progress'
    },
    {
      Name: 'John ',
      orderId: 'SS-1295',
      OrderDate: '10 FEB',
      Cost: 'ABD 40',
      transparentBtn: 'Cancel',
      colorBtntext: 'Track Progress'
    },
  ];


  return (

  
      <View style={styles.MainContainer}>
        
          {/* <StatusBar backgroundColor={'white'} barStyle="dark-content" /> */}

          <View style={styles.ShoeContainer}>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => navigation.navigate('')}>
                <View style={styles.ShoeCon}>
                  <ImageEdit title="Editar foto" />
                </View>
              </TouchableOpacity>
              <View style={styles.ShoeConText} >
                <Text style={styles.textPoints} >John Doe</Text>
                <Text style={styles.paragraph} >johndoe@example.com</Text>
              </View>

          </View>
            <View style={styles.secondDivTitle}>
             
              <Text style={styles.textPoints} >Vehicle </Text>
              <View style={styles.mainBoxCarNameSelect} >
               <View>
               <Text style={{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:14,color:'black'}}>Honda Civic</Text>
               <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center"}}>
               <Text style={{fontFamily:FontsGeneral.REGULARSANS,fontSize:13,color:'black'}}>Hatchback</Text>
               <Dot name='dot-single' size={20} color={'black'}/>
               <Text style={{fontFamily:FontsGeneral.REGULARSANS,fontSize:13,color:'black'}}>C-9131</Text>
               </View>
               
               </View>
               <View >
                <TouchableOpacity onPress={()=>navigation.navigate('SelectCar')} style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center",backgroundColor:'#747EEF',paddingHorizontal:6,paddingVertical:3,borderRadius:8}}>
                  <Text style={{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:13,color:'white'}}>Change</Text>
                  <Arrow name='keyboard-arrow-right' size={24} color={'white'} />
                </TouchableOpacity>
               </View>
              </View>
            </View>
            
            <View style={[styles.secondDivTitle,{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}]}>
             
             <Text style={styles.textPoints} >Job Bookings </Text>
             <Text style={styles.ViewallText} >view all </Text>
           </View>
           <FlatList
      data={bookingData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <BokingCompleted showButton={false} data={item} />}
    />
            <View style={styles.InputButtonsFeild}>

            </View>
          </View>

        </View>
   
  )
}
const styles = StyleSheet.create({
  mainBoxCarNameSelect:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#F2F3FD',
    width:'100%',
    padding:15,
    borderRadius:12,
    marginTop:10
  },
    ViewallText:{
        fontFamily:FontsGeneral.MEDIUMSANS,
        fontSize:16,
        color:'#747EEF'
    },
    secondDivTitle:{
      paddingTop:20
    },  rowtopFeild:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerButton: {// Arrange points and text horizontally
    alignItems: 'center', // Center content vertically
    justifyContent: 'space-between',
    position: 'relative',
    flexDirection: 'row',
    gap: 10
  },
  mainContent: {
    textAlign: 'center',
    justifyContent: 'center',
    //  width:150,
  },
  ShoeConText: {
    paddingTop: 10
  },


  row: {
    flexDirection: 'row', // Arrange points and text horizontally
    alignItems: 'top', // Center content vertically
    gap: 20,

  },
  textPoints: {
    fontSize: 20,
    lineHeight: 24,
    color: '#000',
    marginTop: 10,
    fontFamily: FontsGeneral.MEDIUMSANS


  },
  ShoeCon: {
    textAlign: 'center',
    justifyContent: 'center',
    // width:85
  },
  ShoeContainer: {
    marginTop: 5,
  },
  MainContainer: {

    backgroundColor: 'white',
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15

  },
  buttonContainer: {
    marginTop: 30
  },
  paragraph: {
    fontSize: 16,
    color: '#61646B',
    letterSpacing: 0.1,
    fontFamily: FontsGeneral.MEDIUMSANS
  },




})


export default Profile
