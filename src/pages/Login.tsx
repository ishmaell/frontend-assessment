import axios from '../api/axios';
import useSignForm from '../hooks/useSignupForm';
import { FieldError } from 'react-hook-form';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import MonoLogo from '../assets/images/mono-logo.svg';
import { Button, Input } from '../components/form';
import { LoginFormType } from '../model/LoginFormType';
import { LOGIN_URL_PATH } from '../constants';
import useLoginForm from '../hooks/useLoginForm';

const Login = () => {
  const { register, handleSubmit, errors } = useLoginForm();

  const onSubmit = async (formValues: LoginFormType) => {
    try {
      const response = await axios.post(LOGIN_URL_PATH, formValues);
      console.log(response);
    } catch (error: any) {
      if (!error?.response) {
        console.log('No server response');
      } else if (error.response?.status === 401) {
        console.log(error.response.data.error);
      } else {
        console.log('Unknown error occured. Please try again.');
      }
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
            type="text"
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
        <Button type="submit" classes="button primary wide">
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
