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
import {ProductContext} from '../context/tabProductContext';

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 30) / 2;

const LikeScreen = ({navigation}) => {
  const {state, addToFavourites} = useContext(Context);
  //const {selectedItems} = useContext(ProductContext);

  //   const likeProducts = state.find(
  //     likeProduct => likeProduct.id === navigation.getParam('id'),
  //   );
  console.log(state);
  return (
    <SafeAreaView>
      <View>
        <View>
          <Text>"hello"</Text>
        </View>
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
    height: 260,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    alignContent: 'center',
  },
  description: {
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: '50%', // Adjust the height as needed
    borderRadius: 10, // Ensure the image has rounded corners
    marginBottom: 10,
  },
  button: {
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  heartIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default LikeScreen;
