import React from 'react';
import { View, StyleSheet, Image, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
//import { StatusBar } from './StatusBar';
import { SearchBar } from './SearchBar';
import { CategoryItem } from './CategoryItem';
import { router } from 'expo-router';

interface VendorCategory {
  id: string;
  name: string;
  description: string;
  imageUri: string;
}

const vendorCategories: VendorCategory[] = [
  { id: '1', name: 'Venues', description: 'Lawns, Banquets, Resort & more', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4dfeda4d5eb648a8b548a433932a1fd923d27603b5cb150f516b36a4a7019b7d?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { id: '2', name: 'Caterings', description: 'Indian, Italian & more', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c39895933bb6ebf0cf398a0871c06e42ad23fb4701f883eafe29c23a6c1e781c?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { id: '3', name: 'Photography', description: 'Photography, Photoshoot & more', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/16e0fdff65422ce4e2b92d31f8e49ed793568791d4b780e2df56c220405113fa?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { id: '4', name: 'Makeup', description: 'Groom Makeup, Bridal Makeup..', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a46e7ee55b81a5606ad88f21c36e2037ec97ea34d0d51c36522f8626672b9e98?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { id: '5', name: 'Mehndi', description: 'Bridal, sisters...', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9bb50a854573f7b5e329cdaea0719443bdb31f60f760a944a489446186d9233a?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { id: '6', name: 'DJ & Sound', description: 'DJ, Sangeet, Choreographer....', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b5fcfc6748cf628ec069119d5b932dc8eb833782a5450cbf7243bd13181b944d?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { id: '7', name: 'Cakes', description: 'Wedding, Birthday, Engagement', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a24fa3e9ec35e7068f9aeb1b70bdc5f4ec87ca636da2a416b214305297b85b1?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { id: '8', name: 'Others', description: 'Transport, Helper & more', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4ae41336029dc4ab551334190d72f81e556f783b40d68b69529054967ef2ce5b?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
];

export const VendorCategoriesIndex: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <StatusBar /> */}
      <View style={styles.header}>
      <TouchableOpacity
        onPress={() => { router.push("/dashboard") }}>
        <Text style={styles.backButton}>Back</Text>
     </TouchableOpacity>
        <Text style={styles.title}>Vendor Categories</Text>
      </View>
      <SearchBar />
      <ScrollView style={styles.categoriesList}>
        {vendorCategories.map((category) => (
          <CategoryItem key={category.id} category={category} />
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
    paddingBottom: 40,
    backgroundColor: '#FBEDF8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingTop: 12,
  },
  backButton: {
    fontSize: 13,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
  },
  categoriesList: {
    marginTop: 22,
    paddingHorizontal: 25,
  },
});

export default VendorCategoriesIndex;