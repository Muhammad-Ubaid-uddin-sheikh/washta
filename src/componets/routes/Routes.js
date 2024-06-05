import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/splash/Splash';
import LoginScreen from '../screens/login/Login';
import SignUp from '../screens/signup/Signup';
import OtpScreen from '../screens/otpscreen/OtpScreen';
import EnableLocation from '../screens/locationEnable/LocationEnable';
import Dashbaord from '../screens/dashboard/HomeDashbaord';
import Setting from '../screens/setting/Setting';
import BackIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { FontsGeneral } from '../screens/style';
import AddCarScreen from '../screens/dashboard/AddCarNameScreen/AddCard';
import SelectCarScreen from '../screens/dashboard/AddCarNameScreen/SelectCarNameScr';
import Home from '../screens/home/Home';
import TrackProgress from '../screens/cencel&TrackProgress/TrackProgress';
import Cencel from '../screens/cencel&TrackProgress/Cencel';
import Receipt from '../screens/cencel&TrackProgress/Receipt';
import HireNowStepOne from '../screens/particularCarScreen/HireNowStepOne'
import HireNowStepTwo from '../screens/particularCarScreen/HireNowStepTwo'
import HireNowStepThree from '../screens/particularCarScreen/HireNowStepThree'
import ParticularCarScreen from '../screens/particularCarScreen/ParticularCarScreen';
import AddCardScreen from '../screens/particularCarScreen/AddCard';
import ParticularReview from '../screens/particularCarScreen/ParticularReview';
import EditProfileInfor from '../screens/setting/EditProfileInfor';
import Notifications from '../screens/setting/Notifications';
import Security from '../screens/setting/Security';
import Password from '../screens/setting/Password';
import PrivacyAndPolicy from '../screens/setting/PrivacyAndPolicy';
import HelpandSupport from '../screens/setting/HelpandSupport';
function App() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName='SplashScreen'
      screenOptions={{
        cardStyle: { backgroundColor: 'white' },
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width * 2, 0], // Adjusted from layouts.screen.width
                  }),
                },
              ],
            },
          };
        },
        headerStyle: {
          borderBottomWidth: 0, // Remove bottom border
          elevation: 0,
          borderColor:'white',
          backgroundColor:'white' // Remove box shadow for Android
        },
      }}
    >
      <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
      <Stack.Screen options={{ headerShown: false }} name="OtpScreen" component={OtpScreen} />
      <Stack.Screen options={{ headerShown: false }} name="EnableLocation" component={EnableLocation} />
      <Stack.Screen options={{ headerShown: false }} name="Dashbaord" component={Dashbaord} />
      <Stack.Screen options={{ headerShown: false }} name="ParticularCarScreen" component={ParticularCarScreen} />
      <Stack.Screen
        name="StepOne"
        component={HireNowStepOne}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 13 }} onPress={() => navigation.goBack()}>
              <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext, { marginLeft: -10 }]}>Hire Now</Text>
            </TouchableOpacity>
          ),
          title: null,
        }}
      />
       <Stack.Screen
        name="AddCard"
        component={AddCardScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 13 }} onPress={() => navigation.goBack()}>
              <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext, { marginLeft: -10 }]}>Hire Now</Text>
            </TouchableOpacity>
          ),
          title: null,
        }}
      />
       <Stack.Screen
        name="EditProfileInfor"
        component={EditProfileInfor}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 13 }} onPress={() => navigation.goBack()}>
              <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext, { marginLeft: -10 }]}>Profile Information</Text>
            </TouchableOpacity>
          ),
          title: null,
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 13 }} onPress={() => navigation.goBack()}>
              <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext, { marginLeft: -10 }]}>Notifications</Text>
            </TouchableOpacity>
          ),
          title: null,
        }}
      />
       <Stack.Screen
        name="Security"
        component={Security}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 13 }} onPress={() => navigation.goBack()}>
              <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext, { marginLeft: -10 }]}>Security</Text>
            </TouchableOpacity>
          ),
          title: null,
        }}
      />
      <Stack.Screen
        name="StepTwo"
        component={HireNowStepTwo}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 13 }} onPress={() => navigation.goBack()}>
              <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext, { marginLeft: -10 }]}>Hire Now</Text>
            </TouchableOpacity>
          ),
          title: null,
        }}
      />
      <Stack.Screen
        name="Password"
        component={Password}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 13 }} onPress={() => navigation.goBack()}>
              <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext, { marginLeft: -10 }]}>Password</Text>
            </TouchableOpacity>
          ),
          title: null,
        }}
      />
      <Stack.Screen
        name="PrivacyAndPolicy"
        component={PrivacyAndPolicy}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 13 }} onPress={() => navigation.goBack()}>
              <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext, { marginLeft: -10 }]}>Privacy Policy</Text>
            </TouchableOpacity>
          ),
          title: null,
        }}
      />
      <Stack.Screen
        name="StepThree"
        component={HireNowStepThree}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 13 }} onPress={() => navigation.goBack()}>
              <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext, { marginLeft: -10 }]}>Hire Now</Text>
            </TouchableOpacity>
          ),
          title: null,
        }}
      />
      <Stack.Screen
        name="ParticularReview"
        component={ParticularReview}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 13 }} onPress={() => navigation.goBack()}>
              <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext, { marginLeft: -10 }]}>Seller Reviews</Text>
            </TouchableOpacity>
          ),
          title: null,
        }}
      />
       <Stack.Screen
        name="HelpAndSupport"
        component={HelpandSupport}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 13 }} onPress={() => navigation.goBack()}>
              <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext, { marginLeft: -10 }]}>Help & Support</Text>
            </TouchableOpacity>
          ),
          title: null,
        }}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 13 }} onPress={() => navigation.goBack()}>
              <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext, { marginLeft: -10 }]}>Settings</Text>
            </TouchableOpacity>
          ),
          title: null,
        }}
      />
      <Stack.Screen
        name="AddCar"
        component={AddCarScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 13 }} onPress={() => navigation.goBack()}>
              <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext, { marginLeft: -10 }]}>Add Vehicle</Text>
            </TouchableOpacity>
          ),
          title: null,
        }}
      />
      <Stack.Screen
        name="SelectCar"
        component={SelectCarScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 13 }} onPress={() => navigation.goBack()}>
              <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext, { marginLeft: -10 }]}>Select Vehicle</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: -5 }}>
              <TouchableOpacity onPress={() => navigation.navigate('AddCar')}>
                <BackIcon name="plus" size={23} color="black" style={{ marginRight: 18 }} />
              </TouchableOpacity>
            </View>
          ),
          title: null,
        }}
      />
       <Stack.Screen
        name="TrackProgess"
        component={TrackProgress}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 13 }} onPress={() => navigation.goBack()}>
              <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext, { marginLeft: -10 }]}>Track Progress</Text>
            </TouchableOpacity>
          ),
          title: null,
        }}
      />
       <Stack.Screen
        name="CencelTracking"
        component={Cencel}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 13 }} onPress={() => navigation.goBack()}>
              <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext, { marginLeft: -10 }]}>Cancel Booking</Text>
            </TouchableOpacity>
          ),
          title: null,
        }}
      />
      <Stack.Screen
        name="Receipt"
        component={Receipt}
        options={{
          headerLeft: () => (
            <TouchableOpacity style={{ flexDirection: "row", marginLeft: 13 }} onPress={() => navigation.goBack()}>
              <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ marginRight: 18 }} />
              <Text style={[styles.backicontext, { marginLeft: -10 }]}>Receipt</Text>
            </TouchableOpacity>
          ),
          title: null,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  backicontext: {
    color: '#212121',
    fontSize: 18,
    fontFamily: FontsGeneral.MEDIUMSANS,
  },
});

export default App;
