import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SelectionButtonProps {
  label: string;
}

const SelectionButton: React.FC<SelectionButtonProps> = ({ label }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 11,
  },
  circle: {
    borderColor: 'rgba(187, 187, 187, 1)',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 50,
    width: 17,
    height: 17,
  },
  label: {
    color: 'rgba(132, 132, 132, 1)',
    fontSize: 13,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
  },
});

export default SelectionButton;