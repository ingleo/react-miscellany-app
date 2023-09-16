import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { useForm } from '../../hooks/useForm';

export const TodoForm = ({ onNewTask }) => {
  const { description, handleChange, handleReset } = useForm({
    description: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (description.length <= 1) return;

    const taskObj = {
      id: nanoid(),
      description,
      done: false,
    };

    onNewTask(taskObj);
    handleReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="new task"
        className="form-control"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-outline-primary btn-sm mt-2">
        Add
      </button>
    </form>
  );
};

TodoForm.propTypes = {
  onNewTask: PropTypes.func.isRequired,
};
