import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginResponse } from '../../types/login.payload';
import { LoginUser } from '../../model/user';
import { RepoUsers } from '../../services/repoUsers';

// THUNK DEL LOGIN NORMAL
export const loginThunk = createAsyncThunk<
  LoginResponse,
  {
    loginUser: LoginUser;
    repo: RepoUsers;
  }
>('login', async ({ loginUser, repo }) => {
  return await repo.login(loginUser);
});

// THUNK DEL LOGIN WITH TOKEN
export const loginTokenThunk = createAsyncThunk<
  LoginResponse,
  {
    token: string;
    repo: RepoUsers;
  }
>('loginWithToken', async ({ token, repo }) => {
  return await repo.loginWithToken(token);
});
