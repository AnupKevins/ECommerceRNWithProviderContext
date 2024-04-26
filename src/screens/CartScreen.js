import React, {useState, useContext, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {ProductContext} from '../context/productContext';
import ProductRepository from '../repository/productRepository';

const CartScreen = () => {
  const productContext = useContext(ProductContext);

  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  const fetchCartItems = async () => {
    try {
      const products = await ProductRepository.getAllProducts();
      const mappedCartItems = products.map(product => ({...product, count: 1}));
      setCartItems(mappedCartItems);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchCartItems();
    }, []),
  );

  const renderCartItem = ({item, index}) => (
    <View style={styles.cardContainer}>
      <View style={styles.itemInfoContainer}>
        {/* <Image
          source={require('../assets/profile_picture.png')}
          style={styles.image}
        /> */}
        <View style={styles.imageContainer}>
          <Image
            source={productContext.arrBGImages[index % cartItems.length]}
            style={styles.imageBG}
          />
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
          <Text numberOfLines={1} style={styles.description}>
            {item.price}
          </Text>
        </View>
      </View>
      <View style={styles.counterContainer}>
        <TouchableOpacity
          style={styles.counterMinusCard}
          onPress={() => updateItemCount(item.id, item.count - 1)}>
          <Text style={styles.counterButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counterValue}>{item.count}</Text>
        <TouchableOpacity
          style={styles.counterPlusCard}
          onPress={() => updateItemCount(item.id, item.count + 1)}>
          <Text style={styles.counterButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const updateItemCount = (itemId, newCount) => {
    if (newCount <= 0) {
      // If the new count is zero or negative, delete the item from the cart
      ProductRepository.deleteProduct(itemId);
      const updatedCartItems = cartItems.filter(item => item.id !== itemId);
      setCartItems(updatedCartItems);
    } else {
      // Otherwise, update the count of the item
      const updatedCartItems = cartItems.map(item => {
        if (item.id === itemId) {
          return {...item, count: newCount};
        }
        return item;
      });
      setCartItems(updatedCartItems);
    }
  };

  return isLoading ? (
    <Text>Loading...</Text>
  ) : (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <Text style={styles.centeredText}>Cart is empty</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
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
  itemInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'column',
    marginRight: 10,
    padding: 5,
    width: '70%',
  },
  imageContainer: {
    height: 60,
    width: 60,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBG: {
    height: '100%',
    width: '100%', // Adjust the height as needed
    resizeMode: 'contain', // Change resizeMode to stretch
    position: 'absolute', // Set position to absolute
  },
  image: {
    height: '50%',
    width: '50%', // Adjust the height as needed
    borderRadius: 10, // Ensure the image has rounded corners
    zIndex: 1,
    position: 'absolute',
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    color: '#686D9B',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#4952B0',
    fontWeight: 'bold',
  },
  counterContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 30,
    marginRight: 10,
  },
  counterMinusCard: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
  },
  counterPlusCard: {
    backgroundColor: '#A0DBF5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
  },
  counterButton: {
    fontSize: 20,
    color: 'blue',
  },
  counterValue: {
    fontSize: 18,
    margin: 5,
  },
  centeredText: {
    marginTop: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CartScreen;
