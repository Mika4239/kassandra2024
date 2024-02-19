import { combineReducers, configureStore } from "@reduxjs/toolkit";
import matchDataReducer from "./matchDataSlice";
import userReducer from './userSlice';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "app",
  storage,
};

const reducers = combineReducers({
  matchData: matchDataReducer,
  user: userReducer
});

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers)  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
