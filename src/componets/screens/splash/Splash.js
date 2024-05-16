import React, { useEffect } from 'react'
import { Image,  StyleSheet, View} from 'react-native'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.replace('Home');
        }, 3000); 
      }, []);

    // useFocusEffect(
    //     React.useCallback(() => {
    //         handleTokenConform(); // Call handleTokenConform whenever the screen comes into focus
    //     }, [])
    // );

    // const handleTokenConform= async () => {
    //     const dataToken = await AsyncStorage.getItem('accessToken')
    //     const courtToken = await AsyncStorage.getItem('accessTokenCourt')
    //     // const Userdata = await AsyncStorage.getItem('user')
    //     if(courtToken){
    //         navigation.replace('CourtDashboard')
    //     }
    //     else if (dataToken){
    //         navigation.replace('Dashboard')
    //     }
    //     else {
    //         navigation.replace('Home')
    //     }
    // }

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
