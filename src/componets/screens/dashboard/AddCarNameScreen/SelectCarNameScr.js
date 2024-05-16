import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';
import Dot from 'react-native-vector-icons/Entypo';
import { FontsGeneral } from '../../style';
import ImageCar from '../../../../assets/nocar.png'
import Button from '../../../allDynamicsComponets/Button'
const SelectCarScreen = ({ route, navigation }) => {
  const vehicles = useSelector(state => state.vehicles);
  const [selectedItem, setSelectedItem] = useState(vehicles.vehicles[0]); // Default to the first item

  const handleSelectItem = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };
console.log('vehicles',vehicles)
  return (
    <View style={styles.container}>
      {vehicles.vehicles.length === 0 ? (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={ImageCar}  style={{objectFit:'contain',width:'100%',height:'50%'}}/>
          <Text style={styles.emptyText}>Please add a vehicle</Text>
          <Button text='Add Vehicle' Link={()=>navigation.navigate('AddCar')}/>
        </View>
      
      ) : (
        <FlatList
          data={vehicles.vehicles} 
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectItem(item)}>
              <View style={[styles.mainBoxCarNameSelect, selectedItem === item && styles.selectedItem]}>
                <TouchableOpacity
                  onPress={() => handleSelectItem(item)}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: selectedItem === item ? '#747EEF' : '#747EEF', // Change border color when selected
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {selectedItem === item && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#747EEF' }} />}
                </TouchableOpacity>
                <View style={{paddingLeft:20}}>
                  <Text style={{ fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 14, color: 'black' }}>
                    {item.brand} {item.name}
                  </Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                    <Text style={{ fontFamily: FontsGeneral.REGULARSANS, fontSize: 13, color: 'black' }}>
                      {item.ownerName}
                    </Text>
                    <Dot name='dot-single' size={20} color={'black'}/>
                    <Text style={{ fontFamily: FontsGeneral.REGULARSANS, fontSize: 13, color: 'black' }}>
                      {item.plateNumber}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  mainBoxCarNameSelect:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%',
    padding:15,
    borderRadius:12,
    marginTop:10,
    borderWidth:1,
    borderColor:'#747fe854'
  },
  selectedItem: {
    borderColor: '#747EEF',
    borderWidth:1.5, // Border color changes when selected
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
    marginBottom:10,
    fontFamily: FontsGeneral.REGULARSANS,
    color: 'black',
  },
});

export default SelectCarScreen;
