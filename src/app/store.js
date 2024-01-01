import { configureStore } from '@reduxjs/toolkit'
import aocReducer from '../features/aoc/aocSlice'

// todo: import reducer

export const store = configureStore({
  reducer: {
    aoc: aocReducer,
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
