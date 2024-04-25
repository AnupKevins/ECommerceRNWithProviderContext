import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {ProductContext} from '../context/productContext';

const CartScreen = () => {
  const productContext = useContext(ProductContext);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },
      count: 1,
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      category: "men's clothing",
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      rating: {
        rate: 4.1,
        count: 259,
      },
      count: 1,
    },
  ]);

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
            {item.description}
          </Text>
        </View>
      </View>
      <View style={styles.counterContainer}>
        <TouchableOpacity
          onPress={() => updateItemCount(item.id, item.count - 1)}>
          <Text style={styles.counterButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counterValue}>{item.count}</Text>
        <TouchableOpacity
          onPress={() => updateItemCount(item.id, item.count + 1)}>
          <Text style={styles.counterButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const updateItemCount = (itemId, newCount) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return {...item, count: newCount};
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id.toString()}
      />
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
  },
  counterContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 30,
    marginRight: 10,
  },
  counterButton: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: 'blue',
  },
  counterValue: {
    fontSize: 18,
  },
});

export default CartScreen;
