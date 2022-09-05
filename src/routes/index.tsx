import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateLayout from '../layout/PrivateLayout';
import PublicLayout from '../layout/PublicLayout';

// pages
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Initialize from '../pages/Initialize';
import Dashboard from '../pages/Dashboard';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/" element={<PrivateLayout />}>
        <Route path="initialize" element={<Initialize />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Routers;
