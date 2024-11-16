import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const OnboardingContent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae492f33cc97607af739a1cad59515f5159ee1b5ee6d29225e0f8d0ad8541ef1?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
        style={styles.image}
      />
      <Text style={styles.title}>
        "Your Dream Event, One Vendor Away!"
      </Text>
      <Text style={styles.description}>
        Seamlessly find, connect, and book your ideal vendor to make your event unforgettable.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    paddingLeft: 42,
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    position: "relative",
    display: "flex",
    aspectRatio: 1.76,
    width: '100%',
  },
  title: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    lineHeight: 22,
    letterSpacing: 0.9,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 98,
  },
  description: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0.8,
    textAlign: "center",
    marginTop: 16,
  },
});

export default OnboardingContent;