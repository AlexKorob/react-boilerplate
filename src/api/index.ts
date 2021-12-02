import axios from 'axios';

import { clearAuthData } from 'api/localStorage';
import history from 'shared/history';
import { ROUTES } from 'constants/routes';
import store from 'store';
import { loginSuccess } from 'features/auth/redux/authSlice';
import { UserLoginDataType } from 'features/auth/ts';

const { REACT_APP_API_URL, REACT_APP_API_URL_PREFIX } = process.env;

export const api = axios.create({
  baseURL: `${REACT_APP_API_URL}/${REACT_APP_API_URL_PREFIX}/`,
});

const authToken = localStorage.getItem('token');
const user = localStorage.getItem('user');
if (authToken) api.defaults.headers.common.Authorization = `Bearer ${authToken}`;
if (authToken && user) {
  store.dispatch(loginSuccess(JSON.parse(user) as UserLoginDataType));
}

api.interceptors.response.use(undefined, function (error) {
  if (error.response.status === 401) {
    if (history.location.pathname !== ROUTES.login) {
      clearAuthData();
      window.location.pathname = ROUTES.login;
    }
  }
  throw error;
});
