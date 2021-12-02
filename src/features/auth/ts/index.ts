import { ErrorsFromBackendType } from 'shared/ts/errors';

export type APILoginResponseType = {
  token: string;
  user: UserLoginDataType;
};

export type ILoginFormValues = {
  email: string;
  password: string;
};

export type UserLoginDataType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  is_active: boolean;
  date_joined: string;
  last_login: string;
  is_superuser: boolean;
  ui_mode: 'admin' | 'admin_client_management';
  roles: Array<{
    id: number;
    name: string;
  }>;
};

export type AuthInitialState = {
  isLoading: boolean;
  user: UserLoginDataType | null;
  errors: ErrorsFromBackendType | null;
};
