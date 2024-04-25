import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from './src/context/productContext';
import ProductScreen from './src/screens/productScreen';
import ProfileScreen from './src/screens/profileScreen';
import ProductDetailScreen from './src/screens/productDetailScreen';
import LikeScreen from './src/screens/LikeScreen';
import {ProductProvider} from './src/context/productContext';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeTab';

  switch (routeName) {
    case 'HomeTab':
      return 'Products';
    case 'Likes':
      return 'WishList';
  }
}

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={ProductScreen}
        options={{tabBarLabel: 'Home', headerShown: false}}
      />
      <Tab.Screen
        name="Likes"
        component={LikeScreen}
        options={{tabBarLabel: 'Likes', headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
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
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator>
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
      </NavigationContainer>
    </ProductProvider>
  );
};

export default App;
