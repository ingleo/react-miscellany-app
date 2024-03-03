import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const ContextTwoPage = () => {
  const { activeUser } = useContext(UserContext);
  return (
    <>
      <h4 className="text-warning">useContext</h4>
      <p>This page is calling a provider to pass props between its children.</p>

      {activeUser ? (
        <div>
          <p>The next object was generated and stored in the provider</p>
          <pre className="text-info">{JSON.stringify(activeUser, null, 3)}</pre>
        </div>
      ) : (
        <p>
          Please generate a user in{' '}
          <span className="text-warning">useContext 1</span> page
        </p>
      )}
    </>
  );
};
