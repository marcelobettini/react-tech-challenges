import React, {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Todo } from "../types/types";

interface TodoCtxProps {
  todos: Todo[];
  dispatch: Dispatch<TodoAction>;
}

type TodoAction =
  | { type: "ADD_TODO"; todo: Todo }
  | { type: "TOGGLE_COMPLETED"; id: string };

const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];
    case "TOGGLE_COMPLETED":
      return state.map((t) =>
        t.id === action.id ? { ...t, completed: !t.completed } : t
      );
    default:
      return state;
  }
};

export const TodoCtx = createContext<TodoCtxProps>({
  todos: [],
  dispatch: () => {},
});

export const TodoCtxProvider = ({ children }: { children: ReactNode }) => {
  const [todos, dispatch] = useReducer(todoReducer, [
    { id: "1", description: "some random stuff", completed: false },
  ]);

  return (
    <TodoCtx.Provider value={{ todos, dispatch }}>{children}</TodoCtx.Provider>
  );
};
