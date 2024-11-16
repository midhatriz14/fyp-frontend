import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import Header from './Header';
//import SearchBar from './SearchBar';
import CategoryGrid from './CategoryGrid';
import VenueList from './VenueList';
import BottomNavigation from './BottomNavigation';

const DashboardIndex: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.content}>
          {/* <View style={styles.welcomeSection}>
            <View style={styles.locationContainer}>
              <Image
                resizeMode="contain"
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/67f578fcd9cba5d097e610205d1bb59f3976a4ee99a7a87f5d43a0814567c595?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
                style={styles.locationIcon}
              />
              <Text style={styles.locationText}>House 30, ISB</Text>
            </View>
            <Text style={styles.welcomeText}>Welcome Midhat!</Text>
          </View> */}
          {/* <TouchableOpacity style={styles.planEventButton}>
            <Image
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b23cc298b73427e8ff413c97e65d7f818b17effa7ea6005ff3d291c0024be9ad?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
              style={styles.planEventIcon}
            />
            <Text style={styles.planEventText}>Plan an Event</Text>
          </TouchableOpacity> */}
          {/* <SearchBar /> */}
          <CategoryGrid />
          <VenueList />
        </View>
      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E9F0',
  },
  content: {
    padding: 24,
  },
  welcomeSection: {
    marginBottom: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  locationText: {
    fontSize: 14,
    color: '#000000',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1D1D1D',
  },
  planEventButton: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  planEventIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  planEventText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default DashboardIndex;