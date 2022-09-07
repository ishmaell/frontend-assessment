import { Link } from 'react-router-dom';

const NofFound = () => {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NofFound;
