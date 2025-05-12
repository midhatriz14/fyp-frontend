import { router } from "expo-router";
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";

const SummaryScreen = () => {
    const items = [
        { id: 1, name: "Hanif Rajput Catering", price: 59000 },
        { id: 2, name: "Fortress", price: 90000 },
        { id: 3, name: "Allure Beauty", price: 70000 },
        { id: 4, name: "Maha Photography", price: 70000 },
    ];

    const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    const discount = (subtotal * 10) / 100;
    const total = subtotal - discount;

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backArrow}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Summary</Text>
            </View>

            {/* Progress Bar */}
            <View style={styles.progress}>
                <View style={[styles.progressStep, styles.completedStep]} />
                <View style={styles.progressConnector} />
                <View style={[styles.progressStep, styles.completedStep]} />
                <View style={styles.progressConnector} />
                <View style={styles.progressStep} />
            </View>

            {/* Summary Card */}
            <View style={styles.summaryCard}>
                <Text style={styles.cardTitle}>Summary</Text>
                {items.map((item) => (
                    <View key={item.id} style={styles.itemRow}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemPrice}>Rs.{item.price.toLocaleString()}/-</Text>
                    </View>
                ))}
                <View style={styles.divider} />
                <View style={styles.itemRow}>
                    <Text style={styles.itemLabel}>Subtotal</Text>
                    <Text style={styles.itemPrice}>Rs.{subtotal.toLocaleString()}/-</Text>
                </View>
                <View style={styles.itemRow}>
                    <Text style={styles.itemLabel}>Eventify Hub Discount</Text>
                    <Text style={styles.itemPrice}>10%</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.itemRow}>
                    <Text style={[styles.itemLabel, styles.boldText]}>Total</Text>
                    <Text style={[styles.itemPrice, styles.boldText]}>
                        Rs.{total.toLocaleString()}/-
                    </Text>
                </View>
            </View>

            {/* Total Amount Section */}
            <View style={styles.totalSection}>
                <Text style={styles.totalLabel}>Total Amount</Text>
                <Text style={styles.totalValue}>Rs.{total.toLocaleString()}/-</Text>
            </View>

            {/* Pay Now Button
            <TouchableOpacity
                style={styles.payButton}
                onPress={() => router.push('/paymentmethod')}
            >
                <Text style={styles.payButtonText}>Pay Now</Text>
            </TouchableOpacity> */}

            {/* Vendor Message Section */}
            <View style={styles.vendorMessageBox}>
                <Text style={styles.vendorMessageText}>
                    ✅ Thank you! The vendor will call you shortly, and payment will be made directly to the vendor.
                </Text>
            </View>

            {/* Save Receipt Button */}
            <TouchableOpacity
                style={styles.saveButton}
                onPress={() => {
                    // Placeholder: Add logic to save receipt here
                    alert('Receipt saved successfully!');
                }}
            >
                <Text style={styles.saveButtonText}>Save Receipt</Text>
            </TouchableOpacity>
            {/* Go to Dashboard Button */}
            <TouchableOpacity
                style={styles.dashboardButton}
                onPress={() => router.push('/dashboard')} // Replace with your actual dashboard route
            >
                <Text style={styles.dashboardButtonText}>Go to Dashboard</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FCEFF8",
        paddingHorizontal: 20,
        paddingTop: 70,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    backArrow: {
        fontSize: 18,
        color: '#780C60', // Dark purple color
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    progress: {
        flexDirection: "row",
        alignItems: "center",
    },
    progressStep: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        backgroundColor: "#E0E0E0",
    },
    completedStep: {
        backgroundColor: '#780C60', // Dark purple color
    },
    progressConnector: {
        height: 2,
        flex: 1,
        backgroundColor: '#780C60', // Dark purple color
    },
    summaryCard: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        marginBottom: 30,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    itemRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    itemName: {
        fontSize: 14,
        color: "#555",
    },
    itemPrice: {
        fontSize: 14,
        color: "#333",
        fontWeight: "bold",
    },
    divider: {
        height: 1,
        backgroundColor: "#E0E0E0",
        marginVertical: 10,
    },
    itemLabel: {
        fontSize: 14,
        color: "#555",
    },
    boldText: {
        fontWeight: "bold",
    },
    totalSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    totalLabel: {
        fontSize: 16,
        color: "#333",
        fontWeight: "bold",
    },
    totalValue: {
        fontSize: 16,
        color: '#780C60', // Dark purple color
        fontWeight: "bold",
    },
    payButton: {
        backgroundColor: '#780C60', // Dark purple color
        borderRadius: 5,
        paddingVertical: 15,
        alignItems: "center",
    },
    payButtonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    vendorMessageBox: {
        backgroundColor: '#E8F5E9', // light green background
        padding: 15,
        borderRadius: 8,
        marginBottom: 30,
        alignItems: 'center',
    },
    vendorMessageText: {
        color: '#2E7D32', // dark green text
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
    },
    saveButton: {
        backgroundColor: '#780C60', // dark purple
        borderRadius: 5,
        paddingVertical: 12,
        alignItems: 'center',
        marginBottom: 30,
    },
    saveButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    dashboardButton: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#780C60', // dark purple border
        borderRadius: 5,
        paddingVertical: 12,
        alignItems: 'center',
        marginBottom: 30,
    },
    dashboardButtonText: {
        color: '#780C60',
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default SummaryScreen;
