// import React from 'react';
// import { View, StyleSheet, Text, Image } from 'react-native';

// export const StatusBar: React.FC = () => {
//   return (
//     <View style={styles.statusBar}>
//       <Text style={styles.time}>10:30</Text>
//       <View style={styles.icons}>
//         <Image
//           resizeMode="contain"
//           source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/31ac1b526413b7280361f15a50d52f73b845becce53d56050ce309bab71e5396?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
//           style={styles.icon}
//         />
//         <Image
//           resizeMode="contain"
//           source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fca58166f7fa741949f09c813d7322272f487e7eb562a3fa7c834cdb4ae4bbb1?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
//           style={styles.icon}
//         />
//         <Image
//           resizeMode="contain"
//           source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb931d6f5408603c1e9aa4f61e8a6320c29c2596aff138b55d8718de4266fe33?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
//           style={styles.icon}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   statusBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     opacity: 0.8,
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
//     gap: 6,
//   },
//   icon: {
//     width: 18,
//     aspectRatio: 1,
//   },
// });