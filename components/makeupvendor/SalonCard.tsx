import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

interface SalonCardProps {
  name: string;
  location: string;
  city: string;
  price: string;
  image: string;
}

export const SalonCard: React.FC<SalonCardProps> = ({ name, location, city, price, image }) => {
  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: image }}
          style={styles.salonImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.location}>{location}</Text>
          <Image
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/96c3dd4125bd292db44df147ee6caebf93dc54ea1fe7665420a62c690cf2ecc5?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
            style={styles.ratingImage}
          />
          <View style={styles.cityContainer}>
            <Image
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/01bc4cd14cd76832b6a4eb77770f5846a5572d0906075fd35d48dae00d7ab20f?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
              style={styles.locationIcon}
            />
            <Text style={styles.cityText}>{city}</Text>
          </View>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.startingFrom}>Starting From</Text>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.viewButton}>
          <Text style={styles.viewButtonText}>View</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 13,
    paddingBottom: 5,
    marginBottom: 13,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  salonImage: {
    borderRadius: 6,
    width: 72,
    aspectRatio: 0.99,
    marginTop: 4,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 13,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Poppins, sans-serif',
  },
  location: {
    fontSize: 8,
    fontWeight: '300',
    marginTop: 8,
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Poppins, sans-serif',
  },
  ratingImage: {
    width: 44,
    aspectRatio: 5.49,
    marginTop: 42,
  },
  cityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
    marginTop: 4,
  },
  locationIcon: {
    width: 10,
    aspectRatio: 1,
  },
  cityText: {
    fontSize: 6,
    color: 'rgba(201, 198, 198, 1)',
    fontWeight: '400',
    fontFamily: 'Poppins, sans-serif',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  startingFrom: {
    fontSize: 11,
    color: 'rgba(201, 198, 198, 1)',
    fontWeight: '400',
    fontFamily: 'Poppins, sans-serif',
  },
  price: {
    fontSize: 13,
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
    marginTop: 4,
    fontFamily: 'Poppins, sans-serif',
  },
  viewButton: {
    borderRadius: 6,
    backgroundColor: '#007AFF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginTop: 20,
  },
  viewButtonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Poppins, sans-serif',
  },
});