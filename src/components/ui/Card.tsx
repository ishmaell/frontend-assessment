import React from 'react';

interface CardPropsType {
  children: React.ReactNode;
}

const Card: React.FC<CardPropsType> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
