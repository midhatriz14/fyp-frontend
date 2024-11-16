import { router } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface NavigationButtonsProps {}

const NavigationButtons: React.FC<NavigationButtonsProps> = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity accessibilityRole="button"
        onPress={() => { router.push("/intro") }}>
        <Text style={styles.buttonText}>SKIP</Text>
      </TouchableOpacity>
      <TouchableOpacity accessibilityRole="button"
        onPress={() => { router.push("/sandwich2") }}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 20,
    width: '100%',
    maxWidth: 305,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 18,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '500',
  },
});

export default NavigationButtons;