
// // import React from 'react';
// // import { View, StyleSheet, Text, Image, FlatList } from 'react-native';

// // interface Venue {
// //   id: string;
// //   name: string;
// //   image: string;
// //   location: string;
// //   price: string;
// //   capacity: string;
// // }

// // const venues: Venue[] = [
// //   {
// //     id: '1',
// //     name: 'Seasons-24',
// //     image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/90b8f76232133d3314e4c1088487fc49b5d05693965ac3bbbaedc896f233cf20?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
// //     location: 'F6, Islamabad',
// //     price: 'Rs.2200/plate',
// //     capacity: '50-500 person',
// //   },
// //   {
// //     id: '2',
// //     name: 'Seasons-24',
// //     image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/90b8f76232133d3314e4c1088487fc49b5d05693965ac3bbbaedc896f233cf20?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
// //     location: 'F6, Islamabad',
// //     price: 'Rs.2200/plate',
// //     capacity: '50-500 person',
// //   },
// // ];

// // const VenueItem: React.FC<{ venue: Venue }> = ({ venue }) => (
// //   <View style={styles.venueItem}>
// //     <Image
// //       resizeMode="cover"
// //       source={{ uri: venue.image }}
// //       style={styles.venueImage}
// //     />
// //     <Text style={styles.venueName}>{venue.name}</Text>
// //     <View style={styles.locationContainer}>
// //       <Image
// //         resizeMode="contain"
// //         source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca78607262deda2ae185ea89ba53e07262a5a8a3da5f250d69358b53ea990a62?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
// //         style={styles.locationIcon}
// //       />
// //       <Text style={styles.locationText}>{venue.location}</Text>
// //     </View>
// //     <View style={styles.detailsContainer}>
// //       <Text style={styles.priceText}>{venue.price}</Text>
// //       <Text style={styles.capacityText}>{venue.capacity}</Text>
// //     </View>
// //   </View>
// // );

// // const VenueList: React.FC = () => {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Popular Venues</Text>
// //       <FlatList
// //         data={venues}
// //         renderItem={({ item }) => <VenueItem venue={item} />}
// //         keyExtractor={(item) => item.id}
// //         horizontal
// //         showsHorizontalScrollIndicator={false}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     paddingHorizontal: 16,
// //     marginBottom: 20,
// //     alignItems: 'center',
// //     backgroundColor: '#F8E9F0',
// //   },
// //   title: {
// //     fontSize: 18,
// //     fontWeight: '500',
// //     color: '#000',
// //     marginBottom: 20,
// //     textAlign: 'left',
// //   },

// //   // title: {
// //   //     fontSize: 18,
// //   //     fontWeight: '500',
// //   //     color: '#000000',
// //   //     marginBottom: 20,
// //   //   },
// //   venueItem: {
// //     width: 180,
// //     marginRight: 16,
// //     borderRadius: 12,
// //     backgroundColor: '#f8f8f8',
// //     padding: 10,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 4,
// //     elevation: 3,
// //   },
// //   venueImage: {
// //     width: '100%',
// //     height: 120,
// //     borderRadius: 12,
// //     marginBottom: 10,
// //   },
// //   venueName: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#333',
// //     marginBottom: 5,
// //     textAlign: 'center',
// //   },
// //   locationContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     marginBottom: 5,
// //   },
// //   locationIcon: {
// //     width: 15,
// //     height: 15,
// //     marginRight: 5,
// //   },
// //   locationText: {
// //     fontSize: 12,
// //     color: '#666',
// //   },
// //   detailsContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginTop: 5,
// //   },
// //   priceText: {
// //     fontSize: 12,
// //     fontWeight: '600',
// //     color: '#000',
// //   },
// //   capacityText: {
// //     fontSize: 10,
// //     color: '#444',
// //   },
// // });

// // export default VenueList;
// import React from 'react';
// import { View, StyleSheet, Text, Image, FlatList } from 'react-native';

// interface Item {
//   id: string;
//   name: string;
//   image: string;
//   location: string;
//   price: string;
//   capacity: string;
// }

// const venues: Item[] = [
//   {
//     id: '1',
//     name: 'Seasons-24',
//     image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/90b8f76232133d3314e4c1088487fc49b5d05693965ac3bbbaedc896f233cf20?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
//     location: 'F6, Islamabad',
//     price: 'Rs.2200/plate',
//     capacity: '50-500 person',
//   },
//   {
//     id: '2',
//     name: 'Seasons-24',
//     image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/90b8f76232133d3314e4c1088487fc49b5d05693965ac3bbbaedc896f233cf20?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
//     location: 'F6, Islamabad',
//     price: 'Rs.2200/plate',
//     capacity: '50-500 person',
//   },
// ];

// const photographers: Item[] = [
//   {
//     id: '1',
//     name: 'Capture Moments',
//     image: 'https://example.com/photographer1.jpg',
//     location: 'F7, Islamabad',
//     price: 'Rs.50,000/day',
//     capacity: 'Team of 5',
//   },
//   {
//     id: '2',
//     name: 'Snap Studio',
//     image: 'https://example.com/photographer2.jpg',
//     location: 'F8, Islamabad',
//     price: 'Rs.35,000/day',
//     capacity: 'Team of 3',
//   },
// ];

// const makeupArtists: Item[] = [
//   {
//     id: '1',
//     name: 'Glam Touch',
//     image: 'https://example.com/makeup1.jpg',
//     location: 'Blue Area, Islamabad',
//     price: 'Rs.10,000/bridal',
//     capacity: '10-20 bookings/month',
//   },
//   {
//     id: '2',
//     name: 'Beauty Studio',
//     image: 'https://example.com/makeup2.jpg',
//     location: 'F10, Islamabad',
//     price: 'Rs.8,000/bridal',
//     capacity: '15-25 bookings/month',
//   },
// ];

// const ItemList: React.FC<{ title: string; data: Item[] }> = ({ title, data }) => (
//   <View style={styles.container}>
//     <Text style={styles.title}>{title}</Text>
//     <FlatList
//       data={data}
//       renderItem={({ item }) => <VenueItem item={item} />}
//       keyExtractor={(item) => item.id}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//     />
//   </View>
// );

// const VenueItem: React.FC<{ item: Item }> = ({ item }) => (
//   <View style={styles.venueItem}>
//     <Image
//       resizeMode="cover"
//       source={{ uri: item.image }}
//       style={styles.venueImage}
//     />
//     <Text style={styles.venueName}>{item.name}</Text>
//     <View style={styles.locationContainer}>
//       <Image
//         resizeMode="contain"
//         source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca78607262deda2ae185ea89ba53e07262a5a8a3da5f250d69358b53ea990a62?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
//         style={styles.locationIcon}
//       />
//       <Text style={styles.locationText}>{item.location}</Text>
//     </View>
//     <View style={styles.detailsContainer}>
//       <Text style={styles.priceText}>{item.price}</Text>
//       <Text style={styles.capacityText}>{item.capacity}</Text>
//     </View>
//   </View>
// );

// const App: React.FC = () => {
//   return (
//     <View>
//       <ItemList title="Popular Venues" data={venues} />
//       <ItemList title="Popular Photographers" data={photographers} />
//       <ItemList title="Popular Makeup Artists" data={makeupArtists} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 16,
//     marginBottom: 20,
//     backgroundColor: '#F8E9F0',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: '#000',
//     marginBottom: 20,
//     alignSelf: 'flex-start',
//   },
//   venueItem: {
//     width: 180,
//     marginRight: 16,
//     borderRadius: 12,
//     backgroundColor: '#f8f8f8',
//     padding: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   venueImage: {
//     width: '100%',
//     height: 120,
//     borderRadius: 12,
//     marginBottom: 10,
//   },
//   venueName: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   locationContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 5,
//   },
//   locationIcon: {
//     width: 15,
//     height: 15,
//     marginRight: 5,
//   },
//   locationText: {
//     fontSize: 12,
//     color: '#666',
//   },
//   detailsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 5,
//   },
//   priceText: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#000',
//   },
//   capacityText: {
//     fontSize: 10,
//     color: '#444',
//   },
// });

// export default App;
import getAllVendorsByCategoryId from '@/services/getAllVendorsByCategoryId';
import { getSecureData } from '@/store';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';

interface Item {
  id: string;
  name: string;
  image: string;
  location: string;
  price: string;
  capacity: string;
}

// Data for each category
const venues: Item[] = [
  {
    id: '1',
    name: 'Seasons-24',
    image: 'https://example.com/venue1.jpg',
    location: 'F6, Islamabad',
    price: 'Rs.2200/plate',
    capacity: '50-500 person',
  },
  {
    id: '2',
    name: 'Event Palace',
    image: 'https://example.com/venue2.jpg',
    location: 'F7, Islamabad',
    price: 'Rs.2500/plate',
    capacity: '100-700 person',
  },
];

const photographers: Item[] = [
  {
    id: '1',
    name: 'Capture Moments',
    image: 'https://example.com/photographer1.jpg',
    location: 'F7, Islamabad',
    price: 'Rs.50,000/day',
    capacity: 'Team of 5',
  },
  {
    id: '2',
    name: 'Snap Studio',
    image: 'https://example.com/photographer2.jpg',
    location: 'F8, Islamabad',
    price: 'Rs.35,000/day',
    capacity: 'Team of 3',
  },
];

const makeupArtists: Item[] = [
  {
    id: '1',
    name: 'Glam Touch',
    image: 'https://example.com/makeup1.jpg',
    location: 'Blue Area, Islamabad',
    price: 'Rs.10,000/bridal',
    capacity: '10-20 bookings/month',
  },
  {
    id: '2',
    name: 'Beauty Studio',
    image: 'https://example.com/makeup2.jpg',
    location: 'F10, Islamabad',
    price: 'Rs.8,000/bridal',
    capacity: '15-25 bookings/month',
  },
];

const caterings: Item[] = [
  {
    id: '1',
    name: 'Grand Caterers',
    image: 'https://example.com/catering1.jpg',
    location: 'G9, Islamabad',
    price: 'Rs.2000/plate',
    capacity: '100-1000 person',
  },
  {
    id: '2',
    name: 'Royal Feast',
    image: 'https://example.com/catering2.jpg',
    location: 'G10, Islamabad',
    price: 'Rs.1800/plate',
    capacity: '200-800 person',
  },
];

const mehndiArtists: Item[] = [
  {
    id: '1',
    name: 'Henna by Zainab',
    image: 'https://example.com/mehndi1.jpg',
    location: 'I8, Islamabad',
    price: 'Rs.5000/bridal',
    capacity: '10-20 bookings/month',
  },
  {
    id: '2',
    name: 'Artistic Mehndi',
    image: 'https://example.com/mehndi2.jpg',
    location: 'F11, Islamabad',
    price: 'Rs.4000/bridal',
    capacity: '15-25 bookings/month',
  },
];

const cakes: Item[] = [
  {
    id: '1',
    name: 'Cake & Bake',
    image: 'https://example.com/cake1.jpg',
    location: 'G11, Islamabad',
    price: 'Rs.3000/kg',
    capacity: 'Custom orders available',
  },
  {
    id: '2',
    name: 'Sweet Delights',
    image: 'https://example.com/cake2.jpg',
    location: 'F8, Islamabad',
    price: 'Rs.2500/kg',
    capacity: 'Custom designs available',
  },
];

const djAndSounds: Item[] = [
  {
    id: '1',
    name: 'Sound Beats',
    image: 'https://example.com/dj1.jpg',
    location: 'H8, Islamabad',
    price: 'Rs.20,000/event',
    capacity: 'Sound & lighting services',
  },
  {
    id: '2',
    name: 'DJ Pro Studio',
    image: 'https://example.com/dj2.jpg',
    location: 'I10, Islamabad',
    price: 'Rs.15,000/event',
    capacity: 'DJ & sound mixing',
  },
];

// Reusable component
const ItemList: React.FC<{ title: string; data: Item[] }> = ({ title, data }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      data={data}
      renderItem={({ item }) => <ItemCard item={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const ItemCard: React.FC<{ item: Item }> = ({ item }) => (
  <View style={styles.card}>
    <Image
      resizeMode="cover"
      source={{ uri: item.image }}
      style={styles.image}
    />
    <Text style={styles.name}>{item.name}</Text>
    <View style={styles.infoContainer}>
      <Text style={styles.location}>{item.location}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
    <Text style={styles.capacity}>{item.capacity}</Text>
  </View>
);

const App: React.FC = () => {


  return (
    <View>
      <ItemList title="Popular Venues" data={venues} />
      <ItemList title="Popular Photographers" data={photographers} />
      <ItemList title="Popular Makeup Artists" data={makeupArtists} />
      <ItemList title="Popular Caterings" data={caterings} />
      <ItemList title="Popular Mehndi Artists" data={mehndiArtists} />
      <ItemList title="Popular Cakes" data={cakes} />
      <ItemList title="Popular DJ & Sounds" data={djAndSounds} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#F8E9F0',

  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  card: {
    width: 180,
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    padding: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  infoContainer: {
    marginBottom: 5,
  },
  location: {
    fontSize: 12,
    color: '#666',
  },
  price: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  capacity: {
    fontSize: 10,
    color: '#444',
  },
});

export default App;
function setData(data: any) {
  throw new Error('Function not implemented.');
}

