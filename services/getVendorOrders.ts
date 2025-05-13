import axios, { AxiosRequestConfig } from "axios";

export interface GetOrdersResponse {
    orderId: string;
    eventName: string;
    clientName: string;
    eventDate: string;
    package: string;
    price: number;
    status: string;
}

export default async function getVendorOrders(status?: string, limit = 10, skip = 0): Promise<GetOrdersResponse[]> {
    // const url = `http://65.2.137.194:3000/orders`;
    const url = `http://192.168.100.15:3000/orders`;
    const params = {
        status,
        limit,
        skip,
    };

    const config: AxiosRequestConfig = {
        method: "GET",
        url,
        params,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error("Error fetching orders:", error);
        throw error;
    }
}
