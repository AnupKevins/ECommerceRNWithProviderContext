import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ProductScreen from './src/screens/productScreen';
import {Provider} from './src/context/productContext';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LikeScreen from './src/screens/LikeScreen';
import {ProductProvider} from './src/context/productContext';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ProductProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={ProductScreen} />
          <Tab.Screen name="Likes" component={LikeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
};

export default App;
