import axios, { AxiosRequestConfig } from "axios";

export default async function deleteVendorOrder(orderId: string) {
    const url = `http://65.2.137.194:3000/orders/${orderId}`;
    // const url = `http://192.168.100.15:3000/orders/${orderId}`;

    const config: AxiosRequestConfig = {
        method: "DELETE",
        url,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error("Error deleting order:", error);
        throw error;
    }
}
