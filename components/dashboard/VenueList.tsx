
import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';

interface Venue {
  id: string;
  name: string;
  image: string;
  location: string;
  price: string;
  capacity: string;
}

const venues: Venue[] = [
  {
    id: '1',
    name: 'Seasons-24',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/90b8f76232133d3314e4c1088487fc49b5d05693965ac3bbbaedc896f233cf20?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
    location: 'F6, Islamabad',
    price: 'Rs.2200/plate',
    capacity: '50-500 person',
  },
  {
    id: '2',
    name: 'Seasons-24',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/90b8f76232133d3314e4c1088487fc49b5d05693965ac3bbbaedc896f233cf20?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
    location: 'F6, Islamabad',
    price: 'Rs.2200/plate',
    capacity: '50-500 person',
  },
];

const VenueItem: React.FC<{ venue: Venue }> = ({ venue }) => (
  <View style={styles.venueItem}>
    <Image
      resizeMode="cover"
      source={{ uri: venue.image }}
      style={styles.venueImage}
    />
    <Text style={styles.venueName}>{venue.name}</Text>
    <View style={styles.locationContainer}>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca78607262deda2ae185ea89ba53e07262a5a8a3da5f250d69358b53ea990a62?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
        style={styles.locationIcon}
      />
      <Text style={styles.locationText}>{venue.location}</Text>
    </View>
    <View style={styles.detailsContainer}>
      <Text style={styles.priceText}>{venue.price}</Text>
      <Text style={styles.capacityText}>{venue.capacity}</Text>
    </View>
  </View>
);

const VenueList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Venues</Text>
      <FlatList
        data={venues}
        renderItem={({ item }) => <VenueItem venue={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#F8E9F0',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginBottom: 20,
  },

 // title: {
    //     fontSize: 18,
    //     fontWeight: '500',
    //     color: '#000000',
    //     marginBottom: 20,
    //   },
  venueItem: {
    width: 180,
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: '#f8f8f8',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  venueImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 10,
  },
  venueName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  locationIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  locationText: {
    fontSize: 12,
    color: '#666',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  priceText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  capacityText: {
    fontSize: 10,
    color: '#444',
  },
});

export default VenueList;
