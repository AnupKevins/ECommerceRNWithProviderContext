// ExampleComponent.js
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '../context/themeContext';

export const ThemeComponent = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
      }}>
      <Text style={{color: theme === 'light' ? '#000000' : '#ffffff'}}>
        Current Theme: {theme}
      </Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={{color: theme === 'light' ? '#0000ff' : '#ff0000'}}>
          Toggle Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
};
