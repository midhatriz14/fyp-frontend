import axios, { AxiosRequestConfig } from "axios";

interface ServiceItem {
    vendorId: string;
    serviceName: string;
    price: number;
}

interface PlaceOrderPayload {
    organizerId: string;
    eventDate: string; // in ISO format
    eventTime: string;
    services: ServiceItem[];
}

export default async function postPlaceOrder(orderData: PlaceOrderPayload) {
    const url = `http://65.2.137.194:3000/orders`;
    const config: AxiosRequestConfig = {
        method: "POST",
        url,
        data: orderData,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error("Error placing order:", error);
        throw error;
    }
}
