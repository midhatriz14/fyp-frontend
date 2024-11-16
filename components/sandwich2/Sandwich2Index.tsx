import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import OnboardingContent from './OnBoardingContent';
import NavigationControls from './NavigationControls';

const Sandwich2Index: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a042ab8ba1a0828fee72adca52d85507837f67f3787f6dcf7bb74c03721f23b?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.headerImage}
        />
      </View>
      <OnboardingContent />
      <NavigationControls />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 73,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
    backgroundColor: '#F8E9F0'
  },
  header: {
    display: "flex",
    marginTop: 5,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "column",
    alignItems: "stretch",
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

export default Sandwich2Index;