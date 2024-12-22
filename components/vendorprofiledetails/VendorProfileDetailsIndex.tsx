
// import { router } from 'expo-router';
// import React, { useState } from 'react';
// import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import { Calendar } from 'react-native-calendars';

// const PhotographerDetailsScreen: React.FC = () => {
//     const [activeTab, setActiveTab] = useState<'Details' | 'Packages' | 'Reviews'>('Details');
//     const [activePackage, setActivePackage] = useState<number>(1);
//     const [activeReviewTab, setActiveReviewTab] = useState<'Eventify' | 'Google'>('Eventify');



//     // Package Data
//     const packages = [
//         {
//             id: 1,
//             name: 'Package 1',
//             packagename: 'Basic',
//             price: 'PKR 100,000',
//             deliverables: [
//                 '1 Day Event Coverage | 1 Day Team Shoot',
//                 '1 Event Album (100 photos per album)',
//                 '1 Shoot Album (50 photos per album)',
//                 '1 Long Video (5–10 mins)',
//                 '1 Highlight of Shoot (30–50 sec)',
//                 'All Raw Photos provided after event',
//             ],
//             photography: '1 Event Album (100 photos per album)',
//             team: '2 Photographers',
//             videography: '1 Long Video (5–10 mins)\n1 Highlight of event (3–5 mins)',
//         },
//         {
//             id: 2,
//             name: 'Package 2',
//             packagename: 'Gold',
//             price: 'PKR 175,000',
//             deliverables: [
//                 '2 Day Event Coverage | 2 Day Team Shoot',
//                 '2 Event Albums (100 photos per album)',
//                 '2 Shoot Albums (50 photos per album)',
//                 '2 Long Videos (8–12 mins each)',
//                 '2 Highlight of Shoot (30–50 sec)',
//                 'Storyboard (Photo) Complementary',
//             ],
//             photography: '2 Shoot Albums (50 photos per album)',
//             team: '2 Photographers | 1 Videographer',
//             videography: '2 Long Videos (8–12 mins each)\n2 Highlight of event (30–50 sec)',
//         },
//         {
//             id: 3,
//             name: 'Package 3',
//             packagename: 'Platinum',
//             price: 'PKR 175,000',
//             deliverables: [
//                 'Basic Package Deliverables Example',
//                 'Adjust as needed.',
//             ],
//             photography: 'Example Photography Description',
//             team: 'Basic Example Team Description',
//             videography: 'Basic Example Videography Description',
//         },
//         {
//             id: 4,
//             name: 'Customise Package',
//             packagename: '',
//             price: 'PKR 250,000',
//             deliverables: [
//                 '3 Day Event Coverage | 3 Day Team Shoot',
//                 '3 Event Albums (100 photos per album)',
//                 '3 Shoot Albums (50 photos per album)',
//                 '3 Long Videos (8–12 mins each)',
//                 '3 Highlight of Shoot (30–50 sec)',
//                 'Storyboard (Photo) Complementary',
//             ],
//             photography: '3 Shoot Albums (50 photos per album)',
//             team: '2 Photographers | 2 Videographers',
//             videography: '3 Long Videos (8–12 mins each)\n3 Highlight of event (30–50 sec)',
//         },
//     ];

//     return (
//         <ScrollView style={styles.container}>
//             {/* Header */}
//             <View style={styles.header}>
//                 <TouchableOpacity onPress={() => router.back()}>
//                     <Text style={styles.backText}>Back</Text>
//                 </TouchableOpacity>
//                 <Text style={styles.title}>Photographers</Text>
//             </View>

//             {/* Image */}
//             <Image
//                 source={{ uri: 'https://example.com/sample-image.jpg' }} // Replace with actual image URL
//                 style={styles.mainImage}
//             />

//             {/* Tab Navigation */}
//             <View style={styles.tabContainer}>
//                 <TouchableOpacity
//                     style={[styles.tab, activeTab === 'Details' && styles.activeTab]}
//                     onPress={() => setActiveTab('Details')}
//                 >
//                     <Text style={[styles.tabText, activeTab === 'Details' && styles.activeTabText]}>
//                         Details
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={[styles.tab, activeTab === 'Packages' && styles.activeTab]}
//                     onPress={() => setActiveTab('Packages')}
//                 >
//                     <Text style={[styles.tabText, activeTab === 'Packages' && styles.activeTabText]}>
//                         Packages
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={[styles.tab, activeTab === 'Reviews' && styles.activeTab]}
//                     onPress={() => setActiveTab('Reviews')}
//                 >
//                     <Text style={[styles.tabText, activeTab === 'Reviews' && styles.activeTabText]}>
//                         Reviews
//                     </Text>
//                 </TouchableOpacity>
//             </View>

//             {/* Tab Content */}
//             {activeTab === 'Details' && (
//                 <>
//                     {/* Details Section */}
//                     <View style={styles.detailsContainer}>
//                         <Text style={styles.name}>Arfa Hussain</Text>
//                         <View style={styles.ratingContainer}>
//                             <Text style={styles.rating}>★★★★★</Text>
//                             <Text style={styles.directions}>Directions</Text>
//                         </View>
//                         <Text style={styles.price}>Rs.140,000/-</Text>
//                         <Text style={styles.perHead}>Per head</Text>
//                         <Text style={styles.address}>
//                             Islamabad Expy, Madina Town, Islamabad, Islamabad Capital Territory 44000
//                         </Text>
//                     </View>

//                     {/* Photos Section */}
//                     <View style={styles.photosSection}>
//                         <TouchableOpacity onPress={() => router.push('/vendorprofileimages')}>
//                             <Text style={styles.sectionTitle}>Photos</Text>
//                         </TouchableOpacity>
//                         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.photosScroll}>
//                             {/* Replace with dynamic images */}
//                             <Image source={{ uri: 'https://example.com/photo1.jpg' }} style={styles.photo} />
//                             <Image source={{ uri: 'https://example.com/photo2.jpg' }} style={styles.photo} />
//                             <Image source={{ uri: 'https://example.com/photo3.jpg' }} style={styles.photo} />
//                             <Image source={{ uri: 'https://example.com/photo4.jpg' }} style={styles.photo} />
//                         </ScrollView>
//                     </View>

//                     {/* Additional Details Section */}
//                     <View style={styles.additionalDetails}>
//                         <Text style={styles.sectionTitle}>Details</Text>
//                         <Text style={styles.detailItem}>
//                             <Text style={styles.detailLabel}>Staff:</Text> Female
//                         </Text>
//                         <Text style={styles.detailItem}>
//                             <Text style={styles.detailLabel}>Cancellation policy:</Text> Fully Refundable
//                         </Text>
//                         <Text style={styles.detailItem}>
//                             <Text style={styles.detailLabel}>Cities:</Text> Lahore, All Pakistan
//                         </Text>
//                         <Text style={styles.description}>
//                             For signature shoots and packages Arfa Usman can be contacted. There will be charges
//                             on top for events and shoots out of Lahore.
//                         </Text>
//                     </View>
//                 </>
//             )}

//             {activeTab === 'Packages' && (
//                 <>
//                     {/* Package Tabs */}
//                     <View style={styles.packageTabContainer}>
//                         {packages.map((pkg) => (
//                             <TouchableOpacity
//                                 key={pkg.id}
//                                 style={[styles.packageTab, activePackage === pkg.id && styles.activePackageTab]}
//                                 onPress={() => setActivePackage(pkg.id)}
//                             >
//                                 <Text
//                                     style={[
//                                         styles.packageTabText,
//                                         activePackage === pkg.id && styles.activePackageTabText,
//                                     ]}
//                                 >
//                                     {pkg.name} {pkg.packagename}
//                                 </Text>
//                             </TouchableOpacity>
//                         ))}
//                     </View>

//                     {/* Package Details */}
//                     {packages
//                         .filter((pkg) => pkg.id === activePackage)
//                         .map((pkg) => (
//                             <View key={pkg.id} style={styles.packageDetails}>
//                                 <Text style={styles.sectionTitle}>Deliverables</Text>
//                                 {pkg.deliverables.map((item, index) => (
//                                     <Text key={index} style={styles.packageDetailItem}>
//                                         {item}
//                                     </Text>
//                                 ))}

//                                 <Text style={styles.sectionTitle}>Photography</Text>
//                                 <Text style={styles.packageDetailItem}>{pkg.photography}</Text>

//                                 <Text style={styles.sectionTitle}>Team</Text>
//                                 <Text style={styles.packageDetailItem}>{pkg.team}</Text>

//                                 <Text style={styles.sectionTitle}>Videography</Text>
//                                 <Text style={styles.packageDetailItem}>{pkg.videography}</Text>

//                                 <Text style={styles.priceText}>{pkg.price}</Text>
//                             </View>
//                         ))}

//                     <Calendar
//                         onDayPress={(day: { dateString: string }) => console.log('Selected day:', day.dateString)}
//                         minDate={new Date().toISOString().split('T')[0]} // Disables past dates
//                         markedDates={{
//                             '2024-12-03': { selected: true, selectedColor: '#7B2869' },
//                         }}
//                         theme={{
//                             selectedDayBackgroundColor: '#7B2869',
//                             todayTextColor: '#7B2869',
//                         }}
//                     />


//                     {/* Check Availability Button */}
//                     <TouchableOpacity
//                         style={styles.checkAvailabilityButton}
//                         onPress={() => router.push('/message')} // Replace '/check-availability' with your desired path
//                     >
//                         <Text style={styles.checkAvailabilityButtonText}>Check Availability</Text>
//                     </TouchableOpacity>
//                 </>
//             )
//             }

//             {
//                 activeTab === 'Reviews' && (
//                     <View style={styles.tabContent}>
//                         {/* Tab Navigation for Reviews */}
//                         <View style={styles.reviewTabContainer}>
//                             <TouchableOpacity
//                                 style={[styles.reviewTab, activeReviewTab === 'Eventify' && styles.activeReviewTab]}
//                                 onPress={() => setActiveReviewTab('Eventify')}
//                             >
//                                 <Text
//                                     style={[
//                                         styles.reviewTabText,
//                                         activeReviewTab === 'Eventify' && styles.activeReviewTabText,
//                                     ]}
//                                 >
//                                     Eventify Hub's Reviews
//                                 </Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity
//                                 style={[styles.reviewTab, activeReviewTab === 'Google' && styles.activeReviewTab]}
//                                 onPress={() => setActiveReviewTab('Google')}
//                             >
//                                 <Text
//                                     style={[
//                                         styles.reviewTabText,
//                                         activeReviewTab === 'Google' && styles.activeReviewTabText,
//                                     ]}
//                                 >
//                                     Google Reviews
//                                 </Text>
//                             </TouchableOpacity>
//                         </View>

//                         {/* Eventify Reviews */}
//                         {activeReviewTab === 'Eventify' && (
//                             <View>
//                                 <Text style={styles.sectionTitle}>1 Review</Text>
//                                 <View style={styles.eventifyReview}>
//                                     <Text style={styles.reviewerName}>Imran</Text>
//                                     <Text style={styles.reviewDate}>April 12, 2023</Text>
//                                     <Text style={styles.reviewText}>
//                                         Venue was good but location is not up to the mark.
//                                     </Text>
//                                 </View>
//                                 <TouchableOpacity style={styles.showMoreButton}>
//                                     <Text style={styles.showMoreButtonText}>Show More</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         )}

//                         {/* Google Reviews */}
//                         {activeReviewTab === 'Google' && (
//                             <View>
//                                 <Text style={styles.googleReviewStats}>
//                                     130 Reviews ⭐ 4.2
//                                 </Text>
//                                 <Text style={styles.reviewNote}>
//                                     *Ratings and reviews gathered from online sources*
//                                 </Text>
//                                 {/* Ratings Breakdown */}
//                                 <View style={styles.ratingsBreakdown}>
//                                     {[5, 4, 3, 2, 1].map((stars) => (
//                                         <View key={stars} style={styles.ratingRow}>
//                                             <Text style={styles.ratingText}>{stars} Stars</Text>
//                                             <View style={styles.ratingBar}>
//                                                 <View style={[styles.filledRatingBar, { width: `${stars * 20}%` }]} />
//                                             </View>
//                                             <Text style={styles.ratingCount}>{stars * 20}</Text>
//                                         </View>
//                                     ))}
//                                 </View>
//                                 {/* Individual Reviews */}
//                                 {['Vlog KAHDI', 'Vlog KAHDI', 'Vlog KAHDI'].map((reviewer, index) => (
//                                     <View key={index} style={styles.googleReview}>
//                                         <Text style={styles.reviewerName}>{reviewer}</Text>
//                                         <Text style={styles.reviewText}>
//                                             ⭐ 5.0 - Excellent service. Highly recommended!
//                                         </Text>
//                                     </View>
//                                 ))}
//                             </View>
//                         )}
//                     </View>
//                 )
//             }


//             {/* Contact Button */}
//             <TouchableOpacity style={styles.contactButton}
//                 onPress={() => router.push('/message')} // Replace '/check-availability' with your desired path
//             >
//                 <Text style={styles.contactButtonText}>Contact Now</Text>
//             </TouchableOpacity>
//         </ScrollView >
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F8EAF2',
//         paddingTop: 50,
//     },
//     header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 16,
//     },
//     backText: {
//         fontSize: 16,
//         color: '#000',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         flex: 1,
//     },
//     mainImage: {
//         width: '100%',
//         height: 200,
//         resizeMode: 'cover',
//     },
//     tabContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         marginTop: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: '#E0E0E0',
//     },
//     tab: {
//         paddingVertical: 8,
//         flex: 1,
//         alignItems: 'center',
//     },
//     activeTab: {
//         borderBottomWidth: 2,
//         borderBottomColor: '#7B2869',
//     },
//     tabText: {
//         fontSize: 16,
//         color: '#7A7A7A',
//     },
//     activeTabText: {
//         color: '#7B2869',
//         fontWeight: 'bold',
//     },
//     detailsContainer: {
//         padding: 16,
//     },
//     name: {
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
//     ratingContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 8,
//     },
//     rating: {
//         fontSize: 16,
//         color: '#FFC107',
//     },
//     directions: {
//         fontSize: 14,
//         color: '#7A7A7A',
//         marginLeft: 8,
//     },
//     price: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#000',
//     },
//     perHead: {
//         fontSize: 14,
//         color: '#7A7A7A',
//     },
//     address: {
//         fontSize: 14,
//         color: '#7A7A7A',
//         marginVertical: 8,
//     },
//     photosSection: {
//         padding: 16,
//     },
//     sectionTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 8,
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
//     additionalDetails: {
//         padding: 16,
//     },
//     detailItem: {
//         fontSize: 14,
//         marginBottom: 8,
//     },
//     detailLabel: {
//         fontWeight: 'bold',
//     },
//     description: {
//         fontSize: 14,
//         marginVertical: 8,
//     },
//     tabContent: {
//         padding: 16,
//     },
//     packageItem: {
//         fontSize: 14,
//         marginBottom: 8,
//     },
//     reviewItem: {
//         fontSize: 14,
//         marginBottom: 8,
//     },
//     contactButton: {
//         backgroundColor: '#7B2869',
//         padding: 16,
//         margin: 16,
//         borderRadius: 8,
//         alignItems: 'center',
//     },
//     contactButtonText: {
//         color: '#FFF',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },

//     packageTabContainer: {
//         // flexDirection: 'row',
//         // justifyContent: 'space-between',
//         // marginVertical: 16,
//         flexDirection: 'row',
//         //justifyContent: 'space-between',
//         justifyContent: 'center',
//         marginVertical: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: '#E0E0E0',
//         paddingBottom: 8,
//     },
//     packageTab: {
//         // flex: 1,
//         // paddingVertical: 8,
//         // alignItems: 'center',
//         flex: 1,
//         paddingVertical: 8,
//         paddingHorizontal: 4,
//         alignItems: 'center',
//         marginHorizontal: 2,
//         borderRadius: 8,
//         borderWidth: 1,
//         borderColor: '#E0E0E0',
//         backgroundColor: '#F8EAF2',

//     },
//     activePackageTab: {
//         backgroundColor: '#9F4F8E',
//         borderColor: '#7B2869',
//     },
//     packageTabText: {
//         // fontSize: 14,
//         // color: '#7A7A7A',
//         fontSize: 11,
//         fontWeight: 'bold',
//         color: '#7A7A7A',
//         textAlign: 'center',
//     },
//     activePackageTabText: {
//         color: '#FFFFFF',
//         fontWeight: 'bold',
//     },
//     packageDetails: {
//         marginBottom: 16,
//         padding: 16, // Add padding for all four sides
//     },
//     // sectionTitle: {
//     //     fontSize: 16,
//     //     fontWeight: 'bold',
//     //     marginVertical: 8,
//     // },
//     packageDetailItem: {
//         fontSize: 14,
//         marginVertical: 2,
//         color: '#7A7A7A',
//     },
//     priceText: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#7B2869',
//         textAlign: 'right',
//         marginVertical: 8,
//     },

//     // checkAvailabilityButton: {
//     //     backgroundColor: '#7B2869',
//     //     padding: 50,
//     //     marginVertical: 16,
//     //     borderRadius: 8,
//     //     alignItems: 'center',

//     // },
//     // checkAvailabilityButtonText: {
//     //     color: '#FFF',
//     //     fontSize: 16,
//     //     fontWeight: 'bold',
//     // },
//     checkAvailabilityButton: {
//         backgroundColor: '#7B2869', // Match the purple background
//         paddingVertical: 8, // Keep smaller height
//         paddingHorizontal: 16, // Adjust for a narrower button
//         width: 200, // Explicitly set the width
//         alignSelf: 'center', // Center the button horizontally
//         marginVertical: 8, // Reduce space above and below
//         borderRadius: 8, // Rounded corners for design consistency
//         alignItems: 'center', // Center the text horizontally
//         justifyContent: 'center', // Center the text vertically
//     },
//     checkAvailabilityButtonText: {
//         color: '#FFF', // White text color
//         fontSize: 14, // Adjusted font size for better readability
//         fontWeight: 'bold', // Bold text for emphasis
//         textAlign: 'center', // Ensure text stays in the middle
//     },
//     reviewTabContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         marginBottom: 16,
//     },
//     reviewTab: {
//         flex: 1,
//         paddingVertical: 8,
//         alignItems: 'center',
//     },
//     activeReviewTab: {
//         borderBottomWidth: 2,
//         borderBottomColor: '#7B2869',
//     },
//     reviewTabText: {
//         fontSize: 16,
//         color: '#7A7A7A',
//     },
//     activeReviewTabText: {
//         color: '#7B2869',
//         fontWeight: 'bold',
//     },
//     eventifyReview: {
//         backgroundColor: '#FFF',
//         padding: 16,
//         borderRadius: 8,
//         marginVertical: 8,
//     },
//     reviewerName: {
//         fontSize: 14,
//         fontWeight: 'bold',
//         marginBottom: 4,
//     },
//     reviewDate: {
//         fontSize: 12,
//         color: '#7A7A7A',
//         marginBottom: 8,
//     },
//     reviewText: {
//         fontSize: 14,
//         color: '#000',
//     },
//     showMoreButton: {
//         backgroundColor: '#E0E0E0',
//         padding: 8,
//         borderRadius: 4,
//         alignItems: 'center',
//         marginVertical: 8,
//     },
//     showMoreButtonText: {
//         fontSize: 14,
//         color: '#7B2869',
//         fontWeight: 'bold',
//     },
//     googleReviewStats: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 4,
//     },
//     reviewNote: {
//         fontSize: 12,
//         color: '#7A7A7A',
//         marginBottom: 8,
//     },
//     ratingsBreakdown: {
//         marginVertical: 16,
//     },
//     ratingRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 8,
//     },
//     ratingText: {
//         fontSize: 12,
//         color: '#7A7A7A',
//         flex: 1,
//     },
//     ratingBar: {
//         flex: 4,
//         height: 8,
//         backgroundColor: '#E0E0E0',
//         marginHorizontal: 8,
//         borderRadius: 4,
//         overflow: 'hidden',
//     },
//     filledRatingBar: {
//         height: '100%',
//         backgroundColor: '#FFC107',
//     },
//     ratingCount: {
//         fontSize: 12,
//         color: '#7A7A7A',
//         flex: 1,
//     },
//     googleReview: {
//         backgroundColor: '#FFF',
//         padding: 16,
//         borderRadius: 8,
//         marginVertical: 8,
//     },

// });

// export default PhotographerDetailsScreen;
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { router, useGlobalSearchParams } from 'expo-router';
import axios from 'axios';

const PhotographerDetailsScreen: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'Details' | 'Packages' | 'Reviews'>('Details');
    const [activePackage, setActivePackage] = useState<number | null>(null);
    const [activeReviewTab, setActiveReviewTab] = useState<'Eventify' | 'Google'>('Eventify');
    const [vendorData, setVendorData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { id } = useGlobalSearchParams();

    useEffect(() => {
        const fetchVendorDetails = async () => {
            try {
                const response = await axios.get(`http://65.2.137.194:3000/vendor?userId=${id}`);
                setVendorData(response.data);
                setActivePackage(response.data.packages?.[0]?._id || null); // Set the first package as active by default
            } catch (error) {
                console.error('Error fetching vendor data:', error);
            } finally {
                setLoading(false);
            }
        };
        console.log("id", id);
        if (id) {
            fetchVendorDetails();
        }

    }, [id]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#7B2869" />
                <Text>Loading vendor details...</Text>
            </View>
        );
    }

    if (!vendorData) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Failed to load vendor details. Please try again.</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Photographer Details</Text>
            </View>



            {/* Image */}
            <Image
                source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ee8619c3ba7069ac2ac92e880c53f6a08b69c1a800aaf83f5653c512dd5631a5?apiKey=0a92af3bc6e24da3a9ef8b1ae693931a&' }} // Replace with actual image URL
                style={styles.mainImage}
            />

            {/* Tab Navigation */}
            <View style={styles.tabContainer}>
                {['Details', 'Packages', 'Reviews'].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={[styles.tab, activeTab === tab && styles.activeTab]}
                        onPress={() => setActiveTab(tab as 'Details' | 'Packages' | 'Reviews')}
                    >
                        <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Tab Content*/}

            {/* {activeTab === 'Details' && (
                <View style={styles.detailsContainer}>
                    <Text style={styles.name}>{vendorData.name}</Text>
                    <Text style={styles.address}>{vendorData.contactDetails.officialAddress}</Text>
                    <Text style={styles.price}>Starting Price: Rs.{vendorData.photographerBusinessDetails.minimumPrice}/-</Text>


                    <Text style={styles.perHead}>Per head</Text>

                    <Text style={styles.sectionTitle}>Details</Text>

                    <Text style={styles.detailLabel}>Staff</Text>
                    <Text style={styles.detailValue}>{vendorData.photographerBusinessDetails.staff}</Text>

                    <Text style={styles.detailLabel}>Cancellation Policy</Text>
                    <Text style={styles.detailValue}>{vendorData.photographerBusinessDetails.covidRefundPolicy}</Text>

                    <Text style={styles.detailLabel}>Cities Covered</Text>
                    <Text style={styles.detailValue}>{vendorData.photographerBusinessDetails.cityCovered}</Text>

                    <Text style={styles.detailLabel}>Description</Text>
                    <Text style={styles.detailValue}>{vendorData.photographerBusinessDetails.description}</Text>
                </View>
            )} */}
            {activeTab === 'Details' && (
                <View style={styles.detailsContainer}>
                    {/* Top Row: Name and Price */}
                    <View style={styles.rowContainer}>
                        <Text style={styles.name}>{vendorData.name}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>Starting Price: Rs.{vendorData.photographerBusinessDetails.minimumPrice}/-</Text>
                            <Text style={styles.perHead}>Per head</Text>
                        </View>
                    </View>

                    <Text style={styles.address}>{vendorData.contactDetails.officialAddress}</Text>

                    {/* Photos Section */}
                    <View style={styles.photosSection}>
                        <TouchableOpacity onPress={() => router.push('/vendorprofileimages')}>
                            <Text style={styles.sectionTitle}>Photos</Text>
                        </TouchableOpacity>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.photosScroll}
                        >
                            {/* Replace with dynamic images */}
                            <Image source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ee8619c3ba7069ac2ac92e880c53f6a08b69c1a800aaf83f5653c512dd5631a5?apiKey=0a92af3bc6e24da3a9ef8b1ae693931a&' }} style={styles.photo} />
                            <Image source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ee8619c3ba7069ac2ac92e880c53f6a08b69c1a800aaf83f5653c512dd5631a5?apiKey=0a92af3bc6e24da3a9ef8b1ae693931a&' }} style={styles.photo} />
                            <Image source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ee8619c3ba7069ac2ac92e880c53f6a08b69c1a800aaf83f5653c512dd5631a5?apiKey=0a92af3bc6e24da3a9ef8b1ae693931a&' }} style={styles.photo} />
                            <Image source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ee8619c3ba7069ac2ac92e880c53f6a08b69c1a800aaf83f5653c512dd5631a5?apiKey=0a92af3bc6e24da3a9ef8b1ae693931a&' }} style={styles.photo} />
                        </ScrollView>
                    </View>


                    {/* Additional Details Section */}

                    {/* Details Section */}
                    <Text style={styles.sectionTitle}>Details</Text>

                    <Text style={styles.detailLabel}>Staff</Text>
                    <Text style={styles.detailValue}>{vendorData.photographerBusinessDetails.staff}</Text>

                    <Text style={styles.detailLabel}>Cancellation Policy</Text>
                    <Text style={styles.detailValue}>{vendorData.photographerBusinessDetails.covidRefundPolicy}</Text>

                    <Text style={styles.detailLabel}>Cities Covered</Text>
                    <Text style={styles.detailValue}>{vendorData.photographerBusinessDetails.cityCovered}</Text>

                    <Text style={styles.detailLabel}>Description</Text>
                    <Text style={styles.detailValue}>{vendorData.photographerBusinessDetails.description}</Text>
                </View>
            )}



            {activeTab === 'Packages' && (
                <>
                    <View style={styles.packageTabContainer}>
                        {vendorData.packages.map((pkg: any) => (
                            <TouchableOpacity
                                key={pkg._id}
                                style={[styles.packageTab, activePackage === pkg._id && styles.activePackageTab]}
                                onPress={() => setActivePackage(pkg._id)}
                            >
                                <Text
                                    style={[
                                        styles.packageTabText,
                                        activePackage === pkg._id && styles.activePackageTabText,
                                    ]}
                                >
                                    {pkg.packageName}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Package Details */}
                    {vendorData.packages
                        .filter((pkg: any) => pkg._id === activePackage)
                        .map((pkg: any) => (
                            <View key={pkg._id} style={styles.packageDetails}>
                                <Text style={styles.sectionTitle}>Services</Text>
                                <Text style={styles.packageDetailItem}>{pkg.services}</Text>
                                <Text style={styles.priceText}>Price: Rs.{pkg.price}/-</Text>
                            </View>
                        ))}

                    <Calendar
                        onDayPress={(day: { dateString: string }) => console.log('Selected day:', day.dateString)}
                        minDate={new Date().toISOString().split('T')[0]} // Disables past dates
                        markedDates={{
                            '2024-12-03': { selected: true, selectedColor: '#7B2869' },
                        }}
                        theme={{
                            selectedDayBackgroundColor: '#7B2869',
                            todayTextColor: '#7B2869',
                        }}
                    />
                </>
            )}

            {/* {activeTab === 'Reviews' && (
                <View style={styles.tabContent}>
                    <Text>Reviews Tab Content (Static for now)</Text>
                </View>
            )} */}
            {activeTab === 'Reviews' && (
                <View style={styles.tabContent}>
                    {/* Tab Navigation for Reviews */}
                    <View style={styles.reviewTabContainer}>
                        <TouchableOpacity
                            style={[styles.reviewTab, activeReviewTab === 'Eventify' && styles.activeReviewTab]}
                            onPress={() => setActiveReviewTab('Eventify')}
                        >
                            <Text
                                style={[
                                    styles.reviewTabText,
                                    activeReviewTab === 'Eventify' && styles.activeReviewTabText,
                                ]}
                            >
                                Eventify Hub's Reviews
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.reviewTab, activeReviewTab === 'Google' && styles.activeReviewTab]}
                            onPress={() => setActiveReviewTab('Google')}
                        >
                            <Text
                                style={[
                                    styles.reviewTabText,
                                    activeReviewTab === 'Google' && styles.activeReviewTabText,
                                ]}
                            >
                                Google Reviews
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Eventify Reviews */}
                    {activeReviewTab === 'Eventify' && (
                        <View>
                            <Text style={styles.sectionTitle}>1 Review</Text>
                            <View style={styles.eventifyReview}>
                                <Text style={styles.reviewerName}>Imran</Text>
                                <Text style={styles.reviewDate}>April 12, 2023</Text>
                                <Text style={styles.reviewText}>
                                    Venue was good but location is not up to the mark.
                                </Text>
                            </View>
                            <TouchableOpacity style={styles.showMoreButton}>
                                <Text style={styles.showMoreButtonText}>Show More</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    {/* Google Reviews */}
                    {activeReviewTab === 'Google' && (
                        <View>
                            <Text style={styles.googleReviewStats}>
                                130 Reviews ⭐ 4.2
                            </Text>
                            <Text style={styles.reviewNote}>
                                *Ratings and reviews gathered from online sources*
                            </Text>
                            {/* Ratings Breakdown */}
                            <View style={styles.ratingsBreakdown}>
                                {[5, 4, 3, 2, 1].map((stars) => (
                                    <View key={stars} style={styles.ratingRow}>
                                        <Text style={styles.ratingText}>{stars} Stars</Text>
                                        <View style={styles.ratingBar}>
                                            <View style={[styles.filledRatingBar, { width: `${stars * 20}%` }]} />
                                        </View>
                                        <Text style={styles.ratingCount}>{stars * 20}</Text>
                                    </View>
                                ))}
                            </View>
                            {/* Individual Reviews */}
                            {['Vlog KAHDI', 'Vlog KAHDI', 'Vlog KAHDI'].map((reviewer, index) => (
                                <View key={index} style={styles.googleReview}>
                                    <Text style={styles.reviewerName}>{reviewer}</Text>
                                    <Text style={styles.reviewText}>
                                        ⭐ 5.0 - Excellent service. Highly recommended!
                                    </Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>)}

            {/* Contact Button */}
            <TouchableOpacity style={styles.contactButton} onPress={() => router.push('/message')}>
                <Text style={styles.contactButtonText}>Contact Now</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8EAF2',
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    backText: {
        fontSize: 16,
        color: '#000',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    mainImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    tab: {
        paddingVertical: 8,
        flex: 1,
        alignItems: 'center',
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#7B2869',
    },
    tabText: {
        fontSize: 16,
        color: '#7A7A7A',
    },
    activeTabText: {
        color: '#7B2869',
        fontWeight: 'bold',
    },
    // detailsContainer: {
    //     padding: 16,
    // },
    // name: {
    //     fontSize: 20,
    //     fontWeight: 'bold',
    // },
    address: {
        fontSize: 14,
        color: '#7A7A7A',
        marginVertical: 8,
    },
    // price: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     color: '#000',
    // },
    description: {
        fontSize: 14,
        marginVertical: 8,
    },
    staff: {
        fontSize: 14,
        marginVertical: 8,
    },
    packageTabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        paddingBottom: 8,
    },
    packageTab: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 4,
        alignItems: 'center',
        marginHorizontal: 2,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: '#F8EAF2',
    },
    activePackageTab: {
        backgroundColor: '#9F4F8E',
        borderColor: '#7B2869',
    },
    packageTabText: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#7A7A7A',
        textAlign: 'center',
    },
    activePackageTabText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    packageDetails: {
        padding: 16,
    },
    packageDetailItem: {
        fontSize: 14,
        marginVertical: 2,
        color: '#7A7A7A',
    },
    priceText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7B2869',
        textAlign: 'right',
        marginVertical: 8,
    },
    contactButton: {
        backgroundColor: '#7B2869',
        padding: 16,
        margin: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    contactButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 16,
        color: 'red',
    },
    // sectionTitle: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     marginBottom: 8,
    // },
    tabContent: {
        padding: 16,
    },
    detailItem: {
        fontSize: 14,
        marginBottom: 8,
    },
    // detailLabel: {
    //     fontWeight: 'bold',
    // },
    // detailsContainer: {
    //     padding: 16,
    //     //  backgroundColor: '#FDF6FA', // Light background color
    // },
    // sectionTitle: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     marginBottom: 12,
    //     color: '#000',
    // },
    // detailLabel: {
    //     fontSize: 14,
    //     fontWeight: 'bold',
    //     marginTop: 8,
    //     color: '#333',
    // },
    // detailValue: {
    //     fontSize: 14,
    //     marginTop: 4,
    //     marginBottom: 8,
    //     color: '#555',
    // },
    // perHead: {
    //     fontSize: 14,
    //     color: '#7A7A7A',
    // },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    priceContainer: {
        alignItems: 'flex-end',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    perHead: {
        fontSize: 14,
        color: '#7A7A7A',
        marginTop: 2,
    },
    detailsContainer: {
        padding: 16,
        //  backgroundColor: '#FDF6FA',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 8,
        color: '#333',
    },
    detailLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 8,
    },
    detailValue: {
        fontSize: 14,
        color: '#777',
        marginBottom: 4,
    },
    photosSection: {
        padding: 16,
    },

    photosScroll: {
        flexDirection: 'row',
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 8,
    },
    reviewTabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    reviewTab: {
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
    },
    activeReviewTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#7B2869',
    },
    reviewTabText: {
        fontSize: 16,
        color: '#7A7A7A',
    },
    activeReviewTabText: {
        color: '#7B2869',
        fontWeight: 'bold',
    },
    eventifyReview: {
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 8,
        marginVertical: 8,
    },
    reviewerName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    reviewDate: {
        fontSize: 12,
        color: '#7A7A7A',
        marginBottom: 8,
    },
    reviewText: {
        fontSize: 14,
        color: '#000',
    },
    showMoreButton: {
        backgroundColor: '#E0E0E0',
        padding: 8,
        borderRadius: 4,
        alignItems: 'center',
        marginVertical: 8,
    },
    showMoreButtonText: {
        fontSize: 14,
        color: '#7B2869',
        fontWeight: 'bold',
    },
    googleReviewStats: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    reviewNote: {
        fontSize: 12,
        color: '#7A7A7A',
        marginBottom: 8,
    },
    ratingsBreakdown: {
        marginVertical: 16,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    ratingText: {
        fontSize: 12,
        color: '#7A7A7A',
        flex: 1,
    },
    ratingBar: {
        flex: 4,
        height: 8,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 8,
        borderRadius: 4,
        overflow: 'hidden',
    },
    filledRatingBar: {
        height: '100%',
        backgroundColor: '#FFC107',
    },
    ratingCount: {
        fontSize: 12,
        color: '#7A7A7A',
        flex: 1,
    },
    googleReview: {
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 8,
        marginVertical: 8,
    },


});

export default PhotographerDetailsScreen;
