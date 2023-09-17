import { useContext } from 'react';
import { nanoid } from 'nanoid';

import { UserContext } from './UserContext';

export const LoginPage = () => {
  const { token, activeUser, retrieveUserLogin, setCode } =
    useContext(UserContext);

  const user = { id: nanoid(), nick: 'Le1ni', token };

  return (
    <div>
      <h3>Login Page</h3>
      <pre>{JSON.stringify(activeUser, null, 3)}</pre>
      <pre>{setCode(12345, 67890)}</pre>

      <button onClick={()=> retrieveUserLogin(user)}>Login</button>
    </div>
  );
};
