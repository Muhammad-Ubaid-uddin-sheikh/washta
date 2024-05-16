import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, FlatList,} from 'react-native'
import BookingComp from '../../allDynamicsComponets/BookingComponet'
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
     <FlatList
        data={bookingData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
            <BookingComp CencelBtn={() => navigation.navigate('CencelTracking',{item})}  TrackBtn={() => navigation.navigate('TrackProgess',{item})} data={item} />
        )}
      />
          </View>
 
  )
}
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop:5
  },
})


export default Profile
