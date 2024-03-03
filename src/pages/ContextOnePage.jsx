import { useContext } from 'react';
import { nanoid } from 'nanoid';

import { UserContext } from '../context/UserContext';

export const ContextOnePage = () => {
  const { setCode, getUserLogin, activeUser } = useContext(UserContext);
  const user = { id: nanoid(), nick: 'le0' };

  return (
    <>
      <h4 className="text-warning">useContext</h4>
      <p>This page is calling a provider to pass props between its children.</p>
      <code className="text-info">
        A property called from a provider function:
      </code>
      <code> {setCode(12345, 67890)}</code>
      <hr />
      <p>Click on button to generate an object and store it in the provider</p>
      <button
        className="btn btn-outline-info btn-sm mb-2"
        onClick={() => getUserLogin(user)}
      >
        Login
      </button>
      <div>
        <pre className="text-info">
          {JSON.stringify(activeUser, null, 3)}
        </pre>
        {activeUser && (
          <p>
            Now the user is visible in the{' '}
            <span className="text-warning">useContext 2</span> page
          </p>
        )}
      </div>
    </>
  );
};
