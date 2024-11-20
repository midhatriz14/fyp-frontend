import getAllCategories from '@/services/getAllCategories';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from 'react-native';

interface Category {
  _id: string
  createdAt: string
  description: string
  image: string
  name: string
}

const CategoryItem: React.FC<{ item: Category }> = ({ item }) => (
  <View style={styles.categoryItem}>
    <TouchableOpacity style={styles.categoryIcon} accessibilityRole="button"
      onPress={() => {
        if (item._id === '1') {
          router.push("/dashboard")
        }
        else if (item._id === '2') {
          router.push("/cateringvendor")
        }
        else if (item._id === '3') {
          router.push("/makeupvendor")
        }
        else if (item._id === '4') {
          router.push("/account")
        }
        else if (item._id === '5') {
          router.push("/account")
        }
        else if (item._id === '6') {
          router.push("/account")
        }
        else if (item._id === '7') {
          router.push("/account")
        }
        else if (item._id === '8') {
          router.push("/account")
        }
      }}>
      <Image
        resizeMode="contain"
        source={{ uri: item.image }}
        style={styles.categoryIcon}
      />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  </View>
);

const CategoryGrid: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    const response = await getAllCategories();
    setCategories(response);
  }
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
        renderItem={({ item, index }) => <CategoryItem item={item} key={index} />}
        keyExtractor={(item) => item._id}
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
    fontSize: 11,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
});

export default CategoryGrid;