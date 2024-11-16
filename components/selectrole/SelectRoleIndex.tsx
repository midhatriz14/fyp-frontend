import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import RoleSelector from './RoleSelector';
import ConfirmButton from './ConfirmButton';

interface SelectRoleScreenProps {}

const SelectRoleScreen: React.FC<SelectRoleScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Select Your Role</Text>
        <Text style={styles.subtitle}>Join As</Text>
        <RoleSelector />
        <ConfirmButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 60,
    maxWidth: 480,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#F8E9F0',
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    color: 'rgba(38, 38, 38, 1)',
    fontSize: 30,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 109,
  },
  subtitle: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 20,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600',
    marginTop: 121,
    alignSelf: 'flex-start',
    marginLeft: 35,
  },
});

export default SelectRoleScreen;