import { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutPage = () => {
    const { activeUser } = useContext(UserContext);
    return (
      <div>
        <h3>About Page</h3>
        <pre>{JSON.stringify(activeUser, null, 3)}</pre>
      </div>
    );
}
