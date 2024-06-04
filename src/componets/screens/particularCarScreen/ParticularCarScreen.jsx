import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Button from '../../allDynamicsComponets/Button';
import StarIcons from 'react-native-vector-icons/Entypo';
import { Fonts, FontsGeneral } from '../style';

const ParticularGroundScreen = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  console.log("feildDataasdasdad", item);

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.imageconta}></View>
        <Image
          source={{ uri: item.imageUrl || 'https://github.com/Muhammad-Ubaid-uddin-sheikh/Kicker-AfterAPK/blob/master/src/assets/WhatsApp%20Image%202024-04-20%20at%2000.11.53.jpeg?raw=true' }}
          style={styles.backgroundImage}
        />
        <View style={{ flexDirection: 'row', justifyContent: "space-between", padding: 16, width: '100%', alignItems: 'center', position: 'absolute', top: 25 }}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <BackIcon name="arrowleft" size={23} color='#747EEF' style={{ backgroundColor: 'white', padding: 5, borderRadius: 50 }} />
          </TouchableOpacity>
          <TouchableOpacity >
          </TouchableOpacity>
        </View>
        <View style={styles.TitleGroundDiv}>
          <Text style={styles.textGroundTitle}>{item.name}</Text>
          <TouchableOpacity  onPress={()=>navigation.navigate('ParticularReview')}>
          <Text style={[styles.buttonText, { color: 'black', flexDirection: 'row', alignItems: 'center' }]}>
           
            <StarIcons name='star' style={{ color: '#F39D00' }} size={20} />
            <Text> {item.rating} </Text>
         
          </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.locationTextContainer}>
          <Text style={styles.textLocation}>255 jobs done</Text>
        </View>
        <View style={{ paddingHorizontal: 10, paddingRight: 15, borderBlockColor: '#747474', borderBottomWidth: 0.2, paddingBottom: 30 }}>
          <Text style={styles.textGroundTitle}> Job Information</Text>
          <View style={styles.RowMainParticular}>
            <Text style={styles.textLocation}> Cost</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }]}> {item.reviews}</Text>
          </View>
          <View style={styles.RowMainParticular}>
            <Text style={styles.textLocation}> Estimated Service Time</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }]}> {item.serviceTime}</Text>
          </View>
          <View style={styles.RowMainParticular}>
            <Text style={styles.textLocation}> Distance from you</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }]}> {item.time}</Text>
          </View>
          <View style={styles.RowMainParticular}>
            <Text style={styles.textLocation}> Location</Text>
            <Text style={[styles.textLocation, { fontFamily: FontsGeneral.MEDIUMSANS, fontSize: 15 }]}> {item.Location}</Text>
          </View>
        </View>
        {/* <View style={{ paddingHorizontal: 10, paddingRight: 15, borderBlockColor: '#747474', borderBottomWidth: 0.2, paddingBottom: 10, paddingTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={styles.textGroundTitle}> Related Services</Text>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <BackIcon name="arrowright" size={26} color='#747EEF' style={{ backgroundColor: 'white', padding: 5, borderRadius: 50 }} />
          </TouchableOpacity>
        </View> */}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button text="Hire Now" Link={()=>navigation.navigate('StepOne',{item})} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  RowMainParticular: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5
  },
  locationTextContainer: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    borderBlockColor: '#747474',
    borderBottomWidth: 0.2,
    paddingBottom: 20
  },
  textLocation: {
    fontSize: 14,
    fontFamily: Fonts.REGULAR,
    color: 'black',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonText: {
    fontSize: 15,
    fontFamily: Fonts.MEDIUM
  },
  TitleGroundDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  textGroundTitle: {
    fontSize: 19,
    color: 'black',
    letterSpacing: 0.1,
    lineHeight: 36,
    fontFamily: FontsGeneral.MEDIUMSANS,
    paddingTop: 5
  },
  container: {
    flex: 1,
    position: 'relative',
    marginTop: 0,
    padding: 0,
    backgroundColor: 'white',
  },
  backgroundImage: {
    width: "100%",
    height: 250,
    objectFit: 'cover'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
  }
});

export default ParticularGroundScreen;
