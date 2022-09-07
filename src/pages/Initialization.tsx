import { useMemo } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
//import { NotifyError } from '../components/toast/Toast';
import MonoLogoWhite from '../assets/images/mono-logo-white.svg';
import LoadingSkeleton from '../assets/images/loading-skeleton.svg';
import Padlock from '../assets/images/padlock.svg';
import MonoConnect from '@mono.co/connect.js';

const Initialization = () => {
  const monoConnect = useMemo(() => {
    const monoInstance = new MonoConnect({
      onClose: () => console.log('Widget closed'),
      onLoad: () => console.log('Widget loaded successfully'),
      onSuccess: ({ code }: any) => console.log(`Linked successfully: ${code}`),
      key: 'test_pk_OkLMwKAsjTRuIO4ku8q7',
    });

    monoInstance.setup();

    return monoInstance;
  }, []);
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

          <button onClick={() => monoConnect.open()} className="link-now-btn">
            Link Now <FiArrowUpRight />
          </button>
        </div>
      </main>
    </section>
  );
};

export default Initialization;
