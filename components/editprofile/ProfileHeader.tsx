import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type ProfileHeaderProps = {
  time: string;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ time }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{time}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/eca2e59d059de0cda53aa7ef521a6d3023039e72a4d1f0e51a627e4fe1af4f36?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.signalIcon}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2be2359319f36157fb0119f4ef34acba6062fc8842f086b08d6bf718fdc9746c?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.wifiIcon}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/70f9bb2396c34b356de8d7ea9cdb6b8ece6a653ce1eef1d05f0f16d6eb6b93cf?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.batteryIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 11,
    paddingBottom: 11,
    gap: "40px 237px",
  },
  timeContainer: {
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
  },
  timeText: {
    color: "#1D1D1D",
    fontFamily: "Inter, sans-serif",
    fontSize: 13,
    fontWeight: "600",
  },
  iconContainer: {
    alignSelf: "stretch",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    gap: 6,
  },
  signalIcon: {
    position: "relative",
    display: "flex",
    width: 18,
    flexShrink: 0,
    aspectRatio: 1.29,
  },
  wifiIcon: {
    position: "relative",
    display: "flex",
    width: 15,
    flexShrink: 0,
    aspectRatio: 1.07,
  },
  batteryIcon: {
    position: "relative",
    display: "flex",
    width: 8,
    flexShrink: 0,
    aspectRatio: 0.57,
  },
});

export default ProfileHeader;