import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image,
    Dimensions,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
const { width } = Dimensions.get('window');

const MyEventsScreen = () => {
    const [selectedDate, setSelectedDate] = useState<string>("2024-12-03");

    const events = [
        {
            id: "1",
            title: "Family Get-Together",
            date: "2023-12-06",
            time: "11:30 am - 5:00 pm",
            location: "A5 Villa, Kochi",
            image: require("/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/GetStarted.png"), // Replace with your actual image
        },
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>My Events</Text>
                <TouchableOpacity onPress={() => router.push('/vendornotifications')}>
                    <Ionicons name="notifications-outline" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <Calendar
                current={"2024-12-01"}
                markedDates={{
                    [selectedDate]: { selected: true, selectedColor: "#780C60" }, // Selected Date Color
                }}
                onDayPress={(day) => setSelectedDate(day.dateString)}
                theme={{
                    backgroundColor: "#FFFFFF", // White Background
                    calendarBackground: "#FFFFFF", // White Calendar Background
                    textSectionTitleColor: "#000", // Black Month and Weekday Titles
                    selectedDayBackgroundColor: "#780C60", // Correct Selected Date Color
                    selectedDayTextColor: "#FFFFFF", // White Text on Selected Date
                    todayTextColor: "#000", // Black Text for Today
                    arrowColor: "#000", // Black Arrows for Month Navigation
                    monthTextColor: "#000", // Black Month Name
                }}
            />


            {/* Events List */}
            <Text style={styles.sectionTitle}>This month</Text>
            <FlatList
                data={events}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.eventCard}>
                        <Image source={item.image} style={styles.eventImage} />
                        <View style={styles.eventDetails}>
                            <Text style={styles.eventDate}>
                                Wednesday, 6 Dec 2023
                            </Text>
                            <Text style={styles.eventTitle}>{item.title}</Text>
                            <View style={styles.eventMeta}>
                                <Ionicons name="time-outline" size={16} color="#555" />
                                <Text style={styles.eventText}>{item.time}</Text>
                            </View>
                            <View style={styles.eventMeta}>
                                <Ionicons name="location-outline" size={16} color="#555" />
                                <Text style={styles.eventText}>{item.location}</Text>
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

export default MyEventsScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8E9F0",
        paddingHorizontal: 15,
        paddingTop: 70,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        marginVertical: 15,
    },
    eventCard: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    eventImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginRight: 10,
    },
    eventDetails: {
        flex: 1,
    },
    eventDate: {
        fontSize: 12,
        color: "#666",
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },
    eventMeta: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    eventText: {
        marginLeft: 5,
        color: "#555",
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
