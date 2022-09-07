/* eslint-disable no-console */
import { useState, useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { NotifyError } from '../toast/Toast';
import Spinner from '../ui/Spinner';
import useAuth from '../../hooks/useAuth';
import useRefreshToken from '../../hooks/useRefreshToken';

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="persist-login">
          <Spinner />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
