import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import elementsReducer from '../slices/elementsSlice';

export const store = configureStore({
  reducer: {
    elementsState: elementsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
