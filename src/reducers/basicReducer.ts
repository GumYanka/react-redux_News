
import createSlice from "redux-thunk"
import { combineReducers } from '@reduxjs/toolkit'
import { fetchNews } from "./fetchNews";

const initialState = {
  list:[],
  error: undefined,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
  },

  extraReducers: (builder:any) => {

    builder.addCase(fetchNews.pending, (state:any) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(fetchNews.fulfilled, 
      (state:any, { payload }:any) => {
      state.list.push(...payload);
      state.status = "idle";
    });

    builder.addCase(fetchNews.rejected, 
      (state:any, { payload }:any) => {
      if (payload) state.error = payload.message;
      state.status = "idle";
    });
  },
} as any);

const rootReducer = combineReducers({newsSlice})

export default rootReducer;