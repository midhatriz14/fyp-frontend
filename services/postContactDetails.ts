import { CreateContactDetailsDto } from "@/dto/CreateContactDetails.dto";
import axios, { AxiosRequestConfig } from "axios";

export default async function postContactDetails(userId: string, contactDetails: CreateContactDetailsDto) {
    const url = `http://65.2.137.194:3000/vendor/contactDetails?userId=${userId}`;
    const config: AxiosRequestConfig = {
        maxBodyLength: Infinity,
        method: "POST",
        url,
        data: contactDetails,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.log(error);
        console.error("Error fetching vendor categories:", error);
        throw error;
    }
}
