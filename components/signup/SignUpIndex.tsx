import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import SocialSignUpButton from './SocialSignupButton';
import SignUpForm from './SignUpForm';
import Divider from './Divider';

const SignUpIndex: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2efda33d87ba56be772751410757cdb5185e9ea6e56d537bd1caafcbf74d5287?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
        style={styles.logo}
      />
      <SocialSignUpButton
        provider="Google"
        iconUri="https://cdn.builder.io/api/v1/image/assets/TEMP/520b6be3ec3e1dcb8bb39e96ecbd2f87edc487958fd7daadeb13d98e4e022f0b?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a"
      />
      <SocialSignUpButton
        provider="Facebook"
        iconUri="https://cdn.builder.io/api/v1/image/assets/TEMP/aa56535d845918174dea9f32a6a4710514b869180a043b72a2df915342ec311f?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a"
      />
      <Divider />
      <SignUpForm />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    paddingLeft: 10,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
backgroundColor: '#F8E9F0'
  },
  logo: {
    position: "relative",
    display: "flex",
    marginTop: 5,
    width: 36,
    aspectRatio: 1,
  },
  bottomBar: {
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "#1D1D1D",
    display: "flex",
    marginTop: 74,
    width: 140,
    flexShrink: 0,
    height: 6,
  },
});

export default SignUpIndex;