import postPlaceOrder from '@/services/postPlaceOrder';
import { getSecureData, saveSecureData } from '@/store';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message'; // Import Toast

const CartManagementIndexScreen: React.FC = () => {
    const [cartData, setCartData] = useState<any>(null);
    const navigation = useNavigation();

    const handleCheckout = async () => {
        try {
            const storedCart = await getSecureData('cartData');
            const cart = JSON.parse(storedCart || "");

            if (cart.vendors.length === 0) {
                Toast.show({
                    type: 'error',
                    text1: 'Empty Cart',
                    text2: 'Your cart is empty. Please add items to proceed.',
                    position: 'bottom',
                });
                return;
            }
            const user = await getSecureData("user");
            const eventDate = '2025-12-31'; // Replace with your actual selected date
            const eventTime = '18:00'; // Replace with your actual selected time
            const organizerId = '123456'; // Replace with the actual organizer ID

            const services = cart.vendors.flatMap((vendor: any) =>
                vendor.packages.map((pkg: any) => ({
                    vendorId: vendor.vendor._id,
                    serviceName: pkg.packageName,
                    price: pkg.price,
                }))
            );
            const response = await postPlaceOrder({ organizerId, eventDate, eventTime, services });
            console.log("response", response);
            if (response) {
                Toast.show({
                    type: 'success',
                    text1: 'Order Placed',
                    text2: 'Your order has been successfully placed!',
                    position: 'bottom',
                });
                // Optionally, clear the cart after order is placed
                saveSecureData('cartData', JSON.stringify({ vendors: [] }));
            } else {
                throw new Error('Failed to place order');
            }
        } catch (error) {
            console.error('Error placing order:', error);
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Failed to place order. Please try again.',
                position: 'bottom',
            });
        }
    };

    useEffect(() => {
        // Hide the navigation header completely
        navigation.setOptions({
            headerShown: false,  // This removes the header and title from the top
        });

        const fetchCartData = async () => {
            try {
                const storedCart = await getSecureData('cartData');
                if (storedCart) {
                    setCartData(JSON.parse(storedCart));
                } else {
                    setCartData({ vendors: [] });  // Ensure there's no packages key in the initial state
                }
            } catch (error) {
                console.error('Error fetching cart data:', error);
                Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: 'Failed to load cart data. Please try again.',
                    position: 'bottom',
                });
            }
        };

        fetchCartData();
    }, [navigation]);

    const handleEmptyCart = () => {
        // Empty the cart
        saveSecureData('cartData', JSON.stringify({ vendors: [] }));
        setCartData({ vendors: [] });
        Toast.show({
            type: 'success',
            text1: 'Cart Emptied',
            text2: 'Your cart has been emptied.',
            position: 'bottom',
        });
    };

    const handleDeletePackage = (vendorIndex: number, packageIndex: number) => {
        // Create a copy of the cart data to modify
        const updatedCart = { ...cartData };

        // Remove the package from the vendor's list
        updatedCart.vendors[vendorIndex].packages.splice(packageIndex, 1);

        // If the vendor has no packages left, remove the vendor from the cart
        if (updatedCart.vendors[vendorIndex].packages.length === 0) {
            updatedCart.vendors.splice(vendorIndex, 1);
        }

        // Save the updated cart back to secure storage
        saveSecureData('cartData', JSON.stringify(updatedCart));
        setCartData(updatedCart);

        // Show a success toast
        Toast.show({
            type: 'success',
            text1: 'Package Removed',
            text2: 'The package has been removed from your cart.',
            position: 'bottom',
        });
    };

    // Calculate total amount
    const calculateTotalAmount = () => {
        let totalAmount = 0;
        cartData.vendors.forEach((vendor: any) => {
            vendor.packages.forEach((pkg: any) => {
                totalAmount += pkg.price;
            });
        });
        return totalAmount;
    };

    if (!cartData) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading cart data...</Text>
            </View>
        );
    }

    const totalAmount = calculateTotalAmount();

    return (
        <View style={styles.container}>
            {/* "Your Cart" Label inside the UI */}
            <Text style={styles.title}>Your Cart</Text>

            {/* Cart Items */}
            <ScrollView style={styles.cartItemsContainer}>
                {cartData.vendors.length === 0 ? (
                    <View style={styles.emptyCartContainer}>
                        <Text style={styles.emptyCartText}>Your cart is empty</Text>
                    </View>
                ) : (
                    cartData.vendors.map((vendor: any, vendorIndex: number) => (
                        <View key={vendorIndex} style={styles.cartItemContainer}>
                            <Text style={styles.vendorName}>{vendor.vendor.name}</Text>
                            {/* Display packages for this vendor */}
                            {vendor.packages.map((pkg: any, packageIndex: number) => (
                                <View key={packageIndex} style={styles.packageContainer}>
                                    <Text style={styles.packageName}>{pkg.packageName}</Text>
                                    <Text style={styles.packagePrice}>Rs. {pkg.price}/-</Text>
                                    {/* Delete Button */}
                                    <TouchableOpacity
                                        style={styles.deleteButton}
                                        onPress={() => handleDeletePackage(vendorIndex, packageIndex)}
                                    >
                                        <Text style={styles.deleteButtonText}>Remove</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    ))
                )}
            </ScrollView>

            {/* Bottom Section (Fixed at the bottom) */}
            <View style={styles.bottomContainer}>
                {/* Empty Cart Button */}
                {/* Total Amount */}
                {cartData.vendors.length > 0 && (
                    <View style={styles.totalAmountContainer}>
                        <Text style={styles.totalAmountText}>Total: Rs. {totalAmount}/-</Text>
                    </View>
                )}
                {cartData.vendors.length > 0 && (
                    <TouchableOpacity
                        style={styles.emptyCartButton}
                        onPress={handleEmptyCart}
                    >
                        <Text style={styles.emptyCartButtonText}>Empty Cart</Text>
                    </TouchableOpacity>
                )}

                {/* Checkout Button */}
                {cartData.vendors.length > 0 && (
                    <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
                        <Text style={styles.checkoutButtonText}>Checkout</Text>
                    </TouchableOpacity>
                )}


            </View>
        </View>
    );
};

// Styles for Cart Screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8EAF2',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 60, // Adjust the padding for spacing
        marginBottom: 16, // Ensure there's space between the title and cart items
    },
    cartItemsContainer: {
        flex: 1,
    },
    bottomContainer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        backgroundColor: '#FFF',
    },
    cartItemContainer: {
        backgroundColor: '#FFF',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        marginHorizontal: 16,
    },
    vendorName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    packageContainer: {
        marginTop: 10,
    },
    packageName: {
        fontSize: 16,
        color: '#7A7A7A',
    },
    packagePrice: {
        fontSize: 16,
        color: '#7B2869',
        fontWeight: 'bold',
    },
    deleteButton: {
        backgroundColor: '#FF4D4D',
        padding: 8,
        marginTop: 8,
        borderRadius: 5,
        alignItems: 'center',
    },
    deleteButtonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    emptyCartContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    emptyCartText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7A7A7A',
    },
    emptyCartButton: {
        backgroundColor: '#7B2869',
        padding: 16,
        margin: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    emptyCartButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    checkoutButton: {
        backgroundColor: '#7B2869',
        padding: 16,
        margin: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalAmountContainer: {
        marginTop: 20,
        paddingHorizontal: 16,
        alignItems: 'flex-end',
    },
    totalAmountText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7B2869',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CartManagementIndexScreen;
