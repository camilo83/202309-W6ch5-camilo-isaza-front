import { Link } from 'react-router-dom';

export default function LoginExperimentsPage() {
  return (
    <>
      <h3>POST YOUR EXPERIMENT</h3>
      <Link to={'/Experiments/login'} style={{ textDecoration: 'none' }}>
        <p>Log In</p>
      </Link>
      <Link to={'/Experiments/register'} style={{ textDecoration: 'none' }}>
        <p>Register</p>
      </Link>
    </>
  );
}
