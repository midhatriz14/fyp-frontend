// import React, { useState } from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';
// import ProfileHeader from './ProfileHeader';
// import ProfileActions from './ProfileActions';
// import ProfileAvatar from './ProfileAvatar';
// import ProfileForm from './ProfileForm';
// import CountrySelector from './CountrySelector';
// import PhoneInput from './PhoneInput';
// import AddressInput from './AddressInput';
// import BottomNavigation from './BottomNavigation';

// const EditProfileIndex: React.FC = () => {
//   const [firstName, setFirstName] = useState('Midhat');
//   const [lastName, setLastName] = useState('Rizvi');
//   const [email, setEmail] = useState('midhatrizvi@gmail.com');
//   const [country, setCountry] = useState('Germany');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [activeNavIndex, setActiveNavIndex] = useState(3);

//   const navItems = [
//     { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/52fd812e-10b1-4a3f-ab8e-a17422b09e95?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a", label: "Dashboard" },
//     { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/121a312f-b6d4-4753-8fff-b6295c2f6cd8?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a", label: "Messages" },
//     { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/11fd608b-92e5-45a2-8dc4-398eef8840fa?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a", label: "Notifications" },
//     { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/21e2e4b2-92c7-47d8-ba45-096cc4902990?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a", label: "Account" },
//   ];

//   const handleEditProfile = () => {
//     // Implement edit profile logic
//   };

//   const handleSave = () => {
//     // Implement save profile logic
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <ProfileHeader time="10:30" />
//       <ProfileActions onEditProfile={handleEditProfile} onSave={handleSave} />
//       <ProfileAvatar initials="MR" avatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/aad08d7da25d53a928653207ff0e33bb2ec1f35b667d67500ba899849f43c7a2?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" />
//       <ProfileForm
//         firstName={firstName}
//         lastName={lastName}
//         email={email}
//         onChangeFirstName={setFirstName}
//         onChangeLastName={setLastName}
//         onChangeEmail={setEmail}
//       />
//       <CountrySelector selectedCountry={country} onSelectCountry={setCountry} />
//       <PhoneInput phoneNumber={phoneNumber} onChangePhoneNumber={setPhoneNumber} />
//       <AddressInput address={address} onChangeAddress={setAddress} />
//       <BottomNavigation
//         items={navItems}
//         activeIndex={activeNavIndex}
//         onItemPress={setActiveNavIndex}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F8F8F8",
//   },
// });

// export default EditProfileIndex;
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';

const EditProfileScreen: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container} testID="screen-container">
      /* ✅ Added testID here */
      {/* Set Status Bar */}
      <StatusBar
        backgroundColor="#F8E9F0" // Match the pink background color
        barStyle="dark-content" // Ensure icons and text are visible
      />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>{"<"} Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
        <TouchableOpacity>
          <Text style={styles.saveButton}>SAVE</Text>
        </TouchableOpacity>
      </View>
      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Avatar Section */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>MR</Text>
          </View>
          <TouchableOpacity style={styles.cameraIcon}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/149/149852.png", // Camera Icon
              }}
              style={styles.cameraImage}
            />
          </TouchableOpacity>
        </View>

        {/* Input Fields */}
        <View style={styles.form}>
          <View style={styles.row}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>First Name</Text>
              <TextInput style={styles.input} placeholder="Midhat" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput style={styles.input} placeholder="Rizvi" />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="midhatrizvi@gmail.com"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Country</Text>
            <TextInput style={styles.input} placeholder="Pakistan" />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputContainer, { flex: 0.3 }]}>
              <Text style={styles.label}>Phone Number</Text>
              <View style={styles.phoneRow}>
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1024px-Flag_of_Pakistan.svg.png",
                  }}
                  style={styles.flagIcon}
                />
                <Text style={styles.countryCode}>+92</Text>
              </View>
            </View>
            <View style={[styles.inputContainer, { flex: 0.7 }]}>
              <TextInput
                style={styles.input}
                placeholder="Enter phone number"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Address</Text>
            <TextInput style={styles.input} placeholder="" />
          </View>
        </View>
      </ScrollView>
      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/dashboard")}
        >
          <View style={styles.iconContainer}>
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/037c15c0-3bc9-4416-8c18-69934587461a?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a",
              }}
              style={styles.iconImage}
            />
          </View>
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/dashboard")}
        >
          <View style={styles.iconContainer}>
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/549e73c4-da91-40a5-a5c8-fd173b0e2a62?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a",
              }}
              style={styles.iconImage}
            />
          </View>
          <Text style={styles.navText}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/dashboard")}
        >
          <View style={styles.iconContainer}>
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/198f4cc8-49ff-4ccc-b97b-619e572143d4?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a",
              }}
              style={styles.iconImage}
            />
          </View>
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/account")}
        >
          <View style={styles.iconContainer}>
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/73089a6f-a9a6-4c94-9fd1-4cdd5923a137?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a",
              }}
              style={styles.iconImage}
            />
          </View>
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E9F0',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    color: '#780C60',
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  saveButton: {
    color: 'green',
    fontSize: 16,
  },
  content: {
    flexGrow: 1,
    padding: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#780C60',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 130,
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraImage: {
    width: 20,
    height: 20,
  },
  form: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginBottom: 15,
    flex: 1,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  flagIcon: {
    width: 20,
    height: 15,
    marginRight: 5,
  },
  countryCode: {
    fontSize: 14,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 10, // Ensure spacing around items
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: '#780C60',
    width: 30,
    height: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5, // Space between icon and text
  },
  iconImage: {
    // width: 24,
    // height: 24,
    // tintColor: '#fff',
    width: 37,
    height: 37,
    marginBottom: 5,
  },
  navText: {
    fontSize: 10,
    color: '#000000',
    // fontWeight: '500',
    // textAlign: 'center', // Center-align text
  },
});

export default EditProfileScreen;
