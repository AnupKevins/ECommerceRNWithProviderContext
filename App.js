import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ProductScreen from './src/screens/productScreen';
import ProductDetailScreen from './src/screens/productDetailScreen';
import {Provider} from './src/context/productContext';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LikeScreen from './src/screens/LikeScreen';
import {ProductProvider} from './src/context/productContext';

const HomeStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={ProductScreen} />
      <HomeStack.Screen name="Details" component={ProductDetailScreen} />
    </HomeStack.Navigator>
  );
}

const App = () => {
  return (
    <ProductProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Likes" component={LikeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
};

export default App;
