import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Divider: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7823a8bc4529f6045921392b4c11b861a022f5e710569d0e6edab56d5f3784c?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
        style={styles.line}
      />
      <Text style={styles.text}>OR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    gap: 10,
  },
  line: {
    width: 115,
    height: 1,
  },
  text: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 12,
    color: "#1D1D1D",
    fontWeight: "300",
  },
});

export default Divider;