import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import SettingIcon from 'react-native-vector-icons/AntDesign';
import Bell from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/FontAwesome';
import Profile from './Profile'
import DashboardMain from './Home';
import Explore from './Explore';
import BackIcon from 'react-native-vector-icons/AntDesign'
import Location from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { Fonts, FontsGeneral } from '../style';
import Jobs from './Jobs';
const Tab = createBottomTabNavigator();

function MyTabs() {
  const [name, setName] = useState('');
  useEffect(()=>{
    setName('Jon')
  },[])
  
const navigation= useNavigation()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#747EEF',
        tabBarInactiveTintColor: '#808080',
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: Fonts.MEDIUM,
          marginTop:-5
        },
        headerTitleStyle: {
            fontSize: 25, // Set the desired font size for the header text
            fontFamily: Fonts.BOLD,
            marginLeft: 0,
            
          },
          headerStyle: {
            borderBottomWidth: 0, // Remove bottom border
            elevation: 0,
            borderColor:'white',
            backgroundColor:'white' // Remove box shadow for Android
          },
      })}
    >
     <Tab.Screen
        name="DashboardMain"
        component={DashboardMain}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Entypo name="home" color={color} size={27} />,
        }}
      />
<Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          title: `Hi, ${name}`,
          headerStyle: {
            backgroundColor: 'white', // Change the background color
            shadowColor: 'white', // Box shadow color
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0, // Box shadow opacity
            shadowRadius: 0,
            borderTopColor: 'white', // Box shadow blur radius
            elevation: 0, // For Android
            borderBottomColor: 'white', // Border color
            borderBottomWidth: 0, // Border width
          },
         
          headerTitleAlign: 'left',
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: -5 }}>
              <TouchableOpacity onPress={()=> navigation.navigate('')}>
              <Image source={require('../../../assets/Person.png')} style={{ width: 25, height: 25,objectFit:'contain',marginRight: 18  }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate('')}>
              <Image source={require('../../../assets/Bell.png')} style={{ width: 25, height: 25,objectFit:'contain',marginRight: 18  }} />
              </TouchableOpacity>
            </View>
          ),
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => <Location name="share-location" color={color} size={28} />,
        }}
      />

      <Tab.Screen
        name="Jobs"
        component={Jobs}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{flexDirection:"row",marginLeft: 13,}} onPress={() => navigation.navigate('DashboardMain')}>
               <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext,{marginLeft: -10}]}>Job Bookings</Text>
            </TouchableOpacity>
          ),
          title: null, 
          tabBarLabel: 'Jobs',
          tabBarIcon: ({ color }) => <SettingIcon name="calendar" color={color} size={24} />,
        }}
      />
      
      <Tab.Screen
        name="PlayerProfile"
        component={Profile}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{flexDirection:"row",marginLeft: 13,}} onPress={() => navigation.navigate('DashboardMain')}>
               <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext,{marginLeft: -10}]}>Your Profile</Text>
            </TouchableOpacity>
          ),
          title: null, 
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: -5 }}>
              <TouchableOpacity onPress={()=> navigation.navigate('Setting')}>
                <SettingIcon name="setting" size={23} color="black" style={{ marginRight: 18 }} />
              </TouchableOpacity>
            </View>
          ),
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => <Entypo name="user-circle-o" color={color} size={25} />,
        }}
      />


    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  backicontext:{
      color: '#212121',
      fontSize: 16,
      fontFamily: FontsGeneral.MEDIUMSANS,
  }
});
export default MyTabs;
