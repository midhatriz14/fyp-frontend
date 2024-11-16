import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

interface CategoryItemProps {
  category: {
    name: string;
    description: string;
    imageUri: string;
  };
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  return (
    <View style={styles.categoryItem}>
      <Image
        resizeMode="cover"
        source={{ uri: category.imageUri }}
        style={styles.categoryImage}
      />
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryName}>{category.name}</Text>
        <Text style={styles.categoryDescription}>{category.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 6,
  },
  categoryImage: {
    width: 59,
    aspectRatio: 1,
    borderRadius: 50,
  },
  categoryInfo: {
    marginLeft: 15,
  },
  categoryName: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
  },
  categoryDescription: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 1)',
    marginTop: 5,
  },
});