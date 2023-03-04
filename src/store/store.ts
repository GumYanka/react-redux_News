import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newsReducer from "./news-slice";
import { userReducer } from "./user-slice";
import photosReducer from './photos-slice';
import languageReducer from './localization-slice';
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  news: newsReducer,
  user: userReducer,
  photos: photosReducer,
  language: languageReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
