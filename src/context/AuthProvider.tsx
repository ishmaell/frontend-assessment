import React, { createContext, useState } from 'react';
import { AuthType, AuthContextType } from '../models/AuthType';

interface AuthProviderType {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderType> = ({ children }) => {
  const [auth, setAuth] = useState<AuthType>({} as AuthType);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
