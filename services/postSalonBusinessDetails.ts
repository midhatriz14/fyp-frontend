import { CreateSalonBusinessDetailsDto } from "@/dto/CreateSalonBusinessDetails.dto";
import axios, { AxiosRequestConfig } from "axios";

export default async function postSalonBusinessDetails(userId: string, salonBusinessDetails: CreateSalonBusinessDetailsDto) {
    const url = `http://65.2.137.194:3000/vendor/buisnessDetails?userId=${userId}`;
    const config: AxiosRequestConfig = {
        maxBodyLength: Infinity,
        method: "POST",
        url,
        data: salonBusinessDetails,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error("Error fetching vendor categories:", error);
        throw error;
    }
}
