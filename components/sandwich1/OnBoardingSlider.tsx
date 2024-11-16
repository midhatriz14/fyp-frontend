import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

interface OnboardingSliderProps {}

const OnboardingSlider: React.FC<OnboardingSliderProps> = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a62a2b26d25ae294c40e804b0fcc7c21fd9fa0dd4969b13827cb9cd5cde019f?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
        style={styles.activeSlide}
      />
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1fe86af0e5d1745fc4d293eb3892baf18f34115408c53e051121325f733096f6?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
        style={styles.inactiveSlide}
      />
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1fe86af0e5d1745fc4d293eb3892baf18f34115408c53e051121325f733096f6?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
        style={styles.inactiveSlide}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 98,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  activeSlide: {
    borderRadius: 30,
    width: 15,
    aspectRatio: 1.88,
  },
  inactiveSlide: {
    borderRadius: 30,
    width: 8,
    aspectRatio: 1,
  },
});

export default OnboardingSlider;