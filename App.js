import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackContent from './src/navigation/StackNavigation';
import {ThemeProvider} from './src/context/themeContext';
import {ProductProvider} from './src/context/productContext';

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

export default App;
