import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <Text style={styles.backButton}>Back</Text>
        <Text style={styles.title}>Wedding Caterers</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 25,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  backButton: {
    fontSize: 13,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
    color: '#000000',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '500',
    color: '#000000',
  },
});

export default Header;