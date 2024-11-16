import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SearchBar } from './SearchBar';
import { SalonCard } from './SalonCard';
import { Header } from './Header';
import { router } from 'expo-router';

interface SalonData {
  name: string;
  location: string;
  city: string;
  price: string;
  image: string;
}

const salonData: SalonData[] = [
  {
    name: 'Allure Salon & Spa',
    location: 'Murree Road, RWP',
    city: 'Islamabad',
    price: 'Rs.140,000/-',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/46b1df920fcd3770d87ba67573bbf730adbbe68492073dcc2391e56ed3d44f97?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
  },
  {
    name: 'Jugnu Wasim',
    location: 'Murree Road, RWP',
    city: 'Islamabad',
    price: 'Rs.140,000/-',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ae42f710fd697d86e27577792ee88dbdff977fa9e20d7e2f169e6d40e8bbbdf4?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
  },
  {
    name: 'Royali',
    location: 'Murree Road, RWP',
    city: 'Islamabad',
    price: 'Rs.140,000/-',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9c0bd8d415fa3d5edddcfa629935ab614bcd2689156d6d1e847362ca6d4fc3c6?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
  },
  {
    name: 'Somi Naqvi',
    location: 'Murree Road, RWP',
    city: 'Islamabad',
    price: 'Rs.140,000/-',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/46b1df920fcd3770d87ba67573bbf730adbbe68492073dcc2391e56ed3d44f97?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
  },
];

export const MakeupVendorIndex: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <View style={styles.titleContainer}>
        <TouchableOpacity
        onPress={() => { router.push("/dashboard") }}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
          <Text style={styles.titleText}>Makeup</Text>
        </View>
        <SearchBar />
        {salonData.map((salon, index) => (
          <SalonCard key={index} {...salon} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 40,
    maxWidth: 480,
    width: '100%',
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 27,
  },
  backText: {
    fontSize: 13,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
  },
});

export default MakeupVendorIndex;