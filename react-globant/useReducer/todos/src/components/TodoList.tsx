import React, { useContext } from "react";
import { TodoCtx } from "../context/todoContext";

export default function TodoList() {
  console.count("TodoList rendered");

  const { todos, dispatch } = useContext(TodoCtx);

  function handleCompleted(id: string) {
    dispatch({ type: "TOGGLE_COMPLETED", id });
  }

  return (
    <ol>
      {todos.map((t) => (
        <li
          key={t.id}
          style={
            t.completed
              ? { textDecoration: "line-through", color: "tomato" }
              : undefined
          }
        >
          {t.description}{" "}
          <button onClick={() => handleCompleted(t.id)}>toggle</button>
        </li>
      ))}
    </ol>
  );
}
