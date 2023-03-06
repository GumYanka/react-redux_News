import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsArray, updateFieldObject } from "../models/redux-model";

const initialState = {
  news: [],
  selectedNewsId: null,
  page: 1,
  status: "loading"
} as NewsArray;

export const newsSlice: any = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state: NewsArray[]| any, action:PayloadAction<updateFieldObject>) => {
      state.news = action.payload;
      state.status = 'succeeded';
    },
    selectNews(state: NewsArray | any, action: PayloadAction<number>) {
      state.selectedNewsId = action.payload;
    },
    loadMoreNews: (state:any) => {
      state.page += 1;
      state.status = 'succeeded';
    },
    deleteNews: (state: NewsArray| any, action: PayloadAction<number>) => {
      state.news = state.news.filter((news:any) => news.id !== action.payload);
    },
  }
} as any);

export const selectNews = (state: any) => state?.news?.news; 
export const selectPage = (state: any) => state?.news?.page; 
export const selectNewsById = (newsId:number) => createSelector(
  selectNews,
  news => news.find((news:any) => news.id === newsId)
);
export const selectNewsStatus = (state: any) => state.news.status;
export const { setNews, selectedNews,loadMoreNews,deleteNews } = newsSlice.actions;
export default newsSlice.reducer;
