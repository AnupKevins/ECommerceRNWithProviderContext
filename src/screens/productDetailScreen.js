import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';

import CircleComponent from '../components/bgCircle';

import {ProductContext} from '../context/productContext';

const ProductDetailScreen = ({route}) => {
  const {product} = route.params;

  console.log(product);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.percentageText}>30%</Text>
        </View>
        <View style={styles.imageContainer}>
          <CircleComponent style={styles.imageBG} />
          <Image source={{uri: product.image}} style={styles.image} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: '#A0DBF5', // Background color for the percentage text container
    padding: 5,
    borderRadius: 5,
    marginBottom: -10,
    marginTop: 30,
  },
  percentageText: {
    color: '#494F86',
    fontSize: 10,
    fontWeight: 'bold',
  },
  imageContainer: {
    position: 'relative', // Add position relative
    alignItems: 'center',
    height: 300,
    justifyContent: 'center',
    width: '100%',
  },
  imageBG: {
    position: 'absolute', // Add position absolute
    zIndex: -1, // Adjust zIndex to place behind the image
    width: 300,
    height: 300,
  },
  image: {
    width: 120,
    height: 120, // Adjust the height as needed
    zIndex: 1,
  },
});

export default ProductDetailScreen;
