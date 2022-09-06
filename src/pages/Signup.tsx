import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import MonoLogo from '../assets/images/mono-logo.svg';
import { Button, Input } from '../components/form';
import { AxiosError } from 'axios';
import axios from '../api/axios';
import useSignForm from '../hooks/useSignupForm';
import { SignupFormType } from '../model/SignupFormType';
import { LOGIN_URL_PATH, SIGNUP_URL_PATH } from '../constants';

const Signup = () => {
  const { register, handleSubmit } = useSignForm();

  const onSubmit = async (formValues: SignupFormType) => {
    try {
      const response = await axios.post(SIGNUP_URL_PATH, formValues);
      const login = await axios.post(LOGIN_URL_PATH, {
        email: formValues.email,
        password: formValues.password,
      });
      console.log(response);
      console.log(login);
    } catch (error: AxiosError | any) {
      if (!error?.response) {
        console.log('No server response');
      } else if (error.response?.status === 409) {
        console.log('Email is already in use');
      } else {
        console.log('Unknown error occured. Please try again.');
      }
    }
  };

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
              classes="input"
              placeholder="First name"
              type="text"
              name="firstName"
              register={register}
            />
            <Input
              classes="input"
              placeholder="Last name"
              type="text"
              name="lastName"
              register={register}
            />
          </div>
          <Input
            classes="input"
            placeholder="Email"
            type="text"
            name="email"
            register={register}
          />
          <Input
            classes="input"
            placeholder="Password"
            type="text"
            name="password"
            register={register}
          />
        </div>
        <Button type="submit" classes="button primary wide">
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
