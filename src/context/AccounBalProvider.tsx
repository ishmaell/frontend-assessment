import React, { createContext, useState } from 'react';
import { AccountBalContextType } from '../models/AccountBalType';

interface ContextProviderProps {
  children: React.ReactNode;
}

const AccountBalContext = createContext<AccountBalContextType | null>(null);

export const AccountBalProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [accountBalance, setAccountBalance] = useState<number>(0);

  return (
    <AccountBalContext.Provider value={{ accountBalance, setAccountBalance }}>
      {children}
    </AccountBalContext.Provider>
  );
};

export default AccountBalContext;
