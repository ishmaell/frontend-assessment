import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateLayout from '../layout/PrivateLayout';
import PublicLayout from '../layout/PublicLayout';

// pages
import RequireAuth from '../components/auth/RequireAuth';
import PersistLogin from '../components/auth/PersistLogin';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Initialize from '../pages/Initialization';
import Dashboard from '../pages/Dashboard';
import Accounts from '../pages/Accounts';
import NotFound from '../pages/NotFound';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth />}>
          <Route element={<PrivateLayout />}>
            <Route index element={<Dashboard />} />
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            <Route path="accounts" element={<Accounts />} />
          </Route>

          <Route path="initialize" element={<Initialize />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
