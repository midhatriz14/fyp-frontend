import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const images = [
    { id: '1', uri: 'https://example.com/image1.jpg' },
    { id: '2', uri: 'https://example.com/image2.jpg' },
    { id: '3', uri: 'https://example.com/image3.jpg' },
    { id: '4', uri: 'https://example.com/image4.jpg' },
    { id: '5', uri: 'https://example.com/image5.jpg' },
    { id: '6', uri: 'https://example.com/image6.jpg' },
    { id: '7', uri: 'https://example.com/image7.jpg' },
    { id: '8', uri: 'https://example.com/image8.jpg' },
];

const PhotosScreen: React.FC = () => {
    const renderItem = ({ item }: { item: { id: string; uri: string } }) => (
        <View style={styles.imageContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Photos</Text>
            </View>

            {/* Photos Grid */}
            <FlatList
                data={images}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.grid}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8EAF2',
        paddingTop: 70, // Add padding for the status bar
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    backText: {
        fontSize: 16,
        color: '#333',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    grid: {
        paddingHorizontal: 10,
    },
    imageContainer: {
        flex: 1,
        margin: 8,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#FFF',
        elevation: 3, // Add shadow for Android
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
});

export default PhotosScreen;
