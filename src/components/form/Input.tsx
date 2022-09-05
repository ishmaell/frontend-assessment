import React from 'react';
import classNames from 'classnames';
import { FormGroup } from './FormGroup';

interface InputProps {
  type: 'text' | 'password' | 'email' | 'date' | 'hidden' | 'checkbox';
  placeholder?: string;
  classes?: string;
  label?: string;
  name?: string;
  register: any;
  error?: React.ReactNode;
  hasIcon?: boolean;
  iconName?: React.ReactNode;
  toogleIcon?: React.MouseEventHandler;
  value?: string | number | boolean;
  maxLength?: string;
  disabled?: boolean;
  min?: string;
  max?: string;
  pattern?: string;
}

export const Input = (props: InputProps) => {
  const {
    type,
    placeholder,
    classes,
    register,
    label,
    name,
    error,
    hasIcon,
    iconName,
    toogleIcon,
    value,
    maxLength,
    disabled,
    min,
    max,
    pattern,
  } = props;

  const inputClasses = classNames(classes, { hasIcon });
  if (type === 'hidden')
    return <input {...register(name)} value={value} type={type} />;
  return (
    <FormGroup>
      {label && <label htmlFor={name}>{label}</label>}
      {maxLength ? (
        <input
          maxLength={maxLength}
          {...register(name)}
          className={inputClasses}
          type={type}
          placeholder={placeholder}
          autoComplete="on"
        />
      ) : (
        <input
          {...register(name)}
          className={inputClasses}
          type={type}
          placeholder={placeholder}
          autoComplete="on"
          defaultValue={value}
          disabled={disabled}
          min={min}
          max={max}
          pattern={pattern}
        />
      )}
      {hasIcon && (
        <div
          onClick={toogleIcon}
          className="absolute top-4 right-5"
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
        >
          {iconName}
        </div>
      )}
      {error}
    </FormGroup>
  );
};
