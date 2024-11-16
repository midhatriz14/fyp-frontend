import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import ProfileHeader from './ProfileHeader';
import MenuOption from './MenuOption';
import BottomNavigation from './BottomNavigation';

const menuOptions = [
  { title: 'Edit Profile', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5355151011053103c9e50dd65bba345f7553d75e534c7e12231c0904a4f5a62e?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { title: 'Notifications', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5355151011053103c9e50dd65bba345f7553d75e534c7e12231c0904a4f5a62e?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { title: 'Frequently Asked Questions', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5355151011053103c9e50dd65bba345f7553d75e534c7e12231c0904a4f5a62e?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { title: 'Contact Us', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5355151011053103c9e50dd65bba345f7553d75e534c7e12231c0904a4f5a62e?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { title: 'Sign Out', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5355151011053103c9e50dd65bba345f7553d75e534c7e12231c0904a4f5a62e?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
];

const AccountScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <ProfileHeader />
        {menuOptions.map((option, index) => (
          <React.Fragment key={option.title}>
            <MenuOption title={option.title} iconUrl={option.icon} />
            {index < menuOptions.length - 1 && (
              <Image
                resizeMode="contain"
                source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9dea823eea7e888449bd27f9192e0072c4000d2168ae4671565c3513cf8491fb?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' }}
                style={styles.divider}
              />
            )}
          </React.Fragment>
        ))}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>Terms of Service</Text>
          <Text style={styles.separator}>|</Text>
          <Text style={styles.termsText}>Privacy Policy</Text>
        </View>
      </View>
      <BottomNavigation />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E9F0'
  },
  content: {
    borderRadius: 40,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 20,
  },
  divider: {
    width: '100%',
    maxWidth: 318,
    height: 1,
    marginVertical: 10,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 49,
    gap: 5,
  },
  termsText: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 14,
    color: '#780C60',
    fontWeight: '400',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  separator: {
    color: '#848484',
  },
});

export default AccountScreen;