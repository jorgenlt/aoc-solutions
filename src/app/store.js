import { configureStore } from "@reduxjs/toolkit";
import aocReducer from "../features/aoc/aocSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// import thunk from 'redux-thunk';

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, aocReducer);

export const store = configureStore({
  reducer: {
    aoc: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // serializableCheck: {
      //   // Ignore these action types
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, 'dataReader/updateFilterDate'],
      // },
    }),
});

export const persistor = persistStore(store);
