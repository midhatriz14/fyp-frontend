import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const OrDivider: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7823a8bc4529f6045921392b4c11b861a022f5e710569d0e6edab56d5f3784c?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
        style={styles.dividerLine}
      />
      <Text style={styles.orText}>OR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 40,
    alignItems: "center",
    gap: 10,
  },
  dividerLine: {
    width: 115,
    aspectRatio: 111.11,
  },
  orText: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 12,
    color: "#1D1D1D",
    fontWeight: "300",
  },
});

export default OrDivider;