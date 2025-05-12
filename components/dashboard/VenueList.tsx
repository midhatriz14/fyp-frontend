
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
      <ItemList title="Popular Vendors" data={venues} />

    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#F8E9F0',

  },
  // title: {
  //   fontSize: 18,
  //   fontWeight: '500',
  //   color: '#000',
  //   marginBottom: 10,
  //   alignSelf: 'flex-start',
  //   paddingRight: 15,
  // },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginBottom: 10,
    alignSelf: 'flex-start',
    paddingRight: 25,
    marginRight: 20,
  },
  card: {
    width: 150,
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    padding: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 100,
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

