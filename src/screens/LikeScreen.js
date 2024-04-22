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

import {Context} from '../context/productContext';
import {ProductContext} from '../context/productContext';

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 30) / 2;

const LikeScreen = ({navigation}) => {
  const wishListedContext = useContext(ProductContext);
  console.log('....27' + JSON.stringify(wishListedContext.wishListedProducts));
  return (
    <SafeAreaView>
      <View>
        {wishListedContext.wishListedProducts && (
          <FlatList
            numColumns={2}
            data={wishListedContext.wishListedProducts}
            keyExtractor={products => products.id}
            renderItem={({item, index}) => {
              return (
                <View style={[styles.card, {width: cardWidth}]}>
                  <View style={styles.percentageView}>
                    <View style={styles.textContainer}>
                      <Text style={styles.percentageText}>30%</Text>
                    </View>
                  </View>
                  <View style={styles.imageContainer}>
                    <Image
                      source={
                        wishListedContext.arrBGImages[
                          index % wishListedContext.arrBGImages.length
                        ]
                      }
                      style={styles.imageBG}
                    />
                    <Image source={{uri: item.image}} style={styles.image} />
                  </View>

                  <Text numberOfLines={1} style={styles.title}>
                    {item.title}
                  </Text>
                </View>
              );
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  description: {
    fontSize: 16,
  },
  imageContainer: {
    flex: 1, // Add flex property
    justifyContent: 'center', // Align children vertically center
    alignItems: 'center', // Align children horizontally center
    height: 150,
    marginBottom: 8,
  },
  imageBG: {
    width: '100%',
    height: '100%', // Adjust the height as needed
    resizeMode: 'contain', // Change resizeMode to stretch
    position: 'absolute', // Set position to absolute
  },
  image: {
    width: '50%',
    height: '50%', // Adjust the height as needed
    borderRadius: 10, // Ensure the image has rounded corners
    marginBottom: 10,
    zIndex: 1,
  },
  percentageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 8,
  },
  textContainer: {
    backgroundColor: '#A0DBF5', // Background color for the percentage text container
    padding: 5,
    borderRadius: 5,
  },
  percentageText: {
    color: 'white',
    fontSize: 12,
  },
  heartButton: {
    marginBottom: 8,
  },
  heartIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    alignContent: 'center',
  },
});

export default LikeScreen;
