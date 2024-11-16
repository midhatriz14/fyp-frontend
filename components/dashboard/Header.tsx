// import React from 'react';
// import { View, StyleSheet, Text, Image } from 'react-native';

// const Header: React.FC = () => {
//   return (
//     <View style={styles.header}>
//       <Text style={styles.time}>10:30</Text>
//       <View style={styles.icons}>
//         <Image
//           resizeMode="contain"
//           source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/eca2e59d059de0cda53aa7ef521a6d3023039e72a4d1f0e51a627e4fe1af4f36?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
//           style={styles.icon}
//         />
//         <Image
//           resizeMode="contain"
//           source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2be2359319f36157fb0119f4ef34acba6062fc8842f086b08d6bf718fdc9746c?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
//           style={styles.icon}
//         />
//         <Image
//           resizeMode="contain"
//           source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/70f9bb2396c34b356de8d7ea9cdb6b8ece6a653ce1eef1d05f0f16d6eb6b93cf?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
//           style={styles.icon}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 24,
//     paddingVertical: 11,
//   },
//   time: {
//     color: '#1D1D1D',
//     fontFamily: 'Inter, sans-serif',
//     fontSize: 13,
//     fontWeight: '600',
//   },
//   icons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     width: 18,
//     height: 18,
//     marginLeft: 6,
//   },
// });

// export default Header;
import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.location}>House 30, ISB ▼</Text>
        <TouchableOpacity style={styles.planButton}>
          <Text style={styles.planButtonText}>Plan an Event</Text>
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/70f9bb2396c34b356de8d7ea9cdb6b8ece6a653ce1eef1d05f0f16d6eb6b93cf?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.notificationIcon}
        />
      </View>

      <Text style={styles.welcomeText}>Welcome{'\n'}Midhat!</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Search vendors and venues"
        placeholderTextColor="#9E9E9E"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#F8E9F0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  location: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  planButton: {
    backgroundColor: '#8B006D',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  planButtonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginVertical: 8,
  },
  searchBar: {
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    fontSize: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default Header;
