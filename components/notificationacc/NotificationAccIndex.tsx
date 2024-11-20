import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Switch,
    TouchableOpacity,
    Image,
} from 'react-native';
import { useRouter } from 'expo-router';

const NotificationsAccIndex: React.FC = () => {
    const router = useRouter();

    const [rsvpToggle, setRsvpToggle] = useState(true);
    const [activityToggle, setActivityToggle] = useState(false);
    const [deadlineToggle, setDeadlineToggle] = useState(true);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push('/account')}>
                    <Text style={styles.backButton}>{'<'} Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Notifications</Text>
                <View style={{ width: 40 }} />
            </View>

            {/* Notification Options */}
            <View style={styles.notificationContainer}>
                <View style={styles.notificationItem}>
                    <View style={styles.notificationText}>
                        <Text style={styles.notificationTitle}>
                            Receive notification when guests RSVP to the event
                        </Text>
                    </View>
                    <Switch
                        value={rsvpToggle}
                        onValueChange={setRsvpToggle}
                        trackColor={{ false: '#E0E0E0', true: '#780C60' }}
                        thumbColor={rsvpToggle ? '#FFFFFF' : '#f4f3f4'}
                    />
                </View>

                <View style={styles.notificationItem}>
                    <View style={styles.notificationText}>
                        <Text style={styles.notificationTitle}>
                            Receive notification for activity that involves me
                        </Text>
                        <Text style={styles.notificationDescription}>
                            When a guest replies to me, mentions, or tags me
                        </Text>
                    </View>
                    <Switch
                        value={activityToggle}
                        onValueChange={setActivityToggle}
                        trackColor={{ false: '#E0E0E0', true: '#780C60' }}
                        thumbColor={activityToggle ? '#FFFFFF' : '#f4f3f4'}
                    />
                </View>

                <View style={styles.notificationItem}>
                    <View style={styles.notificationText}>
                        <Text style={styles.notificationTitle}>
                            Receive notification about approaching deadlines for tasks
                        </Text>
                    </View>
                    <Switch
                        value={deadlineToggle}
                        onValueChange={setDeadlineToggle}
                        trackColor={{ false: '#E0E0E0', true: '#780C60' }}
                        thumbColor={deadlineToggle ? '#FFFFFF' : '#f4f3f4'}
                    />
                </View>
            </View>

            {/* Bottom Navigation */}
            <View style={styles.bottomNavigation}>
                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/dashboard')}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={{
                                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/037c15c0-3bc9-4416-8c18-69934587461a?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
                            }}
                            style={styles.iconImage}
                        />
                    </View>
                    <Text style={styles.navText}>Dashboard</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/dashboard')}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/549e73c4-da91-40a5-a5c8-fd173b0e2a62?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' }}
                            style={styles.iconImage}
                        />
                    </View>
                    <Text style={styles.navText}>Messages</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/dashboard')}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/198f4cc8-49ff-4ccc-b97b-619e572143d4?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a' }}
                            style={styles.iconImage}
                        />
                    </View>
                    <Text style={styles.navText}>Notifications</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/account')}>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    backButton: {
        fontSize: 16,
        color: '#780C60',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    notificationContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    notificationItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start', // Align text and switch to the top
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        paddingVertical: 15,
    },
    notificationText: {
        flex: 1,
        marginRight: 10, // Space between text and switch
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        lineHeight: 22, // Adjust spacing for multiline text
    },
    notificationDescription: {
        fontSize: 14,
        color: '#848484',
        marginTop: 5,
        lineHeight: 20, // Adjust spacing for multiline text
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
        paddingHorizontal: 10, // Ensure spacing around items
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
        marginBottom: 5, // Space between icon and text
    },
    iconImage: {
        // width: 24,
        // height: 24,
        // tintColor: '#fff',
        width: 37,
        height: 37,
        marginBottom: 5,
    },
    navText: {
        fontSize: 10,
        color: '#000000',
        // fontWeight: '500',
        // textAlign: 'center', // Center-align text
    },
});

export default NotificationsAccIndex;
