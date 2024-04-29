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
  TextInput,
  ActivityIndicator,
} from 'react-native';

import {ProductContext} from '../context/productContext';
import Rating from '../components/ratingItem';

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 30) / 2;

const ProductScreen = ({navigation}) => {
  const productContext = useContext(ProductContext);

  const [selectedItems, setSelectedItems] = useState({}); // State variable to track selected items

  const [searchTerm, setSearchTerm] = useState(''); // State variable to hold the search term
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [showSearchIcon, setShowSearchIcon] = useState(true); // State variable to show/hide search icon
  const [loading, setLoading] = useState(true); // State variable to manage loading state
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

  const fetchProductData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      productContext.setProductData(data);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error('Error fetching product data:', error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    if (productContext.productData) {
      const filtered = productContext.productData.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, productContext.productData]);

  return (
    <SafeAreaView>
      <View>
        {/* Search bar */}
        <View style={styles.searchContainer}>
          {showSearchIcon && (
            <TouchableOpacity style={styles.searchButton}>
              <Image
                source={require('../assets/search.png')}
                style={styles.searchImage}
              />
            </TouchableOpacity>
          )}
          <TextInput
            style={[
              styles.searchInput,
              {marginRight: showSearchIcon ? 0 : 30}, // Adjust paddingRight based on showSearchIcon state
            ]}
            placeholder="Search"
            onChangeText={text => {
              setSearchTerm(text);
              setShowSearchIcon(text === '');
            }}
            value={searchTerm}
          />
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" /> // Show loader while loading
        ) : filteredProducts.length > 0 ? (
          <FlatList
            numColumns={2}
            data={filteredProducts}
            keyExtractor={product => product.id.toString()} // Use toString() for keyExtractor
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Details', {product: item})}>
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
              </TouchableOpacity>
            )}
          />
        ) : (
          <Text style={styles.centeredText}>No products found.</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  searchButton: {
    height: 30,
    width: 30,
  },
  searchImage: {
    margin: 5,
    height: 20,
    width: 20,
  },
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
  centeredText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProductScreen;
