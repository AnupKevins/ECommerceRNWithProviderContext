import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Rating = ({value}) => {
  // Create an array of 5 elements to represent each star
  const stars = Array.from({length: 5}, (_, index) => (
    <Text
      key={index}
      style={[
        styles.star,
        index < value ? styles.filledStar : styles.outlinedStar,
      ]}>
      ★
    </Text>
  ));

  return (
    <View style={styles.container}>
      {stars}
      <Text style={styles.ratingValue}>({value}/5)</Text>
      {''}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    fontSize: 8,
    color: 'gray',
    marginRight: 2, // Add some space between stars
  },
  filledStar: {
    color: 'gold', // Color of filled star
  },
  outlinedStar: {
    color: 'gray', // Color of outlined star
  },
  ratingValue: {
    marginLeft: 5, // Add some space between stars and rating value
    fontSize: 8,
    color: 'grey',
    fontWeight: 'bold',
  },
});

export default Rating;
