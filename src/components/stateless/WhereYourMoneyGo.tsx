import React from 'react';

interface WhereYourMoneyGoPropsType {
  title: string;
}

const WhereYourMoneyGoItem = () => {
  return (
    <div className="where-your-money-go-row">
      <div className="text-content">
        <p className="item">Food and Drinks</p>
        <p className="amount">872.400</p>
      </div>
      <div className="expense-meter">
        <div className="meter-guage"></div>
      </div>
    </div>
  );
};

const WhereYourMoneyGo: React.FC<WhereYourMoneyGoPropsType> = ({ title }) => {
  return (
    <div className="where-your-money-go">
      <h3 className="title">{title}</h3>
      <WhereYourMoneyGoItem />
      <WhereYourMoneyGoItem />
      <WhereYourMoneyGoItem />
    </div>
  );
};

export default WhereYourMoneyGo;
