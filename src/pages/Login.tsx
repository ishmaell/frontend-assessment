import { useState } from 'react';
import axios from '../api/axios';
import { FieldError } from 'react-hook-form';
import classNames from 'classnames';
import Card from '../components/ui/Card';
import MonoLogo from '../assets/images/mono-logo.svg';
import { Button, Input } from '../components/form';
import { LoginFormType } from '../models/LoginFormType';
import { LOGIN_URL_PATH } from '../constants';
import useLoginForm from '../hooks/useLoginForm';
import useAuth from '../hooks/useAuth';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { OptionalType } from '../models';
import { NotifyError } from '../components/toast/Toast';

const Login = () => {
  const { setAuth } = useAuth();
  const { register, handleSubmit, errors } = useLoginForm();
  const [isRequesting, setIsRequesting] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation() as OptionalType;
  const from = location.state?.from?.pathname || '/';

  const onSubmit = async (formValues: LoginFormType) => {
    setIsRequesting(true);
    try {
      const response = await axios.post(LOGIN_URL_PATH, formValues);
      const { firstName, lastName, email, accessToken } = response?.data;
      setAuth({
        firstName,
        lastName,
        email,
        accessToken,
      });
      navigate(from, { replace: true });
    } catch (error: any) {
      if (!error?.response) {
        NotifyError('No server response');
      } else if (
        error.response?.status === 401 ||
        error.response?.status === 400
      ) {
        NotifyError(error.response.data.error);
      } else {
        NotifyError('Unknown error occured. Please try again.');
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
          <h3 className="card-info">Securely login to your account</h3>
        </div>
        <div className="card-form-area">
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
          <div className="card-widget">
            <div className="remember-me">
              <label className="remember-me-input">
                Remember me
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <Link to="/">I forgot my password</Link>
          </div>
        </div>
        <Button
          type="submit"
          classes="button primary wide"
          disabled={isRequesting}
          isRequesting={isRequesting}
        >
          Log In
        </Button>

        <p className="card-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </Card>
  );
};

export default Login;
