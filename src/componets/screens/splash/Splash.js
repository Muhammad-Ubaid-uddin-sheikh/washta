import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Image,  StyleSheet, View} from 'react-native'

const SplashScreen = () => {
    const navigation = useNavigation()
    // useEffect(() => {
    //     setTimeout(() => {
    //       navigation.replace('Home');
    //     }, 3000); 
    //   }, []);
      useEffect(() => {
        setTimeout(() => {
            handleTokenConform()
        }, 3000)
    }, [])
    // useFocusEffect(
    //     React.useCallback(() => {
    //         handleTokenConform(); // Call handleTokenConform whenever the screen comes into focus
    //     }, [])
    // );
    // const dataToken = AsyncStorage.getItem('accessToken')
    // console.log(dataToken)
    const handleTokenConform= async () => {
        const dataToken = await AsyncStorage.getItem('accessToken')
        console.log(dataToken)
        // const Userdata = await AsyncStorage.getItem('user')
        if (dataToken){
            navigation.replace('Dashbaord')
        }
        else {
            navigation.replace('Home')
        }
    }

    return (
        <View style={styles.maincontainer}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../../assets/WashtaLogo.png')} />
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        paddingHorizontal:50
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '100%',
        // height: 400,
        objectFit: 'contain'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});
