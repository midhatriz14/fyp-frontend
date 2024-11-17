import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Asset } from 'expo-asset';
import { router } from 'expo-router';

const Sandwich1Index = () => {
  const sandwich1Image = Asset.fromModule(require('./../../assets/images/sandwich1.png')).uri;
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: sandwich1Image }}
        style={styles.image}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>
          "VENDORS AT YOUR <Text style={styles.highlight}>FINGERTIPS!</Text>"
        </Text>
        <Text style={styles.description}>
          Easily search, sort by price and reviews, and find the perfect vendors
          for your event in no time.
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            router.push("/intro");
          }}
        >
          <Text style={styles.footerText}>SKIP</Text>
        </TouchableOpacity>

        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity
          onPress={() => {
            console.log("Sandwich 2")
            router.push("/sandwich2")
          }}
        >
          <Text style={styles.footerText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E9F0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  image: {
    width: '80%',
    height: '40%',
    resizeMode: 'contain',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  highlight: {
    color: '#E15A45', // Highlight color for "FINGERTIPS!"
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginTop: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  footerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#8A2BE2', // Active dot color
  },
});

export default Sandwich1Index;