import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SelectionButton from './SelectionButton';

const RoleSelection: React.FC = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>You are</Text>
      <View style={styles.selectionContainer}>
        <SelectionButton label="Bridal" />
        <SelectionButton label="Groom" />
        <SelectionButton label="Others" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    marginTop: 29,
  },
  selectionContainer: {
    display: 'flex',
    marginTop: 22,
    width: '100%',
    alignItems: 'stretch',
    gap: 20,
  },
});

export default RoleSelection;