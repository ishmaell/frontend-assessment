/* eslint-disable no-console */
import { useState, useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { NotifyError } from '../toast/Toast';
import Spinner from '../ui/Spinner';
import useAuth from '../../hooks/useAuth';

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { auth } = useAuth();

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
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
