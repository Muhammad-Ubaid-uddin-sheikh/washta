import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, } from 'react-native';
import { Fonts, FontsGeneral } from '../style';
import Button from '../../allDynamicsComponets/Button';
import Popup  from './Modalpopup'
const StepThree = ({ navigation }) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };
  return (
    <View style={styles.container}>
     
      <View style={styles.progressContainer} >
        <View style={styles.completedStep}>
          <Text style={styles.stepText}>1</Text>
        </View>
        <View style={[styles.line,{backgroundColor:'#747EEF'}]} />
        <View style={[styles.step,{backgroundColor:'#747EEF',borderColor:'#747EEF',borderWidth:1}]}>
          <Text style={[styles.stepText,{color:'white'}]}>2</Text>
        </View>
        <View style={[styles.line,{backgroundColor:'#747EEF'}]} />
        <View style={[styles.step,{backgroundColor:'#747EEF',borderColor:'#747EEF',borderWidth:1}]}>
          <Text style={[styles.stepText,{color:'white'}]}>3</Text>
        </View>
      </View>
     <ScrollView>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingHorizontal:10,marginTop:20,borderBlockColor: '#747474', borderBottomWidth: 0.2,paddingBottom:20}}>
      <Image source={{uri:'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwd2FzaHxlbnwwfHwwfHx8MA%3D%3D'}} style={{width:70,height:70,objectFit:'cover',borderRadius:12}}/>
      
      <View style={{width:'80%'}}>
      <Text style={{fontFamily:FontsGeneral.MEDIUMSANS,color:'black',fontSize:18,width:'80%',paddingLeft:10}}> Car Detailing </Text>
      <Text style={{fontFamily:FontsGeneral.MEDIUMSANS,paddingLeft:12,fontSize:13,color:'black'}}> 8 min away </Text>
        </View>
      </View>
      <Text style={styles.textGroundTitle} > Summary</Text>
      <View style={{ paddingHorizontal: 10, paddingRight: 15, borderBlockColor: '#747474', borderBottomWidth: 0.2, paddingBottom: 30 }}>
          <View style={styles.RowMainParticular}>
            <Text style={styles.textLocation}> Booking Date</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }]}> 02 Feb | 01:00 PM </Text>
          </View>
          <View style={styles.RowMainParticular}>
            <Text style={styles.textLocation}> Car Plate Number</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }]}> A-1234 </Text>
          </View>
          <View style={styles.RowMainParticular}>
            <Text style={styles.textLocation}> Car Type</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }]}> Sedan </Text>
          </View>
          <View style={styles.RowMainParticular}>
            <Text style={styles.textLocation}> Service</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }]}> Car Wash & Full Cleaning </Text>
          </View>
          <View style={styles.RowMainParticular}>
            <Text style={styles.textLocation}> Estimated Duration</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }]}> 1hr</Text>
          </View>
        </View>
        <Text style={styles.textGroundTitle}> Cost Summary</Text>
      <View style={{ paddingHorizontal: 10, paddingRight: 15, borderBlockColor: '#747474', borderBottomWidth: 0.2, paddingBottom: 30 }}>
          <View style={styles.RowMainParticular}>
            <Text style={styles.textLocation}> Exterior Cleaning</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }]}>AED 7.5 </Text>
          </View>
          <View style={styles.RowMainParticular}>
            <Text style={styles.textLocation}> Interior Cleaning</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }]}>AED 7.5 </Text>
          </View>
          <View style={styles.RowMainParticular}>
            <Text style={styles.textLocation}> Tire Cleaning</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }]}>AED 5.0</Text>
          </View>
          <View style={styles.RowMainParticular}>
            <Text style={styles.textLocation}> Tax & Fees</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }]}>AED 0.00 </Text>
          </View>
        </View>
        <View style={[styles.RowMainParticular,{paddingHorizontal:10}]}>
            <Text style={styles.textLocation}> Estimated Total</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 17 }]}> AED 20.00</Text>
          </View>
          <Popup 
        visible={popupVisible} 
        onClose={hidePopup} 
        message="Please wait for John Doe to accept your hiring request" 
      />
     </ScrollView>
     <View style={styles.buttonContainer}>
        <Button text="Complete Booking" Link={showPopup} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
   
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
  },
  textGroundTitle: {
    fontSize: 19,
    color: 'black',
    letterSpacing: 0.1,
    lineHeight: 36,
    fontFamily: FontsGeneral.MEDIUMSANS,
    paddingTop: 5,
    textAlign:'left',
    paddingHorizontal:10
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  step: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#a6a6a6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedStep: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#747EEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: '28%',
    height: 1.5,
    marginHorizontal:10,
    backgroundColor: '#a6a6a6',
  },
  stepText: {
    color: '#fff',
    fontFamily:FontsGeneral.MEDIUMSANS,
    fontSize:16
  },
  RowMainParticular: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5
  },
  textLocation: {
    fontSize: 14,
    fontFamily: Fonts.REGULAR,
    color: 'black',
    alignItems: 'center',
    flexDirection: 'row'
  },
});

export default StepThree;
