import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const SearchBar: React.FC = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <Image
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1546d2d2317840aa01571cd4367c9f87b5dd9bf7d881b23499427f35f438cbb3?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' }}
          style={styles.searchIcon}
          resizeMode="contain"
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Wedding Caterers"
          placeholderTextColor="#000000"
        />
      </View>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6dd871f72b3b8154ba0fff3a0f6002446a6e9b8dfc1fac2d9a0dd585fa863f85?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' }}
        style={styles.filterIcon}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 26,
    marginHorizontal: 25,
  },
  searchInputContainer: {
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
    width: 25,
    height: 25,
    marginRight: 14,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Poppins, sans-serif',
    fontSize: 16,
    color: '#000000',
  },
  filterIcon: {
    width: 35,
    height: 35,
    marginLeft: 10,
  },
});

export default SearchBar;