import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import MonoLogo from '../assets/images/mono-logo.svg';
import { Button, Input } from '../components/form';

const Login = () => {
  return (
    <Card>
      <div className="card-header">
        <img className="brand-logo" src={MonoLogo} alt="Company Logo" />
        <h3 className="card-info">Securely login to your account</h3>
      </div>
      <div className="card-form-area">
        <Input
          classes="input"
          placeholder="Email"
          type="text"
          register={() => {}}
        />
        <Input
          classes="input"
          placeholder="Password"
          type="text"
          register={() => {}}
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
      <Button classes="button primary wide">Log In</Button>

      <p className="card-footer">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </Card>
  );
};

export default Login;
