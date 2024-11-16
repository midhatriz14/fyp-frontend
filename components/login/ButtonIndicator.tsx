import React from 'react';
import { View, StyleSheet } from 'react-native';

const BottomIndicator: React.FC = () => {
  return <View style={styles.indicator} />;
};

const styles = StyleSheet.create({
  indicator: {
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    opacity: 0.8,
    backgroundColor: "#1D1D1D",
    marginTop: 179,
    width: 140,
    height: 6,
  },
});

export default BottomIndicator;