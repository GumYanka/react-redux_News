import axios from "axios";
import { NewsPayload } from "./interface";

const endPoint = "https://jsonplaceholder.typicode.com"

export const getNewsAPI = async () => {
    const url = `${endPoint}/posts`;
    const response = await axios.get(url);
    return response;
}

export const postAPI = async (payload: NewsPayload) => {
    const url = `${endPoint}/posts`;
    const response = await axios.post(url, payload);
    return response;
}

export const putAPI = async (payload: NewsPayload) => {
    const url = `${endPoint}/posts/${payload.id}`;
    const response = await axios.put(url, payload);
    return response;
}

export const deleteNewsAPI = async (id: number) => {
    const url = `${endPoint}/posts/${id}`;
    const response = await axios.delete(url);
    return response;
}