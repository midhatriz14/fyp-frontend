import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

interface SocialLoginButtonProps {
  icon: string;
  text: string;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ icon, text }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
        <Image
          resizeMode="contain"
          source={{ uri: icon }}
          style={styles.icon}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(29, 29, 29, 0.50)",
    display: "flex",
    marginTop: 10,
    width: "100%",
    maxWidth: 300,
    paddingLeft: 58,
    paddingRight: 58,
    paddingTop: 11,
    paddingBottom: 11,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
  },
  icon: {
    width: 28,
    aspectRatio: 1,
  },
  text: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    color: "#1D1D1D",
    fontWeight: "400",
  },
});

export default SocialLoginButton;