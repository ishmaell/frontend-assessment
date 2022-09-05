import React from 'react';
import Stats from '../../assets/images/stats.svg';

interface ExpenseTrackerPropsType {
  title: string;
}

const ExpenseTracker: React.FC<ExpenseTrackerPropsType> = ({ title }) => {
  return (
    <div className="expense-tracker">
      <h3>{title}</h3>
      <img src={Stats} alt="Stats" />
    </div>
  );
};

export default ExpenseTracker;
