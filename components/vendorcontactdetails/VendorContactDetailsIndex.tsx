
import postContactDetails from '@/services/postContactDetails';
import { getSecureData } from '@/store';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    Alert,
} from 'react-native';

const ContactDetailsScreen = () => {
    const [brandName, setBrandName] = useState<string>("");
    const [contactNumber, setContactNumber] = useState<string>("");
    const [instagramLink, setInstagramLink] = useState<string>("");
    const [facebookLink, setFacebookLink] = useState<string>("");
    const [bookingEmail, setBookingEmail] = useState<string>("");
    const [website, setWebsite] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [googleLink, setGoogleLink] = useState<string>("");

    const submit = async () => {
        if (!brandName || !contactNumber || !instagramLink || !bookingEmail || !city) {
            Alert.alert("Error", "Please fill in all the required fields marked with *.");
            return;
        }
        try {
            const user = JSON.parse(await getSecureData("user") || "");
            console.log(user);
            await postContactDetails(user._id, {
                brandName,
                brandLogo: 'logo',
                contactNumber,
                instagramLink,
                facebookLink,
                bookingEmail,
                city,
                website,
                officialAddress: address, // Renamed to match DTO
                officialGoogleLink: googleLink,
            });
            Alert.alert("Success", "Contact details saved successfully!");
            router.push("/bdphotographer");
        } catch (error) {
            Alert.alert("Error", "Something went wrong. Please try again.");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Contact Details</Text>
            <View style={styles.logoContainer}>
                <Image
                    source={require('./../../assets/images/GetStarted.png')}
                    style={styles.logo}
                />
                <Text style={styles.logoText}>Drag a logo here</Text>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Brand Name*"
                onChangeText={setBrandName}
                value={brandName}
            />

            <View style={styles.phoneInputContainer}>
                <Text style={styles.flag}>🇵🇰</Text>
                <TextInput
                    style={styles.phoneInput}
                    placeholder="+92"
                    keyboardType="phone-pad"
                    onChangeText={setContactNumber}
                    value={contactNumber}
                />
            </View>

            <TextInput
                style={styles.input}
                placeholder="Instagram Link*"
                onChangeText={setInstagramLink}
                value={instagramLink}
            />

            <TextInput
                style={styles.input}
                placeholder="Facebook Link"
                onChangeText={setFacebookLink}
                value={facebookLink}
            />

            <TextInput
                style={styles.input}
                placeholder="Booking Email*"
                keyboardType="email-address"
                onChangeText={setBookingEmail}
                value={bookingEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Website"
                onChangeText={setWebsite}
                value={website}
            />

            <TextInput
                style={styles.input}
                placeholder="City*"
                onChangeText={setCity}
                value={city}
            />

            <TextInput
                style={styles.input}
                placeholder="Official Address"
                onChangeText={setAddress}
                value={address}
            />

            <TextInput
                style={styles.input}
                placeholder="Official Google Link"
                onChangeText={setGoogleLink}
                value={googleLink}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={submit}
                >
                    <Text style={styles.saveButtonText}>Save & Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#F8E9F0',
        paddingTop: 70,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
        textAlign: 'left',
    },
    logoContainer: {
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#ddd',
    },
    logoText: {
        marginTop: 10,
        color: '#666',
        fontSize: 14,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#B3A3A3',
        fontSize: 14,
        paddingVertical: 5,
        marginBottom: 16,
        color: '#666',
    },
    phoneInputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#B3A3A3',
        fontSize: 14,
        paddingVertical: 5,
        marginBottom: 16,
        flexDirection: 'row',
    },
    flag: {
        fontSize: 18,
        marginRight: 10,
    },
    phoneInput: {
        flex: 1,
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    backButton: {
        flex: 1,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#780C60',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    backButtonText: {
        color: '#780C60',
        fontWeight: '600',
    },
    saveButton: {
        flex: 1,
        marginLeft: 10,
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        backgroundColor: "#780C60",
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: '600',
    },
});

export default ContactDetailsScreen;
