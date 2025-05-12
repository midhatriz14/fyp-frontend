import axios, { AxiosRequestConfig } from "axios";

export default async function patchCompleteVendorOrder(vendorOrderId: string) {
    const url = `http://65.2.137.194:3000/orders/complete-vendor/${vendorOrderId}`;
    const config: AxiosRequestConfig = {
        method: "PATCH",
        url,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error("Error completing vendor order:", error);
        throw error;
    }
}
