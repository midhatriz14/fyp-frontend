import axios, { AxiosRequestConfig } from "axios";

export default async function Login(email: string, password: string) {
    try {
        const url = `http://65.2.137.194:3000/auth/login`;
        const config: AxiosRequestConfig = {
            maxBodyLength: Infinity,
            method: "POST",
            data: { email, password },
            url,
        };

        const response = await axios<{ token: string, user: any }>(config);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data && error.response.data.message) {
            throw error.response.data.message;
        } else {
            throw error.message
        }
    }
}
