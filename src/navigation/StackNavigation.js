import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './DrawerNavigator';
import {useTheme} from '../context/themeContext';
import ProductDetailScreen from '../screens/productDetailScreen';

const Stack = createNativeStackNavigator();

const AppStackContent = () => {
  const {backgroundColor, textColor} = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor},
        headerTintColor: textColor,
      }}>
      <Stack.Screen
        name="HomeStack"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={ProductDetailScreen}
        options={{
          headerTitle: 'Products Details',
          headerBackTitle: 'Products',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStackContent;
