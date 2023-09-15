import { useState, useEffect } from 'react';

export const Form = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
  });

  const { username, email } = formState;

  useEffect(() => {
    console.log('Initial effect');
  }, []);

  useEffect(() => {
    console.log('Form changed');
  }, [formState]);

  useEffect(() => {
    console.log('Email changed');
  }, [email]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h3>Form</h3>
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={handleChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
    </>
  );
};
