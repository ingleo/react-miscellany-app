import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { UserContext } from './UserContext';
import { useState } from 'react';

export const UserProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState();

  const retrieveUserLogin = (user) => {
    setActiveUser(user);
  };

  const setCode = (prefix, postfix) => prefix + nanoid() + postfix;
  const token = nanoid();
  return (
    <UserContext.Provider
      value={{ token, activeUser, retrieveUserLogin, setCode }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.array,
};
