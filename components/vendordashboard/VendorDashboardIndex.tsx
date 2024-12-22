
// // import { router } from 'expo-router';
// // import React, { useState } from 'react';
// // import {
// //     View,
// //     Text,
// //     StyleSheet,
// //     TouchableOpacity,
// //     ScrollView,
// //     Image,

// // } from 'react-native';

// // const AccountScreen: React.FC = () => {

// //     return (
// //         <View style={styles.container}>

// //             {/* Bottom Navigation */}
// //             <View style={styles.bottomNavigation}>
// //                 <TouchableOpacity
// //                     style={styles.navItem}
// //                     onPress={() => router.push('/dashboard')}
// //                 >
// //                     <View style={styles.iconContainer}>
// //                         <Image
// //                             source={{
// //                                 uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/037c15c0-3bc9-4416-8c18-69934587461a?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
// //                             }}
// //                             style={styles.iconImage}
// //                         />
// //                     </View>
// //                     <Text style={styles.navText}>Dashboard</Text>
// //                 </TouchableOpacity>

// //                 <TouchableOpacity
// //                     style={styles.navItem}
// //                     onPress={() => router.push('/bottommessages')}
// //                 >
// //                     <View style={styles.iconContainer}>
// //                         <Image
// //                             source={{
// //                                 uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/549e73c4-da91-40a5-a5c8-fd173b0e2a62?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
// //                             }}
// //                             style={styles.iconImage}
// //                         />
// //                     </View>
// //                     <Text style={styles.navText}>Messages</Text>
// //                 </TouchableOpacity>

// //                 <TouchableOpacity
// //                     style={styles.navItem}
// //                     onPress={() => router.push('/bottomnotification')}
// //                 >
// //                     <View style={styles.iconContainer}>
// //                         <Image
// //                             source={{
// //                                 uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/198f4cc8-49ff-4ccc-b97b-619e572143d4?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
// //                             }}
// //                             style={styles.iconImage}
// //                         />
// //                     </View>
// //                     <Text style={styles.navText}>Notifications</Text>
// //                 </TouchableOpacity>

// //                 <TouchableOpacity
// //                     style={styles.navItem}
// //                     onPress={() => router.push('/account')}
// //                 >
// //                     <View style={styles.iconContainer}>
// //                         <Image
// //                             source={{
// //                                 uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73089a6f-a9a6-4c94-9fd1-4cdd5923a137?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
// //                             }}
// //                             style={styles.iconImage}
// //                         />
// //                     </View>
// //                     <Text style={styles.navText}>Account</Text>
// //                 </TouchableOpacity>
// //             </View>



// //         </View >
// //     );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         backgroundColor: '#F8E9F0',
// //     },


// //     bottomNavigation: {
// //         flexDirection: 'row',
// //         justifyContent: 'space-around',
// //         alignItems: 'center',
// //         height: 80,
// //         backgroundColor: '#fff',
// //         borderTopWidth: 1,
// //         borderTopColor: '#E0E0E0',
// //         position: 'absolute',
// //         bottom: 0,
// //         width: '100%',
// //     },
// //     navItem: {
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //     },
// //     iconContainer: {
// //         backgroundColor: '#780C60',
// //         width: 30,
// //         height: 30,
// //         borderRadius: 25,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         marginBottom: 5,
// //     },
// //     iconImage: {
// //         width: 37,
// //         height: 37,
// //         marginBottom: 5,
// //     },
// //     navText: {
// //         fontSize: 10,
// //         color: '#000000',
// //     },

// // });

// // export default AccountScreen;
// import React, { useState } from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     TouchableOpacity,
//     Image,
//     ScrollView,
//     Dimensions,
// } from "react-native";
// import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
// import { LineChart } from "react-native-chart-kit";
// import { router } from "expo-router";

// const { width } = Dimensions.get("window");

// const DashboardScreen: React.FC = () => {
//     const [selectedTab, setSelectedTab] = useState("Home");

//     return (
//         <View style={styles.container}>
//             {/* Header */}
//             <View style={styles.header}>
//                 <Image
//                     source={{ uri: "https://i.pravatar.cc/300" }}
//                     style={styles.avatar}
//                 />
//                 <Text style={styles.userName}>Hamza_12</Text>
//                 <Ionicons name="notifications-outline" size={24} color="black" />
//             </View>

//             {/* Order Statistics */}
//             <View style={styles.statsContainer}>
//                 {[
//                     { label: "Orders", count: 27, color: "#A85D9B" },
//                     { label: "Pending", count: 8, color: "#D3AFA7" },
//                     { label: "Processing", count: 19, color: "#E17363" },
//                 ].map((item, index) => (
//                     <View
//                         key={index}
//                         style={[styles.statCard, { backgroundColor: item.color }]}
//                     >
//                         <FontAwesome5 name="shopping-cart" size={18} color="#fff" />
//                         <Text style={styles.statLabel}>{item.label}</Text>
//                         <Text style={styles.statCount}>{item.count}</Text>
//                     </View>
//                 ))}
//             </View>

//             {/* Seals Statistics */}
//             <View style={styles.section}>
//                 <View style={styles.row}>
//                     <Text style={styles.sectionTitle}>Seals Statistics</Text>
//                     <TouchableOpacity style={styles.button}>
//                         <Text style={styles.buttonText}>This Week</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <LineChart
//                     data={{
//                         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//                         datasets: [
//                             { data: [10, 20, 30, 25, 20, 15, 30], color: () => "#A85D9B" },
//                             { data: [15, 10, 25, 20, 15, 25, 20], color: () => "#E17363" },
//                         ],
//                     }}
//                     width={width - 40}
//                     height={220}
//                     chartConfig={{
//                         backgroundGradientFrom: "#fff",
//                         backgroundGradientTo: "#fff",
//                         decimalPlaces: 0,
//                         color: () => `#7B2869`,
//                         style: { borderRadius: 16 },
//                     }}
//                     style={styles.chart}
//                 />
//             </View>

//             {/* Current Packages */}
//             <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>Current Packages</Text>
//                 <View style={styles.packageContainer}>
//                     {[
//                         { id: 1, color: "#7B2869" },
//                         { id: 2, color: "#B3B3B3" },
//                         { id: 3, color: "#D4AF37" },
//                     ].map((pkg) => (
//                         <View
//                             key={pkg.id}
//                             style={[styles.packageCard, { backgroundColor: pkg.color }]}
//                         >
//                             <Text style={styles.packageTitle}>{pkg.id} Package</Text>
//                             <TouchableOpacity style={styles.detailsButton}>
//                                 <Text style={styles.detailsText}>Details</Text>
//                             </TouchableOpacity>
//                         </View>
//                     ))}
//                 </View>
//             </View>

//             {/* Pending Client Actions */}
//             <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>Pending Clients Actions</Text>
//                 <TouchableOpacity style={styles.pendingCard}>
//                     <View>
//                         <Text style={styles.pendingText}>
//                             Payment Overdue By Clients{" "}
//                         </Text>
//                         <Text style={styles.pendingDate}>For Event on 24th Oct 2023</Text>
//                     </View>
//                     <Ionicons name="chevron-forward" size={24} color="#7B2869" />
//                 </TouchableOpacity>
//             </View>


//             {/* Bottom Navigation */}
//             <View style={styles.bottomNavigation}>
//                 <TouchableOpacity
//                     style={styles.navItem}
//                     onPress={() => router.push('/vendordashboard')}
//                 >
//                     <View style={styles.iconContainer}>
//                         <Image
//                             source={{
//                                 uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/037c15c0-3bc9-4416-8c18-69934587461a?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
//                             }}
//                             style={styles.iconImage}
//                         />
//                     </View>
//                     <Text style={styles.navText}>Dashboard</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                     style={styles.navItem}
//                     onPress={() => router.push('/bottommessages')}
//                 >
//                     <View style={styles.iconContainer}>
//                         <Image
//                             source={{
//                                 uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/549e73c4-da91-40a5-a5c8-fd173b0e2a62?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
//                             }}
//                             style={styles.iconImage}
//                         />
//                     </View>
//                     <Text style={styles.navText}>Messages</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                     style={styles.navItem}
//                     onPress={() => router.push('/bottomnotification')}
//                 >
//                     <View style={styles.iconContainer}>
//                         <Image
//                             source={{
//                                 uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/198f4cc8-49ff-4ccc-b97b-619e572143d4?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
//                             }}
//                             style={styles.iconImage}
//                         />
//                     </View>
//                     <Text style={styles.navText}>Notifications</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                     style={styles.navItem}
//                     onPress={() => router.push('/account')}
//                 >
//                     <View style={styles.iconContainer}>
//                         <Image
//                             source={{
//                                 uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73089a6f-a9a6-4c94-9fd1-4cdd5923a137?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
//                             }}
//                             style={styles.iconImage}
//                         />
//                     </View>
//                     <Text style={styles.navText}>Account</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: "#F8E9F0", paddingTop: 40 },
//     header: { flexDirection: "row", justifyContent: "space-between", padding: 20 },
//     avatar: { width: 40, height: 40, borderRadius: 20 },
//     userName: { fontSize: 20, fontWeight: "bold" },
//     statsContainer: { flexDirection: "row", justifyContent: "space-between" },
//     statCard: {
//         flex: 1,
//         margin: 5,
//         borderRadius: 10,
//         padding: 10,
//         alignItems: "center",
//     },
//     statLabel: { color: "#fff", fontWeight: "bold" },
//     statCount: { fontSize: 20, color: "#fff" },
//     section: { paddingHorizontal: 20, marginTop: 10 },
//     sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
//     button: { backgroundColor: "#7B2869", borderRadius: 20, padding: 5 },
//     buttonText: { color: "#fff", paddingHorizontal: 10 },
//     chart: { borderRadius: 10, marginTop: 10 },
//     packageContainer: { flexDirection: "row", justifyContent: "space-around" },
//     packageCard: {
//         width: 100,
//         padding: 10,
//         borderRadius: 10,
//         alignItems: "center",
//     },
//     packageTitle: { fontWeight: "bold", color: "#fff" },
//     detailsButton: { marginTop: 10, backgroundColor: "#fff", borderRadius: 5 },
//     detailsText: { fontSize: 12, fontWeight: "bold" },
//     pendingCard: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         backgroundColor: "#F5DFF2",
//         padding: 15,
//         borderRadius: 10,
//     },
//     pendingText: { fontWeight: "bold" },
//     pendingDate: { color: "#7B2869" },
//     navbar: {
//         flexDirection: "row",
//         justifyContent: "space-around",
//         paddingVertical: 10,
//         backgroundColor: "#fff",
//         borderTopWidth: 1,
//         borderTopColor: "#E1E1E1",
//     },
//     // navItem: { alignItems: "center" },
//     // navText: { fontSize: 12, marginTop: 5 },
//     bottomNavigation: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         height: 80,
//         backgroundColor: '#fff',
//         borderTopWidth: 1,
//         borderTopColor: '#E0E0E0',
//         position: 'absolute',
//         bottom: 0,
//         width: '100%',
//     },
//     navItem: {
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     iconContainer: {
//         backgroundColor: '#780C60',
//         width: 30,
//         height: 30,
//         borderRadius: 25,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 5,
//     },
//     iconImage: {
//         width: 37,
//         height: 37,
//         marginBottom: 5,
//     },
//     navText: {
//         fontSize: 10,
//         color: '#000000',
//     },
//     row: {
//         flexDirection: "row", // Align items horizontally
//         justifyContent: "space-between", // Push elements to the ends
//         alignItems: "center", // Align items vertically at the center
//         marginBottom: 10, // Add spacing below the row
//     },
// });

// export default DashboardScreen;
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { router } from "expo-router";

const screenWidth = Dimensions.get("window").width;

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Header Section */}
                <View style={styles.header}>
                    <View style={styles.profileContainer}>
                        <Image
                            source={{ uri: "https://example.com/profile-pic.png" }} // Replace with actual image
                            style={styles.profileImage}
                        />
                        <Text style={styles.username}>Hamza_12</Text>
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
                                    onPress={() => router.push('/vendorpackages')} // Navigate to "Details" screen
                                >
                                    <Text style={styles.detailsText}>Details</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Pending Actions Section */}
                <View style={styles.pendingSection}>
                    <Text style={styles.sectionTitle}>Pending Clients Actions</Text>
                    <View style={styles.pendingBoxAction}>
                        <Text style={styles.pendingText}>Payment Overdue By Clients</Text>
                        <Text style={styles.pendingDate}>For Event on <Text style={styles.highlight}>24th Oct 2023</Text></Text>
                    </View>
                </View>
            </ScrollView>

            {/* Footer Navigation */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerIcon}>
                    <Ionicons name="cart-outline" size={24} color="#780C60" />
                    <Text style={styles.footerText}>My Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerIcon}>
                    <Ionicons name="mail-outline" size={24} color="#780C60" />
                    <Text style={styles.footerText}>Messages</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerIcon}>
                    <Ionicons name="home-outline" size={28} color="#780C60" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerIcon}>
                    <Ionicons name="calendar-outline" size={24} color="#780C60" />
                    <Text style={styles.footerText}>My Events</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerIcon}>
                    <Ionicons name="person-outline" size={24} color="#780C60" />
                    <Text style={styles.footerText}>Account</Text>
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
    container: { flex: 1, backgroundColor: '#F8E9F0', },
    header: { padding: 20 },
    profileContainer: { alignItems: "center" },
    profileImage: { width: 60, height: 60, borderRadius: 30 },
    username: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
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
    navItem: { alignItems: "center" },
    navText: { fontSize: 12, color: "#7D0C72" },
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
});

export default DashboardScreen;
