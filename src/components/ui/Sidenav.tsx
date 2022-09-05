import { Link } from 'react-router-dom';
import MonoLogoWhite from '../../assets/images/mono-logo-white.svg';

const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="brand">
        <img src={MonoLogoWhite} alt="Mono Logo White" />
      </div>

      <ul className="navlist">
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="expenses">Expenses</Link>
        </li>
        <li>
          <Link to="wallets">Wallets</Link>
        </li>
        <li>
          <Link to="summary">Summary</Link>
        </li>
        <li>
          <Link to="accounts">Accounts</Link>
        </li>
        <li>
          <Link to="settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
