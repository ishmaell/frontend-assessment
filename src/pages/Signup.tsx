import React from 'react';
import Card from '../components/Card';
import MonoLogo from '../assets/images/mono-logo.svg';

const Signup = () => {
  return (
    <Card>
      <div className="card-header">
        <img className="brand-logo" src={MonoLogo} alt="Company Logo" />
        <h3 className="card-info">Securely login to your account</h3>
      </div>
    </Card>
  );
};

export default Signup;
