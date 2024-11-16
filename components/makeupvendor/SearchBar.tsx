import React from 'react';
import { View, StyleSheet, TextInput, Image } from 'react-native';

export const SearchBar: React.FC = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec6b1dc0e3345375b01747546b10e425922b35a6198554586a289708af3444d8?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Salon & Spa"
          placeholderTextColor="rgba(0, 0, 0, 1)"
        />
      </View>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/267864b32f6a236957e3d181edf50ace8f19fe83fbf42ba12154764d29c50a9b?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
        style={styles.filterIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 22,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 60,
    borderColor: 'rgba(207, 199, 199, 1)',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 14,
  },
  searchIcon: {
    width: 26,
    aspectRatio: 1.08,
    marginRight: 14,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Poppins, sans-serif',
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
  },
  filterIcon: {
    width: 35,
    aspectRatio: 1.06,
  },
});