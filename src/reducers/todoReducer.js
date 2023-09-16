export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...initialState, action.payload];
    case 'REMOVE_TASK':
      return initialState.filter((task) => task.id !== action.payload);
    case 'TOGGLE_TASK':
      return initialState.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      });
    default:
      return initialState;
  }
};
