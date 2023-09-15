import { useEffect } from 'react';

import { useForm } from '../hooks/useForm';

export const FormHook = () => {
  const { formState, handleChange, handleReset, email, username, password } =
    useForm({
      username: '',
      email: '',
      password: '',
    });

  useEffect(() => {
    console.log('Initial effect');
  }, []);

  useEffect(() => {
    console.log('Form changed');
  }, [formState]);

  useEffect(() => {
    console.log('Email changed');
  }, [email]);

  return (
    <>
      <h3>Form Hook</h3>
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

      <input
        type="text"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={handleChange}
      />

      <button className="btn btn-primary mt-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};
