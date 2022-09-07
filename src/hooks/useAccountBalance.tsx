import { useContext } from 'react';

import AccountBalContext from '../context/AccounBalProvider';
import { AccountBalContextType } from '../models';

const useAccountBalance = () =>
  useContext(AccountBalContext) as AccountBalContextType;

export default useAccountBalance;
