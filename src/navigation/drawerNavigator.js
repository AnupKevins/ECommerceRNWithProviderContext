import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {LikeStackNavigator} from './stackNavigator';
import BottomTabNavigator from './tabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="AllProduct" component={BottomTabNavigator} />
      <Drawer.Screen name="Wish" component={LikeStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
