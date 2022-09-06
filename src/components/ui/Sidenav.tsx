import { NavLink } from 'react-router-dom';
import MonoLogoWhite from '../../assets/images/mono-logo-white.svg';

const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="brand">
        <img src={MonoLogoWhite} alt="Mono Logo White" />
      </div>

      <ul className="navlist">
        <li>
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="expenses">Expenses</NavLink>
        </li>
        <li>
          <NavLink to="wallets">Wallets</NavLink>
        </li>
        <li>
          <NavLink to="summary">Summary</NavLink>
        </li>
        <li>
          <NavLink to="accounts">Accounts</NavLink>
        </li>
        <li>
          <NavLink to="settings">Settings</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
