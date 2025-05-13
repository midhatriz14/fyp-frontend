import getVendorOrderStats from "@/services/getVendorOrderStats";
import getVendorOrders, { GetOrdersResponse } from "@/services/getVendorOrders";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Order {
    id: string;
    event: string;
    name: string;
    date: string;
    package: string;
    price: string;
    status: "Pending" | "Processing" | "Completed";
}

const { width } = Dimensions.get('window');

const OrderSummary = () => {
    const { selectedTab } = useLocalSearchParams(); // Read tab from navigation params
    const [selectedFilter, setSelectedFilter] = useState<"All" | "Pending" | "Processing" | "Completed">("All");
    const [orders, setOrders] = useState<GetOrdersResponse[]>([]);
    const [orderStats, setOrderStats] = useState({ totalOrders: 0, pending: 0, processing: 0, completed: 0 });

    useEffect(() => {
        // Fetch orders and stats on component mount
        const fetchData = async () => {
            try {
                const ordersData = await getVendorOrders();  // Fetch all orders
                const statsData = await getVendorOrderStats();  // Fetch order stats
                setOrders(ordersData);
                setOrderStats(statsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

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
        setOrders(prevOrders => prevOrders.filter(order => order.orderId !== id));
    };

    const markAsCompleted = (id: string) => {
        setOrders(prevOrders =>
            prevOrders.map(order => order.orderId === id ? { ...order, status: "Completed" } : order)
        );
    };

    // Handler for summary card clicks
    const handleSummaryCardClick = (filterType: "All" | "Pending" | "Processing" | "Completed") => {
        setSelectedFilter(filterType);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
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

                {/* Order Status Summary - Made Clickable */}
                <View style={styles.summaryContainer}>
                    <TouchableOpacity
                        style={styles.summaryCardWrapper}
                        onPress={() => handleSummaryCardClick("All")}
                        activeOpacity={0.7}
                    >
                        <SummaryCard
                            label="Orders"
                            value={orderStats.totalOrders}
                            color="#D6A7E3"
                            isActive={selectedFilter === "All"}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.summaryCardWrapper}
                        onPress={() => handleSummaryCardClick("Pending")}
                        activeOpacity={0.7}
                    >
                        <SummaryCard
                            label="Pending"
                            value={orderStats.pending}
                            color="#D9534F"
                            isActive={selectedFilter === "Pending"}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.summaryCardWrapper}
                        onPress={() => handleSummaryCardClick("Processing")}
                        activeOpacity={0.7}
                    >
                        <SummaryCard
                            label="Processing"
                            value={orderStats.processing}
                            color="#337AB7"
                            isActive={selectedFilter === "Processing"}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.summaryCardWrapper}
                        onPress={() => handleSummaryCardClick("Completed")}
                        activeOpacity={0.7}
                    >
                        <SummaryCard
                            label="Completed"
                            value={orderStats.completed}
                            color="#5CB85C"
                            isActive={selectedFilter === "Completed"}
                        />
                    </TouchableOpacity>
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
                    style={styles.ordersList}
                    contentContainerStyle={styles.ordersListContent}
                    data={filteredOrders}
                    keyExtractor={(item) => item.orderId}
                    renderItem={({ item }) => (
                        <View style={styles.orderCard}>
                            <View style={[styles.statusIndicator, { backgroundColor: getStatusColor(item.status) }]} />
                            <View style={styles.orderInfo}>
                                <Text style={styles.eventTitle}>Event: <Text style={styles.bold}>{item.eventName}</Text></Text>
                                <Text>Name: <Text style={styles.bold}>{item.clientName}</Text></Text>
                                <Text>Date: {item.eventDate}</Text>
                                <Text>Package: "{item.package}"</Text>
                                <Text>Price: {item.price}</Text>
                                <Text>Status: {item.status}</Text>
                                <View style={styles.actionButtons}>
                                    <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.orderId)}>
                                        <Text style={styles.buttonText}>Delete</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.completeButton} onPress={() => markAsCompleted(item.orderId)}>
                                        <Text style={styles.buttonText}>Mark As Completed</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>

            {/* Bottom Navigation */}
            <View style={styles.bottomNavigation}>
                {/* Navigation buttons */}
            </View>
        </SafeAreaView>
    );
};

const SummaryCard = ({
    label,
    value,
    color,
    isActive = false
}: {
    label: string,
    value: number,
    color: string,
    isActive?: boolean
}) => (
    <View style={[
        styles.summaryCard,
        { backgroundColor: color },
        isActive && styles.activeSummaryCard
    ]}>
        <Ionicons name="cart-outline" size={20} color="white" />
        <Text style={styles.summaryValue}>{value}</Text>
        <Text style={styles.summaryLabel}>{label}</Text>
        {isActive && <View style={styles.activeIndicator} />}
    </View>
);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#F8E9F0",
    },
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 50,
        paddingBottom: 80, // Add padding to the bottom to make space for navigation
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000"
    },
    summaryContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    summaryCardWrapper: {
        flex: 1,
        marginHorizontal: 5,
    },
    summaryCard: {
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    activeSummaryCard: {
        transform: [{ scale: 1.05 }],
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
    },
    activeIndicator: {
        position: 'absolute',
        bottom: -2,
        height: 3,
        width: '50%',
        backgroundColor: '#FFF',
        borderRadius: 3,
    },
    summaryValue: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    },
    summaryLabel: {
        fontSize: 9,
        color: "white"
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10
    },
    filterText: {
        fontSize: 16,
        color: "#555"
    },
    activeFilter: {
        borderBottomWidth: 2,
        borderBottomColor: "#780C60"
    },
    ordersList: {
        flex: 1,
    },
    ordersListContent: {
        paddingBottom: 20,
    },
    orderCard: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2
    },
    statusIndicator: {
        width: 15,
        height: 15,
        borderRadius: 10,
        marginRight: 15
    },
    orderInfo: {
        flex: 1
    },
    eventTitle: {
        fontWeight: "bold"
    },
    bold: {
        fontWeight: "bold"
    },
    actionButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    deleteButton: {
        backgroundColor: "#A00",
        padding: 5,
        borderRadius: 5
    },
    completeButton: {
        backgroundColor: "#007BFF",
        padding: 5,
        borderRadius: 5
    },
    buttonText: {
        color: "white",
        fontSize: 12
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        width: width,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 10,
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    iconContainer: {
        backgroundColor: '#780C60',
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    homeIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#780C60',
        transform: [{ translateY: -10 }],
    },
    navText: {
        fontSize: 10,
        color: '#000000',
    },
    homeButton: {
        transform: [{ translateY: -5 }],
    },
});

export default OrderSummary;
