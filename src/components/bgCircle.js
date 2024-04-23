import React from 'react';
import {View, StyleSheet} from 'react-native';

const CircleComponent = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.largeOutline]} />
      <View style={[styles.smallOutline]} />
      <View style={[styles.largeFill]} />
      <View style={[styles.smallFill]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeOutline: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#FDDFCE',
    position: 'absolute',
    borderTopColor: 'transparent', // Make top curve transparent
    borderBottomColor: 'transparent', // Make bottom curve transparent
  },
  smallOutline: {
    width: 250,
    height: 250,
    borderRadius: 120,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#FDDFCE',
    borderTopColor: 'transparent', // Make top curve transparent
    borderBottomColor: 'transparent', // Make bottom curve transparent
  },
  largeFill: {
    width: 200,
    height: 200,
    position: 'absolute',
    borderRadius: 100,
    backgroundColor: '#FDDFCE', // Remove background color for large fill circle
  },
  smallFill: {
    width: 160,
    height: 160,
    backgroundColor: '#FDEADD', // Remove background color for small fill circle
    borderRadius: 80,
    position: 'absolute',
  },
});

export default CircleComponent;
