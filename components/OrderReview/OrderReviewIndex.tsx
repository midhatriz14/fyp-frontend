import { router } from "expo-router";
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

const MyOrdersScreen = () => {
    const items = [
        {
            id: 1,
            name: "Hanif Rajput Catering",
            price: 59000,
            details: "Guests: 30\nMenu: Chicken 1 dish\nDate/Time: Nov 20, 2024, 3pm",
            image: require("./../../assets/images/GetStarted.png"), // Replace with your image path
        },
        {
            id: 2,
            name: "Fortress",
            price: 90000,
            details: "Guests: 30\nDate/Time: Nov 20, 2024, 3pm",
            image: require("./../../assets/images/GetStarted.png"), // Replace with your image path
        },
        {
            id: 3,
            name: "Allure Beauty",
            price: 70000,
            details: "Signature Makeup\nDate/Time: Nov 20, 2024, 3pm",
            image: require("./../../assets/images/GetStarted.png"), // Replace with your image path
        },
        {
            id: 4,
            name: "Maha Photography",
            price: 70000,
            details: "Package 1\nDate/Time: Nov 20, 2024, 3pm",
            image: require("./../../assets/images/GetStarted.png"), // Replace with your image path
        },
    ];

    const totalAmount = 499090;
    const discount = (totalAmount * 10) / 100;
    const discountedTotal = totalAmount - discount;


    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>My Orders</Text>
                <View style={styles.progress}>
                    <View style={[styles.progressStep, styles.completedStep]} />
                    <View style={[styles.progressConnector]} />
                    <View style={styles.progressStep} />
                    <View style={[styles.progressConnector]} />
                    <View style={styles.progressStep} />
                </View>
            </View>

            {items.map((item) => (
                <View key={item.id} style={styles.card}>
                    <Image source={item.image} style={styles.cardImage} />
                    <View style={styles.cardContent}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>Rs.{item.price.toLocaleString()}/-</Text>
                        <Text style={styles.details}>{item.details}</Text>
                    </View>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>
                </View>
            ))}

            <View style={styles.divider} />

            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total Amount</Text>
                <Text style={styles.summaryPrice}>Rs.{totalAmount.toLocaleString()}/-</Text>
            </View>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Eventify Hub Discount 10%</Text>
                <Text style={styles.discountPrice}>
                    -Rs.{discount.toLocaleString()}/-
                </Text>
            </View>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>New Total Amount</Text>
                <Text style={styles.summaryPrice}>Rs.{discountedTotal.toLocaleString()}/-</Text>
            </View>

            <TouchableOpacity
                style={styles.bookButton}
                onPress={() => router.push('/OrderSummary')}
            >
                <Text style={styles.bookButtonText}>Book Now</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8E9F0',
        paddingHorizontal: 20,
        paddingTop: 70,
    },
    header: {
        alignItems: "center",
        marginBottom: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 15,
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
    card: {
        flexDirection: "row",
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    cardImage: {
        width: 60,
        height: 60,
        borderRadius: 5,
        marginRight: 10,
    },
    cardContent: {
        flex: 1,
        justifyContent: "space-between",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    price: {
        fontSize: 14,
        color: '#780C60', // Dark purple color
        fontWeight: "bold",
        marginVertical: 2,
    },
    details: {
        fontSize: 12,
        color: "#666",
    },
    editButton: {
        backgroundColor: "#F6E5F6",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: "center",
    },
    editText: {
        fontSize: 12,
        color: '#780C60', // Dark purple color
        fontWeight: "bold",
    },
    divider: {
        height: 1,
        backgroundColor: "#E0E0E0",
        marginVertical: 20,
    },
    summary: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    summaryText: {
        fontSize: 14,
        color: "#333",
        fontWeight: "bold",
    },
    summaryPrice: {
        fontSize: 16,
        color: '#780C60', // Dark purple color
        fontWeight: "bold",
    },
    discountPrice: {
        fontSize: 16,
        color: "#FF0000",
        fontWeight: "bold",
    },
    bookButton: {
        backgroundColor: '#780C60', // Dark purple color
        borderRadius: 5,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 20,
    },
    bookButtonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default MyOrdersScreen;
