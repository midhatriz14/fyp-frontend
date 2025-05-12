

import { Ionicons } from '@expo/vector-icons'; // For icons
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



const PackageScreen = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const confirmLogout = () => {
        setModalVisible(false);
        console.log('Deleting Package...');
        router.push('/vendordashboard'); // Redirect after confirming delete
    };

    const cancelLogout = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Package 1</Text>
                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => setModalVisible(true)} // Open modal on delete
                >
                    <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => router.push('/editpackage')}
                >
                    <Text style={styles.editText}>Edit ✎</Text>
                </TouchableOpacity>

            </View>

            {/* Content */}
            <View style={styles.content}>
                <Text style={styles.sectionHeader}>Deliverables</Text>
                <Text style={styles.sectionText}>
                    Including Photography Videography Master Video + Highlights Couple Photoshoot Family shoot One digital
                    album One Videographer & One Photographer
                </Text>

                <Text style={styles.sectionHeader}>Photography</Text>
                <Text style={styles.sectionText}>Photo albums (80 photos)</Text>

                <Text style={styles.sectionHeader}>Team</Text>
                <Text style={styles.sectionText}>1 photographer{'\n'}1 Videographer</Text>

                <Text style={styles.sectionHeader}>Videography</Text>
                <Text style={styles.sectionText}>
                    Couple video highlights (Upto 2 mins){'\n'}Event video highlights (Upto 4 mins){'\n'}Full Video Events
                </Text>

                <Text style={styles.priceText}>Rs. 50,000/-</Text>
            </View>

            {/* Bottom Navigation */}

            <View style={styles.bottomNavigation}>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => router.push('/vendorordersummary')}
                >
                    <View style={styles.iconContainer}>
                        <Image
                            source={require('@/assets/images/myorder.png')}
                            style={styles.iconImage}
                        />
                    </View>
                    <Text style={styles.navText}>My Orders</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => router.push('/vendormessages')}
                >
                    <View style={styles.iconContainer}>
                        <Image
                            source={{
                                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a614f1d9-eba9-4f54-b7ec-c93132dcb1a9?placeholderIfAbsent=true&apiKey=b95bf478340c44448a2ab0604562a117',
                            }}
                            style={styles.iconImage}
                        />
                    </View>
                    <Text style={styles.navText}>Messages</Text>
                </TouchableOpacity>

                {/* Home Button */}
                <TouchableOpacity
                    style={[styles.navItem, styles.homeButton]} // Apply the custom homeButton style
                    onPress={() => router.push('/vendordashboard')}
                >
                    <View style={styles.iconContainer}>
                        <Image
                            source={require('@/assets/images/home.png')} // Replace with actual home image path
                            style={styles.iconImage}
                        />
                    </View>
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => router.push('/vendormyevents')}
                >
                    <View style={styles.iconContainer}>
                        <Image
                            source={require('@/assets/images/myevent.png')}
                            style={styles.iconImage}
                        />
                    </View>
                    <Text style={styles.navText}>My Events</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => router.push('/vendoraccount')}
                >
                    <View style={styles.iconContainer}>
                        <Image
                            source={{
                                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73089a6f-a9a6-4c94-9fd1-4cdd5923a137?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
                            }}
                            style={styles.iconImage}
                        />
                    </View>
                    <Text style={styles.navText}>Account</Text>
                </TouchableOpacity>
            </View>

            {/* Logout Confirmation Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={cancelLogout}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Confirm Delete</Text>
                        <Text style={styles.modalMessage}>
                            Are you sure you want to delete this package?
                        </Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={cancelLogout}
                            >
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.confirmButton}
                                onPress={confirmLogout}
                            >
                                <Text style={styles.confirmButtonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8E9F0',
        paddingTop: 70,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerTitle: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    deleteButton: {
        backgroundColor: '#D9534F',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginRight: 10,
    },
    editButton: {
        backgroundColor: '#B3A394',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    deleteText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    editText: {
        color: '#2d0539',
        fontWeight: 'bold',
    },
    content: {
        padding: 20,
    },
    sectionHeader: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    sectionText: {
        color: '#000',
        fontSize: 14,
        marginTop: 4,
    },
    priceText: {
        color: '#000',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    cancelButton: {
        flex: 1,
        marginRight: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
    },
    confirmButton: {
        flex: 1,
        marginLeft: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#D9534F',
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#000',
    },
    confirmButtonText: {
        color: '#fff',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 80,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    footerIcon: {
        alignItems: 'center',
    },
    footerText: {
        color: '#780C60',
        fontSize: 12,
        marginTop: 4,
    },

    homeButton: {
        // marginBottom: 30, // Moves the Home button slightly upward
        transform: [{ translateY: -10 }], // Alternatively, use translateY to lift it
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 80,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        backgroundColor: '#780C60',
        width: 30,
        height: 30,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    iconImage: {
        width: 37,
        height: 37,
        marginBottom: 5,
    },
    navText: {
        fontSize: 10,
        color: '#000000',
    },
});

export default PackageScreen;
