import { router } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const NavigationControls: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton}
        onPress={() => { router.push("/intro") }}>
        <Text style={styles.buttonText}>SKIP</Text>
      </TouchableOpacity>
      <View style={styles.dotsContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1fe86af0e5d1745fc4d293eb3892baf18f34115408c53e051121325f733096f6?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.dot}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a62a2b26d25ae294c40e804b0fcc7c21fd9fa0dd4969b13827cb9cd5cde019f?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.activeDot}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1fe86af0e5d1745fc4d293eb3892baf18f34115408c53e051121325f733096f6?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.dot}
        />
      </View>
      <TouchableOpacity style={styles.nextButton}
        onPress={() => { router.push("/sandwich3") }}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 100,
    width: "100%",
    maxWidth: 305,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "center",
  },
  skipButton: {
    padding: 10,
  },
  nextButton: {
    padding: 10,
  },
  buttonText: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
  },
  dotsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  dot: {
    borderRadius: 30,
    width: 8,
    aspectRatio: 1,
  },
  activeDot: {
    borderRadius: 30,
    width: 15,
    aspectRatio: 1.88,
  },
});

export default NavigationControls;