import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import { useTodo } from '../../hooks/useTodo';

export const TodoApp = () => {
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
      <h3>
        ToDoList: {allTasks} - <small>Pending: {pendingTasks}</small>
      </h3>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            tasks={todoListState}
            onDeleteTask={handleDeleteTask}
            onToggleTask={handleToggleTask}
          />
        </div>

        <div className="col-5">
          <h2>Add task</h2>
          <hr />
          <TodoForm onNewTask={handleAddTask} />
        </div>
      </div>
    </>
  );
};
