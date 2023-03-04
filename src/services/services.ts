import { deleteNews, setNews } from "../store/news-slice";
import axios from "axios";
import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { getPhotosSuccess } from "../store/photos-slice";
import { NewsPayload } from "@/models/redux-model";
import { login } from "../store/user-slice";

export const fetchCurrentUser = () => (dispatch: Dispatch) => {
  const user = JSON.parse(localStorage.getItem('currentUser') as any);
  if (user) {
    dispatch(login(user));
  }
};

export const fetchNews = (page: number) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
    const posts = response.data;
    dispatch(setNews(posts));
  } catch (error) {
    console.error(error);
  }
};

export const fetchPhotosAsync = (page: number) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
    const photos = response.data;
    dispatch(getPhotosSuccess(photos));
  } catch (error) {
    throw Error('Failed to fetch photos');
  }
};

export const deleteNewsAsync = (newsId: number) => async (dispatch: Dispatch) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${newsId}`);
    dispatch(deleteNews(newsId));
  } catch (error) {
    console.error(error);
  }
};

const fetchNewsByIdAPI = async (id: number): Promise<NewsPayload| any> => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.data;
};

export const fetchNewsById = createAsyncThunk(
  "news/fetchNewsById",
  async (id: number) => {
    const response = await fetchNewsByIdAPI(id);
    return response.data;
  }
);

export const fetchPhotoByIdAPI = async (id: number): Promise<any> => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
  return response.data;
};

export const fetchPhotoById = createAsyncThunk(
  "news/fetchPhotosById",
  async (id: number) => {
    const response = await fetchPhotoByIdAPI(id);
    return response.data;
  }
);

