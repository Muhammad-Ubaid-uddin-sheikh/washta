import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geocoder from 'react-native-geocoding';
import Icons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fonts } from '../style';
import DetailSlider from '../../allDynamicsComponets/DetailsVerticalCom';
import SliderData from '../../../../Obj';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation'; // Import Geolocation from '@react-native-community/geolocation'

Geocoder.init('AIzaSyB_nNvYWSCB2haI7DCgR6chQmsg-T4oj8s');

const CustomizeProfilePrefferd = ({ navigation }) => {
  const [name, setName] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);
  const [areaName, setAreaName] = useState('');
console.log(currentLocation)
  const getUserFromStorage = async () => {
    try {
      const userString = await AsyncStorage.getItem('user');
      if (userString) {
        const user = JSON.parse(userString);
        setName(user)
        return user;
      } else {
        console.log('No user data found');
        return null;
      }
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  };

  const reverseGeocode = async (latitude, longitude) => {
    try {
      const res = await Geocoder.from({ latitude, longitude });
      const addressComponents = res.results[0].address_components;
      const filteredAddressComponents = addressComponents.filter(component =>
        !component.types.includes('country')
      );
  
      const formattedAddress = filteredAddressComponents.map(component => component.short_name).join(', ');
      
      console.log('Area Name:', formattedAddress); // Log the address here
      setAreaName(formattedAddress);
    } catch (error) {
      console.log('Error getting area name:', error);
    }
  };

  useEffect(() => {
    requestLocationPermission();
    getUserFromStorage();
  }, []);

  const requestLocationPermission = async () => {
    try {
      let permission;
      if (Platform.OS === 'android') {
        permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
      } else if (Platform.OS === 'ios') {
        permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
      }
  
      const result = await request(permission);
  
      if (result === RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
        reverseGeocode(latitude, longitude);
      },
      error => console.log('Error getting current location:', error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        {currentLocation && (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
            <Marker coordinate={currentLocation} title="Your Location" />
          </MapView>
        )}
      </View>
     
      <View style={{ flex: 0.6, paddingLeft: 5 }}>
        <Text style={styles.MainHeading}>Hi there, {name?.username}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}>
          <Ionicons name="location-sharp" color={'#747EEF'} size={20}/>
          <Text style={styles.LocationSubHeading}> 2464 JBR, Dubai, UAE </Text>
        </View>
        <ScrollView horizontal style={styles.container} showsHorizontalScrollIndicator={false}>
          {SliderData.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('ParticularCarScreen', { item })}>
              <DetailSlider
                margin={true}
                imageUrl={item.imageUrl}
                name={item.name}
                time={item.time}
                rating={item.rating}
                reviews={item.reviews}
                km={item.km}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LocationSubHeading: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 14,
    color: 'black',
  },
  MainHeading: {
    fontFamily: Fonts.BOLD,
    fontSize: 25,
    color: 'black',
    paddingTop: 10,
    paddingLeft: 5
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%'
  },
  mapContainer: {
    flex: 1,
    // ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  
});

export default CustomizeProfilePrefferd;
