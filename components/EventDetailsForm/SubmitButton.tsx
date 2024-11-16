import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const SubmitButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    marginTop: 68,
    width: '100%',
    maxWidth: 340,
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#000000',
  },
  buttonText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 15,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default SubmitButton;