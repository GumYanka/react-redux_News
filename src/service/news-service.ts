import axios from "axios";
import { NewsId, NewsPayload } from "../models/redux-model";

const endPoint = "https://jsonplaceholder.typicode.com";

export const getNewsAPI = async () => {
  const url = `${endPoint}/posts`;
  var response = await axios.get(url);
  return response
};

export const getParticularNewsAPI = async (news_id: NewsId) => {
  const url = `${endPoint}/posts`;
  const response = await axios.get(url);
  return response.data.filter((news: NewsPayload) => news.id === news_id)[0];
};

export const postAPI = async (payload: NewsPayload) => {
  const url = `${endPoint}/posts`;
  const response = await axios.post(url, payload);
  return response;
};

export const putAPI = async (payload: NewsPayload) => {
  const url = `${endPoint}/posts/${payload.id}`;
  const response = await axios.put(url, payload);
  return response;
};

export const deleteNewsAPI = async (id: number) => {
  const url = `${endPoint}/posts/${id}`;
  const response = await axios.delete(url);
  return response;
};
