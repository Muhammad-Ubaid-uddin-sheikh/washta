import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import InputFeilds from '../../../allDynamicsComponets/inputFeilds'
import Button from '../../../allDynamicsComponets/Button'
import { useDispatch } from 'react-redux';
import {addVehicle} from '../../../../redux/vehicleReducer'
const AddCarScreen = ({ navigation }) => {
    const dispatch = useDispatch();
  const [carName, setCarName] = useState('');
  const [carPlate, setCarPlate] = useState('');
  const [cars, setCars] = useState('');
const [Manufacturer, setManufacturer] = useState('')
  const handleAddCar = () => {
    if (carName.trim() !== '' && carPlate.trim() !== '') {
      setCars([...cars, { name: carName, plate: carPlate }]);
      setCarName('');
      setCarPlate('');
    }
  };
  const handleAddVehicle = () => {
    dispatch(
        addVehicle({
            name: carName, brand: Manufacturer, plateNumber:carPlate, ownerName:cars 
        })
    )
    navigation.navigate('PlayerProfile');
    // dispatch(addVehicle({ }));
    setCarName('');
    setCarPlate('');
    setCars('');
    setManufacturer('');
  };
  return (
    <View style={styles.container}>
        <View>
        <InputFeilds focus={true} labelName='Car Manufacturer*' value={Manufacturer} onChangeText={(text) => setManufacturer(text)} />
      <InputFeilds focus={true} labelName='Car Name*' value={carName} onChangeText={(text) => setCarName(text)} />
      <InputFeilds focus={true} labelName='Car Plate Number' value={carPlate} onChangeText={(text) => setCarPlate(text)} />
      <InputFeilds focus={true} labelName='Car Type' value={cars} onChangeText={(text) =>setCars(text)} />
        </View>
        <View style={{paddingBottom:20}}>
        <Button text="Add Vehicle" Link={handleAddVehicle} />
        </View>
       
      {/* <TouchableOpacity style={styles.addButton} onPress={handleAddCar}>
        <Text style={styles.buttonText}>Add Car</Text>
      </TouchableOpacity> */}
      {/* {cars.map((car, index) => (
        <TouchableOpacity
          key={index}
          style={styles.carBox}
          onPress={() => navigation.navigate('SelectCar', { selectedCar: car })}
        >
          <Text>{car.name}</Text>
        </TouchableOpacity>
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:15,
    justifyContent:'space-between'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  carBox: {
    backgroundColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default AddCarScreen;