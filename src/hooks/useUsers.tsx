import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { logout } from '../slices/users/users.slice';
import { loginThunk, loginTokenThunk } from '../slices/users/users.thunks';
import { RepoUsers } from '../services/repoUsers';
import { LoginUser, User } from '../model/user';

export function useUsers() {
  const state = useSelector((state: RootState) => state.usersState);

  const dispatch = useDispatch<AppDispatch>();
  const repo = new RepoUsers();

  const register = (newUser: Partial<User>) => {
    repo.createUser(newUser);
  };

  const login = (loginUser: LoginUser) => {
    dispatch(loginThunk({ loginUser, repo }));
  };

  const loginWithToken = (token: string) => {
    dispatch(loginTokenThunk({ token, repo }));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    register,
    login,
    loginWithToken,
    logoutUser,
  };
}
