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

import {ProductContext} from '../context/productContext';
import Rating from '../components/ratingItem';

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 30) / 2;

const ProductScreen = ({navigation}) => {
  const productContext = useContext(ProductContext);

  const [selectedItems, setSelectedItems] = useState({}); // State variable to track selected items

  const handlePress = item => {
    console.log('......24' + productContext.wishListedProducts);
    if (productContext.wishListedProducts.includes(item)) {
      productContext.removeWishListedItem(item);
    } else {
      productContext.addWishListedItem(item);
    }

    setSelectedItems(prevState => ({
      ...prevState,
      [item.id]: !prevState[item.id], // Toggle selection state for the item
    }));
  };

  // useEffect(() => {
  //   getProducts();
  // }, [getProducts]);
  return (
    <SafeAreaView>
      <View>
        {productContext.productData && (
          <FlatList
            numColumns={2}
            data={productContext.productData}
            keyExtractor={products => products.id}
            renderItem={({item, index}) => {
              return (
                <View style={[styles.card, {width: cardWidth}]}>
                  <View style={styles.percentageView}>
                    <View style={styles.textContainer}>
                      <Text style={styles.percentageText}>30%</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => handlePress(item)}
                      style={styles.heartButton}>
                      <Image
                        source={
                          selectedItems[item.id]
                            ? require('../assets/heartRed.png')
                            : require('../assets/heartGrey.png')
                        }
                        style={styles.heartIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.imageContainer}>
                    <Image
                      source={
                        productContext.arrBGImages[
                          index % productContext.arrBGImages.length
                        ]
                      }
                      style={styles.imageBG}
                    />
                    <Image source={{uri: item.image}} style={styles.image} />
                    {/* {item.image !== null ? (
                      <CircleImage imagePath={item.image} />
                    ) : null} */}
                  </View>

                  <Text numberOfLines={1} style={styles.title}>
                    {item.title}
                  </Text>
                  <Text numberOfLines={1} style={styles.price}>
                    $ {item.price}
                  </Text>
                  <View style={styles.ratingContainer}>
                    {item.rating.rate !== undefined &&
                    item.rating.rate !== null ? (
                      <Rating value={item.rating.rate} />
                    ) : (
                      <Text>{item.rating.rate}/5</Text>
                    )}
                  </View>
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
    color: '#494F86',
    fontSize: 10,
    fontWeight: 'bold',
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
    textAlign: 'center',
    color: '#686D9B',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#4952B0',
  },
  ratingContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
});

export default ProductScreen;
