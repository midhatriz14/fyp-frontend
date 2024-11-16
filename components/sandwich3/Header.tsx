import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/eca2e59d059de0cda53aa7ef521a6d3023039e72a4d1f0e51a627e4fe1af4f36?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.icon}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2be2359319f36157fb0119f4ef34acba6062fc8842f086b08d6bf718fdc9746c?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.icon}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/70f9bb2396c34b356de8d7ea9cdb6b8ece6a653ce1eef1d05f0f16d6eb6b93cf?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.icon}
        />
      </View>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a042ab8ba1a0828fee72adca52d85507837f67f3787f6dcf7bb74c03721f23b?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
        style={styles.headerImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    display: "flex",
    marginTop: 5,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "column",
    alignItems: "stretch",
  },
  iconContainer: {
    alignSelf: "stretch",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    flexDirection: "row",
    gap: 6,
  },
  icon: {
    position: "relative",
    display: "flex",
    width: 18,
    flexShrink: 0,
    aspectRatio: 1,
  },
  headerImage: {
    position: "relative",
    display: "flex",
    marginTop: 142,
    marginRight: 63,
    width: 87,
    aspectRatio: 0.95,
  },
});

export default Header;