import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateLayout from '../layout/PrivateLayout';
import PublicLayout from '../layout/PublicLayout';

// pages
import RequireAuth from '../components/auth/RequireAuth';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Initialize from '../pages/Initialization';
import Dashboard from '../pages/Dashboard';
import Accounts from '../pages/Accounts';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route element={<RequireAuth />}>
        <Route element={<PrivateLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="accounts" element={<Accounts />} />
        </Route>

        <Route path="initialize" element={<Initialize />} />
      </Route>
    </Routes>
  );
};

export default Routers;
