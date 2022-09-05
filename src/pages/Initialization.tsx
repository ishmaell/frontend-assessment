import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

import MonoLogoWhite from '../assets/images/mono-logo-white.svg';
import LoadingSkeleton from '../assets/images/loading-skeleton.svg';
import Padlock from '../assets/images/padlock.svg';

const Initialization = () => {
  return (
    <section className="initialization">
      <div className="sidenav">
        <div className="brand">
          <img src={MonoLogoWhite} alt="Mono Logo White" />
        </div>
        <div className="loading-skeleton">
          <img src={LoadingSkeleton} alt="Something is loading..." />
        </div>
      </div>
      <main className="main">
        <div className="link-account-modal">
          <img src={Padlock} alt="Lock" />
          <h3 className="text-content">
            Final Step <span>Link your Bank Account in seconds</span>
          </h3>
          <Link className="link-now-btn" to="../dashboard">
            Link Now <FiArrowUpRight />
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Initialization;
