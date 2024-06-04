import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  FontAwesome  from 'react-native-vector-icons/Entypo'
import { Fonts, FontsGeneral } from '../style';

const RatingSummary = ({ ratings, averageRating, totalReviews, recommendationPercentage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.barsContainer}>
        {Object.keys(ratings).map((rating) => (
          <View key={rating} style={styles.ratingRow}>
            <Text style={styles.ratingText}>{rating}</Text>
            <View style={styles.barBackground}>
              <View style={[styles.barFill, { width: `${(ratings[rating] / totalReviews) * 100}%` }]} />
            </View>
          </View>
        ))}
      </View>
      <View style={styles.summaryContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.averageRating}>{averageRating.toFixed(1)}</Text>
          <FontAwesome name="star" size={20} color="#F39D00" />
        </View>
        <Text style={styles.reviewsText}>{totalReviews} Reviews</Text>
        <Text style={styles.recommendationText}>{recommendationPercentage}% </Text>
        <Text style={styles.reviewsText}>Recommended</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom:20
  },
  barsContainer: {
    flex: 1,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    width: 10,
    textAlign: 'right',
    marginRight: 5,
    fontFamily:FontsGeneral.REGULARSANS,
    
    
  },
  barBackground: {
    flex: 1,
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  barFill: {
    height: 10,
    backgroundColor: '#747EEF',
    borderRadius: 5,
  },
  summaryContainer: {
    alignItems: 'flex-end',
    paddingLeft:30
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  averageRating: {
    fontSize: 23,
    marginTop: 5,
    color:'black',
    fontFamily:FontsGeneral.MEDIUMSANS
  },
  reviewsText: {
    fontSize: 11,
    color: 'black',
    fontFamily:Fonts.REGULAR
  },
  recommendationText: {
    fontSize: 23,
    marginTop: 5,
    color:'black',
    fontFamily:FontsGeneral.MEDIUMSANS
  },
});

export default RatingSummary;
