import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import elementsReducer from '../slices/elements/elementsSlice';
import scientistsReducer from '../slices/scientists/scientistsSlice';
import usersReducer from '../slices/users/users.slice';
import experimentReducer from '../slices/experiments/experimentsSlice';

export const store = configureStore({
  reducer: {
    elementsState: elementsReducer,
    scientistsState: scientistsReducer,
    usersState: usersReducer,
    experimentState: experimentReducer,
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
