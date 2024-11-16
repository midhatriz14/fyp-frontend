import { router } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from 'react-native';

interface Category {
  id: string;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: '1', name: 'Venue', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/84763657a49d81bda0858925f8097a4b48d91189fde72fe0ba6a785ec7025c16?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { id: '2', name: 'Catering', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7e78c9565e263ee3ddce9d5750d5c413e8f162bf0ab90a170dd411792f988756?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { id: '3', name: 'Makeup', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8fe88f6ca4f2dd42a3491cbe3e096078786aaa56e1b7b72dd13b5d6e2ec84299?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { id: '4', name: 'Photography', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/38a43a81931f6ef5f8003dfb8506fb830759aa076fd0ddaa6f3131ef1a483d2a?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { id: '5', name: 'Mehndi', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/afb0c48a7cacdb2c5e7c1c757fdf3f930e9e12e3527827bb06cd608011f371ae?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { id: '6', name: 'DJ & Sound', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/069397aa367852c332a457ccd9922651bdcd53f10fda3aa5cf05433d651a4951?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { id: '7', name: 'Cake', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/77c9141259e17d4c034ca0a6e58827b749f3755c95cac9fbec265ec387072f0c?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
  { id: '8', name: 'Others', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ca49264ff84f855962a46d6daa557623123eb967b4df6bf6644cf3eb509d1d83?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' },
];

const CategoryItem: React.FC<{ item: Category }> = ({ item }) => (
  <View style={styles.categoryItem}>
<TouchableOpacity style={styles.categoryIcon} accessibilityRole="button"
    onPress={() => {
      if(item.id === '1') {
        router.push("/dashboard")
      } 
      else if (item.id === '2') {
        router.push("/cateringvendor")
      }
      else if (item.id === '3') {
        router.push("/makeupvendor")
      }
      else if (item.id === '4') {
        router.push("/account")
      }
      else if (item.id === '5') {
        router.push("/account")
      }
      else if (item.id === '6') {
        router.push("/account")
      }
      else if (item.id === '7') {
        router.push("/account")
      }
      else if (item.id === '8') {
        router.push("/account")
      }
    }}>
    <Image
      resizeMode="contain"
      source={{ uri: item.icon }}
      style={styles.categoryIcon}
    />
    <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  </View>
);

const CategoryGrid: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Vendor Categories</Text>
        <TouchableOpacity
        onPress={() => { router.push("/vendorcategories") }}>
        <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={4}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#F8E9F0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
  seeAll: {
    fontSize: 15,
    color: '#000000',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryIcon: {
    width: 65,
    height: 65,
    borderRadius: 50,
    marginBottom: 7,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
});

export default CategoryGrid;