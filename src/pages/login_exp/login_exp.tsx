import { SyntheticEvent } from 'react';
import { useUsers } from '../../hooks/useUsers';
import { LoginUser } from '../../model/user';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const { login } = useUsers();
  const { loggedUser, token } = useSelector(
    (state: RootState) => state.usersState
  );
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    const form = event.target as HTMLFormElement;
    event.preventDefault();

    const formData = new FormData(form);
    const userEmail = formData.get('email') as string;
    const userPasswd = formData.get('passwd') as string;

    const newUser: LoginUser = {
      email: userEmail,
      passwd: userPasswd,
    };
    login(newUser);
    if (token === '') {
      console.log('datos no coinciden');
    } else {
      console.log(token);
      console.log(loggedUser);
      form.reset();
      navigate('/experiments/forum');
    }
  };
  return (
    <>
      <form action="" name="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="passwd">Passweord: </label>
          <input type="password" name="passwd" id="passwd" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
