import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SelectionButton from './SelectionButton';

const GenderSelection: React.FC = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Your Gender</Text>
      <View style={styles.selectionContainer}>
        <SelectionButton label="Male" />
        <SelectionButton label="Female" />
        <SelectionButton label="Others" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 49,
    marginLeft: 16,
  },
  selectionContainer: {
    display: 'flex',
    marginTop: 25,
    width: '100%',
    maxWidth: 335,
    alignItems: 'stretch',
    gap: 20,
    fontFamily: 'Inter, sans-serif',
    fontSize: 13,
    color: 'rgba(132, 132, 132, 1)',
    fontWeight: '600',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
});

export default GenderSelection;