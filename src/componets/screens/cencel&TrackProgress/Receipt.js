import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { Fonts, FontsGeneral } from '../style';
import Button from '../../allDynamicsComponets/Button'
const Cencel = () => {
  const [selectedItem, setSelectedItem] = useState('Change in Plans'); // Default to the first item
  const [reasonInput, setReasonInput] = useState('');

  const handleSelectItem = (item) => {
    setSelectedItem(item === selectedItem ? '' : item);
  };

  const handleInputChange = (text) => {
    setReasonInput(text);
  };

  const handleConfirm = () => {
    console.log('Selected Reason:', selectedItem);
    console.log('Input:', reasonInput);
  };

  const List = [
    { name: "Change in Plans" },
    { name: "Vehicle issues" },
    { name: "Unexpected work" },
    { name: 'Didn’t find location' },
    { name: 'Problem with the Service Provider' },
    { name: 'Other' }
  ];

  return (
    <View style={{ paddingHorizontal: 15,flex:1}} backgroundColor={'white'}>
      <View style={{flex:1}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={[styles.textStyle,{paddingTop:10}]}>Booking Date</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15,paddingTop:10}]}>02 Feb | 01:00 PM</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={[styles.textStyle,{paddingTop:10}]}>Car Plate Number</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15,paddingTop:10}]}>A-1234</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={[styles.textStyle,{paddingTop:10}]}>Car Type</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15,paddingTop:10}]}>Sedan</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={[styles.textStyle,{paddingTop:10}]}>Service</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15,paddingTop:10}]}>Car Wash & Full Cleaning</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={[styles.textStyle,{paddingTop:10}]}> Duration</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15,paddingTop:10}]}>1 hr</Text>
        </View>
      
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:10}}>
        <Text style={[styles.textStyle,{paddingTop:10}]}>Exterior Cleaning</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15,paddingTop:10}]}>AED 7.5</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={[styles.textStyle,{paddingTop:10}]}>Interior Cleaning</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15,paddingTop:10}]}>AED 7.5</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={[styles.textStyle,{paddingTop:10}]}>Tire Cleaning</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15,paddingTop:10}]}>AED 5.0</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={[styles.textStyle,{paddingTop:10}]}>Tax & Fees</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15,paddingTop:10}]}>AED 0.00</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={[styles.textStyle,{paddingTop:10}]}>Estimated Total</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:17,paddingTop:10}]}>AED 20.00</Text>
        </View>
    
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:10}}>
        <Text style={[styles.textStyle,{paddingTop:10}]}>Payment</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15,paddingTop:10}]}>**** **** **** 1578</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={[styles.textStyle,{paddingTop:10}]}>Order ID</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15,paddingTop:10}]}>CS-1095</Text>
        </View>
      </View>

     <View style={{width:'100%',bottom:20}}>
      <Button text='Download E-Receipt' Link={''}/>
     </View>
  
    </View>
  );
};

const styles = StyleSheet.create({
  Heading: {
    fontFamily: FontsGeneral.MEDIUMSANS,
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
  mainBoxCarNameSelect: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#747EEF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontFamily: FontsGeneral.MEDIUMSANS,
    fontSize: 16,
    color: 'white',
  },
  textStyle:{
    fontFamily:Fonts.MEDIUM,
    fontSize:13,
    color:'black',
    paddingTop:20
}
});

export default Cencel;
