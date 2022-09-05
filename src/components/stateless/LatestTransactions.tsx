import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';

interface LatestTransactionsPropType {
  title: string;
}

const TransactionRow = () => {
  return (
    <div className="tx-row">
      <div className="icon-text">
        <div className="icon blue">
          <HiShoppingCart />
        </div>
        <div className="text-content">
          <p className="expense">Jumia Food</p>
          <p className="time">11-11-2021 • 10:12 am • Credit</p>
        </div>
      </div>
      <div className="amount">-15000</div>
    </div>
  );
};

const LatestTransactions: React.FC<LatestTransactionsPropType> = ({
  title,
}) => (
  <div className="latest-transactions">
    <h4 className="title">{title}</h4>
    <TransactionRow />
    <TransactionRow />
    <TransactionRow />
  </div>
);

export default LatestTransactions;
