import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

interface MenuOptionProps {
  title: string;
  iconUrl: string;
}

const MenuOption: React.FC<MenuOptionProps> = ({ title, iconUrl }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image
        resizeMode="contain"
        source={{ uri: iconUrl }}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 317,
    paddingVertical: 10,
  },
  title: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 16,
    color: '#1D1D1D',
    fontWeight: '500',
  },
  icon: {
    width: 26,
    height: 26,
  },
});

export default MenuOption;