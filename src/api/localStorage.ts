import { api } from 'api/index';
import { UserLoginDataType } from 'features/auth/ts';

type authDataType = {
  user: UserLoginDataType;
  token: string;
};

export const setAuthorizationHeader = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const saveAuthData = (authData: authDataType) => {
  localStorage.setItem('token', authData.token);
  localStorage.setItem('user', JSON.stringify(authData.user));
  setAuthorizationHeader(authData.token);
};

export const getAuthData = () => ({
  user: JSON.parse(localStorage.getItem('user') || '{}'),
  token: localStorage.getItem('token'),
});

export const clearAuthData = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  api.defaults.headers.common.Authorization = '';
};
