import React from 'react';

import Spinner from '../ui/Spinner';

interface IButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  classes: string | undefined;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  isRequesting?: boolean;
}

export const Button = (props: IButtonProps) => {
  const { onClick, children, classes, type, disabled, isRequesting } = props;
  const buttonClasses = `button ${classes}`;
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {isRequesting ? <Spinner /> : children}
    </button>
  );
};
