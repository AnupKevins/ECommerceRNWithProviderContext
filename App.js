import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from './src/context/productContext';
import {ThemeProvider} from './src/context/themeContext';
import ProductScreen from './src/screens/productScreen';
import ProfileScreen from './src/screens/profileScreen';
import CartScreen from './src/screens/CartScreen';
import ProductDetailScreen from './src/screens/productDetailScreen';
import LikeScreen from './src/screens/LikeScreen';
import ThemeScreen from './src/screens/ThemeScreen';
import {ProductProvider} from './src/context/productContext';
import {Image} from 'react-native';
import {useTheme} from './src/context/themeContext';

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
    case 'Carts':
      return 'My Carts';
  }
}

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused
              ? require('./src/assets/home_active.png')
              : require('./src/assets/home_inactive.png');
          } else if (route.name === 'Likes') {
            iconName = focused
              ? require('./src/assets/like_active.png')
              : require('./src/assets/like_inactive.png');
          } else if (route.name === 'Carts') {
            iconName = focused
              ? require('./src/assets/cart_active.png')
              : require('./src/assets/cart_inactive.png');
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
      <Drawer.Screen name="Theme" component={ThemeScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ProductProvider>
        <NavigationContainer>
          <AppStackContent />
        </NavigationContainer>
      </ProductProvider>
    </ThemeProvider>
  );
};

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

export default App;
