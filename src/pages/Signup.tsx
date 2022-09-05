import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import MonoLogo from '../assets/images/mono-logo.svg';
import { Button, Input } from '../components/form';

const Signup = () => {
  return (
    <Card>
      <div className="card-header">
        <img className="brand-logo" src={MonoLogo} alt="Company Logo" />
        <h3 className="card-info">Track all your bank expenses in one place</h3>
      </div>
      <div className="card-form-area">
        <div className="form-group-flex">
          <Input
            classes="input"
            placeholder="First name"
            type="text"
            register={() => {}}
          />
          <Input
            classes="input"
            placeholder="Last name"
            type="text"
            register={() => {}}
          />
        </div>
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
      </div>
      <Button classes="button primary wide">Get Started</Button>

      <p className="card-footer">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </Card>
  );
};

export default Signup;
