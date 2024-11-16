import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import SearchBar from './SearchBar';
import CatererCard from './CatererCard';

const catererData = [
  {
    id: 1,
    name: 'Hanif Rajput',
    address: 'Murree Road, RWP',
    location: 'Islamabad',
    price: 2200,
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7884b818b6c1f1acb75804af473579228a5c7578ea20d37751246a4d05bb002c?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
  },
  {
    id: 2,
    name: 'Orange',
    address: 'Murree Road, RWP',
    location: 'Islamabad',
    price: 2200,
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c91dc5e9e7b14ad54b931a4b3a75e2e9895138c5f9978633895ac4d792cc65d3?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
  },
  {
    id: 3,
    name: 'Pakistan Caterers',
    address: 'Murree Road, RWP',
    location: 'Islamabad',
    price: 2200,
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7ce967028902ae85e3f6c03b23e9ed4041c64e12e242ea56a831c15a78e5d085?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
  },
  {
    id: 4,
    name: 'J&T Caterers',
    address: 'Murree Road, RWP',
    location: 'Islamabad',
    price: 2200,
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/07108fbd3e08ca6925c2959b9582b1cb5869ca30a107a787aa4ebd3f71f18055?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
  },
  {
    id: 5,
    name: 'Rafy Kitchen',
    address: 'Murree Road, RWP',
    location: 'Islamabad',
    price: 2200,
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a12d479796c15bb68daa342ff2dde12b3753ec570f7c83d7f1ed55106c184c4?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
  },
];

const WeddingCaterersList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <ScrollView style={styles.catererList}>
        {catererData.map((caterer) => (
          <CatererCard key={caterer.id} {...caterer} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  catererList: {
    flex: 1,
    paddingHorizontal: 25,
  },
});

export default WeddingCaterersList;