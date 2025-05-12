import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const ChatScreen: React.FC = () => {
    const [message, setMessage] = useState<string>("");
    const router = useRouter();

    const handleSendMessage = () => {
        // Logic to send the message
        console.log("Message sent:", message);
        setMessage("");
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backArrow}>{"<"}</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Arfa Hussain</Text>
                <TouchableOpacity>
                    <Text style={styles.optionsMenu}>{"⋮"}</Text>
                </TouchableOpacity>
            </View>

            {/* Chat Area */}
            <View style={styles.chatArea}>
                {/* Messages will go here */}
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <TextInput
                    style={styles.messageInput}
                    placeholder="Write a message"
                    placeholderTextColor="#B3A1B2"
                    value={message}
                    onChangeText={setMessage}
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
                    <Text style={styles.sendButtonText}>{">"}</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.footerText}>Messages are sent to each guest privately.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8EAF2",
        paddingTop: 70,
        paddingBottom: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#E6D4E6",
    },
    backArrow: {
        fontSize: 20,
        color: "#7A7A7A",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    optionsMenu: {
        fontSize: 20,
        color: "#7A7A7A",
    },
    chatArea: {
        flex: 1,
        backgroundColor: "#F8EAF2",
        padding: 16,
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: "#E6D4E6",
    },
    messageInput: {
        flex: 1,
        height: 40,
        backgroundColor: "#F8F0F4",
        borderRadius: 20,
        paddingHorizontal: 12,
        fontSize: 14,
        color: "#000",
        borderWidth: 1,
        borderColor: "#E6D4E6",
    },
    sendButton: {
        marginLeft: 8,
        backgroundColor: "#7B2869",
        borderRadius: 20,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    sendButtonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    footerText: {
        fontSize: 12,
        textAlign: "center",
        color: "#7A7A7A",
        marginVertical: 8,
    },
});

export default ChatScreen;
