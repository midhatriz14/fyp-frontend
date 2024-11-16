import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import { router } from 'expo-router';


interface EventPlannerScreenProps {}

const Sandwich3Index: React.FC<EventPlannerScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d24d1ebd4c9319e81764fb2995ce41f17aedb4023b3fa2a7a2c53b54641bae4e?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
        style={styles.mainImage}
      />
      <Text style={styles.title}>
        Enjoy Every Moment with Expert Event Planners!
      </Text>
      <Text style={styles.subtitle}>
        Let top event planners handle the details, so you can focus on enjoying your special day.
      </Text>
      <TouchableOpacity style={styles.getStartedButton}
         onPress={() => { router.push("/intro") }}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 71,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: '#F8E9F0'
  },
  mainImage: {
    position: "relative",
    display: "flex",
    marginTop: 9,
    width: "100%",
    maxWidth: 310,
    aspectRatio: 1.42,
  },
  title: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    lineHeight: 16,
    letterSpacing: 0.8,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 65,
  },
  subtitle: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    lineHeight: 15,
    letterSpacing: 0.8,
    textAlign: "center",
    marginTop: 5,
  },
  getStartedButton: {
    alignSelf: "stretch",
    width: "100%",
    borderRadius: 10,
    marginTop: 75,
    maxWidth: 300,
    paddingLeft: 68,
    paddingRight: 68,
    paddingTop: 13,
    paddingBottom: 13,
    backgroundColor: "#780c61",
  },
  getStartedText: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 16,
    color: "#FFF",
    fontWeight: "500",
    textAlign: "center",
  },
});

export default Sandwich3Index;