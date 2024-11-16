import { router } from 'expo-router';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ConfirmButtonProps {}

const ConfirmButton: React.FC<ConfirmButtonProps> = () => {
  return (
    <TouchableOpacity style={styles.button}
    onPress={() => { router.push("/signup") }}>
      <Text style={styles.buttonText}>Confirm</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 10,
    marginTop: 95,
    maxWidth: 300,
    paddingHorizontal: 68,
    paddingVertical: 13,
    backgroundColor: '#780c61',
  },
  buttonText: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default ConfirmButton;