import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Fonts, FontsGeneral } from '../style';
import InputFeild from '../../allDynamicsComponets/inputFeilds'
import Button from '../../allDynamicsComponets/Button';
const StepOne = ({ navigation,route }) => {
    const {item} = route.params
    const [formData, setFormData] = useState({
        carManufactor: '',
        carname: '',
        carPlateNo: '',
        carType: '',
        carModel: '',
      });
  return (
  
    <View style={styles.container}>
       <ScrollView style={{flex:1}}>
      <View style={styles.progressContainer}>
        <View style={styles.completedStep}>
          <Text style={styles.stepText}>1</Text>
        </View>
        <View style={styles.line} />
        <View style={[styles.step,{backgroundColor:'white',borderColor:'#a6a6a6',borderWidth:1}]}>
          <Text style={[styles.stepText,{color:'#a6a6a6'}]}>2</Text>
        </View>
        <View style={[styles.line,]} />
        <View style={[styles.step,{backgroundColor:'white',borderColor:'#a6a6a6',borderWidth:1}]}>
          <Text style={[styles.stepText,{color:'#a6a6a6'}]}>3</Text>
        </View>
      </View>
      <View style={{textAlign:'left',borderBottomWidth:0.3,paddingBottom:30, borderBlockColor: '#747474',}}>
      <Text style={styles.textGroundTitle}> Your Car</Text>
      <View style={{paddingHorizontal:10}}>
      <InputFeild keyboardType='default'  focus={true} labelName='Car Manufacturer*' value={formData.carManufactor} onChangeText={(value) => setFormData({ ...formData, carManufactor: value })}/>
      <InputFeild keyboardType='default'  focus={true} labelName='Car Name*' value={formData.carname} onChangeText={(value) => setFormData({ ...formData, carname: value })}/>
      <InputFeild keyboardType='numeric'  focus={true} labelName='Car Plate Number' value={formData.carPlateNo} onChangeText={(value) => setFormData({ ...formData, carPlateNo: value })}/>
      <InputFeild keyboardType='default'  focus={true} labelName='Car Type' value={formData.carType} onChangeText={(value) => setFormData({ ...formData, carType: value })}/>
      <InputFeild keyboardType='default'  focus={true} labelName='Car Model' value={formData.carModel} onChangeText={(value) => setFormData({ ...formData, carModel: value })}/>

      </View>
      
      </View>
      <Text style={styles.textGroundTitle}> Summary</Text>
      <View style={{ paddingHorizontal: 10, paddingRight: 15, borderBlockColor: '#747474', borderBottomWidth: 0.2, paddingBottom: 30 }}>
          <View style={styles.RowMainParticular}>
            <Text style={styles.textLocation}> Cost</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }]}> {item.reviews}</Text>
          </View>
          <View style={styles.RowMainParticular}>
            <Text style={styles.textLocation}> Estimated Service Time</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }]}> {item.serviceTime}</Text>
          </View>
          <View style={styles.RowMainParticular}>
            <Text style={styles.textLocation}> Distance from you</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }]}> {item.time}</Text>
          </View>
          <View style={styles.RowMainParticular}>
            <Text style={styles.textLocation}> Location</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }]}> {item.Location}</Text>
          </View>
        </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
        <Button text="Select Payment Method" Link={() => navigation.navigate('StepTwo')} />
      </View>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    justifyContent:'center'
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
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
  }
});

export default StepOne;
