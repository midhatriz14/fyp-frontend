// import { Ionicons } from '@expo/vector-icons';
// import { router } from 'expo-router';
// import React from 'react';
// import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const MyEventsScreen = () => {
//   const events = [
//     {
//       id: 1,
//       name: 'Birthday Bash',
//       date: '25th May 2025',
//       location: 'Pearl Continental Hotel, Lahore',
//       status: 'Upcoming',
//       image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/abc123',
//       vendors: [
//         {
//           name: 'Decor By Ayesha',
//           category: 'Decoration',
//           packageName: 'Premium',
//           price: 30000,
//         },
//         {
//           name: 'Foodies Catering',
//           category: 'Catering',
//           packageName: 'Buffet Gold',
//           price: 45000,
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: 'Wedding Reception',
//       date: '10th June 2025',
//       location: 'Serena Hotel, Islamabad',
//       status: 'Completed',
//       image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/xyz456',
//       vendors: [
//         {
//           name: 'Royal Events',
//           category: 'Venue & Decor',
//           packageName: 'Royal Palace',
//           price: 100000,
//         },
//         {
//           name: 'Sufi Soundz',
//           category: 'Entertainment',
//           packageName: 'Qawali Night',
//           price: 25000,
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: 'Corporate Meetup',
//       date: '5th May 2025',
//       location: 'Expo Center, Karachi',
//       status: 'Cancelled',
//       image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/pqr789',
//       vendors: [
//         {
//           name: 'Tech Setup',
//           category: 'Audio/Visual',
//           packageName: 'Conference Kit',
//           price: 15000,
//         },
//       ],
//     },
//   ];

//   return (
//     <ScrollView style={styles.container}>

// <View style={styles.header}>
//         {/* Back button */}
//         <TouchableOpacity testID="back-button" onPress={() => router.back()}>
//           <Text style={styles.backText}>Back</Text>
//         </TouchableOpacity>

//         {/* Title */}
//         <Text style={styles.title}>Photographer Details</Text>

//         {/* Cart Icon */}
//         <TouchableOpacity
//           onPress={() => router.push('/cartmanagment')}
//           style={styles.cartIconButton}
//         >
//           <Ionicons name="cart-outline" size={24} color="#7B2869" />
//         </TouchableOpacity>
//       </View>
      
//       {events.map((event) => {
//         const totalPrice = event.vendors.reduce((sum, v) => sum + v.price, 0);
//         return (
//           <View key={event.id} style={styles.card}>
//             <Image source={{ uri: event.image }} style={styles.image} />
//             <Text style={styles.eventName}>{event.name}</Text>
//             <Text style={styles.info}>📍 {event.location}</Text>
//             <Text style={styles.info}>📅 {event.date}</Text>
//             <Text style={styles.status}>Status: {event.status}</Text>
//             <Text style={styles.sectionTitle}>Vendors:</Text>
//             {event.vendors.map((vendor, index) => (
//               <View key={index} style={styles.vendorBox}>
//                 <Text style={styles.vendorText}>• {vendor.category}: {vendor.name}</Text>
//                 <Text style={styles.packageText}>   Package: {vendor.packageName} - Rs. {vendor.price}</Text>
//               </View>
//             ))}
//             <Text style={styles.totalPrice}>Total Event Price: Rs. {totalPrice}</Text>
//           </View>
//         );
//       })}
//  </ScrollView>
//       {/* Bottom Navigation */}
//       <View style={styles.bottomNavigation}>
//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => router.push("/dashboard")}
//         >
//           <View style={styles.iconContainer}>
//             <Image
//               source={{
//                 uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/037c15c0-3bc9-4416-8c18-69934587461a?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a",
//               }}
//               style={styles.iconImage}
//             />
//           </View>
//           <Text style={styles.navText}>Dashboard</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => router.push("/bottommessages")}
//         >
//           <View style={styles.iconContainer}>
//             <Image
//               source={{
//                 uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/549e73c4-da91-40a5-a5c8-fd173b0e2a62?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a",
//               }}
//               style={styles.iconImage}
//             />
//           </View>
//           <Text style={styles.navText}>Messages</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => router.push("/bottomnotification")}
//         >
//           <View style={styles.iconContainer}>
//             <Image
//               source={{
//                 uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/198f4cc8-49ff-4ccc-b97b-619e572143d4?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a",
//               }}
//               style={styles.iconImage}
//             />
//           </View>
//           <Text style={styles.navText}>Notifications</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => router.push("/account")}
//         >
//           <View style={styles.iconContainer}>
//             <Image
//               source={{
//                 uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/73089a6f-a9a6-4c94-9fd1-4cdd5923a137?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a",
//               }}
//               style={styles.iconImage}
//             />
//           </View>
//           <Text style={styles.navText}>Account</Text>
//         </TouchableOpacity>
//       </View>

   
//   );
// };

// export default MyEventsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8EAF2',
//     paddingTop: 50,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 24,
//     elevation: 3,
//   },
//   image: {
//     width: '100%',
//     height: 160,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   eventName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#222',
//   },
//   info: {
//     fontSize: 14,
//     color: '#444',
//     marginVertical: 2,
//   },
//   status: {
//     marginTop: 6,
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#007AFF',
//   },
//   sectionTitle: {
//     marginTop: 12,
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#555',
//   },
//   vendorBox: {
//     marginVertical: 4,
//   },
//   vendorText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   packageText: {
//     fontSize: 13,
//     color: '#666',
//     marginLeft: 10,
//   },
//   totalPrice: {
//     marginTop: 10,
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#28a745',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//   },
//   backText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     flex: 1,
//   },
//   cartIconButton: {
//     padding: 4,
//   },
//   bottomNavigation: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     height: 80,
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#E0E0E0',
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//   },
//   navItem: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   iconContainer: {
//     backgroundColor: '#780C60',
//     width: 30,
//     height: 30,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   iconImage: {
//     width: 37,
//     height: 37,
//     marginBottom: 5,
//   },
//   navText: {
//     fontSize: 10,
//     color: '#000000',
//   },
  
// });
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const MyEventsScreen = () => {
  const events = [
    {
      id: 1,
      name: 'Birthday Bash',
      date: '25th May 2025',
      location: 'Pearl Continental Hotel, Lahore',
      status: 'Upcoming',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/abc123',
      vendors: [
        {
          name: 'Decor By Ayesha',
          category: 'Decoration',
          packageName: 'Premium',
          price: 30000,
        },
        {
          name: 'Foodies Catering',
          category: 'Catering',
          packageName: 'Buffet Gold',
          price: 45000,
        },
      ],
    },
    {
      id: 2,
      name: 'Wedding Reception',
      date: '10th June 2025',
      location: 'Serena Hotel, Islamabad',
      status: 'Completed',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/xyz456',
      vendors: [
        {
          name: 'Royal Events',
          category: 'Venue & Decor',
          packageName: 'Royal Palace',
          price: 100000,
        },
        {
          name: 'Sufi Soundz',
          category: 'Entertainment',
          packageName: 'Qawali Night',
          price: 25000,
        },
      ],
    },
    {
      id: 3,
      name: 'Corporate Meetup',
      date: '5th May 2025',
      location: 'Expo Center, Karachi',
      status: 'Cancelled',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/pqr789',
      vendors: [
        {
          name: 'Tech Setup',
          category: 'Audio/Visual',
          packageName: 'Conference Kit',
          price: 15000,
        },
      ],
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#F8EAF2' }}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity testID="back-button" onPress={() => router.back()}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>My Events</Text>

          <TouchableOpacity onPress={() => router.push('/cartmanagment')} style={styles.cartIconButton}>
            <Ionicons name="cart-outline" size={24} color="#7B2869" />
          </TouchableOpacity>
        </View>

        {/* Events List */}
        {events.map((event) => {
          const totalPrice = event.vendors.reduce((sum, v) => sum + v.price, 0);
          const statusColor =
            event.status === 'Upcoming'
              ? '#007AFF'
              : event.status === 'Completed'
              ? '#28a745'
              : '#dc3545';

          return (
            <View key={event.id} style={styles.card}>
              <Image source={{ uri: event.image }} style={styles.image} />
              <Text style={styles.eventName}>{event.name}</Text>
              <Text style={styles.info}>📍 {event.location}</Text>
              <Text style={styles.info}>📅 {event.date}</Text>
              <Text style={[styles.status, { color: statusColor }]}>Status: {event.status}</Text>
              <Text style={styles.sectionTitle}>Vendors:</Text>
              {event.vendors.map((vendor, index) => (
                <View key={index} style={styles.vendorBox}>
                  <Text style={styles.vendorText}>• {vendor.category}: {vendor.name}</Text>
                  <Text style={styles.packageText}>   Package: {vendor.packageName} - Rs. {vendor.price}</Text>
                </View>
              ))}
              <Text style={styles.totalPrice}>Total Event Price: Rs. {totalPrice}</Text>
            </View>
          );
        })}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/dashboard")}>
          <View style={styles.iconContainer}>
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/037c15c0-3bc9-4416-8c18-69934587461a" }}
              style={styles.iconImage}
            />
          </View>
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/bottommessages")}>
          <View style={styles.iconContainer}>
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/549e73c4-da91-40a5-a5c8-fd173b0e2a62" }}
              style={styles.iconImage}
            />
          </View>
          <Text style={styles.navText}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/bottomnotification")}>
          <View style={styles.iconContainer}>
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/198f4cc8-49ff-4ccc-b97b-619e572143d4" }}
              style={styles.iconImage}
            />
          </View>
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/account")}>
          <View style={styles.iconContainer}>
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/73089a6f-a9a6-4c94-9fd1-4cdd5923a137" }}
              style={styles.iconImage}
            />
          </View>
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyEventsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backText: {
    fontSize: 16,
    color: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  cartIconButton: {
    padding: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    marginHorizontal: 16,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  info: {
    fontSize: 14,
    color: '#444',
    marginVertical: 2,
  },
  status: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: '600',
  },
  sectionTitle: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  vendorBox: {
    marginVertical: 4,
  },
  vendorText: {
    fontSize: 14,
    color: '#333',
  },
  packageText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 10,
  },
  totalPrice: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
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
});
