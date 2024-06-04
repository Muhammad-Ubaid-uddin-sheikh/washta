import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  FontAwesome  from 'react-native-vector-icons/Entypo'
import { Fonts, FontsGeneral } from '../style';
const ReviewItem = ({ user, rating, reviewText }) => {
  return (
    <View style={styles.reviewItemContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.userText}>{user}</Text>
        <View style={styles.starsContainer}>
          {Array.from({ length: 5 }).map((_, index) => (
            <FontAwesome
              key={index}
              name="star"
              size={16}
              color={index < rating ? '#F39D00' : '#e0e0e0'}
            />
          ))}
        </View>
      </View>
      <Text style={styles.reviewText}>{reviewText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewItemContainer: {
   paddingVertical:10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  userText: {
    fontSize: 17,
    fontFamily:FontsGeneral.MEDIUMSANS,
    color:'black'
  },
  starsContainer: {
    flexDirection: 'row',
  },
  reviewText: {
    fontSize: 13,
    color: '#888d90',
    fontFamily:Fonts.REGULAR
  },
});

export default ReviewItem;
