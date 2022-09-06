/* eslint-disable no-nested-ternary */
import React from 'react';

import { useLocation, Navigate, Outlet } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

// interface AllowedRolesProp {
//   allowedRoles: string[];
// }

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  // eslint-disable-next-line react/prop-types
  //   return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
  //     <Outlet />
  //   ) : auth?.accessToken ? (
  //     <Navigate to='/unauthorized' state={{ from: location }} replace />
  //   ) : (
  //     <Navigate to='/login' state={{ from: location }} replace />
  //   );
  // };

  return auth.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
