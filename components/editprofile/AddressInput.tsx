import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

type AddressInputProps = {
  address: string;
  onChangeAddress: (text: string) => void;
};

const AddressInput: React.FC<AddressInputProps> = ({ address, onChangeAddress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={onChangeAddress}
        multiline
        numberOfLines={3}
        accessibilityLabel="Address"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    minHeight: 75,
    width: "100%",
    maxWidth: 323,
    flexDirection: "column",
    alignItems: "stretch",
  },
  label: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    color: "#595959",
    fontWeight: "400",
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(130, 130, 130, 0.70)",
    display: "flex",
    minHeight: 50,
    marginTop: 4,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 15,
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    color: "#1D1D1D",
    fontWeight: "400",
  },
});

export default AddressInput;