import { useState } from 'react';
import { Message } from './Message';

export const InputMsg = () => {
  const [inputState, setInputState] = useState({ nickname: '' });

  const { nickname } = inputState;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputState({
      ...inputState,
      [name]: value,
    });
  };

  return (
    <>
      <h3 className="text-warning">Event Listener</h3>
      <h4>Form</h4>
      <input
        type="text"
        className="form-control"
        placeholder="type admin"
        name="nickname"
        value={nickname}
        onChange={handleChange}
      />
      {nickname.includes('admin') && <Message />}
    </>
  );
};
