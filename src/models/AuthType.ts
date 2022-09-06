import { SignupFormType } from './SignupFormType';

export interface AuthType extends Omit<SignupFormType, 'password'> {
  accessToken: string;
}

export interface AuthContextType {
  auth: AuthType;
  setAuth: (auth: AuthType) => void;
}
