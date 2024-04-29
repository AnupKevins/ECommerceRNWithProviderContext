// ThemeScreen.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeComponent} from '../components/themeComponent';

const ThemeScreen = () => {
  return (
    <View style={styles.container}>
      <ThemeComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full available space
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ThemeScreen;
