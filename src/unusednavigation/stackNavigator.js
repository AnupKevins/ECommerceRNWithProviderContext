import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProductScreen from '../screens/productScreen';
import ProductDetailScreen from '../screens/productDetailScreen';
import LikeScreen from '../screens/LikeScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductScreen} />
      <Stack.Screen name="Details" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

const LikeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Likes" component={LikeScreen} />
    </Stack.Navigator>
  );
};

export {HomeStackNavigator, LikeStackNavigator};
