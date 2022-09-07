import { Button } from '../components/form';
import ExpenseTracker from '../components/stateless/ExpenseTracker';
import LatestTransactions from '../components/stateless/LatestTransactions';
import WhereYourMoneyGo from '../components/stateless/WhereYourMoneyGo';
import BankIcons from '../assets/images/bank-icons.svg';
import useAccountBalance from '../hooks/useAccountBalance';
import { formatAmount } from '../utils';

const Dashboard = () => {
  const { accountBalance } = useAccountBalance();
  return (
    <div className="dashboard">
      <div className="dashboard-flex">
        <div>
          <ExpenseTracker title="Expense Tracker" />
          <LatestTransactions title="Latest Transactions" />
        </div>
        <div>
          <div className="total-balance">
            <h5 className="title">Total Balance</h5>
            <h3 className="amount">{formatAmount(accountBalance)}</h3>
            <p>Your balance across all Banks</p>
            <img className="bank-icons" src={BankIcons} alt="Bank Icons" />
            <Button classes="button danger-stroke bold-text text-space">
              Unlink Bank Account
            </Button>
          </div>
          <WhereYourMoneyGo title="Where your money go?" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
