import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DateInput: React.FC = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Event Date</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.placeholder}>DD/MM/YYY</Text>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f4e7917520d50deec6922cfdf93094215b4418d9996108719ecca932f9da229?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a" }}
          style={styles.calendarIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    marginLeft: 16,
  },
  inputContainer: {
    borderRadius: 12,
    display: 'flex',
    marginTop: 24,
    width: '100%',
    maxWidth: 340,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
    gap: 20,
    fontFamily: 'Inter, sans-serif',
    fontSize: 13,
    color: 'rgba(132, 132, 132, 0.46)',
    fontWeight: '400',
    textAlign: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  placeholder: {
    marginTop: 13,
  },
  calendarIcon: {
    width: 29,
    aspectRatio: 1,
  },
});

export default DateInput;