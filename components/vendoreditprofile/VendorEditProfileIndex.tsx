
import patchUpdateProfile from '@/services/patchUpdateProfile'; // import your API function
import { getSecureData, saveSecureData } from '@/store';
//import Ionicons from '@expo/vector-icons';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const EditProfileScreen: React.FC = () => {
  const router = useRouter();

  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [selectedStaff, setSelectedStaff] = useState<string>("");
  const [refundPolicy, setRefundPolicy] = useState<string>("");

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const userStr = await getSecureData('user');
      if (userStr) {
        const user = JSON.parse(userStr);
        setName(user.name || '');
        setEmail(user.email || '');
        setPhoneNumber(user.phoneNumber || user.phone || user.phone_number || '');
        setAddress(user.address || '');
      }
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  const saveUserDetails = async () => {
    try {
      const userStr = await getSecureData('user');
      if (!userStr) {
        alert('User not found locally');
        return;
      }
      const user = JSON.parse(userStr);
      const userId = user.userId || user._id;

      if (!userId) {
        alert('User ID not available');
        return;
      }

      const updateData = {
        name,
        email,
        phoneNumber,
        address,
        userId,
      };

      const updatedUser = await patchUpdateProfile(userId, updateData);
      await saveSecureData('user', JSON.stringify(updatedUser));
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Failed to save user data:', error);
      alert('Failed to save profile. Please try again.');
    }
  };

  return (
    <View style={styles.container} testID="screen-container">
      <StatusBar backgroundColor="#F8E9F0" barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>{"<"} Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
        <TouchableOpacity onPress={saveUserDetails}>
          <Text style={styles.saveButton}>SAVE</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {name ? name.charAt(0).toUpperCase() : 'N/A'}
            </Text>
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Country</Text>
            <TextInput
              style={styles.input}
              placeholder="Pakistan"
              placeholderTextColor="#000000"
              editable={false}
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputContainer, { flex: 0.3 }]}>
              <Text style={styles.label}>+92</Text>
              <View style={[styles.input, styles.flagContainer]}>
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1024px-Flag_of_Pakistan.svg.png",
                  }}
                  style={styles.flagIcon}
                />
              </View>
            </View>
            <View style={[styles.inputContainer, { flex: 0.7, marginLeft: 10 }]}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter phone number"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Address (Optional)</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your address"
              value={address}
              onChangeText={setAddress}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your address"
              value={address}
              onChangeText={setAddress}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Cities Covered</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your address"
              value={address}
              onChangeText={setAddress}
            />
          </View>

          {/* Staff */}
          <Text style={styles.label}>Staff</Text>
            <View style={styles.staffContainer}>
                {[
                    { label: 'MALE', icon: 'male' },
                    { label: 'FEMALE', icon: 'female' },
                    { label: 'TRANSGENDER', icon: 'transgender-alt' },
                ].map((staff) => (
                    <TouchableOpacity
                        key={staff.label}
                        style={[
                            styles.staffOption,
                            selectedStaff === staff.label && styles.staffSelected,
                        ]}
                        onPress={() => setSelectedStaff(staff.label)}
                    >
                        <FontAwesome5 name={staff.icon}
                            size={20}
                            style={[
                                styles.staffIcon,
                                selectedStaff === staff.label && styles.staffSelectedIcon,
                            ]} />

                        {/* <Icon
                            name={staff.icon}
                            size={20}
                            style={[
                                styles.staffIcon,
                                selectedStaff === staff.label && styles.staffSelectedIcon,
                            ]}
                        /> */}
                        <Text
                            style={[
                                styles.staffText,
                                selectedStaff === staff.label && styles.staffSelectedText,
                            ]}
                        >
                            {staff.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Refund Policy */}
            <Text style={styles.label}>Refund Policy*</Text>
            <View style={styles.covidContainer}>
                {['REFUNDABLE', 'NON-REFUNDABLE', 'PARTIALLY REFUNDABLE'].map(
                    (policy) => (
                        <TouchableOpacity
                            key={policy}
                            style={[
                                styles.covidOption,
                                refundPolicy === policy && styles.covidSelected,
                            ]}
                            onPress={() => setRefundPolicy(policy)}
                        >
                            <Text
                                style={[
                                    styles.covidText,
                                    refundPolicy === policy && styles.covidSelectedText,
                                ]}
                            >
                                {policy}
                            </Text>
                        </TouchableOpacity>
                    )
                )}
            </View>

        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/myevents")}
        >
          <View style={styles.iconContainer}>
            <Image
              source={require('@/assets/images/myevent.png')}
              style={styles.iconImage}
            />
          </View>
          <Text style={styles.navText}>My Events</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/bottommessages")}
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
          style={[styles.navItem, styles.homeButton]}
          onPress={() => router.push('/vendordashboard')}
        >
          <View style={styles.homeButtonIconContainer}>
            <Ionicons name="home" size={40} color="#fff" />
          </View>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/bottomnotification")}
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
   //flexGrow: 1,
    padding: 20,
    paddingBottom: 160,
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
    fontSize: 60,
    fontWeight: 'bold',
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
    paddingHorizontal: 10,
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
    marginBottom: 5,
  },
  iconImage: {
    width: 37,
    height: 37,
    marginBottom: 5,
  },
  navText: {
    fontSize: 10,
    color: '#000000',
  },
  flagContainer: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 50,
  },
  flagIcon: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
  },
  // homeButtonIconContainer: {
  //   backgroundColor: '#780C60',
  //   width: 40,
  //   height: 40,
  //   borderRadius: 20,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom: 5,
  // },
  // homeButton: {
  //   // Optional additional styling
  // },
  homeButtonIconContainer: {
    backgroundColor: '#780C60',
    width: 55,   // bigger than 30
    height: 55,  // bigger than 30
    borderRadius: 27.5, // half of width/height for perfect circle
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },

  // Increase size of home button's icon image
  homeButtonIconImage: {
    width: 55,  // bigger than 37
    height: 55, // bigger than 37
    marginBottom: 0, // remove bottom margin if you want it more centered vertically
  },

  homeButton: {
    transform: [{ translateY: -20 }], // move it more upward (from -10 to -15)
  
},
staffContainer: {
  flexDirection: 'row', // Align items horizontally
  //justifyContent: 'space-between', // Add spacing between items
  marginBottom: 16,
},

staffOption: {
  flexDirection: 'row', // Align icon and text horizontally
  alignItems: 'center', // Center items vertically
  borderWidth: 2,
  borderColor: '#B085A6', // Light purple border
  borderRadius: 10, // Rounded corners
  paddingVertical: 10, // Vertical padding
  paddingHorizontal: 12, // Horizontal padding to allow space around text
  backgroundColor: '#FBEFF7', // Light background color
  marginHorizontal: 5, // Space between boxes
},

staffSelected: {
  backgroundColor: '#780C60', // Selected box background color
  borderColor: '#780C60',
},

staffIcon: {
  color: '#780C60', // Default icon color
  fontSize: 20,
  marginRight: 2, // Space between icon and text
},

staffSelectedIcon: {
  color: '#FFF', // White color for selected icon
},

staffText: {
  fontSize: 8,
  color: '#780C60', // Default text color
  fontWeight: '600',
},

staffSelectedText: {
  color: '#FFF', // White color for selected text
},
covidContainer: {
  // flexDirection: 'row',
  // justifyContent: 'space-between',
  // marginBottom: 16,
  flexDirection: 'row', // Align items horizontally
  //justifyContent: 'space-between', // Add spacing between items
  marginBottom: 16,
},
covidOption: {
  // padding: 10,
  // borderWidth: 1,
  // borderColor: '#B3A3A3',
  // borderRadius: 8,
  // flex: 1,
  // alignItems: 'center',
  // marginHorizontal: 4,
  flexDirection: 'row', // Align icon and text horizontally
  alignItems: 'center', // Center items vertically
  borderWidth: 2,
  borderColor: '#B085A6', // Light purple border
  borderRadius: 10, // Rounded corners
  paddingVertical: 10, // Vertical padding
  paddingHorizontal: 12, // Horizontal padding to allow space around text
  backgroundColor: '#FBEFF7', // Light background color
  marginHorizontal: 5, // Space between boxes
},
covidSelected: {
  // backgroundColor: '#FBEFF7',
  // borderColor: '#800080',
  backgroundColor: '#780C60', // Selected box background color
  borderColor: '#780C60',
},
covidText: {
  // fontSize: 14,
  // color: '#666',
  fontSize: 8,
  color: '#780C60', // Default text color
  fontWeight: '600',
},
covidSelectedText: {
  // color: "#780C60",
  // fontWeight: 'bold',
  color: '#FFF', // White color for selected text
},
});

export default EditProfileScreen;
