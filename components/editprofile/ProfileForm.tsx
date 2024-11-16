import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

type ProfileFormProps = {
  firstName: string;
  lastName: string;
  email: string;
  onChangeFirstName: (text: string) => void;
  onChangeLastName: (text: string) => void;
  onChangeEmail: (text: string) => void;
};

const ProfileForm: React.FC<ProfileFormProps> = ({
  firstName,
  lastName,
  email,
  onChangeFirstName,
  onChangeLastName,
  onChangeEmail,
}) => {
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={onChangeFirstName}
          accessibilityLabel="First Name"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={onChangeLastName}
          accessibilityLabel="Last Name"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={onChangeEmail}
          keyboardType="email-address"
          accessibilityLabel="E-mail"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    display: "flex",
    marginTop: 38,
    width: "100%",
    maxWidth: 320,
    alignItems: "stretch",
    gap: 6,
  },
  inputGroup: {
    display: "flex",
    minHeight: 75,
    flexDirection: "column",
    alignItems: "stretch",
    flex: 1,
  },
  label: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeight: "400",
    color: "#595959",
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(130, 130, 130, 0.70)",
    marginTop: 4,
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 15,
    paddingBottom: 15,
    color: "#1D1D1D",
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeight: "400",
  },
});

export default ProfileForm;