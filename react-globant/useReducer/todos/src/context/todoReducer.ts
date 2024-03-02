import { Todo } from "../types/types";

export const init = (initialState = []) => {
  return { todos: initialState };
};

type ActionType = {
  type: "completed";
  payload: string;
};

export const todoReducer = (
  state: typeof init.arguments,
  action: ActionType
) => {
  switch (action.type) {
    case "completed":
      const filteredTodos = state.todos.map((t: Todo) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
      return filteredTodos;
    default:
      return state;
  }
};
