import React from 'react';
import UserProfilePhoto from '../../assets/images/user.svg';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { auth } = useAuth();
  return (
    <header className="main-header">
      <div className="header-widget">
        <h4 className="greetings">Greetings, {auth?.firstName}</h4>
        <img src={UserProfilePhoto} alt="user" />
      </div>
    </header>
  );
};

export default Header;
