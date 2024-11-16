import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface CatererCardProps {
  name: string;
  address: string;
  location: string;
  price: number;
  image: string;
}

const CatererCard: React.FC<CatererCardProps> = ({ name, address, location, price, image }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Image source={{ uri: image }} style={styles.catererImage} resizeMode="cover" />
        <View style={styles.catererInfo}>
          <Text style={styles.catererName}>{name}</Text>
          <Text style={styles.catererAddress}>{address}</Text>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1b2cbbacde743af2be853bc5bcaf037f1311242695985c7400aeb3cdd49ceead?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' }}
            style={styles.ratingImage}
            resizeMode="contain"
          />
          <View style={styles.locationContainer}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/960a0ab1f112a5aef00a94d3103e43871cdf51cddf5a29612bd7227015d99ad1?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' }}
              style={styles.locationIcon}
              resizeMode="contain"
            />
            <Text style={styles.locationText}>{location}</Text>
          </View>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>Rs.{price}/-</Text>
        <Text style={styles.perHeadText}>Per head</Text>
        <View style={styles.viewButton}>
          <Text style={styles.viewButtonText}>View</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 6,
    marginTop: 13,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  catererImage: {
    width: 72,
    height: 72,
    borderRadius: 6,
    marginRight: 15,
  },
  catererInfo: {
    flex: 1,
  },
  catererName: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  catererAddress: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 8,
    fontWeight: '300',
    color: '#000000',
    marginTop: 4,
  },
  ratingImage: {
    width: 43,
    height: 8,
    marginTop: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationIcon: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  locationText: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 6,
    color: 'rgba(201, 198, 198, 1)',
  },
  priceContainer: {
    marginTop: 10,
  },
  priceText: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  perHeadText: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 8,
    color: 'rgba(57, 54, 54, 1)',
    marginTop: 2,
  },
  viewButton: {
    backgroundColor: '#007AFF',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 13,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  viewButtonText: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 13,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default CatererCard;