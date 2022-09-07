import axios from '../api/axios';
import { GET_REFRESH_TOKEN_PATH } from '../constants';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const response = await axios.get(GET_REFRESH_TOKEN_PATH, {
        withCredentials: true,
      });
      setAuth({
        ...response.data,
      });
      return response.data.accessToken;
    } catch (error: any) {
      throw new Error(error?.message);
    }
  };
  return refresh;
};

export default useRefreshToken;
