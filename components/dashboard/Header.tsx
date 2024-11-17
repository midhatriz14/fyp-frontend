import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.addressContainer}>
          <Text style={styles.location}>House 30, ISB ▼</Text>
        </View>
        <Image
          resizeMode="contain"
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/198f4cc8-49ff-4ccc-b97b-619e572143d4?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
          }}
          style={styles.notificationIcon}
        />
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome{'\n'}Midhat!</Text>
        <TouchableOpacity style={styles.planButton}>
          <Text style={styles.planButtonText}>Plan an Event</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search vendors and venues"
        placeholderTextColor="#9E9E9E"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#F8E9F0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  planButton: {
    backgroundColor: '#8B006D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center',
    height: 40,
  },
  planButtonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
  searchBar: {
    height: 50,
    borderRadius: 20,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    fontSize: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    marginTop: 16,
  },
});

export default Header;
