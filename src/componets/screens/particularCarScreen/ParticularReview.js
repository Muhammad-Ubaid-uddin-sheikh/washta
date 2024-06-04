import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import RatingSummary from './Rating';
import ReviewItem from './ReviewItem';
import Button from '../../allDynamicsComponets/Button';
const ParticularReview = () => {
    const ratings = {
        1: 150,
        2: 70,
        3: 30,
        4: 15,
        5: 8,
      };
      const averageRating = 4.5;
      const totalReviews = 273;
      const recommendationPercentage = 88;
      const reviews = [
        { id: '1', user: 'John Doe', rating: 5, reviewText: 'Great service and friendly staff! If youre looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.' },
        { id: '2', user: 'Jane Smith', rating: 4, reviewText: 'Good experience overall, vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.' },
        { id: '3', user: 'Alice Johnson', rating: 3, reviewText: 'Average service, nothing special.vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.' },
        { id: '4', user: 'Bob Brown', rating: 5, reviewText: 'Fantastic! Highly recommend.vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.' },
        { id: '5', user: 'Charlie Davis', rating: 2, reviewText: 'Not very satisfied with the service.vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.' },
        { id: '6', user: 'Diana Evans', rating: 4, reviewText: 'Pretty good, will visit again.vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.' },
        { id: '7', user: 'Edward Foster', rating: 5, reviewText: 'Excellent! Could not have been better.vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.' },
        { id: '8', user: 'Fiona Green', rating: 3, reviewText: 'It was okay, expected more.vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.' },
        { id: '9', user: 'George Harris', rating: 1, reviewText: 'Very poor service. Will not return.vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.' },
        { id: '10', user: 'Hannah King', rating: 4, reviewText: 'Good, but a bit pricey.vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.' },
      ];
  return (
    <View style={{flex:1}}>
        <View style={{paddingHorizontal:20}}>
      <RatingSummary
        ratings={ratings}
        averageRating={averageRating}
        totalReviews={totalReviews}
        recommendationPercentage={recommendationPercentage}
      />
      </View>
      <View style={{flex:1,paddingTop:0,borderTopWidth:0.4,borderColor: '#a6a6a6',paddingBottom:60}}>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        style={{paddingHorizontal:20,}}
        
        renderItem={({ item }) => (
          <ReviewItem
            user={item.user}
            rating={item.rating}
            reviewText={item.reviewText}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="Write a review" Link={()=>navigation.navigate('StepOne',{item})} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
      }
})
export default ParticularReview