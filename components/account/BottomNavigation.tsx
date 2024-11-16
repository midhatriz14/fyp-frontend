import { router } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

interface NavItem {
  id: string;
  name: string;
  icon: string;
}

const navItems: NavItem[] = [
  { id: '1', name: 'Dashboard', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/037c15c0-3bc9-4416-8c18-69934587461a?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { id: '2', name: 'Messages', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/549e73c4-da91-40a5-a5c8-fd173b0e2a62?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { id: '3', name: 'Notifications', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/198f4cc8-49ff-4ccc-b97b-619e572143d4?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { id: '4', name: 'Account', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73089a6f-a9a6-4c94-9fd1-4cdd5923a137?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
];

const NavItem: React.FC<{ item: NavItem }> = ({ item }) => (
  <TouchableOpacity style={styles.navItem} accessibilityRole="button"
  onPress={() => {
    if(item.id === '1') {
      router.push("/dashboard")
    } 
    else if (item.id === '2') {
    }
    else if (item.id === '3') {
    }
    else if (item.id === '4') {
      router.push("/account")
    }
  }}>

    <Image
      resizeMode="contain"
      source={{ uri: item.icon }}
      style={styles.navIcon}
    />
    <Text style={styles.navText}>{item.name}</Text>
  </TouchableOpacity>
);

const BottomNavigation: React.FC = () => {
  return (
    <View style={styles.container}>
      {navItems.map((item) => (
        <NavItem key={item.id} item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFFFFF'

  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 37,
    height: 37,
    marginBottom: 5,
  },
  navText: {
    fontSize: 10,
    color: '#000000',
  },
});

export default BottomNavigation;