import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeStackNavigator, LikeStackNavigator} from './stackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="WishList" component={LikeStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
