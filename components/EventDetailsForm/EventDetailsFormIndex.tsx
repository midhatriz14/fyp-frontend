
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const PersonalizedExperienceScreen: React.FC = () => {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const toggleService = (service: string) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter((item) => item !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Enter your details for personalized experience</Text>

            <Text style={styles.label}>Event Name</Text>
            <TextInput style={styles.input} placeholder="Enter event name" placeholderTextColor="#aaa" />

            <Text style={styles.label}>Event Type</Text>
            <TextInput style={styles.input} placeholder="Enter event type" placeholderTextColor="#aaa" />

            <Text style={styles.label}>Event Date</Text>
            <TextInput style={styles.input} placeholder="Enter event date" placeholderTextColor="#aaa" />

            <Text style={styles.label}>Total Guests</Text>
            <TextInput style={styles.input} placeholder="Enter guests" placeholderTextColor="#aaa" keyboardType="numeric" />

            <Text style={styles.label}>Desired Services</Text>
            <View style={styles.checkboxContainer}>
                {['Venue', 'Catering', 'Makeup', 'Photography', 'Hina Artist', 'DJ/Sound'].map((service) => (
                    <TouchableOpacity
                        key={service}
                        style={styles.checkbox}
                        onPress={() => toggleService(service)}
                    >
                        <Text style={{ color: '#000', fontSize: 14 }}>
                            {selectedServices.includes(service) ? '☑️' : '⬜'} {service}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.aiPlanButton}
                    onPress={() => router.push('/AI')}
                >
                    <Text style={styles.aiPlanButtonText}>AI Suggested Plan</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity
                    style={styles.customizeButton}
                    onPress={() => router.push('/customizeyourown')}
                >
                    <Text style={styles.customizeButtonText}>Customize Your Own</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                    style={styles.customizeButton}
                    onPress={() =>
                        router.push({
                            pathname: '/customizeyourown',
                            params: { selectedServices: JSON.stringify(selectedServices) },
                        })
                    }
                >
                    <Text style={styles.customizeButtonText}>Customize Your Own</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F8E9F0',
        alignItems: 'center',
        padding: 20,
        paddingTop: 70,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#000',
    },
    label: {
        fontSize: 14,
        color: '#000',
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    checkboxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: '100%',
    },
    checkbox: {
        width: '48%',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    aiPlanButton: {
        flex: 1,
        backgroundColor: '#7e1158',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginRight: 10,
    },
    customizeButton: {
        flex: 1,
        backgroundColor: '#a971b3',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginLeft: 10,
    },
    aiPlanButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    customizeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default PersonalizedExperienceScreen;
