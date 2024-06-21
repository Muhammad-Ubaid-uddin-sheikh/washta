import React, { useEffect } from 'react';
import { Text, View, StatusBar, StyleSheet, Image, ScrollView, PermissionsAndroid, TouchableOpacity, Platform, TextInput, FlatList } from 'react-native';
import { PERMISSIONS, request } from 'react-native-permissions';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Search from 'react-native-vector-icons/EvilIcons';
import Map from 'react-native-vector-icons/FontAwesome5';
import SliderData from '../../../../Obj';
import DetailSlider from '../../allDynamicsComponets/DetailsVerticalCom';
import { Fonts } from '../style';

const Dashboard = ({ navigation }) => {
    const requestLocationPermission = async () => {
        if (Platform.OS === 'ios') {
          const granted = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
          if (granted === 'authorized') {
            console.log('Location permission granted');
          } 
        } else {
          try {
            const granted = await PermissionsAndroid.request(
              PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
              {
                title: 'Location Permission',
                message: 'This app needs access to your location',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
              },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log('Location permission granted');
            } else {
              console.log('Location permission denied');
            }
          } catch (err) {
            console.warn(err);
          }
        }
      };

      useEffect(()=>{
        requestLocationPermission();
      }, []);

    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('ParticularCarScreen', { item })}>
        <DetailSlider
          imageUrl={item.imageUrl}
          name={item.name}
          time={item.time}
          rating={item.rating}
          reviews={item.reviews}
          km={item.km}
          margin={false}
        />
      </TouchableOpacity> 
    );

    const handleLocationSelect = (data, details) => {
        const { location } = details.geometry;
        console.log('Latitude:', location.lat);
        console.log('Longitude:', location.lng);
    };

    return (
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} backgroundColor={'white'}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={styles.rowContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10, paddingHorizontal: 10 }}>
              <Ionicons name="location-sharp" color={'#747EEF'} size={20} />
              <Text style={styles.LocationSubHeading}> 2464 JBR, Dubai, UAE </Text>
            </View>
            <View style={styles.RowStyle}>
              <View style={styles.searchbarContainer}>
                <Search name='search' style={styles.Searchicon} size={30} />
                <TextInput
                  style={styles.input}
                  placeholder="Search Service"
                  placeholderTextColor="rgba(33, 33, 33, 0.60)"
                />
              </View>
              <View style={{ width: '16%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Map name="map-marked-alt" size={22} color={'black'} style={{ borderWidth: 1, borderRadius: 50, padding: 10, borderColor: '#b3b3b3' }} />
              </View> 
            </View>
          </View>
          
          <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
            <Image  source={require('../../../assets/banner.png')} style={{ width: '100%', height: 160, objectFit: 'contain' }} />
          </View>
          <Text style={styles.headingSubMain}>looking for something specific?</Text>
          <Text style={[styles.headingSubMain, { fontSize: 19, paddingTop: 12, paddingBottom: 10 }]}>Studios Near you</Text>
          <FlatList
            data={SliderData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
          />
          <Text style={[styles.headingSubMain, { fontSize: 19, paddingTop: 12, paddingBottom: 10 }]}>Car Detailing Studios</Text>
          <FlatList
            data={SliderData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
          />
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 15,
    },
    headingSubMain: {
        color: 'black',
        fontFamily: Fonts.MEDIUM,
        fontSize: 20,
        paddingHorizontal: 10,
    },
    RowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 10,
    },
    input: {
        fontFamily: Fonts.MEDIUM,
        fontSize: 15,
        width: '100%',
    },
    searchbarContainer: {
        borderRadius: 30,
        borderWidth: 1,
        flexDirection: 'row',
        height: 48,
        borderColor: '#b3b3b3',
        paddingHorizontal: 5,
        width: '84%',
    },
    Searchicon: {
        color: 'black',
        paddingTop: 9,
    },
    LocationSubHeading: {
        fontFamily: Fonts.MEDIUM,
        fontSize: 14,
        color: 'black',
    },
})

export default Dashboard;
