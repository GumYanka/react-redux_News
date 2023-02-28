import createSlice from "redux-thunk";
import { NewsArray } from "@/models/redux-model";
import { fetchNews } from "./news-actions";

const initialState = {
  news: [],
} as NewsArray;

export const newsSlice: any = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchNews.pending, () => {});
    builder.addCase(fetchNews.fulfilled, (state: any, { payload }: any) => {
      state.news.push(...payload);
    });
    builder.addCase(fetchNews.rejected, (state: any, { payload }: any) => {
      if (payload) console.error(state);
    });
  },
} as any);

export default newsSlice;
export const newsReducer = newsSlice.reducer
