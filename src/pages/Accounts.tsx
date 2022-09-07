import { useEffect, useState } from 'react';
import { GET_LINKED_ACCOUNT } from '../constants';
import { NotifyError } from '../components/toast/Toast';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import Spinner from '../components/ui/Spinner';

interface AccountType {
  accountName: string;
  accountNumber: string;
  accountType: string;
  accountBalance: string;
  currency: string;
  bvn: string;
  bankName: string;
}

const Accounts = () => {
  const [isRequesting, setIsRequesting] = useState<boolean>(true);
  const [accounts, setAccounts] = useState<AccountType[]>([]);
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchLinkedAccounts = async () => {
      try {
        const response = await axiosPrivate.get(GET_LINKED_ACCOUNT, {
          signal: controller.signal,
        });
        isMounted && setAccounts(response?.data);
      } catch (error: any) {
        if (!error?.response) {
          NotifyError('No server response');
        } else if (error.response?.status === 403) {
          NotifyError(error.response?.data?.error);
        } else if (error.response?.status === 409) {
          NotifyError('Email is already in use');
        } else {
          NotifyError('Unknown error occured. Please try again.');
        }
      } finally {
        setIsRequesting(false);
      }
    };

    fetchLinkedAccounts();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  let content = null;

  if (isRequesting) {
    content = <Spinner />;
  } else {
    content = (
      <table className="table">
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Account No</th>
            <th>Account Type</th>
            <th>Bank</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {accounts.length > 0
            ? accounts.map((el, i) => (
                <tr key={i}>
                  <td>{el.accountName}</td>
                  <td>{el.accountNumber}</td>
                  <td>
                    {el.accountType === 'savings_account'
                      ? 'Savings'
                      : 'Current'}
                  </td>
                  <td>{el.bankName}</td>
                  <td>{el.accountBalance}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    );
  }

  return <div style={{ position: 'relative' }}>{content}</div>;
};

export default Accounts;
