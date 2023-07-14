import { configureStore } from '@reduxjs/toolkit';
import forecastProvidersReducer from '../features/forecastProviders/forecastProvidersSlice';
import toastReducer from '../features/toast/toastSlice';
import { api } from '../api';
import { errorMiddleware } from '../api/errorMiddleware';
import themeSlice from '../features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    forecastProvider: forecastProvidersReducer,
    toast: toastReducer,
    theme: themeSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(errorMiddleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
