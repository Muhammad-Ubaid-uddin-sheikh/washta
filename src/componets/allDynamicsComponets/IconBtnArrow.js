import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Arrow from 'react-native-vector-icons/MaterialIcons'
import { FontsGeneral } from '../screens/style'
const IconBtnArrow = ({Name,Imagess,HandleClick}) => {
  return (
    <TouchableOpacity onPress={HandleClick}>

   
    <View style={[styles.MainContinerBtn,{ justifyContent:'space-between',borderWidth:0.5,padding:6,borderRadius:10,marginTop:10}]}>
        <View style={{flexDirection:'row',alignItems:'center',paddingLeft:5}} >
<Image source={Imagess} style={styles.Imagess}  />
<Text style={styles.btnText}>{Name}</Text>
        </View>
        <Arrow name='keyboard-arrow-right' size={32} color={'black'}/>
    </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    Imagess:{
        width:20,
        objectFit:'contain',
      
    },
    MainContinerBtn:{
    alignItems:'center',
     flexDirection:'row',
     width:'100%',
     borderColor:'#b3b3b3'
   
    },
    btnText:{
        fontFamily:FontsGeneral.MEDIUMSANS,
        fontSize:15,
        color:'black',
        paddingLeft:10
    }
})
export default IconBtnArrow