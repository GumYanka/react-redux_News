import { 
  TypedUseSelectorHook, 
  useSelector 
} from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import rootReducer  from '../reducers/basicReducer'

export const useTypedSelector: TypedUseSelectorHook<any> = useSelector;

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch