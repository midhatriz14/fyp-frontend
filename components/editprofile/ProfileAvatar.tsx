import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type ProfileAvatarProps = {
  initials: string;
  avatarUrl: string;
};

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ initials, avatarUrl }) => {
  return (
    <View style={styles.avatarContainer}>
      <View style={styles.initialsContainer}>
        <Text style={styles.initialsText}>{initials}</Text>
      </View>
      <Image
        resizeMode="contain"
        source={{ uri: avatarUrl }}
        style={styles.avatarImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    display: "flex",
    marginTop: 40,
    width: 122,
    paddingLeft: 24,
    paddingRight: 2,
    paddingTop: 33,
    paddingBottom: 2,
    flexDirection: "column",
    height: 122,
  },
  initialsContainer: {
    alignSelf: "center",
  },
  initialsText: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 36,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "700",
    textAlign: "center",
  },
  avatarImage: {
    borderRadius: 70,
    position: "relative",
    display: "flex",
    width: 34,
    aspectRatio: 1,
  },
});

export default ProfileAvatar;