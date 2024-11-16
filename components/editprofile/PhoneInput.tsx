import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

type PhoneInputProps = {
  phoneNumber: string;
  onChangePhoneNumber: (text: string) => void;
};

const PhoneInput: React.FC<PhoneInputProps> = ({ phoneNumber, onChangePhoneNumber }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Phone Number</Text>
      <View style={styles.inputContainer}>
        <View style={styles.countryCode}>
          <Image
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d54f7293e5eeac15e79f2171922b96e34ff83ada932f65e6f677f1e04bace1e?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
            style={styles.flagIcon}
          />
          <Text style={styles.countryCodeText}>+92</Text>
        </View>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={onChangePhoneNumber}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          accessibilityLabel="Phone Number"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    maxWidth: 333,
    flexDirection: "column",
    alignItems: "stretch",
  },
  label: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeight: "400",
    color: "#595959",
  },
  inputContainer: {
    display: "flex",
    marginTop: 4,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  countryCode: {
    borderRadius: 8,
    borderColor: "rgba(130, 130, 130, 0.7)",
    borderWidth: 1,
    alignSelf: "stretch",
    display: "flex",
    paddingRight: 8,
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
    overflow: "hidden",
  justifyContent: "center",
  },
  flagIcon: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    width: 50,
    flexShrink: 0,
    aspectRatio: 1,
  },
  countryCodeText: {
    opacity: 0.92,
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
    color: "#1D1D1D",
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeight: "400",
  },
  input: {
    borderRadius: 8,
    borderColor: "rgba(130, 130, 130, 0.7)",
    borderWidth: 1,
    alignSelf: "stretch",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    minHeight: 50,
    flexDirection: "column",
    alignItems: "stretch",
    color: "#1D1D1D",
    width: 221,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 15,
    paddingBottom: 15,
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeight: "400",
  },
});

export default PhoneInput;