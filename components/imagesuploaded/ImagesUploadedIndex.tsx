
// import { router } from "expo-router";
// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Modal } from "react-native";

// const ImageUploadScreen: React.FC = () => {
//     const [selectedImage, setSelectedImage] = useState<string | null>(null);

//     const handleFileUpload = () => {
//         // Handle file selection logic here
//         console.log("Choose file button pressed");
//     };

//     const images = [
//         'https://cdn.builder.io/api/v1/image/assets/TEMP/ee8619c3ba7069ac2ac92e880c53f6a08b69c1a800aaf83f5653c512dd5631a5?apiKey=0a92af3bc6e24da3a9ef8b1ae693931a&',
//         'https://cdn.builder.io/api/v1/image/assets/TEMP/ee8619c3ba7069ac2ac92e880c53f6a08b69c1a800aaf83f5653c512dd5631a5?apiKey=0a92af3bc6e24da3a9ef8b1ae693931a&',
//         'https://cdn.builder.io/api/v1/image/assets/TEMP/ee8619c3ba7069ac2ac92e880c53f6a08b69c1a800aaf83f5653c512dd5631a5?apiKey=0a92af3bc6e24da3a9ef8b1ae693931a&',
//         'https://cdn.builder.io/api/v1/image/assets/TEMP/ee8619c3ba7069ac2ac92e880c53f6a08b69c1a800aaf83f5653c512dd5631a5?apiKey=0a92af3bc6e24da3a9ef8b1ae693931a&',
//         'https://cdn.builder.io/api/v1/image/assets/TEMP/198f4cc8-49ff-4ccc-b97b-619e572143d4?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
//     ];

//     return (
//         <View style={styles.container}>
//             {/* Header Section */}
//             <Text style={styles.header}>Images</Text>
//             <Text style={styles.subHeader}>Upload images{"\n"}You can upload up to 30 images</Text>

//             {/* Upload Card */}
//             <View style={styles.uploadCard}>
//                 {/* Placeholder Icon */}
//                 <View style={styles.iconContainer}>
//                     <Text style={styles.icon}>📷</Text>
//                 </View>
//                 {/* Upload Text */}
//                 <Text style={styles.uploadText}>Drag and drop a file here{"\n"}to create album</Text>
//                 {/* Choose File Button */}
//                 <TouchableOpacity style={styles.chooseFileButton} onPress={handleFileUpload}>
//                     <Text style={styles.chooseFileButtonText}>Choose File</Text>
//                 </TouchableOpacity>
//             </View>

//             {/* Photos Section */}
//             <View style={styles.photosSection}>
//                 <TouchableOpacity onPress={() => router.push('/vendorprofileimages')}>
//                     {/* You could add some navigation logic or icon here if desired */}
//                 </TouchableOpacity>
//                 <ScrollView
//                     horizontal
//                     showsHorizontalScrollIndicator={false}
//                     style={styles.photosScroll}
//                 >
//                     {images.map((imgUri, index) => (
//                         <TouchableOpacity key={index} onPress={() => setSelectedImage(imgUri)}>
//                             <Image source={{ uri: imgUri }} style={styles.photo} />
//                         </TouchableOpacity>
//                     ))}
//                 </ScrollView>
//             </View>

//             {/* Footer Buttons */}
//             <View style={styles.footer}>
//                 <TouchableOpacity onPress={() => router.back()} style={styles.buttonBack}>
//                     <Text style={styles.buttonText}>Back</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.saveButton}
//                     onPress={() => { router.push("/vendorreview") }}>
//                     <Text style={styles.saveButtonText}>Save & Continue</Text>
//                 </TouchableOpacity>
//             </View>

//             {/* Modal to view selected image */}
//             <Modal
//                 visible={!!selectedImage}
//                 transparent
//                 onRequestClose={() => setSelectedImage(null)}
//             >
//                 <View style={styles.modalBackground}>
//                     <View style={styles.modalContent}>
//                         {selectedImage && (
//                             <Image
//                                 source={{ uri: selectedImage }}
//                                 style={styles.enlargedImage}
//                                 resizeMode="contain"
//                             />
//                         )}
//                         <TouchableOpacity onPress={() => setSelectedImage(null)} style={styles.closeButton}>
//                             <Text style={styles.closeButtonText}>Close</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#F8E9F0",
//         paddingHorizontal: 20,
//         paddingVertical: 20,
//         paddingTop: 70,
//     },
//     header: {
//         fontSize: 24,
//         fontWeight: "bold",
//         marginBottom: 10,
//         color: "#000",
//     },
//     subHeader: {
//         fontSize: 14,
//         color: "#6A6A6A",
//         marginBottom: 20,
//     },
//     uploadCard: {
//         backgroundColor: "#FFFFFF",
//         borderRadius: 10,
//         padding: 20,
//         alignItems: "center",
//         justifyContent: "center",
//         borderWidth: 1,
//         borderColor: "#D3A4D4",
//         marginVertical: 30,
//     },
//     iconContainer: {
//         marginBottom: 10,
//     },
//     icon: {
//         fontSize: 40,
//         color: "#C4C4C4",
//     },
//     uploadText: {
//         fontSize: 14,
//         color: "#6A6A6A",
//         textAlign: "center",
//         marginBottom: 20,
//     },
//     chooseFileButton: {
//         backgroundColor: "#780C60",
//         borderRadius: 20,
//         paddingVertical: 10,
//         paddingHorizontal: 30,
//     },
//     chooseFileButtonText: {
//         color: "#FFFFFF",
//         fontSize: 14,
//         fontWeight: "bold",
//     },
//     footer: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//     },
//     buttonBack: {
//         flex: 1,
//         backgroundColor: "#FFFFFF",
//         borderColor: "#780C60",
//         borderWidth: 1,
//         borderRadius: 10,
//         paddingVertical: 15,
//         marginRight: 10,
//         alignItems: "center",
//     },
//     buttonText: {
//         fontSize: 16,
//         fontWeight: "bold",
//         color: "#780C60",
//     },
//     saveButton: {
//         padding: 15,
//         backgroundColor: "#780C60",
//         borderRadius: 10,
//         alignItems: "center",
//         flex: 1,
//         marginLeft: 10,
//     },
//     saveButtonText: {
//         color: "#FFFFFF",
//         fontWeight: "bold",
//     },
//     photosSection: {
//         padding: 16,
//         paddingBottom: 30,
//     },
//     photosScroll: {
//         flexDirection: 'row',
//     },
//     photo: {
//         width: 100,
//         height: 100,
//         borderRadius: 8,
//         marginRight: 8,
//     },
//     modalBackground: {
//         flex: 1,
//         backgroundColor: 'rgba(0,0,0,0.8)',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     modalContent: {
//         width: '80%',
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         padding: 10,
//         alignItems: 'center',
//     },
//     enlargedImage: {
//         width: '100%',
//         height: 300,
//         marginBottom: 20,
//     },
//     closeButton: {
//         backgroundColor: '#780C60',
//         borderRadius: 10,
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//     },
//     closeButtonText: {
//         color: '#fff',
//         fontWeight: 'bold',
//     },
// });

// export default ImageUploadScreen;
import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Modal } from "react-native";

const ImageUploadScreen: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [images, setImages] = useState<string[]>([
        'https://cdn.builder.io/api/v1/image/assets/TEMP/ee8619c3ba7069ac2ac92e880c53f6a08b69c1a800aaf83f5653c512dd5631a5?apiKey=0a92af3bc6e24da3a9ef8b1ae693931a&',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/ee8619c3ba7069ac2ac92e880c53f6a08b69c1a800aaf83f5653c512dd5631a5?apiKey=0a92af3bc6e24da3a9ef8b1ae693931a&',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/ee8619c3ba7069ac2ac92e880c53f6a08b69c1a800aaf83f5653c512dd5631a5?apiKey=0a92af3bc6e24da3a9ef8b1ae693931a&',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/ee8619c3ba7069ac2ac92e880c53f6a08b69c1a800aaf83f5653c512dd5631a5?apiKey=0a92af3bc6e24da3a9ef8b1ae693931a&',
        'https://cdn.builder.io/api/v1/image/assets/TEMP/198f4cc8-49ff-4ccc-b97b-619e572143d4?placeholderIfAbsent=true&apiKey=0a92af3bc6e24da3a9ef8b1ae693931a',
    ]);

    const handleFileUpload = () => {
        // Handle file selection logic here
        console.log("Choose file button pressed");
    };

    const handleDeleteImage = (index: number) => {
        setImages(prevImages => {
            const updated = [...prevImages];
            updated.splice(index, 1);
            return updated;
        });
    };

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <Text style={styles.header}>Images</Text>
            <Text style={styles.subHeader}>Upload images{"\n"}You can upload up to 30 images</Text>

            {/* Upload Card */}
            <View style={styles.uploadCard}>
                {/* Placeholder Icon */}
                <View style={styles.iconContainer}>
                    <Text style={styles.icon}>📷</Text>
                </View>
                {/* Upload Text */}
                <Text style={styles.uploadText}>Drag and drop a file here{"\n"}to create album</Text>
                {/* Choose File Button */}
                <TouchableOpacity style={styles.chooseFileButton} onPress={handleFileUpload}>
                    <Text style={styles.chooseFileButtonText}>Choose File</Text>
                </TouchableOpacity>
            </View>

            {/* Photos Section */}
            <View style={styles.photosSection}>
                <TouchableOpacity onPress={() => router.push('/vendorprofileimages')}>
                    {/* Optional navigation or icon can be placed here */}
                </TouchableOpacity>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.photosScroll}
                >
                    {images.map((imgUri, index) => (
                        <View key={index} style={styles.imageContainer}>
                            <TouchableOpacity onPress={() => setSelectedImage(imgUri)}>
                                <Image source={{ uri: imgUri }} style={styles.photo} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteImage(index)}>
                                <Text style={styles.deleteButtonText}>X</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>

            {/* Footer Buttons */}
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => router.back()} style={styles.buttonBack}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton}
                    onPress={() => { router.push("/vendorreview") }}>
                    <Text style={styles.saveButtonText}>Save & Continue</Text>
                </TouchableOpacity>
            </View>

            {/* Modal to view selected image */}
            <Modal
                visible={!!selectedImage}
                transparent
                onRequestClose={() => setSelectedImage(null)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        {selectedImage && (
                            <Image
                                source={{ uri: selectedImage }}
                                style={styles.enlargedImage}
                                resizeMode="contain"
                            />
                        )}
                        <TouchableOpacity onPress={() => setSelectedImage(null)} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8E9F0",
        paddingHorizontal: 20,
        paddingVertical: 20,
        paddingTop: 70,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#000",
    },
    subHeader: {
        fontSize: 14,
        color: "#6A6A6A",
        marginBottom: 20,
    },
    uploadCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#D3A4D4",
        marginVertical: 30,
    },
    iconContainer: {
        marginBottom: 10,
    },
    icon: {
        fontSize: 40,
        color: "#C4C4C4",
    },
    uploadText: {
        fontSize: 14,
        color: "#6A6A6A",
        textAlign: "center",
        marginBottom: 20,
    },
    chooseFileButton: {
        backgroundColor: "#780C60",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    chooseFileButtonText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonBack: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderColor: "#780C60",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 15,
        marginRight: 10,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#780C60",
    },
    saveButton: {
        padding: 15,
        backgroundColor: "#780C60",
        borderRadius: 10,
        alignItems: "center",
        flex: 1,
        marginLeft: 10,
    },
    saveButtonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
    },
    photosSection: {
        padding: 16,
        paddingBottom: 30,
    },
    photosScroll: {
        flexDirection: 'row',
    },
    imageContainer: {
        position: 'relative',
        marginRight: 8,
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    deleteButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 15,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    enlargedImage: {
        width: '100%',
        height: 300,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#780C60',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ImageUploadScreen;
