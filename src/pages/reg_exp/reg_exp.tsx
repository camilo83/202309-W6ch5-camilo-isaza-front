import { SyntheticEvent } from 'react';
import { User } from '../../model/user';
import { ImgData } from '../../types/imgData';
import { useUsers } from '../../hooks/useUsers';

export default function RegisterForm() {
  const { register } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    const form = event.target as HTMLFormElement;
    event.preventDefault();
    const formData = new FormData(form);
    const userEmail = formData.get('email') as string;
    const userPasswd = formData.get('passwd') as string;
    const userName = formData.get('name') as string;
    const userSurName = formData.get('surname') as string;
    const userAge = formData.get('age') as unknown as number;
    const userAvatar = formData.get('avatar') as unknown as ImgData;

    const newUser: Partial<User> = {
      email: userEmail,
      passwd: userPasswd,
      name: userName,
      surname: userSurName,
      age: userAge,
      avatar: userAvatar,
    };
    register(newUser);
  };

  return (
    <>
      <form action="" name="register-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="passwd">Password: </label>
          <input type="password" name="passwd" id="passwd" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" multiple />
        </div>
        <div>
          <label htmlFor="surname">Surname: </label>
          <input type="text" name="surname" id="surname" />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input type="number" name="age" id="age" />
        </div>
        <div>
          <label htmlFor="avatar">Image: </label>
          <input type="file" name="avatar" id="avatar" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

/* return (
    <>
      <form action="" name="register-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Name: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="year">Year of Publishment: </label>
          <input type="number" name="year" id="year" />
        </div>
        <div>
          <label htmlFor="materials">
            Materials - split them with a comma - :{' '}
          </label>
          <input type="text" name="materials" id="materials" multiple />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input type="text" name="description" id="description" />
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input type="file" name="image" id="image" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="passwd">Password: </label>
          <input type="password" name="passwd" id="passwd" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
} */
