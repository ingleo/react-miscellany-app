import { TodoList } from '../components/reducer/TodoList';
import { TodoForm } from '../components/reducer/TodoForm';
import { useTodo } from '../hooks/useTodo';

export const ToDoPage = () => {
  const {
    todoListState,
    handleAddTask,
    handleDeleteTask,
    handleToggleTask,
    allTasks,
    pendingTasks,
  } = useTodo();

  return (
    <>
      <h4>
        <span className="text-warning">useReducer&nbsp;</span> ToDo List: {allTasks} -{' '}
        <small>Pending: {pendingTasks}</small>
      </h4>
      <div className="row">
        <div className="col-7">
          <TodoList
            tasks={todoListState}
            onDeleteTask={handleDeleteTask}
            onToggleTask={handleToggleTask}
          />
        </div>

        <div className="col-5">
          <h4>Add task</h4>
          <TodoForm onNewTask={handleAddTask} />
        </div>
      </div>
    </>
  );
};
