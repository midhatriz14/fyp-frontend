import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";

interface Order {
    id: string;
    event: string;
    name: string;
    date: string;
    package: string;
    price: string;
    status: "Pending" | "Processing" | "Completed";
}

const ordersData: Order[] = [
    { id: "1", event: "Wedding Ceremony – PhotographyClient", name: "John Smith", date: "12 June 2024", package: "Gold Package – Full Day Coverage", price: "$800", status: "Pending" },
    { id: "2", event: "Birthday Party – Photography", name: "Alice Brown", date: "12 June 2024", package: "Gold Package – Full Day Coverage", price: "$800", status: "Processing" },
    { id: "3", event: "Corporate Gala – Photography", name: "John Smith", date: "12 June 2024", package: "Gold Package – Full Day Coverage", price: "$800", status: "Completed" },
    { id: "4", event: "Wedding Ceremony – PhotographyClient", name: "John Smith", date: "12 June 2024", package: "Gold Package – Full Day Coverage", price: "$800", status: "Pending" },
];

const OrderSummary = () => {
    const { selectedTab } = useLocalSearchParams(); // Read tab from navigation params
    const [selectedFilter, setSelectedFilter] = useState<"All" | "Pending" | "Processing" | "Completed">("All");
    const [orders, setOrders] = useState<Order[]>(ordersData);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Pending": return "#D9534F";
            case "Processing": return "#337AB7";
            case "Completed": return "#5CB85C";
            default: return "#999";
        }
    };

    const filteredOrders = selectedFilter === "All" ? orders : orders.filter(order => order.status === selectedFilter);

    const handleDelete = (id: string) => {
        setOrders(prevOrders => prevOrders.filter(order => order.id !== id));
    };

    const markAsCompleted = (id: string) => {
        setOrders(prevOrders =>
            prevOrders.map(order => order.id === id ? { ...order, status: "Completed" } : order)
        );
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push('/vendordashboard')}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>Order Summary</Text>
                <TouchableOpacity onPress={() => router.push('/vendornotifications')}>
                    <Ionicons name="notifications-outline" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            {/* Order Status Summary */}
            <View style={styles.summaryContainer}>
                <SummaryCard label="Orders" value={orders.length} color="#D6A7E3" />
                <SummaryCard label="Pending" value={orders.filter(o => o.status === "Pending").length} color="#D9534F" />
                <SummaryCard label="Processing" value={orders.filter(o => o.status === "Processing").length} color="#337AB7" />
                <SummaryCard label="Completed" value={orders.filter(o => o.status === "Completed").length} color="#5CB85C" />
            </View>


            {/* Filters */}
            <View style={styles.filterContainer}>
                {["All", "Pending", "Processing", "Completed"].map(filter => (
                    <TouchableOpacity key={filter} onPress={() => setSelectedFilter(filter as any)}>
                        <Text style={[styles.filterText, selectedFilter === filter && styles.activeFilter]}>
                            {filter}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>


            {/* Orders List */}
            <FlatList
                data={filteredOrders}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.orderCard}>
                        <View style={[styles.statusIndicator, { backgroundColor: getStatusColor(item.status) }]} />
                        <View style={styles.orderInfo}>
                            <Text style={styles.eventTitle}>Event: <Text style={styles.bold}>{item.event}</Text></Text>
                            <Text>Name: <Text style={styles.bold}>{item.name}</Text></Text>
                            <Text>Date: {item.date}</Text>
                            <Text>Package: "{item.package}"</Text>
                            <Text>Price: {item.price}</Text>
                            <Text>Status: {item.status}</Text>
                            <View style={styles.actionButtons}>
                                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
                                    <Text style={styles.buttonText}>Delete</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.completeButton} onPress={() => markAsCompleted(item.id)}>
                                    <Text style={styles.buttonText}>Mark As Completed</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />


            {/* Bottom Navigation */}

            <View style={styles.bottomNavigation}>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => router.push('/vendorordersummary')}
                >
                    <View style={styles.iconContainer}>
                        <Image
                            source={require('/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/myorder.png')}
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
                            source={require('/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/home.png')} // Replace with actual home image path
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
                            source={require('/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/myevent.png')}
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
        </View>
    );
};

const SummaryCard = ({ label, value, color }: { label: string, value: number, color: string }) => (
    <View style={[styles.summaryCard, { backgroundColor: color }]}>
        <Ionicons name="cart-outline" size={20} color="white" />
        <Text style={styles.summaryValue}>{value}</Text>
        <Text style={styles.summaryLabel}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F8E9F0", paddingHorizontal: 15, paddingTop: 70 },
    header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
    title: { fontSize: 20, fontWeight: "bold", color: "#000" },
    summaryContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
    summaryCard: { flex: 1, marginHorizontal: 5, padding: 15, borderRadius: 10, alignItems: "center" },
    summaryValue: { fontSize: 18, fontWeight: "bold", color: "white" },
    summaryLabel: { fontSize: 12, color: "white" },
    filterContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 10 },
    filterText: { fontSize: 16, color: "#555" },
    activeFilter: { borderBottomWidth: 2, borderBottomColor: "#780C60" },
    orderCard: { flexDirection: "row", backgroundColor: "white", padding: 15, borderRadius: 10, marginBottom: 10, shadowOpacity: 0.1, shadowRadius: 5, elevation: 2 },
    statusIndicator: { width: 15, height: 15, borderRadius: 10, marginRight: 15 },
    orderInfo: { flex: 1 },
    eventTitle: { fontWeight: "bold" },
    bold: { fontWeight: "bold" },
    actionButtons: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
    deleteButton: { backgroundColor: "#A00", padding: 5, borderRadius: 5 },
    completeButton: { backgroundColor: "#007BFF", padding: 5, borderRadius: 5 },
    buttonText: { color: "white", fontSize: 12 },
    //bottomNav: { flexDirection: "row", justifyContent: "space-around", backgroundColor: "#780C60", paddingVertical: 10 },

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
    homeButton: {
        // marginBottom: 30, // Moves the Home button slightly upward
        transform: [{ translateY: -10 }], // Alternatively, use translateY to lift it
    },

});

export default OrderSummary;
