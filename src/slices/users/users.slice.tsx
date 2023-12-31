import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../model/user';
import { loginThunk, loginTokenThunk } from './users.thunks';
import { LoginResponse } from '../../types/login.payload';

type LoginState = 'idle' | 'logging' | 'error';

type UserState = {
  loggedUser: User | null;
  loggingState: LoginState;
  token: string; // token
};

const initial: UserState = {
  loggedUser: null,
  loggingState: 'idle',
  token: '',
};

// estado de log in y log out

const userSlice = createSlice({
  name: 'users',
  initialState: initial,
  reducers: {
    logout: (state: UserState) => {
      state.loggedUser = null;
      state.token = '';
      console.log('hola');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loginThunk.fulfilled,
      (state: UserState, { payload }: PayloadAction<LoginResponse>) => {
        state.loggedUser = payload.user;
        state.token = payload.token;
        state.loggingState = 'idle';
      }
    );
    builder.addCase(
      loginTokenThunk.fulfilled,
      (state: UserState, { payload }: PayloadAction<LoginResponse>) => {
        state.loggedUser = payload.user;
        state.token = payload.token;
        state.loggingState = 'idle';
      }
    );
    builder.addCase(loginThunk.pending, (state: UserState) => {
      state.loggingState = 'logging';
    });
    builder.addCase(loginThunk.rejected, (state: UserState) => {
      state.loggingState = 'error';
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
