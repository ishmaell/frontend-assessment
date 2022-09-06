import { useState } from 'react';
import axios from '../api/axios';
import useSignForm from '../hooks/useSignupForm';
import { FieldError } from 'react-hook-form';
import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import MonoLogo from '../assets/images/mono-logo.svg';
import { Button, Input } from '../components/form';
import { SignupFormType } from '../models/SignupFormType';
import { SIGNUP_URL_PATH } from '../constants';
import useAuth from '../hooks/useAuth';

const Signup = () => {
  const { setAuth } = useAuth();
  const { register, handleSubmit, errors } = useSignForm();
  const [isRequesting, setIsRequesting] = useState<boolean>(false);

  const navigate = useNavigate();

  const onSubmit = async (formValues: SignupFormType) => {
    setIsRequesting(true);
    try {
      const response = await axios.post(SIGNUP_URL_PATH, formValues);
      const { firstName, lastName, email, accessToken } = response?.data;
      setAuth({
        firstName,
        lastName,
        email,
        accessToken,
      });

      navigate('/initialize');
    } catch (error: any) {
      if (!error?.response) {
        console.log('No server response');
      } else if (error.response?.status === 409) {
        console.log('Email is already in use');
      } else {
        console.log('Unknown error occured. Please try again.');
      }
    } finally {
      setIsRequesting(false);
    }
  };

  const toggleClass = (hasError: FieldError | undefined) =>
    classNames('input', { 'input-error': hasError });

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card-header">
          <img className="brand-logo" src={MonoLogo} alt="Company Logo" />
          <h3 className="card-info">
            Track all your bank expenses in one place
          </h3>
        </div>
        <div className="card-form-area">
          <div className="form-group-flex">
            <Input
              error={
                errors.firstName && (
                  <span className="error-message">
                    {errors.firstName.message}
                  </span>
                )
              }
              classes={toggleClass(errors.firstName)}
              placeholder="First name"
              type="text"
              name="firstName"
              register={register}
            />
            <Input
              error={
                errors.lastName && (
                  <span className="error-message">
                    {errors.lastName.message}
                  </span>
                )
              }
              classes={toggleClass(errors.lastName)}
              placeholder="Last name"
              type="text"
              name="lastName"
              register={register}
            />
          </div>
          <Input
            error={
              errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )
            }
            classes={toggleClass(errors.email)}
            placeholder="Email"
            type="text"
            name="email"
            register={register}
          />
          <Input
            error={
              errors.password && (
                <span className="error-message">{errors.password.message}</span>
              )
            }
            classes={toggleClass(errors.password)}
            placeholder="Password"
            type="password"
            name="password"
            register={register}
          />
        </div>
        <Button
          type="submit"
          classes="button primary wide"
          isRequesting={isRequesting}
          disabled={isRequesting}
        >
          Get Started
        </Button>

        <p className="card-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </Card>
  );
};

export default Signup;
