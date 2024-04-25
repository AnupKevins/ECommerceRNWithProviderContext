// ProfileScreen.js

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/profile_picture.png')} // Replace with your profile picture
        style={styles.profilePicture}
      />
      <Text style={styles.username}>John</Text>
      <Text style={styles.bio}>Software Engg</Text>
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
  },
});

export default ProfileScreen;
