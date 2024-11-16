import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import SocialLoginButton from './SocialLoginButton';
import OrDivider from './OrDivider';
import LoginForm from './LoginForm';
import BottomIndicator from './ButtonIndicator';

const LoginIndex: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4372f11214dc77f9a489663e401758d2ece8d27654072202c366b200f39b2af0?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
        style={styles.logo}
      />
      <SocialLoginButton
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/46b1f0daf9a989b77aaa5ad5f26018270a20e4f1d84273791a767e4f86d51adb?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a"
        text="Login with Google"
      />
      <SocialLoginButton
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/be0e1fa1016cf2d701543db037975a8f6f34d3c551ce6f1810fe53c3cc8b8642?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a"
        text="Login with Facebook"
      />
      <OrDivider />
      <LoginForm />
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
    paddingLeft: 7,
    paddingRight: 7,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
backgroundColor: '#F8E9F0'
  },
  logo: {
    position: "relative",
    display: "flex",
    marginTop: 10,
    width: 36,
    aspectRatio: 1,
  },
});

export default LoginIndex;