// import { router } from 'expo-router';
// import React from 'react';
// import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

// interface NavItem {
//   id: string;
//   name: string;
//   icon: string;
// }

// const navItems: NavItem[] = [
//   { id: '1', name: 'Dashboard', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/037c15c0-3bc9-4416-8c18-69934587461a?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
//   { id: '2', name: 'Messages', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/549e73c4-da91-40a5-a5c8-fd173b0e2a62?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
//   { id: '3', name: 'Notifications', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/198f4cc8-49ff-4ccc-b97b-619e572143d4?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
//   { id: '4', name: 'Account', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73089a6f-a9a6-4c94-9fd1-4cdd5923a137?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
// ];

// const NavItem: React.FC<{ item: NavItem }> = ({ item }) => (
//   <TouchableOpacity style={styles.navItem} accessibilityRole="button"
//     onPress={() => {
//       if (item.id === '1') {
//         router.push("/dashboard")
//       }
//       else if (item.id === '2') {
//         router.push("/bottommessages")
//       }
//       else if (item.id === '3') {
//         router.push("/packages")
//       }
//       else if (item.id === '4') {
//         router.push("/account")
//       }
//     }}>

//     <Image
//       resizeMode="contain"
//       source={{ uri: item.icon }}
//       style={styles.navIcon}
//     />
//     <Text style={styles.navText}>{item.name}</Text>
//   </TouchableOpacity>
// );

// const BottomNavigation: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       {navItems.map((item) => (
//         <NavItem key={item.id} item={item} />
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 40,
//     paddingVertical: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#E0E0E0',
//     backgroundColor: '#FFFFFF',
//     paddingBottom: 15,

//   },
//   navItem: {
//     alignItems: 'center',
//   },
//   navIcon: {
//     width: 37,
//     height: 37,
//     marginBottom: 5,
//   },
//   navText: {
//     fontSize: 10,
//     color: '#000000',
//   },
// });

// export default BottomNavigation;
import { router } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

interface NavItem {
  id: string;
  name: string;
  icon: string;
}

const navItems: NavItem[] = [
  {
    id: '1',
    name: 'Dashboard',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/037c15c0-3bc9-4416-8c18-69934587461a?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
  },
  {
    id: '2',
    name: 'Messages',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/549e73c4-da91-40a5-a5c8-fd173b0e2a62?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
  },
  {
    id: '3',
    name: 'Notifications',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/198f4cc8-49ff-4ccc-b97b-619e572143d4?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
  },
  {
    id: '4',
    name: 'Account',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73089a6f-a9a6-4c94-9fd1-4cdd5923a137?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
  },
];

const NavItemComponent: React.FC<{ item: NavItem }> = ({ item }) => (
  <TouchableOpacity
    style={styles.navItem}
    onPress={() => {
      if (item.id === '1') router.push('/dashboard');
      else if (item.id === '2') router.push('/bottommessages');
      else if (item.id === '3') router.push('/packages');
      else if (item.id === '4') router.push('/account');
    }}
  >
    <Image resizeMode="contain" source={{ uri: item.icon }} style={styles.navIcon} />
    <Text style={styles.navText}>{item.name}</Text>
  </TouchableOpacity>
);

const BottomNavigation: React.FC = () => {
  return (
    <View style={styles.container}>
      <NavItemComponent item={navItems[0]} />
      <NavItemComponent item={navItems[1]} />

      {/* Center Home Button */}
      <TouchableOpacity
        style={[styles.navItem, styles.homeButton]}
        onPress={() => router.push('/vendordashboard')}
      >
        <View style={styles.iconContainer}>
          <Image
            source={require('/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/home.png')}
            style={styles.iconImage}
          />
        </View>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      <NavItemComponent item={navItems[2]} />
      <NavItemComponent item={navItems[3]} />
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
    backgroundColor: '#FFFFFF',
    paddingBottom: 15,
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
  homeButton: {
    transform: [{ translateY: -10 }], // Slightly elevated
  },
  iconContainer: {
    backgroundColor: '#F8EAF2',
    padding: 10,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  iconImage: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
});

export default BottomNavigation;
