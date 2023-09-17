import { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomePage = () => {
  const { activeUser } = useContext(UserContext);
  return (
    <div>
      <h3>Home Page</h3>
      <pre>{JSON.stringify(activeUser, null, 3)}</pre>
    </div>
  );
};
