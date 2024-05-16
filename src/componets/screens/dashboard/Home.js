import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { PermissionsAndroid } from 'react-native'; // For Android permission handling
import Geolocation from '@react-native-community/geolocation';
import Icons from 'react-native-vector-icons/EvilIcons'
import DetailSlider from '../../allDynamicsComponets/DetailsVerticalCom'
import SliderData from '../../../../Obj';
import { Fonts } from '../style';
import Ionicons from 'react-native-vector-icons/Ionicons'
const CustomizeProfilePrefferd = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    requestLocationPermission(); // Request location permission on Android (if needed)
    getCurrentLocation();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const status = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );

      if (status !== PermissionsAndroid.RESULTS.GRANTED) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location to display your current position on the map.',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setPermissionGranted(true);
        }
      } else {
        setPermissionGranted(true);
      }
    } else {
      setPermissionGranted(true); // Assume permission is granted on iOS
    }
  };

  const getCurrentLocation = () => {
    if (permissionGranted) {
      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
        },
        error => console.log('Error getting current location:', error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    } else {
      console.log('Location permission not granted.');
    }
  };

  const handleMapPress = event => {
    const { coordinate } = event.nativeEvent;
    setCurrentLocation(coordinate);
  };

  return (
    <View style={styles.container}>
      {permissionGranted ? (
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={currentLocation || {
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
            onPress={handleMapPress}
          >
            {currentLocation && (
              <Marker coordinate={currentLocation} title="Your Location" />
            )}
          </MapView>
        </View>
      ) : (
        <Text>Location permission is required to display the map.</Text>
      )}
      <TouchableOpacity style={styles.searchButton} onPress={getCurrentLocation}>
        <Icons name="search" size={27}/>
      </TouchableOpacity>
      <View style={{ flex: 0.4 ,paddingLeft:5}}>
        <Text style={styles.MainHeading}>Hi there, Jon</Text>
        <View style={{flexDirection:'row',alignItems:'center',paddingBottom:10}}>
        <Ionicons name="location-sharp" color={'#747EEF'} size={20}/>
        <Text style={styles.LocationSubHeading}> 2464 JBR, Dubai, UAE </Text>
        </View>
        
        <ScrollView horizontal style={styles.container}  showsHorizontalScrollIndicator={false}>
      {SliderData.map((item, index) => (
        <DetailSlider
        margin={true}
          key={index}
          imageUrl={item.imageUrl}
          name={item.name}
          time={item.time}
          rating={item.rating}
          reviews={item.reviews}
          km={item.km}
        />
      ))}
     
    </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LocationSubHeading:{
    fontFamily:Fonts.MEDIUM,
    fontSize:14,
    color:'black',
  },
  MainHeading:{
    fontFamily:Fonts.BOLD,
    fontSize:25,
    color:'black',
    paddingTop:10,
    paddingLeft:5
  },
  container: {
    flex: 1,
    backgroundColor: 'white', // Adjust background color as needed
    width:'100%'
  },
  mapContainer: {
    flex: 0.6,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
  },
});

export default CustomizeProfilePrefferd;