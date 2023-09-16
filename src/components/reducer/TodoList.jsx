import PropTypes from 'prop-types';

import { ListItem } from './ListItem';

export const TodoList = ({ tasks = [], onDeleteTask, onToggleTask }) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onToggleTask: PropTypes.func.isRequired,
};
