import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';

export const SearchBar: React.FC = () => {
  return (
    <View style={styles.searchBar}>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1546d2d2317840aa01571cd4367c9f87b5dd9bf7d881b23499427f35f438cbb3?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search vendor categories"
        placeholderTextColor="rgba(0, 0, 0, 1)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 60,
    borderColor: 'rgba(207, 199, 199, 1)',
    borderWidth: 1,
    marginTop: 26,
    marginHorizontal: 25,
    paddingHorizontal: 15,
    paddingVertical: 14,
  },
  searchIcon: {
    width: 25,
    aspectRatio: 1.04,
    marginRight: 14,
  },
  input: {
    flex: 1,
    fontFamily: 'Poppins, sans-serif',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
  },
});