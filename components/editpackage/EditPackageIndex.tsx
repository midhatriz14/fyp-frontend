import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const PackageScreen = () => {
    const [quantity, setQuantity] = useState(1);
    const [isModalVisible, setModalVisible] = useState(false);

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleSave = () => {
        console.log('Package saved!');
    };

    const confirmDelete = () => {
        console.log('Package Deleted!');
        setModalVisible(false);
    };

    return (
        <ScrollView>
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
                    <TouchableOpacity style={styles.deleteButton} onPress={() => setModalVisible(true)}>
                        <Text style={styles.deleteText}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editText}>Edit ✎</Text>
                    </TouchableOpacity>
                </View>

                {/* Package Content */}
                <View style={styles.content}>
                    <View style={styles.card}>
                        <Text style={styles.sectionHeader}>Deliverables</Text>
                        <Text style={styles.sectionText}>
                            Including Photography Videography Master Video + Highlights Couple Photoshoot Family shoot One
                            digital album One Videographer & One Photographer
                        </Text>

                        <Text style={styles.sectionHeader}>Photography</Text>
                        <Text style={styles.sectionText}>Photo albums (80 photos)</Text>

                        <Text style={styles.sectionHeader}>Team</Text>
                        <Text style={styles.sectionText}>1 Photographer{'\n'}1 Videographer</Text>

                        <Text style={styles.sectionHeader}>Videography</Text>
                        <Text style={styles.sectionText}>
                            Couple video highlights (Upto 2 mins){'\n'}Event video highlights (Upto 4 mins){'\n'}Full Video
                            Events
                        </Text>
                        <Text style={styles.sectionHeader}>Deliverables</Text>
                        <Text style={styles.sectionText}>
                            Including Photography Videography Master Video + Highlights Couple Photoshoot Family shoot One
                            digital album One Videographer & One Photographer
                        </Text>

                        <Text style={styles.sectionHeader}>Photography</Text>
                        <Text style={styles.sectionText}>Photo albums (80 photos)</Text>

                        <Text style={styles.sectionHeader}>Team</Text>
                        <Text style={styles.sectionText}>1 Photographer{'\n'}1 Videographer</Text>

                        <Text style={styles.sectionHeader}>Videography</Text>
                        <Text style={styles.sectionText}>
                            Couple video highlights (Upto 2 mins){'\n'}Event video highlights (Upto 4 mins){'\n'}Full Video
                            Events
                        </Text>
                    </View>

                    {/* Increment/Decrement Buttons */}
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity onPress={decreaseQuantity} style={styles.iconButton}>
                            <Ionicons name="remove-circle-outline" size={28} color="#6A1B4D" />
                        </TouchableOpacity>
                        <Text style={styles.priceText}>Rs. {50_000 * quantity}</Text>
                        <TouchableOpacity onPress={increaseQuantity} style={styles.iconButton}>
                            <Ionicons name="add-circle-outline" size={28} color="#6A1B4D" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.saveButton} onPress={() => router.push('/vendordashboard')}>
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                </View>

                {/* Footer */}
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

                {/* Delete Confirmation Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Confirm Delete</Text>
                            <Text style={styles.modalMessage}>
                                Are you sure you want to delete this package?
                            </Text>
                            <View style={styles.modalButtons}>
                                <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                                    <Text style={styles.cancelButtonText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.confirmButton}
                                //  onPress={() => router.push('/vendordashboard')}
                                >
                                    <Text style={styles.confirmButtonText}>Delete</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    //container: { flex: 1, backgroundColor: '#2d0539', paddingTop: 50 },
    header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20 },
    headerTitle: { color: '#000', fontSize: 24, fontWeight: 'bold' },
    buttonContainer: { flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 20 },
    deleteButton: { backgroundColor: '#D9534F', padding: 8, borderRadius: 8, marginRight: 10 },
    editButton: { backgroundColor: '#B3A394', padding: 8, borderRadius: 8 },
    deleteText: { color: '#fff' },
    editText: { color: '#2d0539' },
    content: { padding: 20 },
    card: { borderWidth: 1, borderColor: '#fff', padding: 10, borderRadius: 8 },
    sectionHeader: { color: '#000', fontWeight: 'bold', marginTop: 10 },
    sectionText: { color: '#000', marginTop: 5 },
    priceText: { fontSize: 28, fontWeight: 'bold', color: '#780C60' },
    saveButton: { backgroundColor: '#6A1B4D', padding: 12, borderRadius: 8, marginTop: 20 },
    saveButtonText: { textAlign: 'center', color: '#fff', fontWeight: 'bold' },
    quantityContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 },
    iconButton: { padding: 5 },
    //footer: { backgroundColor: '#5E2B75', flexDirection: 'row', justifyContent: 'space-around', padding: 10 },
    // footerIcon: { alignItems: 'center' },
    //  footerText: { color: '#fff', fontSize: 12 },
    modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
    modalContent: { backgroundColor: '#fff', padding: 20, borderRadius: 8, alignItems: 'center' },
    modalTitle: { fontSize: 20, fontWeight: 'bold' },
    modalMessage: { marginVertical: 10, fontSize: 16, textAlign: 'center' },
    modalButtons: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
    cancelButton: { flex: 1, backgroundColor: '#E0E0E0', padding: 10, marginRight: 5, borderRadius: 5 },
    confirmButton: { flex: 1, backgroundColor: '#D9534F', padding: 10, marginLeft: 5, borderRadius: 5 },
    cancelButtonText: { textAlign: 'center', color: '#333' },
    confirmButtonText: { textAlign: 'center', color: '#fff' },
    container: {
        flex: 1,
        //backgroundColor: '#2d0539',
        paddingTop: 50,
        backgroundColor: '#F8E9F0',
    },
    contentContainer: {
        flex: 1, // Pushes the footer to the bottom
        padding: 20,

    },
    // footer: {
    //     height: 80,
    //     backgroundColor: '#5E2B75',
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     alignItems: 'center',
    //     position: 'absolute', // Fixes the footer to the bottom
    //     bottom: 0, // Aligns it to the bottom
    //     width: '100%',
    // },
    // footerIcon: { alignItems: 'center' },
    // footerText: { color: '#fff', fontSize: 12 },
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
