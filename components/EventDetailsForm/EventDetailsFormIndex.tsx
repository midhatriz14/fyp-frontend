import getAllCategories from '@/services/getAllCategories';
import { saveSecureData } from '@/store';
import DateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ICategory } from '../dashboard/CategoryGrid';

const PersonalizedExperienceScreen: React.FC = () => {
    const [eventName, setEventName] = useState('');
    const [eventType, setEventType] = useState('');
    const [eventDate, setEventDate] = useState<Date | null>(null);
    const [guests, setGuests] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const [categories, setCategories] = useState<ICategory[]>([]);

    const [errors, setErrors] = useState({
        eventName: '',
        eventType: '',
        eventDate: '',
        guests: '',
        selectedServices: '',
    });

    useEffect(() => {
        const run = async () => {
            const response = await getAllCategories();
            setCategories(response);
        }
        run();
    }, []);


    const validateFields = (): boolean => {
        const newErrors = {
            eventName: eventName ? '' : 'Event name is required',
            eventType: eventType ? '' : 'Event type is required',
            eventDate: eventDate ? '' : 'Event date is required',
            guests: guests ? '' : 'Guest count is required',
            selectedServices: selectedServices.length > 0 ? '' : 'Select at least one service',
        };

        setErrors(newErrors);

        // Check if any error exists
        return Object.values(newErrors).every((error) => error === '');
    };

    const toggleService = (service: string) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter((item) => item !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    const onChangeDate = (_: any, selectedDate?: Date) => {
        setShowDatePicker(Platform.OS === 'ios');
        if (selectedDate) setEventDate(selectedDate);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Enter your details for personalized experience</Text>

            <Text style={styles.label}>Event Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter event name"
                placeholderTextColor="#aaa"
                value={eventName}
                onChangeText={setEventName}
            />
            {errors.eventName ? <Text style={styles.errorText}>{errors.eventName}</Text> : null}
            <Text style={styles.label}>Event Type</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter event type"
                placeholderTextColor="#aaa"
                value={eventType}
                onChangeText={setEventType}
            />
            {errors.eventType ? <Text style={styles.errorText}>{errors.eventType}</Text> : null}

            <Text style={styles.label}>Event Date</Text>
            <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
                <Text style={{ color: eventDate ? '#000' : '#aaa' }}>
                    {eventDate ? eventDate.toDateString() : 'Select event date'}
                </Text>
            </TouchableOpacity>
            {errors.eventDate ? <Text style={styles.errorText}>{errors.eventDate}</Text> : null}
            {showDatePicker && (
                <DateTimePicker
                    value={eventDate || new Date()}
                    mode="date"
                    display="default"
                    onChange={onChangeDate}
                />
            )}

            <Text style={styles.label}>Total Guests</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter guests"
                placeholderTextColor="#aaa"
                keyboardType="numeric"
                value={guests}
                onChangeText={setGuests}
            />
            {errors.guests ? <Text style={styles.errorText}>{errors.guests}</Text> : null}

            <Text style={styles.label}>Desired Services</Text>
            <View style={styles.checkboxContainer}>
                {categories.map((service) => (
                    <TouchableOpacity
                        key={service._id}
                        style={styles.checkbox}
                        onPress={() => toggleService(service.name)}
                    >
                        <Text style={{ color: '#000', fontSize: 14 }}>
                            {selectedServices.includes(service.name) ? '☑️' : '⬜'} {service.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            {errors.selectedServices ? <Text style={styles.errorText}>{errors.selectedServices}</Text> : null}

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.aiPlanButton} onPress={() => {
                    if (validateFields()) {
                        saveSecureData("eventDetails", JSON.stringify({ eventName, eventType, eventDate, guests, selectedServices }))
                        router.push('/AI');
                    }
                }}>
                    <Text style={styles.aiPlanButtonText}>AI Suggested Plan</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.customizeButton}
                    onPress={() => {
                        if (validateFields()) {
                            saveSecureData("eventDetails", JSON.stringify({ eventName, eventType, eventDate, guests, selectedServices }))
                            router.push({
                                pathname: '/customizeyourown',
                                params: { selectedServices: JSON.stringify(selectedServices) },
                            });
                        }
                    }}
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
    errorText: {
        color: 'red',
        fontSize: 12,
        alignSelf: 'flex-start',
        marginBottom: 10,
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
        justifyContent: 'center',
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
