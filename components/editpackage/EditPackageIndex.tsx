
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const PackageScreen = () => {
    const [quantity, setQuantity] = useState(1);
    const [isEditing, setIsEditing] = useState(true);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isSaveModalVisible, setIsSaveModalVisible] = useState(false);

    const [packageDetails, setPackageDetails] = useState({
        deliverables: "Photography, Videography, Master Video + Highlights, Couple Photoshoot, Family shoot, Digital album",
        photography: "Photo albums (80 photos)",
        team: "1 Photographer, 1 Videographer",
        videography: "Couple video highlights (2 mins), Event video highlights (4 mins), Full Video Events",
    });

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleDelete = () => {
        setModalVisible(true); // Show modal on delete button press
    };

    const confirmDelete = () => {
        setModalVisible(false);
        console.log('Package Deleted!');
        router.push('/vendordashboard'); // Redirect after confirming delete
    };

    const cancelDelete = () => {
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
                <TouchableOpacity onPress={() => router.push('/vendornotifications')}>
                    <Ionicons name="notifications-outline" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                    <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => setIsEditing(!isEditing)}
                >
                    <Text style={styles.editText}>{isEditing ? "Cancel" : "Edit ✎"}</Text>
                </TouchableOpacity> */}
            </View>

            {/* Package Details */}
            <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>

                <View style={styles.card}>
                    <Text style={styles.sectionHeader}>Deliverables</Text>
                    {isEditing ? (
                        <TextInput
                            style={styles.input}
                            multiline
                            value={packageDetails.deliverables}
                            onChangeText={(text) => setPackageDetails({ ...packageDetails, deliverables: text })}
                        />
                    ) : (
                        <Text style={styles.sectionText}>{packageDetails.deliverables}</Text>
                    )}

                    <Text style={styles.sectionHeader}>Photography</Text>
                    {isEditing ? (
                        <TextInput
                            style={styles.input}
                            value={packageDetails.photography}
                            onChangeText={(text) => setPackageDetails({ ...packageDetails, photography: text })}
                        />
                    ) : (
                        <Text style={styles.sectionText}>{packageDetails.photography}</Text>
                    )}

                    <Text style={styles.sectionHeader}>Team</Text>
                    {isEditing ? (
                        <TextInput
                            style={styles.input}
                            value={packageDetails.team}
                            onChangeText={(text) => setPackageDetails({ ...packageDetails, team: text })}
                        />
                    ) : (
                        <Text style={styles.sectionText}>{packageDetails.team}</Text>
                    )}

                    <Text style={styles.sectionHeader}>Videography</Text>
                    {isEditing ? (
                        <TextInput
                            style={styles.input}
                            multiline
                            value={packageDetails.videography}
                            onChangeText={(text) => setPackageDetails({ ...packageDetails, videography: text })}
                        />
                    ) : (
                        <Text style={styles.sectionText}>{packageDetails.videography}</Text>
                    )}
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
            </ScrollView>

            {/* Save Button - Always Visible */}
            <TouchableOpacity
                style={styles.saveButton}
                onPress={() => {
                    console.log("Package updated!", packageDetails);
                    setIsEditing(false);
                    router.push('/vendorpackages');
                }}
            >
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>



            {/* Bottom Navigation */}

            <View style={styles.bottomNavigation}>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => router.push('/vendorordersummary')}
                >
                    <View style={styles.iconContainer}>
                        <Image
                            source={require('./../../assets/images/myorder.png')}
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


            {/* Delete Confirmation Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={cancelDelete}
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
                                onPress={cancelDelete}
                            >
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.confirmButton}
                                onPress={confirmDelete}
                            >
                                <Text style={styles.confirmButtonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8E9F0', paddingTop: 50 },
    header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20 },
    headerTitle: { fontSize: 20, fontWeight: 'bold', color: "#000" },
    buttonContainer: { flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 20 },
    deleteButton: { backgroundColor: '#D9534F', padding: 8, borderRadius: 8, marginRight: 10 },
    editButton: { backgroundColor: '#B3A394', padding: 8, borderRadius: 8 },
    deleteText: { color: '#fff' },
    editText: { color: '#000' },
    scrollContainer: { paddingBottom: 100 },
    card: { backgroundColor: "#FFF", padding: 15, borderRadius: 10, marginHorizontal: 20, marginTop: 20 },
    sectionHeader: { fontSize: 16, fontWeight: 'bold', marginTop: 10, color: "#000" },
    sectionText: { fontSize: 14, marginTop: 5, color: "#333" },
    input: { borderWidth: 1, borderColor: "#CCC", padding: 10, borderRadius: 5, marginTop: 5, fontSize: 14, color: "#000", backgroundColor: "#FFF" },
    quantityContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, paddingHorizontal: 20 },
    iconButton: { padding: 5 },
    priceText: { fontSize: 24, fontWeight: 'bold', color: '#780C60' },
    modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    modalContent: { width: '80%', backgroundColor: '#fff', padding: 20, borderRadius: 10, alignItems: 'center' },
    modalButtons: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
    cancelButton: { flex: 1, marginRight: 10, padding: 10, borderRadius: 5, backgroundColor: '#E0E0E0', alignItems: 'center' },


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
    saveButton: {
        backgroundColor: '#780C60',
        padding: 15,
        borderRadius: 10,
        position: "absolute",
        bottom: 100,  // ✅ Increased to make space for bottom navigation
        left: 20,
        right: 20,
        alignItems: "center",
        elevation: 10, // Adds shadow effect
        zIndex: 999,  // ✅ Ensures button stays above other elements
    },

    saveButtonText: { color: '#FFF', fontSize: 16, fontWeight: "bold" },
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
    //confirmButton: { flex: 1, marginLeft: 10, padding: 10, borderRadius: 5, backgroundColor: '#D9534F', alignItems: 'center' },
});

export default PackageScreen;
