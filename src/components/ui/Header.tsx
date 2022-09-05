import React from 'react';
import UserProfilePhoto from '../../assets/images/user.svg';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-widget">
        <h4 className="greetings">Greetings, User</h4>
        <img src={UserProfilePhoto} alt="user" />
      </div>
    </header>
  );
};

export default Header;
