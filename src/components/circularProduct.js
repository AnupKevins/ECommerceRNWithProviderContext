import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const CircleImage = ({imagePath}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bigCircle}></View>
      <View style={styles.smallCircle}></View>
      <Image source={{uri: imagePath}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'center',
  },
  bigCircle: {
    position: 'center',
    backgroundColor: 'blue',
    width: '', // adjust size as needed
    height: 150, // adjust size as needed
    borderRadius: 75, // to make it a circle
  },
  smallCircle: {
    position: 'center',
    backgroundColor: 'green',
    width: 100, // adjust size as needed
    height: 100, // adjust size as needed
    borderRadius: 50, // to make it a circle
  },
  image: {
    position: 'absolute',
    zIndex: 1, // to make it appear on top of circles
    width: 50, // adjust size as needed
    height: 50, // adjust size as needed
    borderRadius: 25, // to make it a circle
  },
});

export default CircleImage;
