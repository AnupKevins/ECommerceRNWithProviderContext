import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useTheme} from '../context/themeContext';
import {ThemeComponent} from '../components/themeComponent';

const ProfileScreen = () => {
  const {backgroundColor, textColor, theme} = useTheme();

  // Set the tint color of the profile picture based on the theme
  const profilePictureTintColor = theme === 'light' ? 'black' : '#ffffff';

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Image
        source={require('../assets/profile_picture.png')} // Replace with your profile picture
        style={[styles.profilePicture, {tintColor: profilePictureTintColor}]} // Apply the tint color
      />
      <Text style={[styles.username, {color: textColor}]}>John</Text>
      <Text style={[styles.bio, {color: textColor}]}>Software Engg</Text>
      <View style={styles.themeContainer}>
        <ThemeComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  themeContainer: {
    flex: 1, // Take up remaining space
    justifyContent: 'flex-end', // Align ThemeComponent to the bottom
  },
});

export default ProfileScreen;
