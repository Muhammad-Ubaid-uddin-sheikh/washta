import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Vector from '../../../assets/Vector.png'
import TracProgressBtn from '../../allDynamicsComponets/TrackProgessBtn'
import Cartrack from '../../../assets/CarRecipt.png'
import ProgessImage from '../../../assets/OrderProgress.png'
import { Fonts, FontsGeneral } from '../style'
const TrackProgress = ({route}) => {
    const { item} = route.params
    console.log('item',item)
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}  backgroundColor={'white'} >
       <View style={{paddingHorizontal:15}}>
        <TracProgressBtn Name='Order Accepted' Imagess={Vector}/>
        <TracProgressBtn Name='Car Received at Center' Imagess={Cartrack}/>
        <TracProgressBtn Name='Order in Progress' Imagess={ProgessImage}/>
        <Text style={styles.textStyle}>Estimated Pickup Time</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:20,paddingTop:7}]}>06:30 PM</Text>
        </View>
        <View style={{borderWidth:0.5,borderColor:'#b3b3b3',marginTop:20}}></View>
        <View style={{paddingHorizontal:15}}>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:21,paddingTop:10}]}>Order Details</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={[styles.textStyle,{paddingTop:10}]}>Exterior Cleaning</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15,paddingTop:10}]}>AED 7.5</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={[styles.textStyle,{paddingTop:10}]}>Interior Cleaning</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15,paddingTop:10}]}>AED 7.5</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={[styles.textStyle,{paddingTop:10}]}>Tire Cleaning</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15,paddingTop:10}]}>AED 5.0</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={[styles.textStyle,{paddingTop:10}]}>Tax & Fees</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:15,paddingTop:10}]}>AED 0.00</Text>
        </View>
        <View style={{borderWidth:0.5,borderColor:'#b3b3b3',marginTop:20}}></View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={[styles.textStyle,{paddingTop:10}]}>Estimated Total</Text>
        <Text style={[styles.textStyle,{fontFamily:FontsGeneral.MEDIUMSANS,fontSize:17,paddingTop:10}]}>AED 20.00</Text>
        </View>
        </View>
       
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    textStyle:{
        fontFamily:Fonts.MEDIUM,
        fontSize:13,
        color:'black',
        paddingTop:20
    }
})
export default TrackProgress