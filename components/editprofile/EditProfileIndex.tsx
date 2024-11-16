import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileHeader from './ProfileHeader';
import ProfileActions from './ProfileActions';
import ProfileAvatar from './ProfileAvatar';
import ProfileForm from './ProfileForm';
import CountrySelector from './CountrySelector';
import PhoneInput from './PhoneInput';
import AddressInput from './AddressInput';
import BottomNavigation from './BottomNavigation';

const EditProfileIndex: React.FC = () => {
  const [firstName, setFirstName] = useState('Midhat');
  const [lastName, setLastName] = useState('Rizvi');
  const [email, setEmail] = useState('midhatrizvi@gmail.com');
  const [country, setCountry] = useState('Germany');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [activeNavIndex, setActiveNavIndex] = useState(3);

  const navItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/52fd812e-10b1-4a3f-ab8e-a17422b09e95?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a", label: "Dashboard" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/121a312f-b6d4-4753-8fff-b6295c2f6cd8?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a", label: "Messages" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/11fd608b-92e5-45a2-8dc4-398eef8840fa?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a", label: "Notifications" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/21e2e4b2-92c7-47d8-ba45-096cc4902990?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a", label: "Account" },
  ];

  const handleEditProfile = () => {
    // Implement edit profile logic
  };

  const handleSave = () => {
    // Implement save profile logic
  };

  return (
    <ScrollView style={styles.container}>
      <ProfileHeader time="10:30" />
      <ProfileActions onEditProfile={handleEditProfile} onSave={handleSave} />
      <ProfileAvatar initials="MR" avatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/aad08d7da25d53a928653207ff0e33bb2ec1f35b667d67500ba899849f43c7a2?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" />
      <ProfileForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        onChangeFirstName={setFirstName}
        onChangeLastName={setLastName}
        onChangeEmail={setEmail}
      />
      <CountrySelector selectedCountry={country} onSelectCountry={setCountry} />
      <PhoneInput phoneNumber={phoneNumber} onChangePhoneNumber={setPhoneNumber} />
      <AddressInput address={address} onChangeAddress={setAddress} />
      <BottomNavigation
        items={navItems}
        activeIndex={activeNavIndex}
        onItemPress={setActiveNavIndex}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
});

export default EditProfileIndex;