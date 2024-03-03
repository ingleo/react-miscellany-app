import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { UserContext } from './UserContext';
import { useState } from 'react';

export const UserProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState();

  const getUserLogin = (user) => {
    setActiveUser(user);
  };

  const setCode = (prefix, postfix) => prefix + nanoid() + postfix;

  return (
    <UserContext.Provider
      value={{ activeUser, getUserLogin, setCode }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.array,
};
