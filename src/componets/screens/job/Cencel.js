import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import BookingCompeleted from '../../allDynamicsComponets/BookingComplted'
const Completed = () => {
  const bookingData = [
    {
      Name: 'John Doe Car Hub',
      orderId: 'CS-1095',
      OrderDate: '20 FEB',
      Cost: 'AED 20',
      // transparentBtn: 'Cancel',
      // colorBtntext: 'Track Progress'
    },
    {
      Name: 'John ',
      orderId: 'SS-1295',
      OrderDate: '10 FEB',
      Cost: 'ABD 40',
      // transparentBtn: 'Review',
      // colorBtntext: 'E-Receipt'
    },
  ];
  return (

   
      <View style={styles.MainContainer}>
      <FlatList
      data={bookingData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <BookingCompeleted showButton={false} data={item} />}
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
export default Completed