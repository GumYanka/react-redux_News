import { getNewsAPI } from "../service/news-service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewsPayload } from "@/models/redux-model";

export const fetchNews = createAsyncThunk<NewsPayload[]>(
  "news/fetch",
  async () => {
    const response: any = getNewsAPI();
    const data: NewsPayload[] = await response;
    return data;
  }
);

// export const fetchParticularNews = (
//   news_id: NewsId
// ): ThunkAction<void, RootState, never, AnyAction> => {
//   return async (dispatch, getState) => {
//     const response = await getParticularNewsAPI(news_id);
//     dispatch(setParticularNews(response));
//   };
// };
