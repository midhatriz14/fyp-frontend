import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const messages = [
    {
        id: '1',
        avatar: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        title: 'Have a great day with my amazing..',
        subtitle: 'Hi there!',
        time: '9:56 AM',
        unreadCount: 2,
    },
    {
        id: '2',
        avatar: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
        title: 'Have a great day with my amazing..',
        subtitle: 'Hi there!',
        time: '9:56 AM',
        unreadCount: 2,
    },
    {
        id: '3',
        avatar: 'https://randomuser.me/api/portraits/thumb/men/3.jpg',
        title: 'Have a great day with my amazing..',
        subtitle: 'Hi there!',
        time: '9:56 AM',
        unreadCount: 0,
    },
    {
        id: '4',
        avatar: 'https://randomuser.me/api/portraits/thumb/men/4.jpg',
        title: 'Have a great day with my amazing..',
        subtitle: 'Hi there!',
        time: '9:56 AM',
        unreadCount: 0,
    },
];

const MessagesScreen: React.FC = () => {
    const renderMessage = ({ item }: { item: typeof messages[0] }) => (
        <View style={styles.messageContainer}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.time}>{item.time}</Text>
                {item.unreadCount > 0 && (
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadText}>{item.unreadCount}</Text>
                    </View>
                )}
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#800080" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Messages</Text>
                <TouchableOpacity>
                    <Ionicons name="settings-outline" size={24} color="#800080" />
                </TouchableOpacity>
            </View>

            {/* Messages List */}
            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8E9F0',
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 40,
        paddingBottom: 16,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    list: {
        paddingHorizontal: 16,
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    rightContainer: {
        alignItems: 'flex-end',
    },
    time: {
        fontSize: 12,
        color: '#666',
    },
    unreadBadge: {
        backgroundColor: '#800080',
        borderRadius: 12,
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginTop: 4,
    },
    unreadText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
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
    homeButton: {
        // marginBottom: 30, // Moves the Home button slightly upward
        transform: [{ translateY: -10 }], // Alternatively, use translateY to lift it
    },
});

export default MessagesScreen;
