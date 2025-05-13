import axios, { AxiosRequestConfig } from "axios";

interface OrderStats {
    totalOrders: number;
    pending: number;
    processing: number;
    completed: number;
}

export default async function getVendorOrderStats(): Promise<OrderStats> {
    // const url = `http://65.2.137.194:3000/orders/stats`;
    const url = `http://192.168.100.15:3000/orders/stats`;

    const config: AxiosRequestConfig = {
        method: "GET",
        url,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error("Error fetching order stats:", error);
        throw error;
    }
}
