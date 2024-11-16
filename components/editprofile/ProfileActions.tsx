import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type ProfileActionsProps = {
  onEditProfile: () => void;
  onSave: () => void;
};

const ProfileActions: React.FC<ProfileActionsProps> = ({ onEditProfile, onSave }) => {
  return (
    <View style={styles.actionsContainer}>
      <TouchableOpacity style={styles.editProfileButton} onPress={onEditProfile}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2efda33d87ba56be772751410757cdb5185e9ea6e56d537bd1caafcbf74d5287?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.editIcon}
        />
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton} onPress={onSave}>
        <Text style={styles.saveText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actionsContainer: {
    alignSelf: "stretch",
    display: "flex",
    width: "100%",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    alignItems: "stretch",
    gap: 20,
    overflow: "hidden",
    fontFamily: "Poppins, sans-serif",
    justifyContent: "space-between",
  },
  editProfileButton: {
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    alignItems: "center",
    gap: 20,
    flexDirection: "row",
  },
  editIcon: {
    position: "relative",
    display: "flex",
    width: 36,
    flexShrink: 0,
    aspectRatio: 1,
  },
  editProfileText: {
    fontSize: 24,
    color: "#1D1D1D",
    fontWeight: "700",
  },
  saveButton: {
    alignSelf: "stretch",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  saveText: {
    fontSize: 16,
    color: "#4CAF50",
    fontWeight: "500",
  },
});

export default ProfileActions;