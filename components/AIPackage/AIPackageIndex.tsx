// // import { router } from "expo-router";
// // import React from "react";
// // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

// // const AIPackageScreen = () => {
// //     const items = [
// //         {
// //             id: 1,
// //             category: "Catering",
// //             name: "Hanif Rajput",
// //             price: 2200,
// //             location: "Islamabad Expy, Madina Town, Islamabad, Islamabad Capital Territory 44000",
// //             total: 59000,
// //             image: require("/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/GetStarted.png"), // Replace with your image path
// //         },
// //         {
// //             id: 2,
// //             category: "Photography",
// //             name: "Maha Photography",
// //             price: 70000,
// //             location: "Islamabad Expy, Madina Town, Islamabad, Islamabad Capital Territory 44000",
// //             total: 70000,
// //             image: require("/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/GetStarted.png"), // Replace with your image path
// //         },
// //         {
// //             id: 3,
// //             category: "Makeup",
// //             name: "Allure Beauty",
// //             price: 70000,
// //             location: "Islamabad Expy, Madina Town, Islamabad, Islamabad Capital Territory 44000",
// //             total: 70000,
// //             image: require("/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/GetStarted.png"), // Replace with your image path
// //         },
// //         {
// //             id: 4,
// //             category: "Venue",
// //             name: "Fortress",
// //             price: 2200,
// //             location: "Islamabad Expy, Madina Town, Islamabad, Islamabad Capital Territory 44000",
// //             total: 90000,
// //             image: require("/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/GetStarted.png"), // Replace with your image path
// //         },
// //     ];

// //     const totalPrice = 488090;
// //     const budget = 500000;

// //     return (
// //         <ScrollView style={styles.container}>
// //             <Text style={styles.title}>Your AI Package Is Ready</Text>
// //             <Text style={styles.subtitle}>
// //                 Tailored to your preferences and budget.{"\n"}Review and customize your package below.
// //             </Text>
// //             <Text style={styles.note}>Prices will update as you make changes.</Text>

// //             <View style={styles.cardContainer}>
// //                 {items.map((item) => (
// //                     <View key={item.id} style={styles.card}>
// //                         <Image source={item.image} style={styles.cardImage} />
// //                         <View style={styles.cardContent}>
// //                             <Text style={styles.category}>{item.category}</Text>
// //                             <Text style={styles.name}>{item.name}</Text>
// //                             <Text style={styles.price}>Rs.{item.price}/head</Text>
// //                             <Text style={styles.location}>{item.location}</Text>
// //                             <Text style={styles.total}>Total: Rs.{item.total}/-</Text>
// //                         </View>
// //                         <TouchableOpacity style={styles.editButton}>
// //                             <Text style={styles.editText}>✏️</Text>
// //                         </TouchableOpacity>
// //                         <TouchableOpacity style={styles.detailsButton}>
// //                             <Text style={styles.detailsText}>View Details</Text>
// //                         </TouchableOpacity>
// //                     </View>
// //                 ))}
// //             </View>

// //             <View style={styles.summary}>
// //                 <Text style={styles.totalLabel}>Total:</Text>
// //                 <Text style={styles.totalValue}>Rs.{totalPrice}/-</Text>
// //                 <Text style={styles.budget}>Your Budget: Rs.{budget}/-</Text>
// //             </View>

// //             <View style={styles.actions}>
// //                 <TouchableOpacity style={styles.startOverButton}>
// //                     <Text
// //                         style={styles.startOverText}
// //                         onPress={() => router.push('/EventDetailsForm')}
// //                     >
// //                         Start Over
// //                     </Text>
// //                 </TouchableOpacity>
// //                 <TouchableOpacity style={styles.proceedButton}>
// //                     <Text style={styles.proceedText}>Proceed To Pay</Text>
// //                 </TouchableOpacity>
// //             </View>

// //             <Text style={styles.discount}>
// //                 Enjoy a <Text style={styles.bold}>10% discount</Text> when you complete your booking with Eventify Hub today!
// //             </Text>
// //         </ScrollView>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         backgroundColor: '#F8E9F0',
// //         padding: 20,
// //         paddingTop: 70,
// //         //paddingBottom: 50,
// //     },
// //     title: {
// //         fontSize: 24,
// //         fontWeight: "bold",
// //         textAlign: "center",
// //         marginBottom: 10,
// //     },
// //     subtitle: {
// //         fontSize: 16,
// //         textAlign: "center",
// //         color: "#555",
// //     },
// //     note: {
// //         fontSize: 14,
// //         textAlign: "center",
// //         color: "#999",
// //         marginBottom: 20,
// //     },
// //     cardContainer: {
// //         marginBottom: 20,
// //     },
// //     card: {
// //         backgroundColor: "#FFF",
// //         borderRadius: 10,
// //         marginBottom: 20,
// //         shadowColor: "#000",
// //         shadowOpacity: 0.1,
// //         shadowRadius: 10,
// //         elevation: 5,
// //         overflow: "hidden",
// //     },
// //     cardImage: {
// //         width: "100%",
// //         height: 150,
// //     },
// //     cardContent: {
// //         padding: 10,
// //     },
// //     category: {
// //         fontSize: 14,
// //         color: "#7A7A7A",
// //     },
// //     name: {
// //         fontSize: 16,
// //         fontWeight: "bold",
// //         marginTop: 5,
// //     },
// //     price: {
// //         fontSize: 14,
// //         color: "#555",
// //         marginTop: 5,
// //     },
// //     location: {
// //         fontSize: 12,
// //         color: "#999",
// //         marginTop: 5,
// //     },
// //     total: {
// //         fontSize: 14,
// //         color: "#333",
// //         fontWeight: "bold",
// //         marginTop: 5,
// //     },
// //     editButton: {
// //         position: "absolute",
// //         top: 10,
// //         right: 10,
// //     },
// //     editText: {
// //         fontSize: 18,
// //         color: "#555",
// //     },
// //     detailsButton: {
// //         backgroundColor: "#E6E6E6",
// //         borderRadius: 5,
// //         paddingVertical: 5,
// //         paddingHorizontal: 10,
// //         marginTop: 10,
// //         alignSelf: "flex-start",
// //     },
// //     detailsText: {
// //         fontSize: 12,
// //         color: "#333",
// //     },
// //     summary: {
// //         alignItems: "center",
// //         marginBottom: 20,
// //     },
// //     totalLabel: {
// //         fontSize: 18,
// //         fontWeight: "bold",
// //     },
// //     totalValue: {
// //         fontSize: 24,
// //         fontWeight: "bold",
// //         color: "#E53935",
// //     },
// //     budget: {
// //         fontSize: 16,
// //         color: "#555",
// //         marginTop: 5,
// //     },
// //     actions: {
// //         flexDirection: "row",
// //         justifyContent: "space-between",
// //         marginBottom: 20,
// //     },
// //     startOverButton: {
// //         backgroundColor: "#E6E6E6",
// //         borderRadius: 5,
// //         padding: 15,
// //         flex: 1,
// //         marginRight: 10,
// //     },
// //     startOverText: {
// //         textAlign: "center",
// //         color: "#333",
// //     },
// //     proceedButton: {
// //         backgroundColor: "#E53935",
// //         borderRadius: 5,
// //         padding: 15,
// //         flex: 1,
// //         marginLeft: 10,
// //     },
// //     proceedText: {
// //         textAlign: "center",
// //         color: "#FFF",
// //     },
// //     discount: {
// //         fontSize: 14,
// //         textAlign: "center",
// //         color: "#555",
// //     },
// //     bold: {
// //         fontWeight: "bold",
// //         color: "#E53935",
// //     },
// // });

// // export default AIPackageScreen;
// import React from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";

// const AIPackageScreen = () => {
//     const items = [
//         {
//             id: 1,
//             category: "Catering",
//             name: "Hanif Rajput",
//             price: 2200,
//             location: "Islamabad Expy, Madina Town, Islamabad, Islamabad Capital Territory 44000",
//             total: 59000,
//             image: require("/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/GetStarted.png"), // Replace with your image path
//         },
//         {
//             id: 2,
//             category: "Photography",
//             name: "Maha Photography",
//             price: 70000,
//             location: "Islamabad Expy, Madina Town, Islamabad, Islamabad Capital Territory 44000",
//             total: 70000,
//             image: require("/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/GetStarted.png"), // Replace with your image path
//         },
//         {
//             id: 3,
//             category: "Makeup",
//             name: "Allure Beauty",
//             price: 70000,
//             location: "Islamabad Expy, Madina Town, Islamabad, Islamabad Capital Territory 44000",
//             total: 70000,
//             image: require("/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/GetStarted.png"), // Replace with your image path
//         },
//         {
//             id: 4,
//             category: "Venue",
//             name: "Fortress",
//             price: 2200,
//             location: "Islamabad Expy, Madina Town, Islamabad, Islamabad Capital Territory 44000",
//             total: 90000,
//             image: require("/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/GetStarted.png"), // Replace with your image path
//         },
//     ];

//     const totalPrice = 488090;
//     const budget = 500000;

//     const renderItem = ({ item }: { item: typeof items[0] }) => (
//         <View style={styles.card}>
//             <Image source={item.image} style={styles.cardImage} />
//             <View style={styles.cardContent}>
//                 <Text style={styles.category}>{item.category}</Text>
//                 <Text style={styles.name}>{item.name}</Text>
//                 <Text style={styles.price}>Rs.{item.price}/head</Text>
//                 <Text style={styles.location}>{item.location}</Text>
//                 <Text style={styles.total}>Total: Rs.{item.total}/-</Text>
//             </View>
//             <TouchableOpacity style={styles.editButton}>
//                 <Text style={styles.editText}>✏️</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.detailsButton}>
//                 <Text style={styles.detailsText}>View Details</Text>
//             </TouchableOpacity>
//         </View>
//     );

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Your AI Package Is Ready</Text>
//             <Text style={styles.subtitle}>
//                 Tailored to your preferences and budget.{"\n"}Review and customize your package below.
//             </Text>
//             <Text style={styles.note}>Prices will update as you make changes.</Text>

//             <FlatList
//                 data={items}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={renderItem}
//                 numColumns={2} // Display two items per row
//                 columnWrapperStyle={styles.row} // Add spacing between rows
//                 contentContainerStyle={styles.listContainer}
//             />

//             <View style={styles.summary}>
//                 <Text style={styles.totalLabel}>Total:</Text>
//                 <Text style={styles.totalValue}>Rs.{totalPrice}/-</Text>
//                 <Text style={styles.budget}>Your Budget: Rs.{budget}/-</Text>
//             </View>

//             <View style={styles.actions}>
//                 <TouchableOpacity style={styles.startOverButton}>
//                     <Text style={styles.startOverText}>Start Over</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.proceedButton}>
//                     <Text style={styles.proceedText}>Proceed To Pay</Text>
//                 </TouchableOpacity>
//             </View>

//             <Text style={styles.discount}>
//                 Enjoy a <Text style={styles.bold}>10% discount</Text> when you complete your booking with Eventify Hub today!
//             </Text>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#F8E9F0",
//         padding: 20,
//         paddingTop: 70,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: "bold",
//         textAlign: "center",
//         marginBottom: 10,
//     },
//     subtitle: {
//         fontSize: 16,
//         textAlign: "center",
//         color: "#555",
//     },
//     note: {
//         fontSize: 14,
//         textAlign: "center",
//         color: "#999",
//         marginBottom: 20,
//     },
//     listContainer: {
//         paddingBottom: 20,
//     },
//     row: {
//         justifyContent: "space-between",
//         marginBottom: 15,
//     },
//     card: {
//         backgroundColor: "#FFF",
//         borderRadius: 10,
//         flex: 1,
//         marginHorizontal: 5,
//         shadowColor: "#000",
//         shadowOpacity: 0.1,
//         shadowRadius: 10,
//         elevation: 5,
//         overflow: "hidden",
//     },
//     cardImage: {
//         width: "100%",
//         height: 100,
//     },
//     cardContent: {
//         padding: 10,
//     },
//     category: {
//         fontSize: 14,
//         color: "#7A7A7A",
//     },
//     name: {
//         fontSize: 16,
//         fontWeight: "bold",
//         marginTop: 5,
//     },
//     price: {
//         fontSize: 14,
//         color: "#555",
//         marginTop: 5,
//     },
//     location: {
//         fontSize: 12,
//         color: "#999",
//         marginTop: 5,
//     },
//     total: {
//         fontSize: 14,
//         color: "#333",
//         fontWeight: "bold",
//         marginTop: 5,
//     },
//     editButton: {
//         position: "absolute",
//         top: 10,
//         right: 10,
//     },
//     editText: {
//         fontSize: 18,
//         color: "#555",
//     },
//     detailsButton: {
//         backgroundColor: "#E6E6E6",
//         borderRadius: 5,
//         paddingVertical: 5,
//         paddingHorizontal: 10,
//         marginTop: 10,
//         alignSelf: "flex-start",
//     },
//     detailsText: {
//         fontSize: 12,
//         color: "#333",
//     },
//     summary: {
//         alignItems: "center",
//         marginBottom: 20,
//     },
//     totalLabel: {
//         fontSize: 18,
//         fontWeight: "bold",
//     },
//     totalValue: {
//         fontSize: 24,
//         fontWeight: "bold",
//         color: "#E53935",
//     },
//     budget: {
//         fontSize: 16,
//         color: "#555",
//         marginTop: 5,
//     },
//     actions: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         marginBottom: 20,
//     },
//     startOverButton: {
//         backgroundColor: "#E6E6E6",
//         borderRadius: 5,
//         padding: 15,
//         flex: 1,
//         marginRight: 10,
//     },
//     startOverText: {
//         textAlign: "center",
//         color: "#333",
//     },
//     proceedButton: {
//         backgroundColor: "#E53935",
//         borderRadius: 5,
//         padding: 15,
//         flex: 1,
//         marginLeft: 10,
//     },
//     proceedText: {
//         textAlign: "center",
//         color: "#FFF",
//     },
//     discount: {
//         fontSize: 14,
//         textAlign: "center",
//         color: "#555",
//     },
//     bold: {
//         fontWeight: "bold",
//         color: "#E53935",
//     },
// });

// export default AIPackageScreen;
import { router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";

const AIPackageScreen = () => {
    const items = [
        {
            id: 1,
            category: "Catering",
            name: "Hanif Rajput",
            price: 2200,
            location: "Islamabad Expy, Madina Town, Islamabad, Islamabad Capital Territory 44000",
            total: 59000,
            image: require("/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/GetStarted.png"), // Replace with your image path
        },
        {
            id: 2,
            category: "Photography",
            name: "Maha Photography",
            price: 70000,
            location: "Islamabad Expy, Madina Town, Islamabad, Islamabad Capital Territory 44000",
            total: 70000,
            image: require("/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/GetStarted.png"), // Replace with your image path
        },
        {
            id: 3,
            category: "Makeup",
            name: "Allure Beauty",
            price: 70000,
            location: "Islamabad Expy, Madina Town, Islamabad, Islamabad Capital Territory 44000",
            total: 70000,
            image: require("/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/GetStarted.png"), // Replace with your image path
        },
        {
            id: 4,
            category: "Venue",
            name: "Fortress",
            price: 2200,
            location: "Islamabad Expy, Madina Town, Islamabad, Islamabad Capital Territory 44000",
            total: 90000,
            image: require("/Users/alisajjad/Desktop/FYP/fyp-frontend/assets/images/GetStarted.png"), // Replace with your image path
        },
    ];

    const totalPrice = 488090;
    const budget = 500000;

    const renderItem = ({ item }: { item: typeof items[0] }) => (
        <View style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>Rs.{item.price}/head</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.total}>Total: Rs.{item.total}/-</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editText}>✏️</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.detailsText}>View Details</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your AI Package Is Ready</Text>
            <Text style={styles.subtitle}>
                Tailored to your preferences and budget.{"\n"}Review and customize your package below.
            </Text>
            <Text style={styles.note}>Prices will update as you make changes.</Text>

            <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.listContainer}
            />

            <View style={styles.summary}>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.totalValue}>Rs.{totalPrice}/-</Text>
                <Text style={styles.budget}>Your Budget: Rs.{budget}/-</Text>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity
                    style={styles.startOverButton}
                    onPress={() => router.push('/EventDetailsForm')}
                >
                    <Text style={styles.startOverText}>Start Over</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.proceedButton}
                    onPress={() => router.push('/OrderReview')}
                >
                    <Text style={styles.proceedText}>Proceed To Pay</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.discount}>
                Enjoy a <Text style={styles.bold}>10% discount</Text> when you complete your booking with Eventify Hub today!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8E9F0',
        padding: 20,
        paddingTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        color: "#555",
    },
    note: {
        fontSize: 14,
        textAlign: "center",
        color: "#999",
        marginBottom: 20,
    },
    listContainer: {
        paddingBottom: 20,
    },
    row: {
        justifyContent: "space-between",
        marginBottom: 15,
    },
    card: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        overflow: "hidden",
        paddingBottom: 10, // Added space for text
    },
    cardImage: {
        width: "100%",
        height: 120, // Adjusted for better visual balance
    },
    cardContent: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    category: {
        fontSize: 14,
        color: "#7A7A7A",
        fontWeight: "bold",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginTop: 5,
    },
    price: {
        fontSize: 14,
        color: "#555",
        marginTop: 2,
    },
    location: {
        fontSize: 12,
        color: "#999",
        marginTop: 5,
        marginBottom: 5,
    },
    total: {
        fontSize: 14,
        color: "#333",
        fontWeight: "bold",
        marginTop: 2,
    },
    editButton: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    editText: {
        fontSize: 18,
        color: "#555",
    },
    detailsButton: {
        backgroundColor: "#E6E6E6",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: "center", // Centered the button horizontally
        marginTop: 5,
    },
    detailsText: {
        fontSize: 12,
        color: "#333",
    },
    summary: {
        alignItems: "center",
        marginBottom: 20,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: "bold",
    },
    totalValue: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#E53935",
    },
    budget: {
        fontSize: 16,
        color: "#555",
        marginTop: 5,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    startOverButton: {
        backgroundColor: "#E6E6E6",
        borderRadius: 5,
        padding: 15,
        flex: 1,
        marginRight: 10,
    },
    startOverText: {
        textAlign: "center",
        color: "#333",
    },
    proceedButton: {
        backgroundColor: "#E53935",
        borderRadius: 5,
        padding: 15,
        flex: 1,
        marginLeft: 10,
    },
    proceedText: {
        textAlign: "center",
        color: "#FFF",
    },
    discount: {
        fontSize: 14,
        textAlign: "center",
        color: "#555",
    },
    bold: {
        fontWeight: "bold",
        color: "#E53935",
    },
});

export default AIPackageScreen;
