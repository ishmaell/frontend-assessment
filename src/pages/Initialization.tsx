import { useMemo } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { NotifyError, NotifySuccess } from '../components/toast/Toast';
import MonoLogoWhite from '../assets/images/mono-logo-white.svg';
import LoadingSkeleton from '../assets/images/loading-skeleton.svg';
import Padlock from '../assets/images/padlock.svg';
import MonoConnect from '@mono.co/connect.js';
import axios from '../api/axios';
import { GET_ACCOUNT_ID_PATH, SAVE_LINKED_ACCOUNT } from '../constants';
import useAuth from '../hooks/useAuth';
import useAccountBalance from '../hooks/useAccountBalance';
import { useNavigate } from 'react-router-dom';

const Initialization = () => {
  const { auth } = useAuth();
  const { setAccountBalance } = useAccountBalance();
  const navigate = useNavigate();

  const getAccountId = async (code: string) => {
    try {
      const response = await axios.post(
        GET_ACCOUNT_ID_PATH,
        { code },
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      );
      const accountDetails = await axios.post(
        SAVE_LINKED_ACCOUNT,
        { id: response?.data.id },
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      );

      NotifySuccess('Your account has been linked successfully.');
      setAccountBalance(accountDetails.data?.accountBalance);
      navigate('/');
    } catch (error: any) {
      if (!error?.response) {
        NotifyError('No server response');
      } else if (error.response?.status === 401) {
        NotifyError(error.response?.data?.error);
      } else {
        NotifyError('Unknown error occured. Please try again.');
      }
    }
  };

  const monoConnect = useMemo(() => {
    const monoInstance = new MonoConnect({
      onClose: () => console.log('Widget closed'),
      onLoad: () => console.log('Widget loaded successfully'),
      onSuccess: ({ code }: any) => getAccountId(code),
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
