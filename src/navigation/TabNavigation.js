import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import ProductScreen from '../screens/productScreen';
import LikeScreen from '../screens/LikeScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused
              ? require('../assets/home_active.png')
              : require('../assets/home_inactive.png');
          } else if (route.name === 'Likes') {
            iconName = focused
              ? require('../assets/like_active.png')
              : require('../assets/like_inactive.png');
          } else if (route.name === 'Carts') {
            iconName = focused
              ? require('../assets/cart_active.png')
              : require('../assets/cart_inactive.png');
          }

          return (
            <Image source={iconName} style={{width: size, height: size}} />
          );
        },
        tabBarLabel: '',
      })}>
      <Tab.Screen
        name="HomeTab"
        component={ProductScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Likes"
        component={LikeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Carts"
        component={CartScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
