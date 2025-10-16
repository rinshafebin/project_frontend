import axios from 'axios'
import { data } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_API_URL;

export const loginAPI = async ({ email, password }) => {
    const response = await axios.post(`${BASE_URL}/auth/login/`, { email, password })
    return response.data;
}

export const registerClientApi = async (data)=>{
    const response = await axios.post(`${BASE_URL}/auth/client-register/`,data)
    return response.data;
}
export const registerAdvocateApi = async (data) =>{
    const response = await axios.post(`${BASE_URL}/auth/advocate-register`,data)
    return response.data;
}

export const VerifyMFAAPI = async ({user_id,otp})=>{
    const response = await axios.post(`${BASE_URL}auth/verify-mfa`,{user_id,otp});
    return response.data;
}


