import axios, { AxiosRequestConfig } from "axios";
export default async function Register(email: string, password: string, name: string) {
    const url = `http://65.2.137.194:3000/auth/register`;
    const config: AxiosRequestConfig = {
        maxBodyLength: Infinity,
        method: "POST",
        data: { email, password, name },
        url,
    };

    const response = await axios(config);
    return response.data;
}