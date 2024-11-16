import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ProfileHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>MR</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Midhat Rizvi</Text>
        <Text style={styles.email}>midhatrizvi@gmail.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: 285,
    marginBottom: 47,
  },
  avatarContainer: {
    width: 102,
    height: 102,
    borderRadius: 50,
    backgroundColor: '#780C60',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 36,
    color: '#FFFFFF',
    fontWeight: '700',
    fontFamily: 'Poppins, sans-serif',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    color: '#1D1D1D',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Poppins, sans-serif',
  },
  email: {
    color: '#333',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins, sans-serif',
    marginTop: 6,
  },
});

export default ProfileHeader;