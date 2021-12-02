import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthInitialState, ILoginFormValues, UserLoginDataType } from '../ts';
import { ErrorsFromBackendType } from 'shared/ts/errors';

export const INITIAL_STATE: AuthInitialState = {
  isLoading: false,
  user: null,
  errors: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    loginRequest: (state, action: PayloadAction<ILoginFormValues>) => {
      return {
        ...state,
        user: null,
        isLoading: true,
        errors: null,
      };
    },
    loginSuccess: (state, action: PayloadAction<UserLoginDataType>) => {
      return {
        user: action.payload,
        isLoading: false,
        errors: null,
      };
    },
    loginFailed: (state, action: PayloadAction<ErrorsFromBackendType>) => {
      return {
        user: null,
        isLoading: false,
        errors: action.payload,
      };
    },

    logoutRequest: (state, action: PayloadAction<{}>) => {
      return state;
    },
    logoutFailed: (state, action) => {
      return {
        user: null,
        isLoading: false,
        errors: action.payload,
      };
    },
  },
});
export const {
  loginRequest,
  loginSuccess,
  loginFailed,

  logoutRequest,
  logoutFailed,
} = authSlice.actions;
export default authSlice.reducer;
