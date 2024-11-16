import axios, { AxiosRequestConfig } from "axios";

export default async function Login(email: string, password: string) {
    const url = `http://65.2.137.194:3000/auth/login`;
    const config: AxiosRequestConfig = {
        maxBodyLength: Infinity,
        method: "POST",
        data: { email, password },
        url,
    };

    const response = await axios(config);
    return response.data;
}
