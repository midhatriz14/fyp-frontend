
import { CreatePackagesDto } from "@/dto/CreatePackage.dto";
import axios, { AxiosRequestConfig } from "axios";

export default async function postAddPackages(userId: string, packages: CreatePackagesDto) {
    const url = `http://65.2.137.194:3000/vendor/packages?userId=${userId}`;
    const config: AxiosRequestConfig = {
        maxBodyLength: Infinity,
        method: "POST",
        url,
        data: packages,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error("Error fetching vendor categories:", error);
        throw error;
    }
}
