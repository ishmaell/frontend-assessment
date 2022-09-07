import { useEffect } from 'react';

import { axiosAuth } from '../api/axios';
import useAuth from './useAuth';
import useRefreshToken from './useRefreshToken';

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosAuth.interceptors.request.use(
      (config) => {
        if (!config.headers) {
          config.headers = {};
        }

        config.headers.Authorization = `Bearer ${auth?.accessToken}`;
        return config;
      },
      (error) => Promise.reject(error)
    );
    const responseIntercept = axiosAuth.interceptors.response.use(
      (response) => response,

      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosAuth(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept);
      axiosAuth.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);
  return axiosAuth;
};

export default useAxiosPrivate;
