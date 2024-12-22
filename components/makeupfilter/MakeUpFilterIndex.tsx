
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';

const MakeUpFilterIndex: React.FC = () => {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);
    const [priceRange, setPriceRange] = useState<number>(35000);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedStaff, setSelectedStaff] = useState<string[]>([]);
    const [selectedPolicy, setSelectedPolicy] = useState<string | null>(null);

    const cities = [
        'Karachi',
        'Islamabad',
        'Rawalpindi',
        'Lahore',
        'Peshawar',
        'Attock',
        'Quetta',
    ];
    const types = ['Salon', 'Spa'];
    const services = ['Bride', 'Groom'];
    const staff = ['Male', 'Female'];
    const cancellationPolicies = [
        'Refundable',
        'Non-Refundable',
        'Partially Refundable',
    ];

    const toggleSelection = (
        item: string,
        setSelected: React.Dispatch<React.SetStateAction<string[]>>,
        selected: string[]
    ) => {
        if (selected.includes(item)) {
            setSelected(selected.filter(selectedItem => selectedItem !== item));
        } else {
            setSelected([...selected, item]);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Filter</Text>
                <TouchableOpacity
                    style={styles.applyButton}
                    onPress={() => {
                        router.push("/makeupvendor");
                    }}
                >
                    <Text style={styles.applyButtonText}>Apply</Text>
                </TouchableOpacity>
            </View>

            {/* Cities */}
            <Text style={styles.label}>City</Text>
            <View style={styles.optionContainer}>
                {cities.map((city) => (
                    <TouchableOpacity
                        key={city}
                        style={[
                            styles.optionButton,
                            selectedCity === city && styles.selectedOption,
                        ]}
                        onPress={() => setSelectedCity(city)}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedCity === city && styles.selectedOptionText,
                            ]}
                        >
                            {city}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Sub Area */}
            <TextInput
                style={styles.textInput}
                placeholder="Sub Area"
                placeholderTextColor="#999"
            />

            {/* Price Range
            <Text style={styles.label}>Price Range</Text>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={100000}
                step={5000}
                value={priceRange}
                onValueChange={(value: React.SetStateAction<number>) => setPriceRange(value)}
                minimumTrackTintColor="#780C60"
                maximumTrackTintColor="#ccc"
                thumbTintColor="#780C60"
            />
            <Text style={styles.priceRange}>
                0 - {priceRange.toLocaleString()}
            </Text> */}

            {/* Types */}
            <Text style={styles.label}>Type</Text>
            <View style={styles.optionContainer}>
                {types.map((type) => (
                    <TouchableOpacity
                        key={type}
                        style={[
                            styles.optionButton,
                            selectedTypes.includes(type) && styles.selectedOption,
                        ]}
                        onPress={() => toggleSelection(type, setSelectedTypes, selectedTypes)}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedTypes.includes(type) && styles.selectedOptionText,
                            ]}
                        >
                            {type}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Services */}
            <Text style={styles.label}>Services For</Text>
            <View style={styles.optionContainer}>
                {services.map((service) => (
                    <TouchableOpacity
                        key={service}
                        style={[
                            styles.optionButton,
                            selectedServices.includes(service) && styles.selectedOption,
                        ]}
                        onPress={() =>
                            toggleSelection(service, setSelectedServices, selectedServices)
                        }
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedServices.includes(service) && styles.selectedOptionText,
                            ]}
                        >
                            {service}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Staff */}
            <Text style={styles.label}>Staff</Text>
            <View style={styles.optionContainer}>
                {staff.map((member) => (
                    <TouchableOpacity
                        key={member}
                        style={[
                            styles.optionButton,
                            selectedStaff.includes(member) && styles.selectedOption,
                        ]}
                        onPress={() => toggleSelection(member, setSelectedStaff, selectedStaff)}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedStaff.includes(member) && styles.selectedOptionText,
                            ]}
                        >
                            {member}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Cancellation Policy */}
            <Text style={styles.label}>Cancellation Policy</Text>
            <View style={styles.optionContainer}>
                {cancellationPolicies.map((policy) => (
                    <TouchableOpacity
                        key={policy}
                        style={[
                            styles.optionButton,
                            selectedPolicy === policy && styles.selectedOption,
                        ]}
                        onPress={() => setSelectedPolicy(policy)}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedPolicy === policy && styles.selectedOptionText,
                            ]}
                        >
                            {policy}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8E9F0',
        padding: 20,
        paddingTop: 70,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 12,
    },
    applyButton: {
        backgroundColor: '#8B006D',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        justifyContent: 'center',
        height: 40,
        marginLeft: 'auto',
    },
    applyButtonText: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3c003c',
        marginBottom: 10,
    },
    optionContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    optionButton: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 5,
    },
    selectedOption: {
        backgroundColor: '#780C60',
    },
    optionText: {
        fontSize: 14,
        color: '#333',
    },
    selectedOptionText: {
        color: '#fff',
    },
    textInput: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 10,
        marginBottom: 20,
        color: '#333',
    },
    slider: {
        width: '100%',
        height: 40,
    },
    priceRange: {
        fontSize: 14,
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default MakeUpFilterIndex;
