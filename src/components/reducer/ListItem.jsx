import PropTypes from 'prop-types';

export const ListItem = ({ task, onDeleteTask, onToggleTask }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          task.done ? 'text-decoration-line-through' : ''
        }`}
      >
        {task.description}
      </span>

      <div className="align-items-center">
        <input
          className="form-check-input mx-3"
          type="checkbox"
          checked={task.done}
          onChange={() => onToggleTask(task.id)}
        />
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  task: PropTypes.object.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onToggleTask: PropTypes.func.isRequired,
};
