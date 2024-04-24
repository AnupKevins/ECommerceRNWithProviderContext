import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import ProductScreen from './src/screens/productScreen';
import ProductDetailScreen from './src/screens/productDetailScreen';
import {Provider} from './src/context/productContext';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LikeScreen from './src/screens/LikeScreen';
import {ProductProvider} from './src/context/productContext';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeTab';

  switch (routeName) {
    case 'HomeTab':
      return 'Products';
    case 'Likes':
      return 'WishList';
  }
}

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeTab"
        component={ProductScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="Likes"
        component={LikeScreen}
        options={{tabBarLabel: 'Likes'}}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeStack"
            component={HomeTabs}
            options={({route}) => ({
              headerTitle: getHeaderTitle(route),
            })}
          />
          <Stack.Screen
            name="Details"
            component={ProductDetailScreen}
            options={{headerTitle: 'Products Details'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
};

export default App;
