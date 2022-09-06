import { useContext } from 'react';

import AuthContext from '../context/AuthProvider';
import { AuthContextType } from '../models';

const useAuth = () => useContext(AuthContext) as AuthContextType;

export default useAuth;
