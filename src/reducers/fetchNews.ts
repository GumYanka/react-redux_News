import { News} from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk<News[]>(
  "news/fetch", 
  async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts`
      );
    const data: News[] = await response.json();
    return data;
  }
);