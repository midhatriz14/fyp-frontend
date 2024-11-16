import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

interface SocialSignUpButtonProps {
  provider: string;
  iconUri: string;
}

const SocialSignUpButton: React.FC<SocialSignUpButtonProps> = ({ provider, iconUri }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image
        resizeMode="contain"
        source={{ uri: iconUri }}
        style={styles.icon}
      />
      <Text style={styles.text}>Sign up with {provider}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(29, 29, 29, 0.50)",
    marginTop: 10,
    width: "100%",
    maxWidth: 300,
    paddingVertical: 11,
    paddingHorizontal: 16,
  },
  icon: {
    width: 28,
    aspectRatio: 1,
    marginRight: 14,
  },
  text: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    color: "#1D1D1D",
    fontWeight: "400",
  },
});

export default SocialSignUpButton;