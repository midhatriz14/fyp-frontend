
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { router } from "expo-router";
import { getSecureData } from "@/store";

const screenWidth = Dimensions.get("window").width;



const DashboardScreen = () => {

    const [username, setUsername] = useState<string>(""); // State for username

    useEffect(() => {
        fetchUsername(); // Fetch username on component mount
    }, []);

    const fetchUsername = async () => {
        const storedUsername = (await getSecureData("user")) || "Guest"; // Retrieve username or set default
        setUsername(JSON.parse(storedUsername).name);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Header Section */}
                <View style={styles.header}>
                    <View style={styles.profileContainer}>
                        <View style={styles.profileDetails}>
                            <Image
                                source={{ uri: "https://example.com/profile-pic.png" }} // Replace with actual image
                                style={styles.profileImage}
                            />
                            <Text style={styles.username}>{username}</Text> {/* Display the username */}
                        </View>
                        <TouchableOpacity
                            style={styles.notificationIcon}
                            onPress={() => router.push('/vendornotifications')}
                        >
                            <Ionicons name="notifications" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.statsContainer}>
                        <View style={[styles.statBox, styles.ordersBox]}>
                            <Text style={styles.statValue}>27</Text>
                            <Text style={styles.statLabel}>Orders</Text>
                        </View>
                        <View style={[styles.statBox, styles.pendingBox]}>
                            <Text style={styles.statValue}>8</Text>
                            <Text style={styles.statLabel}>Pending</Text>
                        </View>
                        <View style={[styles.statBox, styles.processBox]}>
                            <Text style={styles.statValue}>19</Text>
                            <Text style={styles.statLabel}>Processing</Text>
                        </View>
                    </View>
                </View>


                {/* Sales Statistics Section */}
                <View style={styles.sectionContainer}>
                    <View style={styles.statisticsHeader}>
                        <Text style={styles.sectionTitle}>Sales Statistics</Text>
                        <TouchableOpacity style={styles.dropdownButton}>
                            <Text style={styles.dropdownText}>This Week</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Chart */}
                    <LineChart
                        data={{
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                            datasets: [
                                {
                                    data: [10000, 15000, 32000, 12000, 18000, 25000, 14000],
                                    color: () => `purple`,
                                    strokeWidth: 2,
                                },
                                {
                                    data: [9000, 12000, 15000, 20000, 14000, 17000, 23000],
                                    color: () => `red`,
                                    strokeWidth: 2,
                                },
                            ],
                            legend: ["Amount", "Orders"],
                        }}
                        width={screenWidth - 32}
                        height={220}
                        chartConfig={chartConfig}
                        bezier
                        style={styles.chart}
                    />
                </View>

                {/* Current Packages Section */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Current Packages</Text>
                    <View style={styles.packageContainer}>
                        {packages.map((pkg, index) => (
                            <TouchableOpacity key={index} style={[styles.packageBox, { backgroundColor: pkg.color }]}>
                                <Text style={styles.packageValue}>{pkg.value}</Text>
                                <Text style={styles.packageLabel}>Package</Text>
                                <TouchableOpacity
                                    style={styles.detailsButton}
                                    onPress={() => {
                                        // const 
                                        router.push('/vendorpackages')
                                    }} // Navigate to "Details" screen
                                >
                                    <Text style={styles.detailsText}>Details</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Pending Actions Section */}
                {/* <View style={styles.pendingSection}>
                    <Text style={styles.sectionTitle}>Pending Clients Actions</Text>
                    <View style={styles.pendingBoxAction}>
                        <Text style={styles.pendingText}>Payment Overdue By Clients</Text>
                        <Text style={styles.pendingDate}>For Event on <Text style={styles.highlight}>24th Oct 2023</Text></Text>
                    </View>
                </View> */}
                {/* Vendor Profile Section
                <View style={styles.vendorProfileContainer}>
                    <Image  style={styles.vendorImage} />
                    <View style={styles.vendorDetails}>
                        <Text style={styles.vendorName}</Text>
                        <Text style={styles.vendorDescription}>{vendorProfile.description}</Text>
                        <TouchableOpacity
                            style={styles.viewProfileButton}
                            onPress={() => router.push('/vendorprofile')} // Navigate to Vendor Profile screen
                        >
                            <Text style={styles.viewProfileText}>View Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}

                {/* Vendor Profile Button */}
                <TouchableOpacity
                    style={styles.vendorProfileButton}
                    onPress={() => router.push('/vendorprofiledetails')} // Replace with the correct route to the Vendor Profile page
                >
                    <Text style={styles.vendorProfileButtonText}>View Vendor Profile</Text>
                </TouchableOpacity>
            </ScrollView>


            {/* Bottom Navigation */}
            <View style={styles.bottomNavigation}>

                {/* My Orders */}
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => router.push('/vendordashboard')}
                >
                    <View style={styles.iconContainer}>
                        <Image
                            source={{
                                uri: '/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/myorder.png',
                            }}
                            style={styles.iconImage}
                        />
                    </View>
                    <Text style={styles.navText}>My Orders</Text>
                </TouchableOpacity>

                {/* Messages */}
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


                {/* My Events */}
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => router.push('/bottomnotification')}
                >
                    <View style={styles.iconContainer}>
                        <Image
                            source={require('/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/myevent.png')} // Ensure this path is correct
                            style={styles.iconImage}
                        />
                    </View>

                    <Text style={styles.navText}>My Events</Text>
                </TouchableOpacity>

                {/*Account */}
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => router.push('/')}
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
            <View style={styles.bottomNavigation}>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => router.push('/vendordashboard')}
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
                    onPress={() => router.push('/vendornotifications')}
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

const packages = [
    { value: "1", color: "#7D0C72" },
    { value: "2", color: "#B0B0B0" },
    { value: "3", color: "#FFD700" },
];

const navItems = [
    { label: "My Orders", icon: "shopping-bag" },
    { label: "Messages", icon: "envelope" },
    { label: "My Events", icon: "calendar-alt" },
    { label: "Account", icon: "user" },
];

const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#f9f0f9",
    backgroundGradientTo: "#f2f2f2",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
    style: {
        borderRadius: 16,
    },
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8E9F0', paddingTop: 50, },
    header: { padding: 20 },
    /// profileContainer: { alignItems: "center" },
    //profileImage: { width: 60, height: 60, borderRadius: 30 },
    //username: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
    statsContainer: { flexDirection: "row", justifyContent: "space-around" },
    statBox: { width: 100, padding: 10, borderRadius: 10, alignItems: "center" },
    ordersBox: { backgroundColor: "#D6A7E3" },
    pendingBox: { backgroundColor: "#EFCAB8" },
    processBox: { backgroundColor: "#F6A6A2" },
    statValue: { fontSize: 24, fontWeight: "bold" },
    statLabel: { fontSize: 14 },
    sectionContainer: { paddingHorizontal: 16, marginBottom: 20 },
    sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    dropdownButton: { backgroundColor: "#7D0C72", borderRadius: 20, padding: 10, alignSelf: "flex-end" },
    dropdownText: { color: "#fff", fontSize: 14 },
    chart: { borderRadius: 16 },
    packageContainer: { flexDirection: "row", justifyContent: "space-between" },
    packageBox: { width: "30%", padding: 10, borderRadius: 10, alignItems: "center" },
    packageValue: { fontSize: 24, fontWeight: "bold" },
    packageLabel: { fontSize: 14 },
    detailsButton: { marginTop: 5, backgroundColor: "#fff", borderRadius: 5, padding: 5 },
    detailsText: { color: "#000" },
    pendingSection: { paddingHorizontal: 16, marginBottom: 20 },
    pendingBoxAction: { backgroundColor: "#E9D6E8", borderRadius: 10, padding: 10 },
    pendingText: { fontSize: 16 },
    pendingDate: { fontSize: 12 },
    highlight: { color: "#7D0C72", fontWeight: "bold" },
    bottomNav: { flexDirection: "row", justifyContent: "space-around", padding: 10, backgroundColor: "#fff", paddingBottom: 20, },
    //navItem: { alignItems: "center" },
    //navText: { fontSize: 12, color: "#7D0C72" },
    statisticsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
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
    vendorProfileContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        marginBottom: 20,
        backgroundColor: "#F8EAF2",
        borderRadius: 10,
    },
    vendorImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16,
    },
    vendorDetails: {
        flex: 1,
    },
    vendorName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#780C60",
    },
    vendorDescription: {
        fontSize: 14,
        color: "#555",
        marginVertical: 4,
    },
    viewProfileButton: {
        backgroundColor: "#780C60",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    viewProfileText: {
        color: "#FFF",
        fontSize: 14,
        fontWeight: "bold",
    },
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
    vendorProfileButton: {
        backgroundColor: '#7D0C72',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 10,
    },
    vendorProfileButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    profileContainer: {
        flexDirection: "row", // Align items in a row
        justifyContent: "space-between", // Space out elements
        alignItems: "center", // Vertically center align items
        marginBottom: 20,
    },
    profileDetails: {
        flexDirection: "row", // Profile image and username in a row
        alignItems: "center",
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10, // Space between image and text
    },
    username: {
        fontSize: 18,
        fontWeight: "bold",

    },
    notificationIcon: {
        padding: 8,
        // Align icon with the row
    },


});

export default DashboardScreen;
