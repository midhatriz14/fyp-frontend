
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';

const ReviewScreen = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.sectionTitle}>Reviews</Text>

            {/* Personal Details */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Personal Details</Text>
                <View style={styles.row}>
                    <Image
                        source={{ uri: 'https://example.com/avatar.jpg' }}
                        style={styles.avatar}
                    />
                    <View>
                        <Text style={styles.name}>fatyma</Text>
                        <Text style={styles.email}>syeda.rixvi891@gmail.com</Text>
                        <Text style={styles.phone}>+923055543437</Text>
                    </View>
                </View>
            </View>

            {/* Business Details */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Business Details</Text>
                <View style={styles.row}>
                    <Image
                        source={{ uri: 'https://example.com/avatar.jpg' }}
                        style={styles.avatar}
                    />
                    <View>
                        <Text style={styles.name}>fatyma</Text>
                        <Text style={styles.subTitle}>STAFF</Text>
                        <Text style={styles.subTitle}>CITIES</Text>
                        <Text style={styles.city}>Karachi</Text>
                    </View>
                </View>
            </View>

            {/* Pricing */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Pricing</Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableHeader, styles.flex1]}>Package Name</Text>
                        <Text style={[styles.tableHeader, styles.flex1]}>Price</Text>
                        <Text style={[styles.tableHeader, styles.flex3]}>Services</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.flex1]}>Basic</Text>
                        <Text style={[styles.tableCell, styles.flex1, styles.price]}>
                            100000
                        </Text>
                        <Text style={[styles.tableCell, styles.flex3]}>
                            1 Day Event - Team Coverage 1 Day Shoot
                            {'\n'}1 Event Albums (100 photos per album)
                            {'\n'}1 Shoot Album (50 photos per album)
                            {'\n'}1 Long Videos (20-50 mins)
                            {'\n'}1 Highlight of Event (3-5 mins)
                            {'\n'}1 Shoot Highlight (30-60 Sec)
                            {'\n'}All Raw Photos provided after event.
                        </Text>
                    </View>
                </View>
            </View>

            {/* Location */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Location</Text>
                <Text style={styles.link}>Main Branch</Text>
                <Image
                    source={{ uri: 'https://via.placeholder.com/300x200.png' }} // Replace with your map image or use a MapView
                    style={styles.map}
                />
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton} onPress={() => openModal()}>
                    <Text style={styles.saveButtonText}>Save & Continue</Text>
                </TouchableOpacity>
            </View>

            {/* Save Confirmation Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalMessage}>
                            Thank you for creating your profile. It is currently under review
                            and we will notify you once it is published.
                        </Text>
                        <View style={styles.modalButtons}>
                            {/* <TouchableOpacity
                                style={styles.confirmButton}
                                onPress={closeModal}
                                onPress={() => {
                                    router.push("/bdphotographer");
                                }}>
                                <Text style={styles.confirmButtonText}>Okay</Text>
                            </TouchableOpacity> */}
                            <TouchableOpacity
                                style={styles.confirmButton}
                                onPress={() => {
                                    closeModal(); // First action
                                    router.push("/vendordashboard"); // Second action
                                }}>
                                <Text style={styles.confirmButtonText}>Okay</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8E9F0',
        padding: 16,
        paddingTop: 70,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#000',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 14,
        color: '#555',
    },
    phone: {
        fontSize: 14,
        color: '#555',
    },
    subTitle: {
        fontSize: 14,
        color: '#555',
    },
    city: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    table: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        overflow: 'hidden',
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: 8,
        backgroundColor: '#F1F1F1',
    },
    tableCell: {
        fontSize: 12,
        padding: 8,
        color: '#000',
    },
    flex1: {
        flex: 1,
    },
    flex3: {
        flex: 3,
    },
    price: {
        color: '#E74C3C',
        fontWeight: 'bold',
    },
    link: {
        fontSize: 14,
        color: '#6A1B9A',
        marginBottom: 8,
    },
    map: {
        height: 200,
        borderRadius: 10,
        marginTop: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 16,
    },
    backButton: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderColor: '#780C60',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 12,
        marginRight: 10,
        alignItems: 'center',
    },
    backButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#780C60',
    },
    saveButton: {
        flex: 1,
        backgroundColor: '#780C60',
        borderRadius: 10,
        paddingVertical: 12,
        marginLeft: 10,
        alignItems: 'center',
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
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
    modalMessage: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    confirmButton: {
        flex: 1,
        marginRight: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#780C60',
        alignItems: 'center',
    },
    cancelButton: {
        flex: 1,
        marginLeft: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#E1BEE7',
        alignItems: 'center',
    },
    confirmButtonText: {
        color: '#fff',
    },
    cancelButtonText: {
        color: '#000',
    },
});

export default ReviewScreen;
