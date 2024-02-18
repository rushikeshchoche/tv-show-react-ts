import { configureStore } from '@reduxjs/toolkit';
import showReducer from './showSlice';
import episodeDetailsReducer from './episodeDetailsSlice';

export const store = configureStore({
  reducer: {
    show: showReducer,
    episodeDetails: episodeDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
