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
    <form>
      <h3 className="text-warning">Custom Form Hook</h3>
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={handleChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        autoComplete="username"
        value={email}
        onChange={handleChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        autoComplete="current-password"
        value={password}
        onChange={handleChange}
      />

      <button
        className="btn btn-outline-info btn-sm mt-2"
        onClick={(event) => {
          event.preventDefault();
          handleReset();
        }}
      >
        Reset
      </button>
    </form>
  );
};
