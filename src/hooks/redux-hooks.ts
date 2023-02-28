import { RootState } from "@/store/store";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

export const useAppSelector: TypedUseSelectorHook<RootState | any> =
  useSelector;
export const useAppDispatch = () => useDispatch<ThunkDispatch<any, any, any>>();
