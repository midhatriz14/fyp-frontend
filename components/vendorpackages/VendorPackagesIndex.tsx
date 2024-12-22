

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import { router } from 'expo-router';

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

            {/* Footer Navigation */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerIcon}>
                    <Ionicons name="cart-outline" size={24} color="#780C60" />
                    <Text style={styles.footerText}>My Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerIcon}>
                    <Ionicons name="mail-outline" size={24} color="#780C60" />
                    <Text style={styles.footerText}>Messages</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerIcon}>
                    <Ionicons name="home-outline" size={28} color="#780C60" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerIcon}>
                    <Ionicons name="calendar-outline" size={24} color="#780C60" />
                    <Text style={styles.footerText}>My Events</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerIcon}>
                    <Ionicons name="person-outline" size={24} color="#780C60" />
                    <Text style={styles.footerText}>Account</Text>
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
});

export default PackageScreen;
