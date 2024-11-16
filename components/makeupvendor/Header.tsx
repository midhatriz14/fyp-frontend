import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.time}>10:30</Text>
      <View style={styles.icons}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddf1b23e396cf7d7a8d3723a7a0c957911857134f7167b260c733cdfc1531e8d?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.icon}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/77da00b2cee6448f51dee88b7e0b476ea5cdddfa7475d23737dad5d44f367c24?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.icon}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e659fe28d9022342cbabeb29fba683b7a93851c6d3d2c8434b335b27e2735f9e?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    opacity: 0.8,
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 11,
    marginTop: 5,
  },
  time: {
    color: '#1D1D1D',
    fontFamily: 'Inter, sans-serif',
    fontSize: 13,
    fontWeight: '600',
  },
  icons: {
    flexDirection: 'row',
    gap: 6,
  },
  icon: {
    width: 18,
    aspectRatio: 1,
  },
});