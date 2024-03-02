import { useContext } from "react";
import { TodoCtx } from "../context/todoContext";
export default function TasksRemaining() {
  const { todos } = useContext(TodoCtx);
  return (
    <div
      style={{ display: "flex", columnGap: "1.4em", justifyContent: "center" }}
    >
      <p>
        All: <strong>{todos.length}</strong>
      </p>
      <p>
        Pending: <strong>{todos.filter((t) => !t.completed).length}</strong>
      </p>
    </div>
  );
}
