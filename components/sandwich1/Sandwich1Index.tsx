import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import OnboardingSlider from './OnBoardingSlider';
import NavigationButtons from './NavigationButton';

interface VendorSearchScreenProps {}

const Sandwich1Index: React.FC<VendorSearchScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4fb476eba138edb6f746bb6393f46a23238c3e02af4b453d31799a53813cd8c8?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
        style={styles.decorativeImage}
      />
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/364bfbd42c94b15df86b129eade702a28ebd72686b7f1cc5cf5b33eae0048a62?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
        style={styles.mainImage}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          "Vendors at Your Fingertips!"
        </Text>
        <Text style={styles.description}>
          Easily search, sort by price and reviews, and find the perfect vendors for your event in no time.
        </Text>
      </View>
      <OnboardingSlider />
      <NavigationButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingBottom: 73,
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: '#F8E9F0'
  },
  decorativeImage: {
    position: 'relative',
    display: 'flex',
    marginTop: 142,
    marginRight: 63,
    width: 87,
    aspectRatio: 0.95,
  },
  mainImage: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    maxWidth: 267,
    aspectRatio: 1.16,
  },
  contentContainer: {
    marginTop: 63,
  },
  title: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 18,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0.9,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  description: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '400',
    lineHeight: 15,
    letterSpacing: 0.8,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default Sandwich1Index;