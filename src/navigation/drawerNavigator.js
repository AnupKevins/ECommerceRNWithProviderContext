import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeTabs} from './TabNavigation';
import ProfileScreen from '../screens/profileScreen';
import ThemeScreen from '../screens/ThemeScreen';
import {getHeaderTitle} from './HeaderTitle';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeDrawer">
      <Drawer.Screen
        name="HomeDrawer"
        component={HomeTabs}
        options={({route}) => ({
          title: getHeaderTitle(route),
        })}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Theme" component={ThemeScreen} />
    </Drawer.Navigator>
  );
};
