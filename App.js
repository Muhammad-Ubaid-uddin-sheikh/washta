import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/componets/routes/Routes';
import {enableLatestRenderer} from 'react-native-maps';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { ToastProvider } from 'react-native-toast-notifications';
function App(){
  enableLatestRenderer();
  return (
   
    <NavigationContainer>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor={'transparent'}  />
      <ToastProvider>
      <Provider store={store}>
      <Routes/>
      </Provider>
      </ToastProvider>
    </NavigationContainer>
    
  );
}


export default App;
