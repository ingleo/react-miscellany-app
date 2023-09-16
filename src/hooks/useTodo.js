import { useEffect, useReducer } from 'react';

import { todoReducer } from '../reducers/todoReducer';

const initialState = [];
const initialization = () => {
  return JSON.parse(localStorage.getItem('todo_list')) || [];
};

export const useTodo = () => {
  const [todoListState, dispatchTodoAction] = useReducer(
    todoReducer,
    initialState,
    initialization
  );

  useEffect(() => {
    localStorage.setItem('todo_list', JSON.stringify(todoListState));
  }, [todoListState]);

  const handleAddTask = (newTaskObj) => {
    const addAction = {
      type: 'ADD_TASK',
      payload: newTaskObj,
    };

    dispatchTodoAction(addAction);
  };

  const handleDeleteTask = (taskId) => {
    const deleteAction = {
      type: 'REMOVE_TASK',
      payload: taskId,
    };

    dispatchTodoAction(deleteAction);
  };

  const handleToggleTask = (taskId) => {
    console.log(taskId);
    const toggleAction = {
      type: 'TOGGLE_TASK',
      payload: taskId,
    };

    dispatchTodoAction(toggleAction);
  };

  return {
    todoListState,
    handleAddTask,
    handleDeleteTask,
    handleToggleTask,
    allTasks: todoListState.length,
    pendingTasks: todoListState.filter((task) => task.done !== true).length,
  };
};
